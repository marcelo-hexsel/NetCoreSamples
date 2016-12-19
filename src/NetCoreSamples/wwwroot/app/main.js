"use strict";
// import { enabledProdMode } from "@angular/core";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
// Extende o Obserable para o app
require("rxjs/Rx");
// enabledProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map