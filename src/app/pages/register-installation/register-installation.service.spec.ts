import { TestBed } from '@angular/core/testing';

import { RegisterInstallationService } from './register-installation.service';

describe('RegisterInstallationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterInstallationService = TestBed.get(RegisterInstallationService);
    expect(service).toBeTruthy();
  });
});
