import { OnInit } from "@angular/core";
import { TaskService, Tasks } from "../shared/services/task/task.service";
export declare class TaskComponent implements OnInit {
    private taskService;
    tasks: Tasks[];
    constructor(taskService: TaskService);
    ngOnInit(): void;
}
