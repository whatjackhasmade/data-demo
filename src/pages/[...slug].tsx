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
	const [contacts, setContacts] = useLocalStorage<Contact[]>(`contacts`);
	const localContacts: Contact[] = contacts;

	const localContact = localContacts?.find(
		(c) => props?.contact?.email === c?.email
	);
	const contact: Contact = localContact ? localContact : props?.contact;
	const { name, street, email, phone, age } = contact;

	const formik = useFormik({
		initialValues: {
			...contact,
		},

		onSubmit: (values) => {
			const newValues = localContacts.map((c) => {
				const isUpdated = c?.name === name;
				if (!isUpdated) return c;

				return { ...values };
			});

			setContacts(newValues);
			saveJSON("updated-contacts.json", JSON.stringify(newValues));
		},
	});
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
