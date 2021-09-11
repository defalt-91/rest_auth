import * as fromUI from 'src/app/store/ui/ui.actions';

describe('uIUIs', () => {
  it('should return an action', () => {
    expect(fromUI.uIUIs().type).toBe('[UI] UI UIs');
  });
});
