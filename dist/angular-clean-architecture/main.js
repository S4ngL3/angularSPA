(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/PV4":
/*!****************************************!*\
  !*** ./src/app/core/use-case/index.ts ***!
  \****************************************/
/*! exports provided: ShowToDoListPresenter, ShowToDoListUseCase, EditToDoRequest, EditToDoUseCase, DeleteToDoUseCase, AddToDoUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-to-do-list.use-case */ "gxWz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowToDoListPresenter", function() { return _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_0__["ShowToDoListPresenter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowToDoListUseCase", function() { return _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_0__["ShowToDoListUseCase"]; });

/* harmony import */ var _edit_to_do_use_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-to-do.use-case */ "DVjU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditToDoRequest", function() { return _edit_to_do_use_case__WEBPACK_IMPORTED_MODULE_1__["EditToDoRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditToDoUseCase", function() { return _edit_to_do_use_case__WEBPACK_IMPORTED_MODULE_1__["EditToDoUseCase"]; });

/* harmony import */ var _delete_to_do_use_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-to-do.use-case */ "KUQS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteToDoUseCase", function() { return _delete_to_do_use_case__WEBPACK_IMPORTED_MODULE_2__["DeleteToDoUseCase"]; });

/* harmony import */ var _add_to_do_use_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-to-do.use-case */ "kz0+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddToDoUseCase", function() { return _add_to_do_use_case__WEBPACK_IMPORTED_MODULE_3__["AddToDoUseCase"]; });







/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sangle/Documents/Projects/angular/angular-clean-architecture/src/main.ts */"zUnb");


/***/ }),

/***/ "4+AT":
/*!*****************************************************!*\
  !*** ./src/app/core/service/interaction.service.ts ***!
  \*****************************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
class InteractionService {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DVjU":
/*!******************************************************!*\
  !*** ./src/app/core/use-case/edit-to-do.use-case.ts ***!
  \******************************************************/
/*! exports provided: EditToDoRequest, EditToDoUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditToDoRequest", function() { return EditToDoRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditToDoUseCase", function() { return EditToDoUseCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity */ "Ydjo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "sAgM");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repository */ "ItQJ");
/* harmony import */ var _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-to-do-list.use-case */ "gxWz");







class EditToDoRequest {
    constructor(id, todo, onlyToggleDone = false) {
        this.id = id;
        this.todo = todo;
        this.onlyToggleDone = onlyToggleDone;
    }
}
class EditToDoUseCase {
    constructor(interaction, repository, listUseCase) {
        this.interaction = interaction;
        this.repository = repository;
        this.listUseCase = listUseCase;
    }
    execute(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const todo = new _entity__WEBPACK_IMPORTED_MODULE_1__["ToDo"](request.todo.description, request.todo.isDone);
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
}
EditToDoUseCase.ɵfac = function EditToDoUseCase_Factory(t) { return new (t || EditToDoUseCase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_repository__WEBPACK_IMPORTED_MODULE_4__["TodoRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_5__["ShowToDoListUseCase"])); };
EditToDoUseCase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EditToDoUseCase, factory: EditToDoUseCase.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditToDoUseCase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"] }, { type: _repository__WEBPACK_IMPORTED_MODULE_4__["TodoRepository"] }, { type: _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_5__["ShowToDoListUseCase"] }]; }, null); })();


/***/ }),

/***/ "E3wC":
/*!****************************************!*\
  !*** ./src/app/core/arch/presenter.ts ***!
  \****************************************/
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return Presenter; });
class Presenter {
    constructor(template) {
        this.template = template;
    }
    reset() {
        const model = new this.template();
        if (this.viewModel == null) {
            this.viewModel = model;
        }
        else {
            Object.assign(this.viewModel, model);
        }
    }
}


/***/ }),

/***/ "ItQJ":
/*!******************************************!*\
  !*** ./src/app/core/repository/index.ts ***!
  \******************************************/
/*! exports provided: TodoRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.repository */ "XMvC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoRepository", function() { return _todo_repository__WEBPACK_IMPORTED_MODULE_0__["TodoRepository"]; });




/***/ }),

/***/ "KUQS":
/*!********************************************************!*\
  !*** ./src/app/core/use-case/delete-to-do.use-case.ts ***!
  \********************************************************/
/*! exports provided: DeleteToDoUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteToDoUseCase", function() { return DeleteToDoUseCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "sAgM");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repository */ "ItQJ");
/* harmony import */ var _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-to-do-list.use-case */ "gxWz");






