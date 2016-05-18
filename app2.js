var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var kiosks = [];

function Shops(locationName, minCustomersHour, maxCustomersHour, avgCupsPerCustomer, avgPoundsPerCustomer) {
  this.locationName = locationName;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.avgCupsPerCustomer = avgCupsPerCustomer;
  this.avgPoundsPerCustomer = avgPoundsPerCustomer;
  this.beansPerHour = []; // add to daily beans needed
  this.customersPerHour = []; //
  this.cupsPerHour = []; //
  this.beansNeededForCupsPerHour = []; //
  this.poundPackagesPerHour = []; //
  this.dailyCustomersTotal = 0;
  this.dailyCupsTotal = 0;
  this.dailyPoundPackagesTotal = 0;
  this.dailyBeansNeeded = 0;
  this.baristasPerHour = [];
  this.baristasTotal = 0;
}

//here goes the prototypes
Shops.prototype.calcCustomersPerHour = function(min,max) {
  for (var i = 0; i < hours.length; i ++) {
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(customers);
    this.customersPerHour.push(customers);
    this.dailyCustomersTotal = this.dailyCustomersTotal + customers;
  }
};

Shops.prototype.calcCupsSoldPerHour = function() {
  for (var i = 0; i < hours.length; i++){
    //console.log('I am cups sold');
    var cups = Math.round(this.customersPerHour[i] * this.avgCupsPerCustomer);
    //console.log(this.customersPerHour[i]);
    //console.log(this.avgCupsPerCustomer);
    this.cupsPerHour.push(cups);
    this.dailyCupsTotal = this.dailyCupsTotal + this.cupsPerHour[i];
    //console.log(cups);
  }
};

Shops.prototype.calcBeansNeededForCupsPerHour = function() {
  for (var i = 0; i < hours.length; i++){
    var beans = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i] / 16).toFixed(1));
    this.beansNeededForCupsPerHour.push(beans);
    this.dailyBeansNeeded = Math.ceil(this.dailyBeansNeeded + this.beansNeededForCupsPerHour[i]);
  }
};

Shops.prototype.calcPoundPackagesPerHour = function(){
  for (var i = 0; i < hours.length; i++){
    //console.log('I am pounds per hour');
    var pounds = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
    this.poundPackagesPerHour.push(pounds);
    this.dailyPoundPackagesTotal = this.dailyPoundPackagesTotal + this.poundPackagesPerHour[i];
  }
};

Shops.prototype.calcBeansPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
   //console.log('I am beans needed');
    var beans = Math.ceil((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i])); //console.log(beans);
    this.beansPerHour.push(beans);
  }
};

Shops.prototype.calcBaristasPerHour = function(){
  for (var i = 0; i < hours.length; i++){
    var baristas = Math.ceil((this.customersPerHour[i] * 2) / 15);
    this.baristasPerHour.push(baristas);
    this.baristasTotal = this.baristasTotal + this.baristasPerHour[i];
  }
};

Shops.prototype.allCalcs = function() {
  this.calcCustomersPerHour(this.minCustomersHour, this.maxCustomersHour);
  this.calcCupsSoldPerHour();
  this.calcBeansNeededForCupsPerHour();
  this.calcPoundPackagesPerHour();
  this.calcBeansPerHour();
  this.calcBaristasPerHour();

  kiosks.push(this);
};

var pikePlace = new Shops('Pike Place Market', 14, 35, 1.2, 0.34);
var capitolHill = new Shops('Capitol Hill', 12, 28, 3.2, 0.03);
var spl = new Shops('Seattle Public Library', 9, 45, 2.6, 0.02);
var slu = new Shops('South Lake Union', 5, 18, 1.3, 0.04);
var seatac = new Shops('Sea-Tac Airport', 28, 44, 1.1, 0.41);

pikePlace.allCalcs();
capitolHill.allCalcs();
spl.allCalcs();
slu.allCalcs();
seatac.allCalcs();

