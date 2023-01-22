import { TestBed } from '@angular/core/testing';

import { CommentsServService } from './comments-serv.service';

describe('CommentsServService', () => {
  let service: CommentsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
