/**
 * Created by Vadim on 12/3/15.
 */
'use strict';
var Module = require('dolphin-core').Module;
var truck = new Module('Truck');
truck.register(function (Car) {
    console.log('RUN Truck');
    console.log('Car', Car);
    console.log(Car.getWheels());
    return truck;
});