class DeleteToDoUseCase {
    constructor(interaction, repository, listUseCase) {
        this.interaction = interaction;
        this.repository = repository;
        this.listUseCase = listUseCase;
    }
    execute(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
DeleteToDoUseCase.ɵfac = function DeleteToDoUseCase_Factory(t) { return new (t || DeleteToDoUseCase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repository__WEBPACK_IMPORTED_MODULE_3__["TodoRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_4__["ShowToDoListUseCase"])); };
DeleteToDoUseCase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeleteToDoUseCase, factory: DeleteToDoUseCase.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteToDoUseCase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] }, { type: _repository__WEBPACK_IMPORTED_MODULE_3__["TodoRepository"] }, { type: _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_4__["ShowToDoListUseCase"] }]; }, null); })();


/***/ }),

/***/ "McPw":
/*!************************************************************!*\
  !*** ./src/app/data/repository/todo-repository.service.ts ***!
  \************************************************************/
/*! exports provided: TodoRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRepositoryService", function() { return TodoRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/repository */ "ItQJ");




class TodoRepositoryService extends _core_repository__WEBPACK_IMPORTED_MODULE_2__["TodoRepository"] {
    constructor() {
        super(...arguments);
        this.toDos = [];
    }
    createToDo(todo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.toDos.push(todo);
            return this.toDos[this.toDos.length - 1];
        });
    }
    deleteToDo(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.toDos[id] === null) {
                throw new Error('Diese Aufgabe existiert nicht.');
            }
            this.toDos.splice(id, 1);
            return;
        });
    }
    editToDo(id, todo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.toDos[id] === null) {
                throw new Error('Diese Aufgabe existiert nicht.');
            }
            this.toDos[id] = todo;
            return this.toDos[id];
        });
    }
    getAllToDos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.toDos;
        });
    }
}
TodoRepositoryService.ɵfac = function TodoRepositoryService_Factory(t) { return ɵTodoRepositoryService_BaseFactory(t || TodoRepositoryService); };
TodoRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TodoRepositoryService, factory: TodoRepositoryService.ɵfac, providedIn: 'root' });
const ɵTodoRepositoryService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TodoRepositoryService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodoRepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "MgIx":
/*!*************************************!*\
  !*** ./src/app/data/data.module.ts ***!
  \*************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/repository */ "ItQJ");
/* harmony import */ var _repository_todo_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repository/todo-repository.service */ "McPw");





class DataModule {
}
DataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataModule });
DataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataModule_Factory(t) { return new (t || DataModule)(); }, providers: [
        { provide: _core_repository__WEBPACK_IMPORTED_MODULE_2__["TodoRepository"], useClass: _repository_todo_repository_service__WEBPACK_IMPORTED_MODULE_3__["TodoRepositoryService"] }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    { provide: _core_repository__WEBPACK_IMPORTED_MODULE_2__["TodoRepository"], useClass: _repository_todo_repository_service__WEBPACK_IMPORTED_MODULE_3__["TodoRepositoryService"] }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "MkEm":
/*!***************************************!*\
  !*** ./src/app/core/arch/use-case.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "SsGY":
/*!*****************************************************!*\
  !*** ./src/app/presentation/presentation.module.ts ***!
  \*****************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "XKxg");
/* harmony import */ var _core_use_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/use-case */ "/PV4");
/* harmony import */ var _todo_list_todo_list_presenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list/todo-list.presenter */ "aTnh");






