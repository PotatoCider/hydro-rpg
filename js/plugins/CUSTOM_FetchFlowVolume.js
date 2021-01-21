//=============================================================================
// FetchFlowVolume.js
//=============================================================================

/*:
 * @plugindesc Fetches flow volume from a server
 * @author Joseph goh
 *
 * @help <insert help here>
 */

async function fetchFlowVolume(chip_id, user_id) {
	const res = await fetch(`http://aipl.duckdns.org:3000/flow_volume?chip_id=${chip_id}&user_id=${user_id}`)
	const body = await res.json()
	console.log(body)
	$gameVariables.setValue(15, body.daily_flow_volume)
	$gameVariables.setValue(16, body.weekly_flow_volume)
	$gameVariables.setValue(17, body.monthly_flow_volume)
	$gameVariables.setValue(18, body.yearly_flow_volume)
	$gameVariables.setValue(19, body.total_flow_volume)
	$gameVariables.setValue(20, body.last_flow_volume)
}