import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TodoListComponent = class TodoListComponent {
    constructor(useCase, presenter, addToDoUseCase, editToDoUseCase, deleteToDoUseCase) {
        this.useCase = useCase;
        this.presenter = presenter;
        this.addToDoUseCase = addToDoUseCase;
        this.editToDoUseCase = editToDoUseCase;
        this.deleteToDoUseCase = deleteToDoUseCase;
        presenter.reset();
        useCase.execute();
    }
    addToDo() {
        this.addToDoUseCase.execute();
    }
    setToDoState(id, todo) {
        this.editToDoUseCase.execute({ id, todo, onlyToggleDone: true });
    }
    editToDo(id, todo) {
        this.editToDoUseCase.execute({ id, todo, onlyToggleDone: false });
    }
    deleteToDo(id) {
        this.deleteToDoUseCase.execute(id);
    }
};
TodoListComponent = __decorate([
    Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.css']
    })
], TodoListComponent);
export { TodoListComponent };
//# sourceMappingURL=todo-list.component.js.map