class PresentationModule {
}
PresentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PresentationModule });
PresentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PresentationModule_Factory(t) { return new (t || PresentationModule)(); }, providers: [
        { provide: _core_use_case__WEBPACK_IMPORTED_MODULE_3__["ShowToDoListPresenter"], useClass: _todo_list_todo_list_presenter__WEBPACK_IMPORTED_MODULE_4__["TodoListPresenter"] }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PresentationModule, { declarations: [_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"],
                ],
                providers: [
                    { provide: _core_use_case__WEBPACK_IMPORTED_MODULE_3__["ShowToDoListPresenter"], useClass: _todo_list_todo_list_presenter__WEBPACK_IMPORTED_MODULE_4__["TodoListPresenter"] }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation/todo-list/todo-list.component */ "XKxg");



class AppComponent {
    constructor() {
        this.title = 'todo-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-todo-list");
    } }, directives: [_presentation_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Twjz":
/*!**************************************!*\
  !*** ./src/app/core/entity/to-do.ts ***!
  \**************************************/
/*! exports provided: ToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDo", function() { return ToDo; });
class ToDo {
    constructor(description, isDone = false) {
        this.description = description;
        this.isDone = isDone;
    }
}


/***/ }),

/***/ "W00I":
/*!***************************************************************!*\
  !*** ./src/app/infrastructure/service/interaction.service.ts ***!
  \***************************************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class InteractionService {
    confirm(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return confirm(message);
        });
    }
    enterString(currentValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return prompt('Input:', currentValue);
        });
    }
}
InteractionService.ɵfac = function InteractionService_Factory(t) { return new (t || InteractionService)(); };
InteractionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InteractionService, factory: InteractionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "XKxg":
/*!***************************************************************!*\
  !*** ./src/app/presentation/todo-list/todo-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_use_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/use-case */ "/PV4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TodoListComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoListComponent_li_3_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const id_r2 = ctx.index; const todo_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setToDoState(id_r2, todo_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_li_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const id_r2 = ctx.index; const todo_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editToDo(id_r2, todo_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_li_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const id_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteToDo(id_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", todo_r1.isDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", todo_r1.description, " ");
} }
class TodoListComponent {
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
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_use_case__WEBPACK_IMPORTED_MODULE_1__["ShowToDoListUseCase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_use_case__WEBPACK_IMPORTED_MODULE_1__["ShowToDoListPresenter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_use_case__WEBPACK_IMPORTED_MODULE_1__["AddToDoUseCase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_use_case__WEBPACK_IMPORTED_MODULE_1__["EditToDoUseCase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_use_case__WEBPACK_IMPORTED_MODULE_1__["DeleteToDoUseCase"])); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], decls: 4, vars: 1, consts: [[3, "click"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "change"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Template_button_click_0_listener() { return ctx.addToDo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aufgabe hinzuf\u00FCgen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoListComponent_li_3_Template, 8, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.presenter.viewModel.toDos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.css']
            }]
    }], function () { return [{ type: _core_use_case__WEBPACK_IMPORTED_MODULE_1__["ShowToDoListUseCase"] }, { type: _core_use_case__WEBPACK_IMPORTED_MODULE_1__["ShowToDoListPresenter"] }, { type: _core_use_case__WEBPACK_IMPORTED_MODULE_1__["AddToDoUseCase"] }, { type: _core_use_case__WEBPACK_IMPORTED_MODULE_1__["EditToDoUseCase"] }, { type: _core_use_case__WEBPACK_IMPORTED_MODULE_1__["DeleteToDoUseCase"] }]; }, null); })();


/***/ }),

/***/ "XMvC":
/*!****************************************************!*\
  !*** ./src/app/core/repository/todo.repository.ts ***!
  \****************************************************/
/*! exports provided: TodoRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRepository", function() { return TodoRepository; });
class TodoRepository {
}


/***/ }),

/***/ "Ydjo":
/*!**************************************!*\
  !*** ./src/app/core/entity/index.ts ***!
  \**************************************/
/*! exports provided: ToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do */ "Twjz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToDo", function() { return _to_do__WEBPACK_IMPORTED_MODULE_0__["ToDo"]; });




/***/ }),

/***/ "YgMz":
/*!************************************!*\
  !*** ./src/app/core/arch/index.ts ***!
  \************************************/
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-case */ "MkEm");
/* empty/unused harmony star reexport *//* harmony import */ var _presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter */ "E3wC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return _presenter__WEBPACK_IMPORTED_MODULE_1__["Presenter"]; });





/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentation/presentation.module */ "SsGY");
/* harmony import */ var _data_data_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/data.module */ "MgIx");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infrastructure/infrastructure.module */ "iMOI");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _data_data_module__WEBPACK_IMPORTED_MODULE_4__["DataModule"],
            _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_3__["PresentationModule"],
            _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_5__["InfrastructureModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _data_data_module__WEBPACK_IMPORTED_MODULE_4__["DataModule"],
        _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_3__["PresentationModule"],
        _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_5__["InfrastructureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _data_data_module__WEBPACK_IMPORTED_MODULE_4__["DataModule"],
                    _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_3__["PresentationModule"],
                    _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_5__["InfrastructureModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aTnh":
/*!***************************************************************!*\
  !*** ./src/app/presentation/todo-list/todo-list.presenter.ts ***!
  \***************************************************************/
/*! exports provided: TodoListPresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListPresenter", function() { return TodoListPresenter; });
/* harmony import */ var _core_use_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/use-case */ "/PV4");
/* harmony import */ var _todo_list_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.view-model */ "gfy8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TodoListPresenter extends _core_use_case__WEBPACK_IMPORTED_MODULE_0__["ShowToDoListPresenter"] {
    constructor() {
        super(_todo_list_view_model__WEBPACK_IMPORTED_MODULE_1__["TodoListViewModel"]);
    }
    displayToDos(toDos) {
        this.viewModel.toDos = toDos;
    }
}
TodoListPresenter.ɵfac = function TodoListPresenter_Factory(t) { return new (t || TodoListPresenter)(); };
TodoListPresenter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TodoListPresenter, factory: TodoListPresenter.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TodoListPresenter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gfy8":
/*!****************************************************************!*\
  !*** ./src/app/presentation/todo-list/todo-list.view-model.ts ***!
  \****************************************************************/
/*! exports provided: TodoListViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListViewModel", function() { return TodoListViewModel; });
class TodoListViewModel {
    constructor() {
        this.toDos = null;
    }
}


/***/ }),

