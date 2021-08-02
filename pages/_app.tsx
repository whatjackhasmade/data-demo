import Link from "next/link";
import React from "react";
import content from "../contacts.json";
import "../src/styles/mvp.css";

const contacts: Contact[] = content;

import type { AppProps } from "next/app";

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props;

	return <Component {...pageProps} />;
}
