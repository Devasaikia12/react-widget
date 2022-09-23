import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();
	useEffect((event) => {
		const clickHandler = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}

			setOpen(false);
		};
		document.body.addEventListener('click', clickHandler);

		return () => {
			document.body.removeEventListener('click', clickHandler);
		};
	}, []);

	const dropdownOption = options.map((item) => {
		if (item.label === selected.label) {
			return null;
		}
		return (
			<div
				className="item"
				key={item.value}
				onClick={() => onSelectedChange(item)}
			>
				{item.label}
			</div>
		);
	});

	return (
		<div className="ui form" ref={ref}>
			<div className="field">
				<label className="label">{label}</label>
				<div
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
					onClick={() => setOpen(!open)}
				>
					<i className="dropdown icon"></i>
					<div className="default text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{dropdownOption}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