var beansTable = document.getElementById('beans-table');
//make a function to make a table header row
function makeHeaderRow() {
  //create an empty row
  var row = document.createElement('tr');

  var emptyCell = document.createElement('th');  //create an empty cell
  row.appendChild(emptyCell);                                              //append cell to row

  var dailyLocation = document.createElement('th');//create daily location total cell
  dailyLocation.textContent = 'Total';   //give text content to daily location cell
  row.appendChild(dailyLocation);//append cell to row

  for (i = 0; i < hours.length; i++){
    var cell = document.createElement('th');  //create empty cell
    cell.textContent = hours[i];//give cell content from hours[i]
    row.appendChild(cell);//append cell to the row
  }

  beansTable.appendChild(row);//append row to table
}
makeHeaderRow();

function makeSecondRow(store) {
  //create an empty row
  var row2 = document.createElement('tr');
  console.log('row 2 created');


  var pikePlace = document.createElement('th');//create daily location total cell
  pikePlace.textContent = store.locationName;   //give text content to daily location cell
  row2.appendChild(pikePlace);//append cell to row
  console.log('pike place appended');

  var totalBeans = document.createElement('td');
  totalBeans.textContent = store.dailyBeansNeeded; //create an empty cell
  row2.appendChild(totalBeans);
                                              //append cell to row
  for (i = 0; i < hours.length; i++){
    var cell = document.createElement('td');  //create empty cell
    cell.textContent = store.beansPerHour[i];//give cell content from hours[i]
    row2.appendChild(cell);//append cell to the row
  }

  beansTable.appendChild(row2);//append row to table
}
// function renderRows() {
//   for (i = 0; i < kiosks.length; i++) {
//     makeSecondRow(kiosks[i]);
//   }
// }
//
// renderRows();
makeSecondRow(pikePlace);
makeSecondRow(capitolHill);
makeSecondRow(spl);
makeSecondRow(slu);
makeSecondRow(seatac);

var baristaTable = document.getElementById('baristas-table');


function makeHeaderRow2() {
  //create an empty row
  var row = document.createElement('tr');

  var emptyCell = document.createElement('th');  //create an empty cell
  row.appendChild(emptyCell);                                              //append cell to row

  var dailyLocation = document.createElement('th');//create daily location total cell
  dailyLocation.textContent = 'Total';   //give text content to daily location cell
  row.appendChild(dailyLocation);//append cell to row

  for (i = 0; i < hours.length; i++){
    var cell = document.createElement('th');  //create empty cell
    cell.textContent = hours[i];//give cell content from hours[i]
    row.appendChild(cell);//append cell to the row
  }

  baristaTable.appendChild(row);//append row to table
}
makeHeaderRow2();

function makeSecondRow2(store) {
  //create an empty row
  var row2 = document.createElement('tr');
  console.log('row 2 created');


  var pikePlace = document.createElement('th');//create daily location total cell
  pikePlace.textContent = store.locationName;   //give text content to daily location cell
  row2.appendChild(pikePlace);//append cell to row
  console.log('pike place appended');

  var baristasTotal = document.createElement('td');
  baristasTotal.textContent = store.baristasTotal; //create an empty cell
  row2.appendChild(baristasTotal);
                                              //append cell to row
  for (i = 0; i < hours.length; i++){
    var cell = document.createElement('td');  //create empty cell
    cell.textContent = store.baristasPerHour[i];//give cell content from hours[i]
    row2.appendChild(cell);//append cell to the row
  }

  baristaTable.appendChild(row2);//append row to table
}
makeSecondRow2(pikePlace);
makeSecondRow2(capitolHill);
makeSecondRow2(spl);
makeSecondRow2(slu);
makeSecondRow2(seatac);

// function makeSecondRow() {
//   var row2 = document.createElement('tr');
//
//   // var emptyCell = document.createElement('tr');
//   // row2.appendChild(emptyCell);
//
//   var pikePlace = document.createElement('tr');
//   pikePlace.textContent = 'Pike Place Market';
//   row2.appendChild(pikePlace);
//
//   for (i = 0; i < hours.length; i++) {
//     var cell = document.createElement('tr');
//     cell.textContent = this.dailyBeansNeeded = Math.ceil(this.dailyBeansNeeded + this.beansNeededForCupsPerHour[i]);
//   }
//   beansTable.appendChild(row2);
// }
//
// makeSecondRow();
//make a function to make a shop row
