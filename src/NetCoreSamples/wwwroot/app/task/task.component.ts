import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";

import { TaskService, Tasks } from "../shared/services/task/task.service";

@Component({
    moduleId: module.id,
    templateUrl: "task.component.html"
})
export class TaskComponent implements OnInit {
    tasks: Tasks[];

    constructor( @Inject(TaskService) private taskService: TaskService) { }

    ngOnInit() {
        this.taskService.getTasks()
            .subscribe((tasks: Tasks[]) => this.tasks = tasks);
    }
}

