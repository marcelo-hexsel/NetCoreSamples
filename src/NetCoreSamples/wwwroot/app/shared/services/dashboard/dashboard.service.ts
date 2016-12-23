import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";

export class Dashboard {
    arg: String;
    val: Number;
}

@Injectable()
export class DashboardService {

    constructor( @Inject(Http) private http: Http) { }

    getDashboardAgents() {
        return this.http.get("http://localhost:8090/api/dashboard")
            .map((res: Response) => <Dashboard[]>res.json());
    }

    getDashboardTasks() {
        return this.http.get("http://localhost:8090/api/dashboard/tasks")
            .map((res: Response) => <Dashboard[]>res.json());
    }
}

