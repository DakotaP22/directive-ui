import { TestBed } from '@angular/core/testing';

import { DirectiveUiService } from './directive-ui.service';

describe('DirectiveUiService', () => {
  let service: DirectiveUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectiveUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
