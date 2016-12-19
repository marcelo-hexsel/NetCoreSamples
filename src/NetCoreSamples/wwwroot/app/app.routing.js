"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var task_component_1 = require("./task/task.component");
var appRoutes = [
    {
        path: "", component: home_component_1.HomeComponent
    },
    {
        path: "about", component: about_component_1.AboutComponent
    },
    {
        path: "tasks", component: task_component_1.TaskComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map