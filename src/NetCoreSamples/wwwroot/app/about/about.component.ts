import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    styleUrls: ["about.component.css"],
    templateUrl: "about.component.html"
})
export class AboutComponent implements OnInit {
    aboutDescription: string;

    ngOnInit() {
        this.aboutDescription = "Samples os what can be done in asp.net core 1.0";
    }
}