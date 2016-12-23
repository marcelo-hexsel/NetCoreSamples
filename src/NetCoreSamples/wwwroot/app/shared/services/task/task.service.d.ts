import { Http } from "@angular/http";
export declare class Tasks {
    done: boolean;
    description: string;
}
export declare class TaskService {
    private http;
    constructor(http: Http);
    getTasks(): any;
}
