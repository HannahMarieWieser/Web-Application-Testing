import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  // ready to test!
});

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">hello world</span>
  );
});

it('renders a span with the text hello world', () => {
  const wrapper = rtl.render(
   <App/>
  );
  const element = wrapper.queryAllByText(/hello world/i)
 // expect(element).toBeInTheDocument();
  expect(element).toBeTruthy();
  expect(element).tobeVisible();
});