import Head from "next/head";
import { useFormik } from "formik";

import content from "../contacts.json";

const contacts: Contact[] = content;

import { slugify } from "../src";

import { Base } from "../src";

const saveJSON = (filename: string, jsonToWrite: any) => {
	const blob = new Blob([jsonToWrite], { type: "text/json" });
	const link = document.createElement("a");

	link.download = filename;
	link.href = window.URL.createObjectURL(blob);
	link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

	const evt = new MouseEvent("click", {
		view: window,
		bubbles: true,
		cancelable: true,
	});

	link.dispatchEvent(evt);
	link.remove();
};

export default function Page(props: { contact: Contact }) {
	const { contact } = props;
	const { name, street, email, phone, age } = contact;

	const formik = useFormik({
		initialValues: {
			...contact,
		},

		onSubmit: (values) => {
			const newValues = contacts.map((c) => {
				const isUpdated = c?.name === name;
				if (!isUpdated) return c;

				return { ...values };
			});

			saveJSON("updated-contacts.json", JSON.stringify(newValues));
		},
	});
	const { handleChange, handleSubmit, values } = formik;

	return (
		<Base>
			<Head>
				<title>{name}</title>
			</Head>
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
					<button type="submit">Update and Save All</button>
				</fieldset>
			</form>
		</Base>
	);
}

export async function getStaticPaths() {
	const paths = contacts.map((contact) => {
		const slug = slugify(contact?.name);
		return { params: { slug: [slug] } };
	});
	return { paths, fallback: true };
}

export async function getStaticProps(props: { params: { slug: string[] } }) {
	const { params } = props;
	const slug = params.slug;

	const currentPath = `${slug.join("/")}`;

	const contact: Contact[] = contacts.find(
		(contact) => slugify(contact?.name) === currentPath
	) || {
		notfound: true,
	};

	const pageProps = { props: { contact } };
	return pageProps;
}
