import { __awaiter, __decorate } from "tslib";
import { Presenter } from '../arch';
import { Injectable } from '@angular/core';
export class ShowToDoListPresenter extends Presenter {
}
let ShowToDoListUseCase = class ShowToDoListUseCase {
    constructor(presenter, repository) {
        this.presenter = presenter;
        this.repository = repository;
    }
    execute(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allToDos = yield this.repository.getAllToDos();
                this.presenter.displayToDos(allToDos);
            }
            catch (e) {
                console.error('Failed to load or present to dos: %o', e);
                throw e;
            }
        });
    }
};
ShowToDoListUseCase = __decorate([
    Injectable({ providedIn: 'root' })
], ShowToDoListUseCase);
export { ShowToDoListUseCase };
//# sourceMappingURL=show-to-do-list.use-case.js.map