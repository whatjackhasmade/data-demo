import * as React from "react";
import NextLink from "next/link";

import type { LinkProps } from "next/link";

declare type AllLinkProps = {
	children: React.ReactNode;
} & LinkProps;

// Forward Refs, is useful
const Link = React.forwardRef(
	({ as, children, href, ...props }: AllLinkProps, ref: any) => {
		return (
			<NextLink as={as} href={href}>
				<a {...props} ref={ref}>
					{" "}
					{children}
				</a>
			</NextLink>
		);
	}
);

export { Link };
export default Link;
