import styled from "styled-components";
import { device } from "particles";

const HeaderComponent = styled.header`
	left: 0;
	position: relative;
	top: 0;
	width: 100%;
	z-index: 11;

	a + a {
		margin-left: 16px;
	}

	.header__logo {
		max-width: 140px;
		width: 100%;
	}

	.header__contents {
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

export default HeaderComponent;
