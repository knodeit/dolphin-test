/**
 * Created by Vadim on 12/3/15.
 */
'use strict';
var Module = require('dolphin-core').Module;
var Logger = require('dolphin-core').Logger;

var car = new Module('Car');
car.register(function () {
    car.getWheels = function () {
        return 4;
    };

    console.log('RUN Car');

    Logger.warn('warn');
    Logger.debug('debug');
    Logger.error('error', {d:1});
    return car;
});