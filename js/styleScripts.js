$(document).ready(function(){
	$('.recipe img').mousemove(function(location) {
		var recipeID = $(this).attr('id');
		var description = "";
		
		switch(recipeID) {
			case "11":
				description = "+100% critical strike damage.";
				break;
			case "21":
				description = "Heal for 25% of damage dealt.";
				break;
			case "22":
				description = "Increases ability power by 50%.";
				break;
			case "31":
				description = "Every second, has a 5% chance to gain 100% critical strike chance until the end of combat.";
				break;
			case "32":
				description = "Gain 3% attack speed on-hit. Stacks with no upper limit.";
				break;
			case "33":
				description = "Doubles attack range. Basic attacks cannot miss.";
				break;
			case "41":
				description = "After casting Special Ability for the first time, basic attacks restore an additional 15% of maximum mana on-hit.";
				break;
			case "42":
				description = "Special Ability deals 200 magic damage to all adjacent enemies to target.";
				break;
			case "43":
				description = "Every third basic attack deals 100 magic damage to the target and all adjacent enemies.";
				break;
			case "44":
				description = "After casting Special Ability, gain 20 mana.";
				break;
			case "51":
				description = "Upon death, revive with 500 health.";
				break;
			case "52":
				description = "At the beginning of combat, all adjacent allies gain a 200 health shield.";
				break;
			case "53":
				description = "Dodge all critical strikes.";
				break;
			case "54":
				description = "Adjacent enemies have their attack speed reduced by 20%.";
				break;
			case "55":
				description = "Reflect 35% of damage taken from basic attacks as magic damage.";
				break;
			case "61":
				description = "Heal for 50% of damage dealt by basic attacks.";
				break;
			case "62":
				description = "Enemies take 200 magic damage whenever they cast their Special Ability.";
				break;
			case "63":
				description = "Basic attacks have a 20% chance to Subjugate shrink the target, removing 1 Star.";
				break;
			case "64":
				description = "Basic attacks have a 30% chance to Silence icon silence the target.";
				break;
			case "65":
				description = "Basic attacks have a 20% chance to Disarm icon disarm the target.";
				break;
			case "66":
				description = "Gain 83% resistance to magic damage.";
				break;
			case "71":
				description = "At the beginning of combat, all adjacent allies gain 10% attack speed.";
				break;
			case "72":
				description = "Special Ability applies a burn on the enemies hit for 3 seconds, dealing 2.5% of target's maximum health true damage per second and preventing healing on the target.";
				break;
			case "73":
				description = "Basic attacks deal 10% of your maximum health bonus damage to the target and all adjacent enemies.";
				break;
			case "74":
				description = "On death, after a small delay, heal nearby allies for 1000 health.";
				break;
			case "75":
				description = "Basic attacks deal 2.5% of target's maximum health true damage per second and prevent healing on the target.";
				break;
			case "76":
				description = "At the start of combat, Stasis icon banishes for 5 seconds the unit that mirrors the wielder placement on the other side of the board.";
				break;
			case "77":
				description = "Regenerates 3% of maximum health per second.";
				break;
			case "81":
				description = "Becomes an Assassinicon Assassin.";
				break;
			case "82":
				description = "Becomes a Blademastericon Blademaster.";
				break;
			case "83":
				description = "Becomes a Sorcerericon Sorcerer.";
				break;
			case "84":
				description = "Becomes a Demonicon Demon.";
				break;
			case "85":
				description = "Becomes a Knighticon Knight.";
				break;
				break;
			case "86":
				description = "Basic attacks hit 2 additional targets for 50% damage.";
				break;
			case "87":
				description = "Becomes a Glacialicon Glacial.";
				break;
			case "88":
				description = "Increases the unit cap by 1.";
				break;
			default:
				description = "???";
		}
		$('#hoverDesc').text(description).show();
		$('#hoverDesc').css('top',location.clientY).css('left',location.clientX+20).css('zIndex',100);
	});

	$('.recipe img').mouseout(function() {
		$('#hoverDesc').hide();	
	});
});