import { render, screen } from '../../../react-test-unit'

import { WebDropdown } from '../webDropdown';

it('check render', async () => {
  render(<WebDropdown />);

  const linkElement = screen.logTestingPlaygroundURL;

  expect(linkElement).not.toBeNull();
});
