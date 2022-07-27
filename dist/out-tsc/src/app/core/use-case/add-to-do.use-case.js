import { __awaiter, __decorate } from "tslib";
import { ToDo } from '../entity';
import { Injectable } from '@angular/core';
let AddToDoUseCase = class AddToDoUseCase {
    constructor(interaction, repository, listUseCase) {
        this.interaction = interaction;
        this.repository = repository;
        this.listUseCase = listUseCase;
    }
    execute(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const description = yield this.interaction.enterString();
                if (description == null || description.trim() === '') {
                    return;
                }
                const todo = new ToDo(description);
                yield this.repository.createToDo(todo);
                yield this.listUseCase.execute();
            }
            catch (e) {
                console.error('Failed to create a todo: %o', e);
                throw e;
            }
        });
    }
};
AddToDoUseCase = __decorate([
    Injectable({ providedIn: 'root' })
], AddToDoUseCase);
export { AddToDoUseCase };
//# sourceMappingURL=add-to-do.use-case.js.map