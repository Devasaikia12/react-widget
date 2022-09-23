import React, { useState } from 'react';

import Route from './Components/Route';
import Accrodians from './Components/Accrodian';
import Search from './Components/Search';
import Translate from './Components/Translate';
import Header from './Components/Header';
import Dropdown from './Components/Dropdown';
const items = [
	{
		title: 'What is a dog?',
		desc: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
	},
	{
		title: 'What kinds of dogs are there?',
		desc: `There are many breeds of dogs. Each breed varies in size and
				temperament. Owners often select a breed of dog that they find to be
				compatible with their own lifestyle and desires from a companion.`,
	},
	{
		title: 'How do you acquire a dog?',
		desc: `Three common ways for a prospective owner to acquire a dog is from pet
				shops, private owners, or shelters.`,
	},
];
const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'A Shade of Blue',
		value: 'blue',
	},
];
function App() {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div className="ui container">
			<div className="ui segment">
				<Header />
				<Route path="/">
					<Accrodians items={items} />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="/dropdown">
					<Dropdown
						label="Select a color"
						options={options}
						selected={selected}
						onSelectedChange={setSelected}
					/>
				</Route>
				<Route path="/translate">
					<Translate />
				</Route>
			</div>
		</div>
	);
}

export default App;
