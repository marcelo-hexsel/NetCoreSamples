import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

// Routers
import { routing, appRoutingProviders } from "./app.routing";

// DevExtreme modules
import { DxChartModule } from "devextreme-angular";

// System Component's 
import { AppComponent }  from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TaskComponent } from "./task/task.component";

import { TaskService } from "./shared/services/task/task.service";
import { DashboardService } from "./shared/services/dashboard/dashboard.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
        DxChartModule
    ],
    providers: [
        appRoutingProviders,
        TaskService,
        DashboardService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TaskComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }