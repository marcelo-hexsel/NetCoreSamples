import { Component, OnInit, Inject } from "@angular/core";

import { DashboardService, Dashboard } from "../shared/services/dashboard/dashboard.service";

@Component({
    moduleId: module.id,
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
    helloHome: string;
    dashAgents: Dashboard[];
    dashTasks: Dashboard[];

    constructor(@Inject(DashboardService) private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.helloHome = "Bem vindo a página home";

        this.dashboardService.getDashboardAgents()
            .subscribe((dashs: Dashboard[]) => {
                this.dashAgents = dashs;
            });

        this.dashboardService.getDashboardTasks()
            .subscribe((dashs: Dashboard[]) => {
                this.dashTasks = dashs;
            });
    }

    pointClickHandler(e: any) {
        this.toggleVisibility(e.target);
    }

    legendClickHandler(e: any) {
        let arg = e.target,
            item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        this.toggleVisibility(item);
    }

    toggleVisibility(item: any) {
        if (item.isVisible())
            item.hide();
        else
            item.show();
    }
}