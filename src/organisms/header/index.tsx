import React from "react";

import HeaderComponent from "./header.styles";

import { Link } from "data-interchange";
import { Logo } from "data-interchange";

const Header = () => {
	return (
		<HeaderComponent className="header">
			<div className="header__contents">
				<div className="header__logo">
					<Link href="/">
						<Logo />
						<span className="hidden">data-interchange Homepage</span>
					</Link>
				</div>
				<nav className="header__menu">
					<Link href="/">Homepage</Link>
					<a
						href="https://whatjackhasmade.co.uk"
						target="_blank"
						rel="noopener noreferrer"
					>
						Made by Jack Pritchard
					</a>
				</nav>
			</div>
		</HeaderComponent>
	);
};

export { Header };
export default Header;
