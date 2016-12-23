import { Http } from "@angular/http";
export declare class Dashboard {
    arg: Number;
    val: Number;
}
export declare class DashboardService {
    private http;
    constructor(http: Http);
    getDashboard(): any;
}
