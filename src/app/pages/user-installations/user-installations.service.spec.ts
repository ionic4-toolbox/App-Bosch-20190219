import { TestBed } from '@angular/core/testing';

import { UserInstallationsService } from './user-installations.service';

describe('UserInstallationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInstallationsService = TestBed.get(UserInstallationsService);
    expect(service).toBeTruthy();
  });
});
