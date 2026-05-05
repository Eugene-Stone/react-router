const defaultCurrencies = ['UAH', 'USD', 'EUR'];

// Интерфейс для пропсов CurrencyBlock
interface CurrencyBlockProps {
	value: number;
	currency: string;
	onChangeValue: (value: number) => void;
	onChangeCurrency: (currency: string, value: number) => void;
}

export const CurrencyBlock = ({
	value,
	currency,
	onChangeValue,
	onChangeCurrency,
}: CurrencyBlockProps): React.ReactElement => (
	<div className="block">
		<ul className="currencies">
			{defaultCurrencies.map((cur) => (
				<li
					onClick={() => onChangeCurrency(cur, value)}
					className={currency === cur ? 'active' : ''}
					key={cur}>
					{cur}
				</li>
			))}
		</ul>
		<input
			onChange={(e) => onChangeValue(Number(e.target.value))}
			value={value}
			type="number"
			placeholder="0"
		/>
	</div>
);
