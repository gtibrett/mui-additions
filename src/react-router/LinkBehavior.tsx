import {forwardRef} from 'react';
import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom';

const LinkBehavior = forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(({href, ...other}, ref) => <RouterLink ref={ref} to={href} {...other} />);

export default LinkBehavior;