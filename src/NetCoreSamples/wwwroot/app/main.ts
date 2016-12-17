// import { enabledProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

// Extende o Obserable para o app
import "rxjs/Rx";

 // enabledProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);