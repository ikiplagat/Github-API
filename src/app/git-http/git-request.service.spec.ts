import { TestBed } from '@angular/core/testing';

import { GitRequestService } from './git-request.service';

describe('GitRequestService', () => {
  let service: GitRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
