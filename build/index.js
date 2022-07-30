"use strict";

var _user$address;

var user = {}; // Old way to do
// if (user && user.address) {
//   console.log(user.address.street);
// }
// Optional chaining

console.log(user === null || user === void 0 ? void 0 : (_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street);