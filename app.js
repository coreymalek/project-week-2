var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(customers);
      this.customersPerHour.push(customers);
    }
  },

  calcCupsSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log('I am cups sold');
      var cups = Math.round(this.customersPerHour[i] * this.avgCupsPerCustomer);
      //console.log(this.customersPerHour[i]);
      //console.log(this.avgCupsPerCustomer);
      this.cupsPerHour.push(cups);
      console.log(cups);
    }
  },

  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var beans = parseFloat((this.avgCupsPerCustomer * this.customersPerHour[i] / 16).toFixed(1));
      this.beansNeededForCupsPerHour.push(beans);

    }
  },

  calcPoundPackagesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      console.log('I am pounds per hour');
      var pounds = Math.ceil(this.customersPerHour[i] * this.avgPoundsPerCustomer);
      this.poundPackagesPerHour.push(pounds);
    }
  },

  calcBeansPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      console.log('I am beans needed');
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
      liElement.textContent = hours[i] + ': ' + this.poundPackagesPerHour[i] + 'lbs' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups' + ' ]';
      ulElement.appendChild(liElement);
    }
  }
};

pikePlace.render();
