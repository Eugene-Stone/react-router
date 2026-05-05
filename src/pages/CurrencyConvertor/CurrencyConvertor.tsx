import { Fragment, useState, useEffect, useRef } from 'react';

import { CurrencyBlock } from '../../components/CurrencyBlock';

import './CurrencyConvertor.scss';

// Интерфейс для курса валюты из JSON
interface ExchangeRateItem {
	CurrencyCodeL: string;
	Amount: number;
}

function CurrencyConvertor(): React.ReactElement {
	const [fromCurrency, setFromCurrency] = useState<string>('USD');
	const [toCurrency, setToCurrency] = useState<string>('UAH');
	const [fromCurrencyValue, setFromCurrencyValue] = useState<number>(1);
	const [toCurrencyValue, setToCurrencyValue] = useState<number>(0);

	const exchangeRateRef = useRef<ExchangeRateItem[]>([]);

	useEffect(() => {
		// Загружаем данные о курсах валют
		fetch('/react-router/data/exchange-rate.json')
			.then((res) => res.json())
			.then((json: ExchangeRateItem[]) => {
				exchangeRateRef.current = json;
				handleFromCurrencyValue(1); // Инициализируем значение
			})
			.catch((err) => console.error('Ошибка загрузки:', err));
	}, []);

	// Функция для получения курса валюты
	const getRate = (currency: string): number => {
		if (currency === 'UAH') return 1;

		const rates = exchangeRateRef.current.find((item) => item.CurrencyCodeL === currency);
		return rates ? rates.Amount : 1;
	};

	// Обработчик выбора валюты "от"
	function handleFromCurrencyChoice(currency: string, value: number): void {
		setFromCurrency(currency);
	}

	// Обработчик выбора валюты "к"
	function handleToCurrencyChoice(currency: string, value: number): void {
		setToCurrency(currency);
	}

	// Обработчик изменения значения "от"
	function handleFromCurrencyValue(value: number): void {
		if (!exchangeRateRef.current.length) return;

		const fromRate = getRate(fromCurrency);
		const toRate = getRate(toCurrency);
		const result = (value * fromRate) / toRate;

		setFromCurrencyValue(value);
		setToCurrencyValue(result);
	}

	// Обработчик изменения значения "к"
	function handleToCurrencyValue(value: number): void {
		if (!exchangeRateRef.current.length) return;

		const fromRate = getRate(fromCurrency);
		const toRate = getRate(toCurrency);
		const result = (toRate / fromRate) * value;

		setToCurrencyValue(value);
		setFromCurrencyValue(result);
	}

	useEffect(() => {
		handleFromCurrencyValue(fromCurrencyValue);
	}, [fromCurrency]);

	useEffect(() => {
		handleToCurrencyValue(toCurrencyValue);
	}, [toCurrency]);

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
