// General imports
import { expect } from 'chai';
import { step } from 'mocha-steps';

// Components and helpers
import Renderer from '../../../../client/testHelpers/Renderer';
import routes from '../../../../client/app/Routes';

describe('User UI works', () => {
  const renderer = new Renderer({});
  let app;
  let content;

  step('User page renders on mount', () => {
    app = renderer.mount(routes);
    renderer.history.push('/profile');
    content = app.find('#content');
    expect(content).to.not.be.empty;
  });
});