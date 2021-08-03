import styled from "styled-components";
import { device } from "particles";

const FooterComponent = styled.footer`
	padding: 40px 0;
	position: relative;
	z-index: 10;

	background-color: var(--primary);
	color: var(--white);

	a,
	p {
		color: var(--white);
	}

	.footer__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: var(--gridMax);
		padding: 15px;

		@media ${device?.xs} {
			padding: 15px 30px;
		}
	}
`;

export default FooterComponent;
