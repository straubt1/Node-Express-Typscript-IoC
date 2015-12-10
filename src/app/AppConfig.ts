import fs = require('fs');
import I = require('../core/interfaces');

export class AppConfig implements I.IConfig {
	private filename: string;
	constructor() {
		this.filename = process.env.ConfigFile || './lib/config.json';
	}
	getConfiguration(): any {
		return JSON.parse(fs.readFileSync(this.filename, 'utf8'));
	}
}



// export function getConfig(filename: string): any {
//   return JSON.parse(fs.readFileSync(filename, 'utf8'));
// }
