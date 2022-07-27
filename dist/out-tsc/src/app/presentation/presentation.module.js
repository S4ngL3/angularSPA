import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ShowToDoListPresenter } from '../core/use-case';
import { TodoListPresenter } from './todo-list/todo-list.presenter';
let PresentationModule = class PresentationModule {
};
PresentationModule = __decorate([
    NgModule({
        declarations: [
            TodoListComponent,
        ],
        imports: [
            CommonModule,
        ],
        exports: [
            TodoListComponent,
        ],
        providers: [
            { provide: ShowToDoListPresenter, useClass: TodoListPresenter }
        ]
    })
], PresentationModule);
export { PresentationModule };
//# sourceMappingURL=presentation.module.js.map