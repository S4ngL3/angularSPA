import { TestBed } from '@angular/core/testing';
import { TodoRepositoryService } from './todo-repository.service';
describe('TodoRepositoryService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(TodoRepositoryService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=todo-repository.service.spec.js.map