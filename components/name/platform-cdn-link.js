import { PLATFORM_CDN_NAME } from '../../lib/constants';

export default function PlatformCdnLink({ href, children, ...props }) {
  return (
    <a href="https://zeit.co/smart-cdn" rel="noopener noreferrer" target="_blank" {...props}>
      {PLATFORM_CDN_NAME}
    </a>
  );
}
