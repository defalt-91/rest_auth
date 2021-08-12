import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserFeatureStoreEffects } from './user-feature-store.effects';

describe('UserFeatureStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: UserFeatureStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserFeatureStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserFeatureStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
