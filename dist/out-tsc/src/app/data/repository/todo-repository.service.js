import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { TodoRepository } from '../../core/repository';
let TodoRepositoryService = class TodoRepositoryService extends TodoRepository {
    constructor() {
        super(...arguments);
        this.toDos = [];
    }
    createToDo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            this.toDos.push(todo);
            return this.toDos[this.toDos.length - 1];
        });
    }
    deleteToDo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.toDos[id] === null) {
                throw new Error('Diese Aufgabe existiert nicht.');
            }
            this.toDos.splice(id, 1);
            return;
        });
    }
    editToDo(id, todo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.toDos[id] === null) {
                throw new Error('Diese Aufgabe existiert nicht.');
            }
            this.toDos[id] = todo;
            return this.toDos[id];
        });
    }
    getAllToDos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.toDos;
        });
    }
};
TodoRepositoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TodoRepositoryService);
export { TodoRepositoryService };
//# sourceMappingURL=todo-repository.service.js.map