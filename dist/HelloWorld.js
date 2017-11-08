"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myfunctions_1 = require("./myfunctions");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        //console.log('Hello World');
        return myfunctions_1.MyFunctions.Add(12, 34);
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=HelloWorld.js.map