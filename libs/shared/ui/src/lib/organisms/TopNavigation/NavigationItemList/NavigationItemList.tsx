import clsx from 'clsx';

import { ReactComponent as LogoImg } from '../assets/logo.svg';
import { NavigationItem } from '../NavigationItem';

export const NavigationItemList = () => {
    const navigationItems = [
        { to: '/', label: 'Explore' },
        { to: '/', label: 'Assets' },
        { to: '/', label: 'Jobs' },
        { to: '/', label: 'Hire Freelancers' }
    ];

    return (
        <ul className="flex items-center gap-6">
            <li>
                <NavigationItem to="/">
                    <LogoImg title='Behance Logo' className={clsx(
                        'w-20 h-4 fill-inherit'
                    )} />
                </NavigationItem>
            </li>
            {navigationItems.map(({ to, label }) => (
                <li key={label}>
                    <NavigationItem to={to}>
                        {label}
                    </NavigationItem>
                </li>
            ))}
        </ul>
    );
};
