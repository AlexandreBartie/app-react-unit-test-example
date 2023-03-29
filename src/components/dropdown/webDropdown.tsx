import { useState } from 'react';

type IDropdown = {
  label?: string;
  options?: string[];
  onSelect?: (option: string) => void;
};

export function WebDropdown(props: IDropdown) {
  const { label = 'dropdown', options } = props;

  const [isOpen, setIsOpen] = useState(false);

  function clickButton() {
    setIsOpen(!isOpen);
  }

  function clickSelect(item: string) {
    if (props.onSelect) {
      props.onSelect(item);
      setIsOpen(false);
    }
  }

  return (
    <div data-testid="dropdown" className="dropdown-style">
      <button data-testid="dropdown-button" onClick={clickButton}>
        {label}
      </button>
      {isOpen && (
        <ul data-testid="dropdown-list">
          {options?.map((item) => (
            <li
              data-testid="dropdown-data"
              key={item}
              onClick={() => clickSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
