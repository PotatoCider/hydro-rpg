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

async function saveFVConfig() {
	const chip_id = $gameVariables.value(13)
	const user_id = $gameVariables.value(14)
	const writeFile = require('util').promisify(require('fs').writeFile)
	
	const json = { chip_id, user_id }
	await writeFile('fv_config.json', JSON.stringify(json))
}

async function loadFVConfig() {
	const readFile = require('util').promisify(require('fs').readFile)
	const json = await readFile('fv_config.json', { encoding: 'utf-8' })
	const { chip_id, user_id } = JSON.parse(json)
	$gameVariables.setValue(13, chip_id)
	$gameVariables.setValue(14, user_id)
	return { chip_id, user_id }
}

async function fetchFlowVolume() {
	if (!$gameVariables.value(13)) // if not initialized
		await loadFVConfig()
	const chip_id = $gameVariables.value(13)
	const user_id = $gameVariables.value(14)
	const res = await fetch(`http://aipl.duckdns.org:3000/flow_volume?chip_id=${chip_id}&user_id=${user_id}`)
	if (res.status !== 200)
		return console.error(res.text())
	const body = await res.json()
	$gameVariables.setValue(15, body.daily_flow_volume)
	$gameVariables.setValue(16, body.weekly_flow_volume)
	$gameVariables.setValue(17, body.monthly_flow_volume)
	$gameVariables.setValue(18, body.yearly_flow_volume)
	$gameVariables.setValue(19, body.total_flow_volume)
	$gameVariables.setValue(20, body.last_flow_volume)
}

// Ensure that Game Variable 13 is set to the user entered chip_id
// Game Variable 14 will be updated with the Chip ID.
async function signupFlowVolume() {
	const chip_id = $gameVariables.value(13)
	if (chip_id == null || chip_id === '' || chip_id <= 0 || chip_id >= 2 ** 32)
		return console.error('Invalid Chip ID.')
	
	const res = await fetch(`http://aipl.duckdns.org:3000/signup`, { method: 'POST', body: JSON.stringify({ chip_id }) })
	if (res.status !== 200)
		return console.error(res.text())
	const { user_id } = await res.json()

	$gameVariables.setValue(13, chip_id)
	$gameVariables.setValue(14, user_id)
	await saveFVConfig()
}