import React from 'react';
import './webButton.css'

type IButton = { label?: string };

export function WebButton(props: IButton) {
  return (
    <div data-testid="button" className="button-style">
      {props.label}
    </div>
  );
}