/***/ "gxWz":
/*!***********************************************************!*\
  !*** ./src/app/core/use-case/show-to-do-list.use-case.ts ***!
  \***********************************************************/
/*! exports provided: ShowToDoListPresenter, ShowToDoListUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowToDoListPresenter", function() { return ShowToDoListPresenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowToDoListUseCase", function() { return ShowToDoListUseCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _arch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arch */ "YgMz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repository */ "ItQJ");





class ShowToDoListPresenter extends _arch__WEBPACK_IMPORTED_MODULE_1__["Presenter"] {
}
class ShowToDoListUseCase {
    constructor(presenter, repository) {
        this.presenter = presenter;
        this.repository = repository;
    }
    execute(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
ShowToDoListUseCase.ɵfac = function ShowToDoListUseCase_Factory(t) { return new (t || ShowToDoListUseCase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ShowToDoListPresenter), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_repository__WEBPACK_IMPORTED_MODULE_3__["TodoRepository"])); };
ShowToDoListUseCase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ShowToDoListUseCase, factory: ShowToDoListUseCase.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShowToDoListUseCase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ShowToDoListPresenter }, { type: _repository__WEBPACK_IMPORTED_MODULE_3__["TodoRepository"] }]; }, null); })();


/***/ }),

/***/ "iMOI":
/*!*********************************************************!*\
  !*** ./src/app/infrastructure/infrastructure.module.ts ***!
  \*********************************************************/
/*! exports provided: InfrastructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureModule", function() { return InfrastructureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/interaction.service */ "W00I");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/service */ "sAgM");





class InfrastructureModule {
}
InfrastructureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InfrastructureModule });
InfrastructureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InfrastructureModule_Factory(t) { return new (t || InfrastructureModule)(); }, providers: [
        { provide: _core_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"], useClass: _service_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfrastructureModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfrastructureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    { provide: _core_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"], useClass: _service_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kz0+":
/*!*****************************************************!*\
  !*** ./src/app/core/use-case/add-to-do.use-case.ts ***!
  \*****************************************************/
/*! exports provided: AddToDoUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToDoUseCase", function() { return AddToDoUseCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity */ "Ydjo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "sAgM");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repository */ "ItQJ");
/* harmony import */ var _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-to-do-list.use-case */ "gxWz");







class AddToDoUseCase {
    constructor(interaction, repository, listUseCase) {
        this.interaction = interaction;
        this.repository = repository;
        this.listUseCase = listUseCase;
    }
    execute(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const description = yield this.interaction.enterString();
                if (description == null || description.trim() === '') {
                    return;
                }
                const todo = new _entity__WEBPACK_IMPORTED_MODULE_1__["ToDo"](description);
                yield this.repository.createToDo(todo);
                yield this.listUseCase.execute();
            }
            catch (e) {
                console.error('Failed to create a todo: %o', e);
                throw e;
            }
        });
    }
}
AddToDoUseCase.ɵfac = function AddToDoUseCase_Factory(t) { return new (t || AddToDoUseCase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_repository__WEBPACK_IMPORTED_MODULE_4__["TodoRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_5__["ShowToDoListUseCase"])); };
AddToDoUseCase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AddToDoUseCase, factory: AddToDoUseCase.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AddToDoUseCase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"] }, { type: _repository__WEBPACK_IMPORTED_MODULE_4__["TodoRepository"] }, { type: _show_to_do_list_use_case__WEBPACK_IMPORTED_MODULE_5__["ShowToDoListUseCase"] }]; }, null); })();


/***/ }),

/***/ "sAgM":
/*!***************************************!*\
  !*** ./src/app/core/service/index.ts ***!
  \***************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interaction.service */ "4+AT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return _interaction_service__WEBPACK_IMPORTED_MODULE_0__["InteractionService"]; });




/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map