import * as React from "react";

import StyledFooter from "./footer.styles";

const Footer = () => {
	return (
		<StyledFooter>
			<div className="footer__contents">
				<p>Made with love &hearts; by Jack Pritchard</p>
				<p>
					<a
						href="https://whatjackhasmade.co.uk"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://whatjackhasmade.co.uk
					</a>
				</p>
			</div>
		</StyledFooter>
	);
};

export { Footer };
export default Footer;
