var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  beansPerHour: [], // add to daily beans needed
  customersPerHour: [], //
  cupsPerHour: [], //
  beansNeededForCupsPerHour: [], //
  poundPackagesPerHour: [], //
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(customers);
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal = this.dailyCustomersTotal + customers;
    }
  },

  calcCupsSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      //console.log('I am cups sold');
      var cups = Math.round(this.customersPerHour[i] * this.avgCupsPerCustomer);
      //console.log(this.customersPerHour[i]);
      //console.log(this.avgCupsPerCustomer);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal = this.dailyCupsTotal + this.cupsPerHour[i];
      console.log(cups);
    }
  },

  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var beans = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beans);
      this.dailyBeansNeeded = Math.ceil(this.dailyBeansNeeded + this.beansNeededForCupsPerHour[i]);

    }
    console.log(this.dailyBeansNeeded);
  },

  calcPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log('I am pounds per hour');
      var pounds = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      this.poundPackagesPerHour.push(pounds);
      this.dailyPoundPackagesTotal = this.dailyPoundPackagesTotal + this.poundPackagesPerHour[i];
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      //console.log('I am beans needed');
      var beans = Math.ceil((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]));
      console.log(beans);
      this.beansPerHour.push(beans);
    }
  },

  render: function() {
    pikePlace.calcCustomersPerHour(pikePlace.minCustomersHour, pikePlace.maxCustomersHour);
    pikePlace.calcCupsSoldPerHour();
    pikePlace.calcPoundPackagesPerHour();
    pikePlace.calcBeansNeededForCupsPerHour();
    pikePlace.calcBeansPerHour();
    console.log('I am rendering');
    // call all of the other methods that calc data
    var ulElement = document.getElementById('pike');
    for (var i = 0; i < hours.length; i++) {
      // create a <li>
      // give that <li> content
      // append the <li> to the <ul>
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups ' + ' (' + this.beansNeededForCupsPerHour[i] + 'lbs) ' + ', ' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
      //6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]
    }
    var liElement = document.createElement('li');
    liElement.textContent = 'Total Customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pounds of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};

pikePlace.render();

var capitolHill = {
  locationName: 'Capitol Hill',
  minCustomersHour: 12,
  maxCustomersHour: 28,
  avgCupsPerCustomer: 3.2,
  avgPoundsPerCustomer: 0.03,
  beansPerHour: [], // add to daily beans needed
  customersPerHour: [], //
  cupsPerHour: [], //
  beansNeededForCupsPerHour: [], //
  poundPackagesPerHour: [], //
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(customers);
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal = this.dailyCustomersTotal + customers;
    }
  },

  calcCupsSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      //console.log('I am cups sold');
      var cups = Math.round(this.customersPerHour[i] * this.avgCupsPerCustomer);
      //console.log(this.customersPerHour[i]);
      //console.log(this.avgCupsPerCustomer);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal = this.dailyCupsTotal + this.cupsPerHour[i];
      console.log(cups);
    }
  },

  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var beans = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beans);
      this.dailyBeansNeeded = Math.ceil(this.dailyBeansNeeded + this.beansNeededForCupsPerHour[i]);

    }
    console.log(this.dailyBeansNeeded);
  },

  calcPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log('I am pounds per hour');
      var pounds = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      this.poundPackagesPerHour.push(pounds);
      this.dailyPoundPackagesTotal = this.dailyPoundPackagesTotal + this.poundPackagesPerHour[i];
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      //console.log('I am beans needed');
      var beans = Math.ceil((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]));
      console.log(beans);
      this.beansPerHour.push(beans);
    }
  },
  render: function() {
    capitolHill.calcCustomersPerHour(capitolHill.minCustomersHour, capitolHill.maxCustomersHour);
    capitolHill.calcCupsSoldPerHour();
    capitolHill.calcPoundPackagesPerHour();
    capitolHill.calcBeansNeededForCupsPerHour();
    capitolHill.calcBeansPerHour();
    console.log('I am rendering');
    // call all of the other methods that calc data
    var ulElement = document.getElementById('capitol');
    for (var i = 0; i < hours.length; i++) {
      // create a <li>
      // give that <li> content
      // append the <li> to the <ul>
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups ' + ' (' + this.beansNeededForCupsPerHour[i] + 'lbs) ' + ', ' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
      //6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]
    }
    var liElement = document.createElement('li');
    liElement.textContent = 'Total Customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pounds of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};

capitolHill.render();

var spl = {
  locationName: 'Seattle Public Library',
  minCustomersHour: 9,
  maxCustomersHour: 45,
  avgCupsPerCustomer: 2.6,
  avgPoundsPerCustomer: 0.02,
  beansPerHour: [], // add to daily beans needed
  customersPerHour: [], //
  cupsPerHour: [], //
  beansNeededForCupsPerHour: [], //
  poundPackagesPerHour: [], //
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(customers);
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal = this.dailyCustomersTotal + customers;
    }
  },

  calcCupsSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      //console.log('I am cups sold');
      var cups = Math.round(this.customersPerHour[i] * this.avgCupsPerCustomer);
      //console.log(this.customersPerHour[i]);
      //console.log(this.avgCupsPerCustomer);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal = this.dailyCupsTotal + this.cupsPerHour[i];
      console.log(cups);
    }
  },

  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var beans = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beans);
      this.dailyBeansNeeded = Math.ceil(this.dailyBeansNeeded + this.beansNeededForCupsPerHour[i]);

    }
    console.log(this.dailyBeansNeeded);
  },

  calcPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log('I am pounds per hour');
      var pounds = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      this.poundPackagesPerHour.push(pounds);
      this.dailyPoundPackagesTotal = this.dailyPoundPackagesTotal + this.poundPackagesPerHour[i];
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      //console.log('I am beans needed');
      var beans = Math.ceil((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]));
      console.log(beans);
      this.beansPerHour.push(beans);
    }
  },
  render: function() {
    spl.calcCustomersPerHour(spl.minCustomersHour, spl.maxCustomersHour);
    spl.calcCupsSoldPerHour();
    spl.calcPoundPackagesPerHour();
    spl.calcBeansNeededForCupsPerHour();
    spl.calcBeansPerHour();
    console.log('I am rendering');
    // call all of the other methods that calc data
    var ulElement = document.getElementById('spl');
    for (var i = 0; i < hours.length; i++) {
      // create a <li>
      // give that <li> content
      // append the <li> to the <ul>
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups ' + ' (' + this.beansNeededForCupsPerHour[i] + 'lbs) ' + ', ' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
      //6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]
    }
    var liElement = document.createElement('li');
    liElement.textContent = 'Total Customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pounds of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};

spl.render();

var slu = {
  locationName: 'South Lake Union',
  minCustomersHour: 5,
  maxCustomersHour: 18,
  avgCupsPerCustomer: 1.3,
  avgPoundsPerCustomer: 0.04,
  beansPerHour: [], // add to daily beans needed
  customersPerHour: [], //
  cupsPerHour: [], //
  beansNeededForCupsPerHour: [], //
  poundPackagesPerHour: [], //
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(customers);
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal = this.dailyCustomersTotal + customers;
    }
  },

  calcCupsSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      //console.log('I am cups sold');
      var cups = Math.round(this.customersPerHour[i] * this.avgCupsPerCustomer);
      //console.log(this.customersPerHour[i]);
      //console.log(this.avgCupsPerCustomer);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal = this.dailyCupsTotal + this.cupsPerHour[i];
      console.log(cups);
    }
  },

  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var beans = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beans);
      this.dailyBeansNeeded = Math.ceil(this.dailyBeansNeeded + this.beansNeededForCupsPerHour[i]);

    }
    console.log(this.dailyBeansNeeded);
  },

  calcPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log('I am pounds per hour');
      var pounds = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      this.poundPackagesPerHour.push(pounds);
      this.dailyPoundPackagesTotal = this.dailyPoundPackagesTotal + this.poundPackagesPerHour[i];
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      //console.log('I am beans needed');
      var beans = Math.ceil((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]));
      console.log(beans);
      this.beansPerHour.push(beans);
    }
  },
  render: function() {
    slu.calcCustomersPerHour(slu.minCustomersHour, slu.maxCustomersHour);
    slu.calcCupsSoldPerHour();
    slu.calcPoundPackagesPerHour();
    slu.calcBeansNeededForCupsPerHour();
    slu.calcBeansPerHour();
    console.log('I am rendering');
    // call all of the other methods that calc data
    var ulElement = document.getElementById('slu');
    for (var i = 0; i < hours.length; i++) {
      // create a <li>
      // give that <li> content
      // append the <li> to the <ul>
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups ' + ' (' + this.beansNeededForCupsPerHour[i] + 'lbs) ' + ', ' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
      //6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]
    }
    var liElement = document.createElement('li');
    liElement.textContent = 'Total Customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pounds of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};

slu.render();

var seatac = {
  locationName: 'Sea-Tac Airport',
  minCustomersHour: 28,
  maxCustomersHour: 44,
  avgCupsPerCustomer: 1.1,
  avgPoundsPerCustomer: 0.41,
  beansPerHour: [], // add to daily beans needed
  customersPerHour: [], //
  cupsPerHour: [], //
  beansNeededForCupsPerHour: [], //
  poundPackagesPerHour: [], //
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(customers);
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal = this.dailyCustomersTotal + customers;
    }
  },

  calcCupsSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      //console.log('I am cups sold');
      var cups = Math.round(this.customersPerHour[i] * this.avgCupsPerCustomer);
      //console.log(this.customersPerHour[i]);
      //console.log(this.avgCupsPerCustomer);
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal = this.dailyCupsTotal + this.cupsPerHour[i];
      console.log(cups);
    }
  },

  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var beans = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beans);
      this.dailyBeansNeeded = Math.ceil(this.dailyBeansNeeded + this.beansNeededForCupsPerHour[i]);

    }
    console.log(this.dailyBeansNeeded);
  },

  calcPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log('I am pounds per hour');
      var pounds = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      this.poundPackagesPerHour.push(pounds);
      this.dailyPoundPackagesTotal = this.dailyPoundPackagesTotal + this.poundPackagesPerHour[i];
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      //console.log('I am beans needed');
      var beans = Math.ceil((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]));
      console.log(beans);
      this.beansPerHour.push(beans);
    }
  },
  render: function() {
    seatac.calcCustomersPerHour(seatac.minCustomersHour, seatac.maxCustomersHour);
    seatac.calcCupsSoldPerHour();
    seatac.calcPoundPackagesPerHour();
    seatac.calcBeansNeededForCupsPerHour();
    seatac.calcBeansPerHour();
    console.log('I am rendering');
    // call all of the other methods that calc data
    var ulElement = document.getElementById('seatac');
    for (var i = 0; i < hours.length; i++) {
      // create a <li>
      // give that <li> content
      // append the <li> to the <ul>
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups ' + ' (' + this.beansNeededForCupsPerHour[i] + 'lbs) ' + ', ' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
      //6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]
    }
    var liElement = document.createElement('li');
    liElement.textContent = 'Total Customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    var liElement = document.createElement('li');
    liElement.textContent = 'Total pounds of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};

seatac.render();
