import { css } from "styled-components";

const input = css`
	form {
		max-width: 560px;
	}

	button,
	input,
	label,
	textarea {
		border-radius: 4px;
	}

	input {
		max-width: 100%;
	}

	input,
	select,
	textarea,
	.dropzone__area {
		border-radius: 2px;
		display: block;
		min-height: 48px;
		padding: var(--spacingSmall);
		position: relative;
		width: 100%;

		background-color: var(--white);
		border: 1px solid var(--black);
		color: var(--black);
		line-height: 1.5;
		transition: border-color 0.25s, box-shadow 0.25s;

		&::placeholder {
			color: var(--grey800);
			opacity: 1;
			text-transform: capitalize;
		}

		&[aria-invalid="true"] {
			background-color: transparent;
			border-color: var(--red);
		}

		&[disabled],
		&[readonly] {
			background-color: var(--grey100);
			cursor: not-allowed;
		}

		&:focus {
			border: 1px solid var(--grey900);
		}
	}

	input[type="checkbox"],
	input[type="radio"] {
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		position: absolute;
		width: 1px;

		border: 0;
		border-radius: initial;
		display: initial;
		min-height: 1px;
		background-color: initial;
		color: inherit;
		line-height: inherit;
		transition: none;

		& ~ & {
			+ label {
				margin-top: 12px;
			}
		}

		&:focus,
		&:focus-within,
		&:hover {
			& + label {
				&::before {
					background-color: var(--white);
				}
			}
		}

		&:checked {
			&:focus,
			&:focus-within,
			&:hover {
				& + label {
					&::before {
						background-color: var(--orange);
					}
				}
			}
		}

		&:focus,
		&:focus-within {
			& + label {
				&::before {
					outline: 1px dotted var(--black);
				}
			}
		}

		& + label {
			align-items: center;
			display: flex;
			margin: 4px 0;

			font-weight: 400;

			&::before {
				border-radius: 50%;
				content: "";
				display: inline-block;
				height: 24px;
				left: 0;
				margin-right: 8px;
				top: 0;
				width: 24px;

				background-color: var(--white);
				background-image: url("data:image/svg+xml,%3Csvg width='186' height='186' viewBox='0 0 186 186' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='93' cy='93' r='93' fill='%23FFFFFF'/%3E%3C/svg%3E%0A");
				background-position: center;
				background-repeat: no-repeat;
				background-size: 35%;
				border: 1px solid var(--orange);
				color: white;
				opacity: 1;
				outline-offset: 2px;
				transition: 0.2s background-color ease;
			}

			&:focus,
			&:focus-within,
			&:hover {
				&::before {
					background-color: var(--orange100);
				}
			}

			&:focus,
			&:focus-within {
				&::before {
					outline: 1px dotted var(--black);
				}
			}
		}

		&:checked {
			& + label {
				&::before {
					background-color: var(--orange);
				}
			}
		}
	}

	input[type="checkbox"] {
		& + label {
			&::before {
				background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L11.5 1.5L4.51 8.5L0 4L1.5 2.5L4.51 5.5L10 0Z' fill='white'/%3E%3C/svg%3E%0A");
				background-size: 50%;
				border-radius: 4px;
			}
		}
	}

	label {
		display: block;
	}

	label ~ label {
		margin-top: 12px;
	}
`;

export default input;
