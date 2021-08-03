import { css } from "styled-components";

import { device } from "data-interchange";

const exportedCSS = css`
	/* Common base styles for the site */
	img,
	svg,
	video {
		display: block;
		max-width: 100%;
	}

	figure {
		margin: 32px 0;
	}

	figure figcaption,
	figcaption {
		padding: 8px;

		font-size: var(--sizeSmall);
		font-weight: var(--weightLight);
		text-align: center;

		@media ${device?.sm} {
			font-size: 1.8rem;
		}
	}

	.wp-block-image {
		margin-left: auto;
		margin-right: auto;
	}
`;

export default exportedCSS;
