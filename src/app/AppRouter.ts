import I = require('../core/interfaces');
import express = require('express');
import requireAll = require('require-all');

export class AppRouter implements I.IRouter {
		private server: express.Express;
		private path: string;
		private routes: AppRoute[];
		constructor() {
			this.routes = [];
		}
		addRoutes(s: any, path: string): void {
			this.server = s;
			this.path = path;
			var files = requireAll(this.path);
			for (var f in files) {
				if (f as string) {
					var i: number = this.routes.length;
					var r = this.routes[i] = new AppRoute('/' + f, files[f]);
				}
			}
			this.setRoutes();
		}
		setRoutes(): void {
			this.routes.forEach(r => {
				this.server.use(r.name, r.route);
			});
		}
}
class AppRoute {
	name: string;
	route: any;
	constructor(n: string, r: any) {
		this.name = n;
		this.route = r;
	}
}
