import { Link } from "react-router-dom";

interface NavigationItemProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
}

export const NavigationItem = (props: NavigationItemProps) => {
  const { children, ...linkProps } = props;

  return (
    <Link className="text-base font-semibold topNav-primary-font" {...linkProps} >
      {children}
    </Link>
  );
};
