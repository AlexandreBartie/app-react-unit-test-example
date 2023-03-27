import React from 'react';
import { render, screen } from '@testing-library/react';
import { WebButton } from '../webButton';

it('check render', async () => {

    render(<WebButton/>);

    const linkElement = screen.logTestingPlaygroundURL

    expect(linkElement).not.toBeNull()

})

it('check label', async () => {

    const tag = 'Hello'

    render(<WebButton label={tag}></WebButton>);

    const linkElement = await screen.findByText(tag);

    expect(linkElement).not.toBeNull()

})

it('check testId', async () => {

    render(<WebButton label='Hello'></WebButton>);

    const linkElement = await screen.findByTestId('button');

    expect(linkElement).not.toBeNull()

});


