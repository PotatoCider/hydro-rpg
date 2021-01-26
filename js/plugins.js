// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"false","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"AltMenuScreen","status":true,"description":"Alternative menu screen layout.","parameters":{}},
{"name":"AltSaveScreen","status":true,"description":"Alternative save/load screen layout.","parameters":{}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"10","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"EnemyBook","status":true,"description":"Displays detailed statuses of enemies.","parameters":{"Unknown Data":"??????"}},
{"name":"ItemBook","status":true,"description":"Displays detailed statuses of items.","parameters":{"Unknown Data":"??????","Price Text":"Price","Equip Text":"Equip","Type Text":"Type"}},
{"name":"SimpleMsgSideView","status":true,"description":"at sideview battle, only display item/skill names.","parameters":{"displayAttack":"0","position":"1"}},
{"name":"TitleCommandPosition","status":true,"description":"Changes the position of the title command window.","parameters":{"Offset X":"0","Offset Y":"0","Width":"240","Background":"0"}},
{"name":"WeaponSkill","status":true,"description":"Change skill id of attack for each weapon.","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"5","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleAICore","status":true,"description":"v1.15 This plugin allows you to structure battle A.I.\npatterns with more control.","parameters":{"Dynamic Actions":"true","Dynamic Turn Count":"false","Element Testing":"true","Default AI Level":"80"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_ElementCore","status":true,"description":"v1.02 Manage the way elements work in this game from\nabsorbing elements, reflecting elements, and more!","parameters":{"Multi-Element Rulings":"2"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.18 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"Finish","Remove Text":"Remove","Remove Icon":"16","Empty Text":"<Empty>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.13 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"v1.12 (Requires YEP_SkillCore.js) Cooldowns can be applied\nto skills to prevent them from being used continuously.","parameters":{"---Cooldown---":"","Cooldown Format":"%1CD","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"-10","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","Cooldown Bypass List":"[]","---Warmup---":"","Warmup Format":"%1WU","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75","---Battle Core---":"","Time Based":"false","Turn Time":"100"}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_CharacterCreatorEX","status":true,"description":"Allows players to create their own custom characters.","parameters":{"Layers":"Tail Part2, Wing Part2, Body, Eyes, Eyebrows, Nose, Mouth, Rear Hair Part1, Front Hair Part2, Rear Hair Part2, Clothing, Accessory A, Glasses, Front Hair Part1, Beast Ears, Accessory B, Tail Part1, Wing Part1","Order":"Body, Eyes, Eyebrows, Nose, Mouth, Clothing, Front Hair, Rear Hair, Accessory A, Accessory B, Glasses, Beast Ears, Wing, Tail","Mandatory":"Body, Eyes, Eyebrows, Nose, Mouth","Mandatory Color":"#FFFF44","Print to Console":"false","== Visual Options ==":"","Use Fade Transition":"true","Use Piece Background":"true","Use Scene Background":"true","Background X Scroll":"1","Background Y Scroll":"0","Small Piece Cols":"3","Big Piece Cols":"1","== Dialogues ==":"","Leave Dialogue":"Are you sure you want\\n to save this character?","Mandatory Dialogue":"You need to have all the mandatory sections \\nfilled out before exiting.","== Size Options ==":"","Character Width":"48","Character Height":"48","SV Char Width":"64","SV Char Height":"64","Face Width":"144","Face Height":"144","== Localization ==":"","Yes Text":"Yes!","No Text":"Nope","Color Mouse/Touch Input":"true"}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.02 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"Quest","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\",\\\"failed\\\",\\\"all\\\"]\",\"Available Text\":\"\\\\i[192]Available (%1)\",\"Completed Text\":\"\\\\i[191]Completed (%1)\",\"Failed Text\":\"\\\\i[194]Failed (%1)\",\"All Text\":\"\\\\i[189]All Quests (%1)\",\"Cancel Text\":\"\\\\i[161]Close\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]Main Quests\\\",\\\"\\\\\\\\c[4]Side Quests\\\",\\\"\\\\\\\\c[3]Character Quests\\\",\\\"\\\\\\\\c[5]Tutorial Quests\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]Read Quest\",\"Cancel\":\"\\\\i[16]Cancel\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]Quest Journal\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"Welcome to the \\\\\\\\c[4]Quest Journal\\\\\\\\c[0].\\\\n\\\\nHere, you can review over the various\\\\nquests given to you by people from all\\\\nover the world.\\\"\",\"Quest Data Format\":\"\\\"<WordWrap>\\\\\\\\{%1\\\\\\\\}\\\\n<br>\\\\\\\\c[4]Level:\\\\\\\\c[0] %2\\\\n<br>\\\\\\\\c[4]From:\\\\\\\\c[0] %3\\\\n<br>\\\\\\\\c[4]Location:\\\\\\\\c[0] %4\\\\n<br>\\\\n<br>\\\\\\\\c[4]Description:\\\\\\\\c[0]\\\\n<br>%5\\\\n<br>\\\\n<br>\\\\\\\\c[4]Objectives:\\\\\\\\c[0]\\\\n<br>%6\\\\n<br>\\\\n<br>\\\\\\\\c[4]Rewards:\\\\\\\\c[0]\\\\n<br>%7\\\\n<br>\\\\n<br>%8\\\"\",\"Uncleared Objective\":\"\\\\i[160]%1\",\"Completed Objective\":\"\\\\i[165]%1\",\"Failed Objective\":\"\\\\i[162]%1\",\"Unclaimed Reward\":\"\\\\i[160]%1\",\"Claimed Reward\":\"\\\\i[163]%1\",\"Denied Reward\":\"\\\\i[161]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"\\\\i[87]Tutorial Quest\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Mother\",\"Location\":\"Living Room\",\"Description\":\"[\\\"\\\\\\\"Tutorial for players to understand how to play the game.\\\\\\\"\\\",\\\"\\\\\\\"This is the \\\\\\\\\\\\\\\\c[4]default\\\\\\\\\\\\\\\\c[0] quest description.\\\\\\\\n\\\\\\\\nYou can insert multiple description entries in case you\\\\\\\\never want to update the quest description midway while the\\\\\\\\nquest is in progress.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Go see Mother.\\\\\\\"\\\",\\\"\\\\\\\"Go fight the monsters in the toilet.\\\\\\\"\\\",\\\"\\\\\\\"To make other objectives appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nObjectives'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"100G\\\\\\\"\\\",\\\"\\\\\\\"10EXP\\\\\\\"\\\",\\\"\\\\\\\"To make other rewards appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nRewards'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\",\\\"2\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 2":"{\"Title\":\"\\\\i[87]Setting Up Flowmeter\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Mother\",\"Location\":\"Home\",\"Description\":\"[\\\"\\\\\\\"Guide on How To Set Up Your Flowmeter\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Connect to the ESP Chip Wifi Network\\\\\\\"\\\",\\\"\\\\\\\"Enter the Chip ID (from the WiFi configuration portal) into the game's menu screen\\\\\\\"\\\",\\\"\\\\\\\"Send the Chip ID to the server, server will return you a User ID\\\\\\\"\\\",\\\"\\\\\\\"Enter the User ID into the WiFi configuration portal and set up your WiFi for the ESP chip.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\"]\",\"Rewards List\":\"[]\",\"Visible Rewards\":\"[]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 3":"{\"Title\":\"\\\\i[87]Heal Quest\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"NPC Name\",\"Location\":\"Location Name\",\"Description\":\"[\\\"\\\\\\\"Help Peter to defeat 2 monsters in his house!\\\\\\\"\\\",\\\"\\\\\\\"This is the \\\\\\\\\\\\\\\\c[4]default\\\\\\\\\\\\\\\\c[0] quest description.\\\\\\\\n\\\\\\\\nYou can insert multiple description entries in case you\\\\\\\\never want to update the quest description midway while the\\\\\\\\nquest is in progress.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Defeat Monsters(0/2)\\\\\\\"\\\",\\\"\\\\\\\"Defeat Monsters(2/2)\\\\\\\"\\\",\\\"\\\\\\\"To make other objectives appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nObjectives'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Heal Skill\\\\\\\"\\\",\\\"\\\\\\\"150G\\\\\\\"\\\",\\\"\\\\\\\"20EXP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 4":"","Quest 5":"","Quest 6":"","Quest 7":"","Quest 8":"","Quest 9":"","Quest 10":"","Quest 11":"","Quest 12":"","Quest 13":"","Quest 14":"","Quest 15":"","Quest 16":"","Quest 17":"","Quest 18":"","Quest 19":"","Quest 20":"","Quest 21":"","Quest 22":"","Quest 23":"","Quest 24":"","Quest 25":"","Quest 26":"","Quest 27":"","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"CUSTOM_FetchFlowVolume","status":true,"description":"Fetches flow volume from a server","parameters":{}},
{"name":"FELSKI_AUTOSAVE","status":true,"description":"v1.0.1 This plugin enables autosaving in your game. For RPG Maker MV 1.6.1.","parameters":{"Save Settings":"","Auto Save Slots":"2","Save After Map Change":"true","Save On Menu Exit":"true","Enable Auto Saving":"true","Save Texts":"","Auto Save Text":"Autosave","Save After Map Change Text":"Entering Area","Save On Menu Exit Text":"Closing Menu","Save Standard Text":"Normal Save"}},
{"name":"GALV_RollCredits","status":true,"description":"(v.1.5) A plugin that calls a new scene to display scrolling information located in an external text file.","parameters":{"Folder":"data","Skippable":"true","Block Skipping":"true","Title Menu":"Credits","Title Credits Music":""}},
{"name":"Kill Counter (MV)","status":true,"description":"Allows you to track number of enemies killed","parameters":{}}
];
