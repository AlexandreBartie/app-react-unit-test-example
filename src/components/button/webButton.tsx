import React from 'react';
import './webButton.css'

type IButton = { label?: string };

export function WebButton(props: IButton) {

  const { label = 'button' } = props;

  return (
    <div data-testid="button" className="button-style">
      {label}
    </div>
  );
}
