import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
	{
		label: 'Afrikaans',
		value: 'af',
	},
	{
		label: 'Bengali',
		value: 'bn',
	},
	{
		label: 'English',
		value: 'en',
	},
	{
		label: 'Hindi',
		value: 'hi',
	},
	{
		label: 'Spanish',
		value: 'es',
	},
];
const Traslate = () => {
	const [selected, setSelected] = useState(options[0]);
	const [text, setText] = useState('');
	return (
		<div>
			<div className="ui form">
				<label className="label" style={{ marginBottom: '5px' }}>
					Type your text here
				</label>
				<div className="field">
					<input
						value={text}
						onChange={(event) => setText(event.target.value)}
						style={{ marginBottom: '10px' }}
					/>
					<Dropdown
						label="Select a color"
						options={options}
						selected={selected}
						onSelectedChange={setSelected}
					/>
				</div>
			</div>
			<hr />
			<div className="ui header">Output</div>
			<Convert language={selected} text={text} />
		</div>
	);
};

export default Traslate;
