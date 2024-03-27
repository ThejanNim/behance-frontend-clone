import clsx from 'clsx';

import { ReactComponent as LogoImg } from '../assets/logo.svg';
import { NavigationItem } from '../NavigationItem';

export const NavigationItemList = () => {
    const navigationItems = [
        { to: '/explore', label: 'Explore' },
        { to: '/assets', label: 'Assets' },
        { to: '/jobs', label: 'Jobs' },
        { to: '/hire', label: 'Hire Freelancers' }
    ];

    return (
        <ul className="flex items-center h-full gap-6">
            <li className='flex items-center h-full'>
                <NavigationItem to="/">
                    <LogoImg title='Behance Logo' className={clsx(
                        'w-20 h-4 fill-inherit'
                    )} />
                </NavigationItem>
            </li>
            {navigationItems.map(({ to, label }) => (
                <li key={label} className='flex items-center h-full hover:border-b-2 hover:border-black'>
                    <NavigationItem to={to}>
                        {label}
                    </NavigationItem>
                </li>
            ))}
        </ul>
    );
};
