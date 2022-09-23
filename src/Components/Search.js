import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
	const [term, setTerm] = useState('Programing');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	// seting timer to debounce
	useEffect(() => {
		const timeid = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);

		return () => {
			clearTimeout(timeid);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				},
			});
			setResults(data.query.search);
		};
		search();
	}, [debouncedTerm]);

	const renderedItem = results.map((result) => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						className="ui button"
						target={'_blank'}
						rel="noreferrer"
					>
						GO
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});
	return (
		<div className="ui segment">
			<div className="ui form">
				<label>Search</label>
				<div className="field">
					<input
						className=""
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className="ui called list">{renderedItem}</div>
		</div>
	);
};
export default Search;
