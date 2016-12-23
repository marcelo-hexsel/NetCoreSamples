"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var dashboard_service_1 = require("../shared/services/dashboard/dashboard.service");
var HomeComponent = (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helloHome = "Bem vindo a página home";
        this.dashboardService.getDashboardAgents()
            .subscribe(function (dashs) {
            _this.dashAgents = dashs;
        });
        this.dashboardService.getDashboardTasks()
            .subscribe(function (dashs) {
            _this.dashTasks = dashs;
        });
    };
    HomeComponent.prototype.pointClickHandler = function (e) {
        this.toggleVisibility(e.target);
    };
    HomeComponent.prototype.legendClickHandler = function (e) {
        var arg = e.target, item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
        this.toggleVisibility(item);
    };
    HomeComponent.prototype.toggleVisibility = function (item) {
        if (item.isVisible())
            item.hide();
        else
            item.show();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "home.component.html"
        }),
        __param(0, core_1.Inject(dashboard_service_1.DashboardService)), 
        __metadata('design:paramtypes', [dashboard_service_1.DashboardService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map