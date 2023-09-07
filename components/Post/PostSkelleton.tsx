import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const PostSkelleton: FC = (props) => (
  <ContentLoader
    className="post"
    speed={2}
    width={750}
    height={506}
    viewBox="0 0 750 506"
    backgroundColor="rgba(0, 0, 0, 0.6)"
    foregroundColor="#f2f2f2"
    {...props}
  >
    <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="6" ry="6" width="750" height="315" />
    <rect x="20" y="335" rx="15" ry="15" width="30" height="30" />
    <rect x="65" y="335" rx="0" ry="0" width="68" height="10" />
    <rect x="65" y="355" rx="0" ry="0" width="78" height="5" />
    <rect x="65" y="378" rx="0" ry="0" width="355" height="30" />
    <rect x="65" y="438" rx="0" ry="0" width="181" height="15" />
    <rect x="65" y="474" rx="0" ry="0" width="124" height="17" />
  </ContentLoader>
);

export default PostSkelleton;
