export class Presenter {
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
//# sourceMappingURL=presenter.js.map