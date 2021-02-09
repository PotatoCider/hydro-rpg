//=============================================================================
// FetchFlowVolume.js
//=============================================================================

/*:
 * @plugindesc Fetches flow volume from a server
 * @author Joseph Goh
 *
 * @help <insert help here>
 */

console.log('fetch flow volume startup')

async function saveFVConfig(chip_id = $gameVariables.value(13), user_id = $gameVariables.value(14)) {
	const writeFile = require('util').promisify(require('fs').writeFile)
	
	const json = { chip_id, user_id }
	await writeFile('fv_config.json', JSON.stringify(json))
}

async function loadFVConfig() {
	const readFile = require('util').promisify(require('fs').readFile)
	const json = await readFile('fv_config.json', { encoding: 'utf-8' })
	const { chip_id, user_id } = JSON.parse(json)

	// $gameVariables.setValue(13, chip_id)
	// $gameVariables.setValue(14, user_id)

	return { chip_id, user_id }
}

async function fetchFlowVolume(chip_id = $gameVariables.value(13), user_id = $gameVariables.value(14)) {

	const res = await FVMakeRequest({ method: 'GET', url: `http://aipl.duckdns.org:3000/flow_volume?chip_id=${chip_id}&user_id=${user_id}` })
	if (res.status !== 200) {
		const err = res.responseText
		console.error(err)
		$gameVariables.setValue(12, err)
		return {}
	}
		
	const body = JSON.parse(res.response)

	// $gameVariables.setValue(12, 0)
	// $gameVariables.setValue(15, body.daily_flow_volume)
	// $gameVariables.setValue(16, body.weekly_flow_volume)
	// $gameVariables.setValue(17, body.monthly_flow_volume)
	// $gameVariables.setValue(18, body.yearly_flow_volume)
	// $gameVariables.setValue(19, body.total_flow_volume)
	// $gameVariables.setValue(20, body.last_flow_volume)
	return body
}

// Ensure that Game Variable 13 is set to the user entered chip_id
// Game Variable 14 will be updated with the Chip ID.
async function signupFlowVolume(chip_id = $gameVariables.value(13)) {
	if (isNaN(chip_id) || chip_id <= 0 || chip_id >= 2 ** 32) {
		$gameVariables.setValue(12, 'Invalid Chip ID')
		return {}
	}

	const res = await FVMakeRequest({
		url: `http://aipl.duckdns.org:3000/signup`, 
		method: 'POST', 
		headers: { 'Content-Type': 'application/json' }, 
		params: JSON.stringify({ chip_id })
	})
	if (res.status !== 200) {
		const err = await res.responseText
		console.error(err)
		$gameVariables.setValue(12, err)
		return {}
	}
	const body = JSON.parse(res.response)
	
	// $gameVariables.setValue(12, 0)
	// $gameVariables.setValue(13, chip_id)
	// $gameVariables.setValue(14, user_id)

	// await saveFVConfig()
	return body
}

function FVMakeRequest(opts) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url);
    xhr.onload = function () {
	resolve(xhr);
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    var params = opts.params;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
    xhr.send(params);
  });
}

async function mockUpdateFlowVolume(flow_volume = 0, chip_id = $gameVariables.value(13), user_id = $gameVariables.value(14)) {
	const payload = { chip_id, user_id, flow_volume }
	console.log('payload: ', payload)
	return fetch(`http://aipl.duckdns.org:3000/flow_volume`, {
		method: 'POST', 
		headers: { 'Content-Type': 'application/json' }, 
		body: JSON.stringify(payload)
	})
}