$(document).ready(function(){
	$(function() {
		$(this).bind("contextmenu", function(e) {
			e.preventDefault();
		});
	});
	$(function() {
		var amount = [0,0,0,0,0,0,0,0]
	});
	$('.owned img').mousedown(function(event) {
		switch (event.which) {
			case 1:
				addAmount(this.id);
				break;
			case 3:
				minusAmount(this.id);
				break;
		}
	});
	$('.board .recipe img').click(function() {
		var recipeValue = parseInt(document.getElementById(this.id).getAttribute("value"));
		if (recipeValue == 1) {
			var item1 = this.id.charAt(0);
			var item2 = this.id.charAt(1);
			minusAmount(item1);
			minusAmount(item2);
		}
			
	});
});

function addAmount(index) {
	var idPrefix = "a";
	var amountId = idPrefix.concat(index);
	var amount = parseInt(document.getElementById(amountId).innerHTML);
	var postAmount = amount+1;
	
	if (amount < 8) {
		if (amount == 0) {
			document.getElementById(index).style.filter="brightness(100%)";
		}
		document.getElementById(amountId).innerHTML = postAmount.toString();
		refresh(index);
	}
}
function minusAmount(index) {
	var idPrefix = "a";
	var amountId = idPrefix.concat(index);
	var amount = parseInt(document.getElementById(amountId).innerHTML);
	var postAmount = amount-1;
	
	if (amount > 0) {
		if (amount == 1) {
			document.getElementById(index).style.filter="brightness(50%)";
		}
		document.getElementById(amountId).innerHTML = postAmount.toString();
		refresh(index);
	}
}
function refresh(index) {
	var a1 = parseInt(document.getElementById("a1").innerHTML)
	var a2 = parseInt(document.getElementById("a2").innerHTML)
	var a3 = parseInt(document.getElementById("a3").innerHTML)
	var a4 = parseInt(document.getElementById("a4").innerHTML)
	var a5 = parseInt(document.getElementById("a5").innerHTML)
	var a6 = parseInt(document.getElementById("a6").innerHTML)
	var a7 = parseInt(document.getElementById("a7").innerHTML)
	var a8 = parseInt(document.getElementById("a8").innerHTML)
	
	var ownedList = [];
				
	if (a1 > 0)
		ownedList.push("1");
	if (a2 > 0)
		ownedList.push("2");
	if (a3 > 0)
		ownedList.push("3");
	if (a4 > 0)
		ownedList.push("4");
	if (a5 > 0)
		ownedList.push("5");
	if (a6 > 0)
		ownedList.push("6");
	if (a7 > 0)
		ownedList.push("7");
	if (a8 > 0)
		ownedList.push("8");
	
	for (var g = 1; g < 9; g++) {
		for (var h = 1; h <= g; h++) {
			var recipeId = g.toString().concat(h.toString());
			document.getElementById(recipeId).style.filter="brightness(50%)";
			document.getElementById(recipeId).setAttribute("value","0"); 
		}
	}
	
	for (var i = 0; i < ownedList.length; i++) {
		for (var j = 0; j < i; j++) {
			var recipeId = ownedList[i].concat(ownedList[j])
			document.getElementById(recipeId).style.filter="brightness(100%)";
			document.getElementById(recipeId).setAttribute("value","1"); 
		}
	}
	
	if (a1 > 1) {
		document.getElementById("11").style.filter="brightness(100%)";
		document.getElementById("11").setAttribute("value","1"); 
	}
	if (a2 > 1) {
		document.getElementById("22").style.filter="brightness(100%)";
		document.getElementById("22").setAttribute("value","1");
	}
	if (a3 > 1) {
		document.getElementById("33").style.filter="brightness(100%)";
		document.getElementById("33").setAttribute("value","1"); 
	}
	if (a4 > 1) {
		document.getElementById("44").style.filter="brightness(100%)";
		document.getElementById("44").setAttribute("value","1"); 
	}
	if (a5 > 1) {
		document.getElementById("55").style.filter="brightness(100%)";
		document.getElementById("55").setAttribute("value","1"); 
	}
	if (a6 > 1) {
		document.getElementById("66").style.filter="brightness(100%)";
		document.getElementById("66").setAttribute("value","1"); 
	}
	if (a7 > 1) {
		document.getElementById("77").style.filter="brightness(100%)";
		document.getElementById("77").setAttribute("value","1"); 
	}
	if (a8 > 1) {
		document.getElementById("88").style.filter="brightness(100%)";
		document.getElementById("88").setAttribute("value","1"); 
	}
}
