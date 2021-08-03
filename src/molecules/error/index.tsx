import React from "react";
import { isAnObject } from "data-interchange";

import StyledError from "./error.styles";

type ErrorMessageProps = {
	/**
	 * The primary content of the Error component, replaces 'error' prop if found
	 */
	children?: React.ReactNode;
	/**
	 * Additional classNames to apply utility and helper classes
	 */
	className?: string;
	/**
	 * Alternative method of setting error value for component.
	 * Error describes the application error to the user
	 */
	error?: any;
	id?: string;
	log?: boolean;
	/**
	 * Title gives a short one liner description of the error
	 */
	title?: string;
};

export const ErrorMessage: React.SFC<ErrorMessageProps> = (
	props: ErrorMessageProps
) => {
	const { children, className, error, id, log = false, title } = props;

	let classList = `error`;
	if (className) classList += ` ${className}`;

	const errorIsObject = error && isAnObject(error);
	const errorIsText = error && !errorIsObject;

	let message;

	if (errorIsText) message = error;
	if (errorIsObject) message = error.message;
	if (children) message = children;

	if (!message) return null;
	if (log && errorIsText) console.error(error);
	if (log && errorIsObject) console.error(error.message);

	return (
		<StyledError className={classList}>
			{title && <strong className="error__title">{title}</strong>}
			<p id={id}>{JSON.stringify(message, null, 4)}</p>
		</StyledError>
	);
};

export default ErrorMessage;
