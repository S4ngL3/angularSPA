import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRepository } from '../core/repository';
import { TodoRepositoryService } from './repository/todo-repository.service';
let DataModule = class DataModule {
};
DataModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule
        ],
        providers: [
            { provide: TodoRepository, useClass: TodoRepositoryService }
        ]
    })
], DataModule);
export { DataModule };
//# sourceMappingURL=data.module.js.map