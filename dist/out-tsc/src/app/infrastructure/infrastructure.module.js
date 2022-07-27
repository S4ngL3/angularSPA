import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionService } from './service/interaction.service';
import * as CoreService from '../core/service';
let InfrastructureModule = class InfrastructureModule {
};
InfrastructureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule
        ],
        providers: [
            { provide: CoreService.InteractionService, useClass: InteractionService },
        ]
    })
], InfrastructureModule);
export { InfrastructureModule };
//# sourceMappingURL=infrastructure.module.js.map