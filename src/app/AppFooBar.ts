import I = require('../core/interfaces');

export class AppFooBar implements I.IFooBar {
	private Foo: I.IFoo;
	private Bar: I.IBar;
	//dependencies MUST be named the same as the identifier used to Bind()
	constructor(IFoo: I.IFoo, IBar: I.IBar) {
		this.Foo = IFoo;
		this.Bar = IBar;
	}
	doFooBarWork(): void {
		console.log('I am AppFooBar.doFooBarWork();');
		this.Foo.doFooWork();
		this.Bar.doBarWork();
	}
}
