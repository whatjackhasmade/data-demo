import "nprogress/nprogress.css";

import * as React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "data-interchange";
import { ThemeDefault } from "data-interchange";

import type { AppProps } from "next/app";

const TopProgressBar = dynamic(
	() => {
		return import("../organisms/progress");
	},
	{ ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<TopProgressBar />
			<ThemeProvider theme={ThemeDefault}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyApp;
