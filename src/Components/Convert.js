import { useState, useEffect } from 'react';
import axios from 'axios';
const Convert = ({ text, language }) => {
	const [traslate, setTranslate] = useState('');
	const [debounceText, setDebounceText] = useState(text);

	useEffect(() => {
		const timerid = setTimeout(() => {
			setDebounceText(text);
		}, 1000);
		return () => {
			clearTimeout(timerid);
		};
	}, [text, language]);

	useEffect(() => {
		const getTraslate = async () => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debounceText,
						target: language.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				}
			);
			console.log(data.data.translations[0].translatedText);
			setTranslate(data.data.translations[0].translatedText);
		};
		getTraslate();
	}, [debounceText, language]);
	return <div>{traslate}</div>;
};

export default Convert;
