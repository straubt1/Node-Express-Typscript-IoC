//Main app interface - provides entry point to DI into
export interface IApplicaiton {
	start(): void;
}
//Router to have seperate files for each route
export interface IRouter {
	addRoutes(server: any, path: string): void;
}
//Get configuration needed to configure the application
export interface IConfig {
	getConfiguration(): any;
}

//sample interfaces - delete
export interface IFoo {
	doFooWork(): void;
}
export interface IBar {
	doBarWork(): void;
}
export interface IFooBar {
	doFooBarWork(): void;
}
