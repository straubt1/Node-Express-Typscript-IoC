import Interfaces = require('../core/interfaces');

export class AppFoo implements Interfaces.IFoo {
	constructor() {
		var donothing = 0;
	}
	doFooWork(): void {
		console.log('I am AppFoo.doFooWork();');
	}
}
