import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TaskComponent } from "./task/task.component";

const appRoutes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "about", component: AboutComponent
    },
    {
        path: "tasks", component: TaskComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);