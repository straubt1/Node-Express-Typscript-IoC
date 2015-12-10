import I = require('./core/interfaces');
import kernel = require('./ioc.config');

var result: I.IFooBar = kernel.resolve<I.IFooBar>('IFooBar');
result.doFooBarWork();

var config: I.IConfig = kernel.resolve<I.IConfig>('IConfig');
console.log(config.getConfiguration());

var app: I.IApplicaiton = kernel.resolve<I.IApplicaiton>('IApplicaiton');
app.start();
