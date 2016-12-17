import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";

export class Tasks {
    done: boolean;
    description: string;
}

@Injectable()
export class TaskService {

    constructor( @Inject(Http) private http: Http) { }

    getTasks() {
        return this.http.get("http://localhost:8090/api/task")
            .map((res: Response) => <Tasks[]>res.json());
    }
}

