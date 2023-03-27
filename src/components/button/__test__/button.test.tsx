import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { WebButton } from '../webButton';

it('check render', async () => {
  render(<WebButton />);

  const linkElement = screen.logTestingPlaygroundURL;

  expect(linkElement).not.toBeNull();
});

it('check label', async () => {
  const tag = 'Hello';

  render(<WebButton label={tag}></WebButton>);

  const linkElement = await screen.findByText(tag);

  expect(linkElement).not.toBeNull();
});

it('check testId', async () => {
  render(<WebButton label="Hello"></WebButton>);

  const linkElement = await screen.findByTestId('button');

  expect(linkElement).not.toBeNull();
});

it('check tree', async () => {
  const tree = renderer.create(<WebButton label="HMasterello"></WebButton>);

  expect(tree).toMatchSnapshot();

 
});

it('check master', async () => {
    const z = renderer.create(<WebButton label="HMasterello"></WebButton>);
  
    expect(z).toMatchSnapshot();
  
    const w = renderer.create(<WebButton label="Deise"></WebButton>);
  
    expect(w).toMatchSnapshot();

  });