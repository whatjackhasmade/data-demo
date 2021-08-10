import { Container, Row, Col } from "react-grid-system";
import Link from "next/link";
import Head from "next/head";
import { useFormik } from "formik";

import { saveJSON } from "data-interchange";
import { slugify } from "data-interchange";
import { useLocalStorage } from "data-interchange";

import content from "../contacts.json";

import type { Contact } from "data-interchange";

const contactsHardcoded: Contact[] = content;

// Atoms
import { Skeleton } from "data-interchange";

// Templates
import { TemplateBase } from "data-interchange";

const Body = (props: { contact: Contact }) => {
	// Get the contacts available in local storage
	const [contacts, setContacts] = useLocalStorage<Contact[]>(`contacts`);

	// Name that value so we know these are the local contacts
	const localContacts: Contact[] = contacts;

	// Determine if the contact we are viewing is available as a local contact
	const localContact = localContacts?.find(
		(c) => props?.contact?.email === c?.email
	);

	// If we have a local contact, use that in favour of the one generated from JSON file
	const contact: Contact = localContact ? localContact : props?.contact;

	// Get the contact named properties from contact object
	const { name, street, email, phone, age } = contact;

	// Initialize Formik
	const formik = useFormik({
		// The initial values in the form will be based on the contact data at the start of the render
		initialValues: {
			...contact,
		},

		// On submit...
		onSubmit: (values) => {
			// Go over each of the local contacts
			const newValues = localContacts.map((c) => {
				// If the contact in the local records doesn't match the UUID (email)
				const isUpdated = c?.email === email;
				// Then return the original contact
				if (!isUpdated) return c;

				// Otherwise return the form values
				return { ...values };
			});

			// Set the updated contact values to local storage
			setContacts(newValues);

			// Save the new values (array) as a JSON file
			saveJSON("updated-contacts.json", JSON.stringify(newValues));
		},
	});

	// Destructure formik helpers
	const { handleChange, handleSubmit, values } = formik;

	return (
		<TemplateBase>
			<Head>
				<title>{name}</title>
			</Head>

			<Container>
				<Row>
					<Col sm={6}>
						<Link href="/">All contacts</Link>
						<h1>{name}</h1>
						<ul>
							<li>
								Email: <a href={`mailto:${email}`}>{email}</a>
							</li>
							<li>
								Phone: <a href={`tel:${phone}`}>{phone}</a>
							</li>
							<li>Age: {String(age)}</li>
							<li>{street}</li>
						</ul>
					</Col>
					<Col sm={6}>
						<form onSubmit={handleSubmit}>
							<fieldset>
								<label htmlFor="name">First Name</label>
								<input
									id="name"
									name="name"
									type="text"
									onChange={handleChange}
									value={values.name}
								/>
								<label htmlFor="email">Email Address</label>
								<input
									disabled
									id="email"
									name="email"
									type="email"
									onChange={handleChange}
									value={values.email}
								/>
								<label htmlFor="phone">Phone Number</label>
								<input
									id="phone"
									name="phone"
									type="text"
									onChange={handleChange}
									value={values.phone}
								/>
								<label htmlFor="age">Age</label>
								<input
									id="age"
									name="age"
									type="number"
									min="1"
									max="140"
									onChange={handleChange}
									value={values.age}
								/>
								<label htmlFor="street">Street</label>
								<input
									id="street"
									name="street"
									type="text"
									onChange={handleChange}
									value={values.street}
								/>
								<button type="submit">
									Update and save all contacts as JSON file
								</button>
							</fieldset>
						</form>
					</Col>
				</Row>
			</Container>
		</TemplateBase>
	);
};

export default function Page(props: { contact: Contact }) {
	const { contact } = props;

	if (!contact) return <Skeleton />;
	return <Body {...props} />;
}

export async function getStaticPaths() {
	const paths = contactsHardcoded.map((contact) => {
		const slug = slugify(contact?.name);
		return { params: { slug: [slug] } };
	});
	return { paths, fallback: true };
}

export async function getStaticProps(props: { params: { slug: string[] } }) {
	const { params } = props;
	const slug = params.slug;

	const currentPath = `${slug.join("/")}`;

	const contact = contactsHardcoded.find(
		(contact) => slugify(contact?.name) === currentPath
	) || {
		notfound: true,
	};

	const pageProps = { props: { contact } };
	return pageProps;
}
