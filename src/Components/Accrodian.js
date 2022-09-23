import React, { useState } from 'react';

const Accrodians = ({ items }) => {
	const [accrdIndex, setAccrdIndex] = useState(null);
	const onTitleClick = (index) => {
		setAccrdIndex(index);
	};

	const renderedItem = items.map((item, index) => {
		const active = index === accrdIndex ? 'active' : '';

		return (
			<React.Fragment key={index}>
				<div className={`${active} title`} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`${active} content`}>
					<p>{item.desc}</p>
				</div>
			</React.Fragment>
		);
	});
	return <div className="ui styled accordion">{renderedItem}</div>;
};

export default Accrodians;
