import { Fragment, useState, useEffect, useEffectEvent, useRef } from 'react';

import { CurrencyBlock } from '../../components/CurrencyBlock';

import './CurrencyConvertor.scss';

function CurrencyConvertor() {
	const [fromCurrency, setFromCurrency] = useState('USD');
	const [toCurrency, setToCurrency] = useState('UAH');
	const [fromCurrencyValue, setFromCurrencyValue] = useState(1);
	const [toCurrencyValue, setToCurrencyValue] = useState(0);

	// const [exchangeRate, setExchangeRate] = useState([]);

	const exchangeRateRef = useRef([]);

	const showConsoleLog = useEffectEvent((json) => {
		console.log(json);
	});

	var handleFromCurrencyInitEvent = useEffectEvent(() => {
		handleFromCurrencyValue(1);
	});

	useEffect(() => {
		// Аналог как с сервера
		fetch('/react-router/data/exchange-rate.json')
			.then((res) => res.json())
			.then((json) => {
				// setExchangeRate(json);
				exchangeRateRef.current = json;
				handleFromCurrencyInitEvent();
				showConsoleLog(json);
			})
			.catch((err) => console.error('Ошибка загрузки:', err));
	}, []);

	const getRate = (currency) => {
		if (currency === 'UAH') return 1;

		// const rates = exchangeRate.find((item) => item.CurrencyCodeL === currency);
		const rates = exchangeRateRef.current.find((item) => item.CurrencyCodeL === currency);

		return rates ? rates.Amount : 1;
	};

	function handleFromCurrencyChoice(currency, value) {
		setFromCurrency(currency);

		// handleFromCurrencyValue(value);
	}

	function handleToCurrencyChoice(currency, value) {
		setToCurrency(currency);

		// handleToCurrencyValue(value);
	}

	function handleFromCurrencyValue(value) {
		if (!exchangeRateRef.current.length) return;

		const fromRate = getRate(fromCurrency);
		const toRate = getRate(toCurrency);
		const result = (value * fromRate) / toRate;

		setFromCurrencyValue(value);
		setToCurrencyValue(result);
	}

	function handleToCurrencyValue(value) {
		if (!exchangeRateRef.current.length) return;

		const fromRate = getRate(fromCurrency);
		const toRate = getRate(toCurrency);
		const result = (toRate / fromRate) * value;

		setToCurrencyValue(value);
		setFromCurrencyValue(result);
	}

	const handleFromCurrencyValueEvent = useEffectEvent(() => {
		handleFromCurrencyValue(fromCurrencyValue);
	});

	const handleToCurrencyValueEvent = useEffectEvent(() => {
		handleToCurrencyValue(toCurrencyValue);
	});

	useEffect(() => {
		handleFromCurrencyValueEvent();
	}, [fromCurrency]);

	useEffect(() => {
		handleToCurrencyValueEvent();
	}, [toCurrency]);

	// console.log(exchangeRate.includes('CurrencyCodeL'));
	return (
		<Fragment>
			<div className="convertor">
				<CurrencyBlock
					value={fromCurrencyValue}
					currency={fromCurrency}
					onChangeCurrency={handleFromCurrencyChoice}
					onChangeValue={handleFromCurrencyValue}
				/>
				<CurrencyBlock
					value={toCurrencyValue}
					currency={toCurrency}
					onChangeCurrency={handleToCurrencyChoice}
					onChangeValue={handleToCurrencyValue}
				/>
			</div>
		</Fragment>
	);
}

export default CurrencyConvertor;
