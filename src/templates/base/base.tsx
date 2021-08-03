import React from "react";

// Particles
import contactsJSON from "../../contacts.json";
import { useLocalStorage } from "data-interchange";

// Atoms
import { Skeleton } from "data-interchange";

// Molecules
import { ErrorMessage } from "data-interchange";

// Organisms
import { Footer } from "data-interchange";
import { Header } from "data-interchange";

const defaultContacts: Contact[] = contactsJSON;

const Skeletons: React.FC = () => {
	return (
		<>
			{[...Array(9)].map((_, i) => (
				<Skeleton height="100" key={`contact-skeleton-${i}`} />
			))}
		</>
	);
};

const TemplateBase = (props) => {
	const { children } = props;

	const [contacts, setContacts] = useLocalStorage<any>(`contacts`, []);
	const localContacts: Contact[] = contacts;

	const hasLocal = localContacts?.length > 0;
	const hasLocalDefault = defaultContacts?.length > 0;

	const hasNeitherContacts = !hasLocal && !hasLocalDefault;
	if (hasNeitherContacts)
		return <ErrorMessage error="No contacts were found in local JSON file" />;

	if (!hasLocal) {
		setContacts(defaultContacts);
		return <Skeletons />;
	}

	return (
		<>
			<Header />
			<main>
				<div className="page__wrapper">{children}</div>
			</main>
			<Footer />
		</>
	);
};

export { TemplateBase };
