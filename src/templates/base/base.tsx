import Link from "next/link";
import React from "react";
import content from "../../../contacts.json";

import { slugify } from "../..";

const contacts: Contact[] = content;

const Base = (props) => {
	const { children } = props;

	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link href="/">
								<a>Homepage</a>
							</Link>
						</li>
						{contacts.map((contact) => {
							const name = contact?.name;
							const slug = slugify(name);

							return (
								<li key={slug}>
									<Link href="[...slug]" as={slug}>
										<a>{name}</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
};

export { Base };
