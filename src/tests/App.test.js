import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../components/App';
import renderer from 'react-test-renderer';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Renders without crashing', () => {
  ReactDOM.render(<App />, container);
});

it('Renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders Welcome to your app.', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  expect(container.querySelector('#test').innerHTML).toBe('Welcome to your app.')
});