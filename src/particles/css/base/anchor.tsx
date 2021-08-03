import { css } from "styled-components";

const exportedCSS = css`
	a {
		position: relative;

		color: var(--primary);
		transition: 0.2s color ease;
		will-change: color;

		&:active,
		&:focus,
		&:hover {
			color: var(--primaryDark);

			text-decoration: none;
		}
	}
`;

export default exportedCSS;
