import Link from "next/link";
import { slugify } from "data-interchange";
import { useLocalStorage } from "data-interchange";

// Templates
import { TemplateBase } from "data-interchange";

import type { Contact } from "data-interchange";

const HomepageContents = () => {
	const [contacts] = useLocalStorage<any>(`contacts`);
	const localContacts: Contact[] = contacts;
	const hasLocal = localContacts?.length > 0;

	return (
		<>
			<h1>View a contact</h1>
			<p>
				Note: All contact records are first sourced from a local JSON file. Any
				edits made to the records after first load are saved in localStorage
				state and will be downloaded when you update a record using a form.
			</p>
			<ul>
				{hasLocal &&
					localContacts.map((contact) => {
						const name = contact?.name;
						const slug = slugify(name);
						const key = `contact-${contact.email}`;

						return (
							<li key={key}>
								<Link href="[...slug]" as={slug}>
									<a>{name}</a>
								</Link>
							</li>
						);
					})}
			</ul>
		</>
	);
};

const HomepagePage = () => {
	return (
		<TemplateBase>
			<HomepageContents />
		</TemplateBase>
	);
};

export default HomepagePage;
