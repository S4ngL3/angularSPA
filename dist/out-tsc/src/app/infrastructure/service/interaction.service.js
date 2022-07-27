import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let InteractionService = class InteractionService {
    confirm(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return confirm(message);
        });
    }
    enterString(currentValue) {
        return __awaiter(this, void 0, void 0, function* () {
            return prompt('Input:', currentValue);
        });
    }
};
InteractionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InteractionService);
export { InteractionService };
//# sourceMappingURL=interaction.service.js.map