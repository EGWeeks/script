
function userInput() {
	var userValue = document.getElementById('kwh').value
	electric(userValue);
}

function electric(kwhUsed){
	// fixed charge per month
	var fixedChargePerMonth = 5.37;
	// current month getMonth is from 0 - 11
	var currentDate = new Date();
	var month = currentDate.getMonth();

	var firstFiveCost,
			secondFiveCost,
			additionalKWH,
			overOne,
			billCost,
			overFive,
			roundedCost;

	switch (month) {
		case 5:
		case 6:
		case 7:
			firstFiveCost = 0.0894;
			secondFiveCost = 0.10674;
			additionalKWH = 0.14151;
			break;
		default:
			firstFiveCost = 0.08300;
			secondFiveCost = 0.08724;
			additionalKWH = 0.09657;
	}
	
	if (kwhUsed > 1000) {
		overOne = kwhUsed - 1000;
		billCost = (500 * firstFiveCost) + (500 * secondFiveCost);
		billCost += overOne * additionalKWH;
	} else if ((kwhUsed > 500) && (kwhUsed <= 1000)){
		overFive = kwhUsed - 500;
		billCost = 500 * firstFiveCost;
		billCost += overFive * secondFiveCost;
	} else {
		billCost = kwhUsed * firstFiveCost;
	}

	billCost += fixedChargePerMonth;
	
	roundedCost = Math.round(billCost*100)/100;

	document.write("$"+ roundedCost);
}



