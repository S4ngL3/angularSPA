import { __decorate } from "tslib";
import { ShowToDoListPresenter } from '../../core/use-case';
import { TodoListViewModel } from './todo-list.view-model';
import { Injectable } from "@angular/core";
let TodoListPresenter = class TodoListPresenter extends ShowToDoListPresenter {
    constructor() {
        super(TodoListViewModel);
    }
    displayToDos(toDos) {
        this.viewModel.toDos = toDos;
    }
};
TodoListPresenter = __decorate([
    Injectable()
], TodoListPresenter);
export { TodoListPresenter };
//# sourceMappingURL=todo-list.presenter.js.map