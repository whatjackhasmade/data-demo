import { css } from "styled-components";
import { device } from "particles";

import { ButtonReset } from "particles";

const table = css`
	table {
		-moz-font-feature-settings: “tnum”;
		-webkit-font-feature-settings: “tnum”;
		font-feature-settings: “tnum”;
		font-variant-numeric: tabular-nums;
	}

	table:not([role="presentation"]) {
		border-collapse: collapse;
		margin: 24px 0;
		max-width: 100%;
		width: 100%;

		font-size: 1.6rem;
		text-align: left;

		caption {
			padding: var(--spacingDefault);
			background-color: var(--grey200);
			font-weight: 700;
			text-align: left;
		}
	}

	td,
	th {
		padding: 16px;

		&:first-of-type {
			padding-left: 4px;
		}

		&:last-of-type {
			padding-right: 8px;
		}
	}

	td {
		vertical-align: top;
	}

	th {
		padding: 4px 16px;

		background-color: #f5f6fa;
		color: #a3a6b4;
		font-weight: bold;
		white-space: nowrap;
	}

	tr th[scope="row"] {
		letter-spacing: initial;
		text-transform: initial;
	}

	tr {
		background-color: var(--white);
		border-top: 1px solid var(--grey200);
		transition: background-color 0.2s ease;

		&:active,
		&:focus,
		&:hover {
			background-color: #f5f6fa;

			.table__actions {
				opacity: 1;
			}
		}
	}

	.table__actions {
		white-space: nowrap;

		@media ${device?.lg} {
			opacity: 0.2;
			transition: 0.4s all ease;
		}

		button {
			${ButtonReset}
		}

		a,
		button {
			display: inline-block;

			cursor: pointer;

			&:active,
			&:focus,
			&:hover {
				text-decoration: underline;
			}

			+ a,
			+ button {
				margin-left: 8px;
				padding-left: 8px;
				border-left: 1px solid var(--grey200);
			}
		}
	}
`;

export default table;
