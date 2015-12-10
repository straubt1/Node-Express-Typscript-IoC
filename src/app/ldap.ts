// import activedirectory = require('activedirectory');
// import User = require('../lib/models/user');
// import Users = require('../lib/models/users');
// var ActiveDirectory: any;
// 
// class Ldap {
//   constructor(config: any) {
//     if (!config || !config.url || !config.baseDN ||
//       !config.username || !config.password) {
//       throw new Error('Invalid or missing configuration');
//     }
//     ActiveDirectory = activedirectory(config);
//   }
//   getAllUsers(cb: (users: Users) => void) {
//     ActiveDirectory.getUsersForGroup('All_8451_Contractors', function(err: any, users: User[]) {
//       var result = new Users();
//       result.count = users.length;
//       result.users = users;
//       cb(result);
//     });
//   }
// }
// 
// export = Ldap;
