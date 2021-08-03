import styled from "styled-components";

const TitleComponent = styled.div`
	display: grid;
	margin-bottom: 64px;
	grid-template-columns: repeat(10, 1fr);

	span {
		display: block;
		margin-right: 32px;
		grid-column: 1 / 3;
		white-space: nowrap;

		font-weight: bold;
		font-size: 21px;
		line-height: 24px;
		color: #5045cd;
	}

	hr {
		height: 0;
		grid-column: 3 / 11;
		width: 100%;
		border: 1px solid #a8b6ff;
	}
`;

export default TitleComponent;
