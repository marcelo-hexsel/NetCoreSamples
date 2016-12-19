import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent }  from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TaskComponent } from "./task/task.component";

import { TaskService } from "./shared/services/task/task.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        TaskService
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