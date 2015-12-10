import I = require('../core/interfaces');

export class AppBar implements I.IBar {
	constructor() {
		var donothing = 0;
	}
	doBarWork(): void {
		console.log('I am AppBar.doBarWork();');
	}
}
