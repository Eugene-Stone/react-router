import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './App'; // Импорт главного компонента приложения

// Создаем корень React и рендерим приложение в элемент с id 'root'
createRoot(document.getElementById('root')!).render(
	// ! утверждает, что элемент существует
	<StrictMode>
		<App />
	</StrictMode>,
);
