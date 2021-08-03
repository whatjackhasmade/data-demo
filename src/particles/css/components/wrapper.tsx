import { css } from "styled-components";

const exportedCSS = css`
	body,
	#__next {
		@supports (display: flex) {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		}
	}
`;

export default exportedCSS;
