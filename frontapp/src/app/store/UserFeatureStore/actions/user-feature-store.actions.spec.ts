import * as fromUserFeatureStore from './user-feature-store.actions';

describe('loadUserFeatureStores', () => {
  it('should return an action', () => {
    expect(fromUserFeatureStore.loadUserFeatureStores().type).toBe('[UserFeatureStore] Load UserFeatureStores');
  });
});
