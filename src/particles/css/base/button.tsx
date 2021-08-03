import { css } from "styled-components";

const exportedCSS = css`
	button,
	input[type="submit"] {
		display: inline-flex;
		padding: 16px 24px;

		background-color: var(--primary);
		border: none;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
		color: var(--white);
		cursor: pointer;
		font-weight: 700;
		line-height: 1;
		outline: none;
		text-decoration: none;
		transition: all 0.15s ease;
		white-space: nowrap;

		&:hover {
			transform: translateY(-1px);
		}

		&:focus,
		&:hover {
			box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
				0 3px 6px rgba(0, 0, 0, 0.08);
		}
	}

	button[type="submit"] {
		margin-top: 24px;
	}
`;

export default exportedCSS;
