import { PLATFORM_NAME } from '../../lib/constants';

export default function PlataformLink({ href, children, ...props }) {
  return (
    <a href={`https://zeit.co${href || ''}`} rel="noopener noreferrer" target="_blank" {...props}>
      {children || (href ? `https://zeit.co${href}` : PLATFORM_NAME)}
    </a>
  );
}
