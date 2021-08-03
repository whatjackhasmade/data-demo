import * as React from "react";

import StyledTitle from "./title.styles";

declare type TitleProps = {
	line?: boolean;
	text: string;
};

const Title: React.FC<TitleProps> = (props: TitleProps) => {
	const { line, text } = props;

	return (
		<StyledTitle>
			<span>{text}</span>
			{line && <hr />}
		</StyledTitle>
	);
};

Title.defaultProps = {
	line: true,
};

export { Title };
export default Title;
