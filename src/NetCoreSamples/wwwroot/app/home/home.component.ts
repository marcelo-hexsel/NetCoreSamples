import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
    helloHome: string;

    ngOnInit() {
        this.helloHome = "Bem vindo a página home";
    }
}