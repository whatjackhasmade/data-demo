import { css } from "styled-components";

const exportedCSS = css`
	/* Casts all theme provider values as CSS variables */
	:root {
		${(props) => {
			return Object.entries(props.theme)
				.filter(([_, v]) => typeof v === "string" || typeof v === "number")
				.map(([k, v]) => `--${k}: ${v};`);
			// You can convert to kebabCase if need.
			// .map(([k, v]) => `--${_.kebabCase(k)}: ${v};`)
		}}
	}
`;

export default exportedCSS;
