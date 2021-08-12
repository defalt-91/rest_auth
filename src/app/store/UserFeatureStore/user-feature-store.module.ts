import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './effects/user-feature-store.effects';
import {userReducer,userFeatureKey} from './reducers/user-feature-store.reducer';
import {StoreModule} from "@ngrx/store";


@NgModule({
  imports: [
    StoreModule.forFeature(userFeatureKey,userReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserFeatureStoreModule {
}
