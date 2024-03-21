import { render } from '@testing-library/react';
import { NavigationItem } from './NavigationItem';

describe('NavigationItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationItem to=''>Test</NavigationItem>);
    expect(baseElement).toBeTruthy();
  });
});
