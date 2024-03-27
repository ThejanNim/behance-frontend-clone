import { useWindowScroll } from 'react-use';
import clsx from 'clsx';

import { NavigationItemList } from './NavigationItemList';

type TopNavigationProps = {
  variant: 'primary' | 'transparent';
};

export const TopNavigation = (props: TopNavigationProps) => {
  const { y } = useWindowScroll();

  return (
    <nav
      className={clsx(
        'fixed w-full top-0 z-[10]',
        props.variant === 'primary' && 'bg-white',
        props.variant === 'transparent' && 'bg-gradient-to-b from-[rgba(0,0,0,.65)] to-transparent'
      )}
    >
      <div
        className={clsx(
          'flex border-b items-center h-[55px] px-6 justify-between',
          props.variant === 'primary' && 'text-[#191919]',
          props.variant === 'transparent' && y > 0 && 'bg-white text-[#191919]',
          props.variant === 'transparent' && y <= 0 && 'text-white bg-transparent fill-white border-[rgba(255,255,255,.2)]',
        )}
      >
        <NavigationItemList />
        <div>Search bar</div>
        <div>Profile</div>
      </div>
    </nav>
  );
};

export default TopNavigation;
