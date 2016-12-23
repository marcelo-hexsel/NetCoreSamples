import { Component, OnInit, Inject } from "@angular/core";

import { DashboardService, Dashboard } from "../shared/services/dashboard/dashboard.service";

@Component({
    moduleId: module.id,
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
    helloHome: string;
    dash: Dashboard[];

    constructor(@Inject(DashboardService) private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.helloHome = "Bem vindo a página home";
        this.dashboardService.getDashboard()
            .subscribe((dashs: Dashboard[]) => {
                this.dash = dashs;
                console.log(dashs);
            });
    }
}