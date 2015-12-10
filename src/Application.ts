import I = require('./core/interfaces');
import express = require('express');

export class Application implements I.IApplicaiton {
	private Router: I.IRouter;
	constructor(IRouter: I.IRouter) {
		this.Router = IRouter;
	}
	start(): void {
		console.log('start express server');
		var app = express();
		var port = process.env.PORT || 5000;
		app.set('port', port);
		this.Router.addRoutes(app, __dirname + '/routes');
		app.listen(app.get('port'), () => {
			console.log('Node app is running on port', app.get('port'));
		});
	}
}
