/**
 * System Config para o Angular 2
*/
(function (global) {
    System.config({
        paths: {
            // Alias para o caminho no servidor
            "npm:": "node_modules/"
        },
        // map indica para system loader onde buscar as dependencias
        map: {
            app: 'app',

            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            "@angular/common": "npm:@angular/common/bundles/common.umd.js",
            "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
            "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
            "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            "@angular/http": "npm:@angular/http/bundles/http.umd.js",
            "@angular/router": "npm:@angular/router/bundles/router.umd.js",
            "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",

            "rxjs": "npm:rxjs"
        },
        // packages indica para o system loader como carregar quando não há um arquivo e/ou um extensão 
        packages: {
            app: {
                main: "./main.js",
                defaultExtension: "js"
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);