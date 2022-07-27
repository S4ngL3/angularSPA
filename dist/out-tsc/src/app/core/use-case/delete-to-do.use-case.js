import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let DeleteToDoUseCase = class DeleteToDoUseCase {
    constructor(interaction, repository, listUseCase) {
        this.interaction = interaction;
        this.repository = repository;
        this.listUseCase = listUseCase;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(yield this.interaction.confirm('Soll die Aufgabe gelöscht werden?'))) {
                    return;
                }
                yield this.repository.deleteToDo(id);
                yield this.listUseCase.execute();
            }
            catch (e) {
                console.error('Failed to delete a todo: %o', e);
                throw e;
            }
        });
    }
};
DeleteToDoUseCase = __decorate([
    Injectable({ providedIn: 'root' })
], DeleteToDoUseCase);
export { DeleteToDoUseCase };
//# sourceMappingURL=delete-to-do.use-case.js.map