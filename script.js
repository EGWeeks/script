function electric(){

	var kwhUsed = prompt("kiloWatt-hour. (kWh)");
	// fixed charge per month
	var fixedChargePerMonth = 5.37;
	// current month getMonth is from 0 - 11
	var currentDate = new Date()
	var month = currentDate.getMonth();

	var firstFiveCost;
	var secondFiveCost;
	var additionalKWH;
	var overOne;
	var billCost;
	var overFive;

	if ((month === 5) || (month === 6) || (month === 7)) {
		firstFiveCost = 0.0894;
		secondFiveCost = 0.10674;
		additionalKWH = 0.14151;
	} else {
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
	document.write("$"+billCost);
}


