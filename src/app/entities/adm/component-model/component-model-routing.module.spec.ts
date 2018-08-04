import { ComponentModelRoutingModule } from './component-model-routing.module';

describe('ComponentModelRoutingModule', () => {
  let componentModelRoutingModule: ComponentModelRoutingModule;

  beforeEach(() => {
    componentModelRoutingModule = new ComponentModelRoutingModule();
  });

  it('should create an instance', () => {
    expect(componentModelRoutingModule).toBeTruthy();
  });
});
