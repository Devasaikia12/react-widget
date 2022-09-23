import Link from './Link';
import React from 'react';
const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link href="/" className="item">
				Accrodian
			</Link>
			<Link href="/dropdown" className="item">
				Dropdown
			</Link>
			<Link href="/search" className="item">
				wikipedia
			</Link>
			<Link href="/translate" className="item">
				Translate
			</Link>
		</div>
	);
};
export default Header;
