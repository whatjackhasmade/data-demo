import * as React from 'react';

import StyledSkeleton from './skeleton.styles';

export interface CSSProperties extends React.CSSProperties {
  height?: string | number;
  width?: string | number;
}

type SkeletonProps = {
  className?: string;
} & CSSProperties;

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, width } = props;
  let classList = `skeleton`;
  if (className) classList += ` ${className}`;

  let style = { '--height': `${height}px`, '--width': `${width}px` } as CSSProperties;
  if (!width) style = { '--height': `${height}px`, '--width': `100%` } as CSSProperties;

  return <StyledSkeleton className={classList} style={style} />;
};

Skeleton.defaultProps = {
  height: 100,
  width: '100%',
};

export default Skeleton;
