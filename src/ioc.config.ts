import inversify = require('inversify');
import I = require('./core/interfaces');
import Application = require('./application');
import AppRouter = require('./app/approuter');
import AppConfig = require('./app/appconfig');
import AppFoo = require('./app/appfoo');
import AppBar = require('./app/appbar');
import AppFooBar = require('./app/appfoobar');

var kernel : inversify.KernelInterface = new inversify.Kernel();

kernel.bind(new inversify.TypeBinding<I.IConfig>('IConfig', AppConfig.AppConfig, inversify.TypeBindingScopeEnum.Singleton));
kernel.bind(new inversify.TypeBinding<I.IApplicaiton>('IApplicaiton', Application.Application));
kernel.bind(new inversify.TypeBinding<I.IRouter>('IRouter', AppRouter.AppRouter));

kernel.bind(new inversify.TypeBinding<I.IFoo>('IFoo', AppFoo.AppFoo));
kernel.bind(new inversify.TypeBinding<I.IBar>('IBar', AppBar.AppBar));
kernel.bind(new inversify.TypeBinding<I.IFooBar>('IFooBar', AppFooBar.AppFooBar));

export = kernel;
