var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];

function Shops(locationName, minCustomersHour, maxCustomersHour, avgCupsPerCustomer, avgPoundsPerCustomer) {
  this.locationName = locationName;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.avgCupsPerCustomer = avgCupsPerCustomer;
  this.avgPoundsPerCustomer = avgPoundsPerCustomer;

}

var pikePlace = new Shops('Pike Place Market', 14, 35, 1.2, 0.34);
var capitolHill = new Shops('Capitol Hill', 12, 28, 3.2, 0.03);
var spl = new Shops('Seattle Public Library', 9, 45, 2.6, 0.02);
var slu = new Shops('South Lake Union', 5, 18, 1.3, 0.04);
var seatac = new Shops('Sea-Tac Airport', 28, 44, 1.1, 0.41);


var beansTable = document.getElementById('beans-table');

var headings = ['Daily Location Total', hours[i]];
var 

//Daily Location Total
// var dailyLocationTotal = dailyCupsTotal/16 + dailyPoundPackagesTotal;

//Hourly Location Total
// cupsPerHour[i]/16 + hourlyPoundPackages[i]

//Employees
// for (var i = 0; i < hours.length; i++){
//   (hourlyCups * 2 + hourlyPoundPackages * 2)/60;
// }
//
// (dailyCupsTotal * 2 + totalPoundPackages * 2)/900;

// Shops.prototype.(method name) = function(){
//
// } pikePlace.(methodname)
