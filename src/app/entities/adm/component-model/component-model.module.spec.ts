import { ComponentModelModule } from './component-model.module';

describe('ComponentModelModule', () => {
  let componentModelModule: ComponentModelModule;

  beforeEach(() => {
    componentModelModule = new ComponentModelModule();
  });

  it('should create an instance', () => {
    expect(componentModelModule).toBeTruthy();
  });
});
