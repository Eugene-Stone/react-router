import { useState } from 'react';

import './Counter.scss';

function Counter(): React.ReactElement {
	const [count, setCount] = useState<number>(0);

	function handleCountIncrement(): void {
		setCount(count + 1);
	}
	function handleCountDecrement(): void {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	return (
		<div className="counter">
			<div>
				<h2>Counter:</h2>
				<h1>{count}</h1>
				<button onClick={handleCountDecrement} className="minus">
					- Minus
				</button>
				<button onClick={handleCountIncrement} className="plus">
					Plus +
				</button>
			</div>
		</div>
	);
}

export default Counter;
