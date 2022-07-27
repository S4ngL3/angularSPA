import { __awaiter, __decorate } from "tslib";
import { ToDo } from '../entity';
import { Injectable } from '@angular/core';
export class EditToDoRequest {
    constructor(id, todo, onlyToggleDone = false) {
        this.id = id;
        this.todo = todo;
        this.onlyToggleDone = onlyToggleDone;
    }
}
let EditToDoUseCase = class EditToDoUseCase {
    constructor(interaction, repository, listUseCase) {
        this.interaction = interaction;
        this.repository = repository;
        this.listUseCase = listUseCase;
    }
    execute(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todo = new ToDo(request.todo.description, request.todo.isDone);
                if (request.onlyToggleDone) {
                    todo.isDone = !todo.isDone;
                }
                else {
                    do {
                        todo.description = yield this.interaction.enterString(todo.description);
                        if (todo.description == null) {
                            return;
                        }
                    } while (todo.description.trim() == '');
                }
                yield this.repository.editToDo(request.id, todo);
                yield this.listUseCase.execute();
            }
            catch (e) {
                console.error('Failed to edit a todo: %o', e);
                throw e;
            }
        });
    }
};
EditToDoUseCase = __decorate([
    Injectable({ providedIn: 'root' })
], EditToDoUseCase);
export { EditToDoUseCase };
//# sourceMappingURL=edit-to-do.use-case.js.map