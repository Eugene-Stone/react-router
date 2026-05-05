import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useGallery } from './pages/Gallery/useGallery';
import { useEffect } from 'react';
import React from 'react';

import Home from './pages/Home';
import Header from './components/Header/Header';
import NotFoundPage from './pages/NotFoundPage';
import Gallery from './pages/Gallery/Gallery';
import CollectionCardPage from './pages/CollectionCardPage';
import CurrencyConvertor from './pages/CurrencyConvertor/CurrencyConvertor';
import Users from './pages/Users/Users';

// Создаем роутер с конфигурацией маршрутов
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />, // Основной layout компонент
		children: [
			{ path: '*', element: <NotFoundPage /> }, // Страница 404 для неизвестных маршрутов
			{ index: true, element: <Home /> }, // Главная страница
			{ path: '/react-router', element: <Home /> },
			{ path: '/react-router/gallery', element: <Gallery /> }, // Галерея
			{ path: '/react-router/convertor', element: <CurrencyConvertor /> }, // Конвертор валют
			{ path: '/react-router/users', element: <Users /> }, // Пользователи
			{ path: '/react-router/gallery/collection/:id', element: <CollectionCardPage /> }, // Карточка коллекции
		],
	},
]);

// Layout компонент: обертка для всех страниц, включает Header и Outlet для дочерних маршрутов
function Layout(): React.ReactElement {
	const gallery = useGallery(); // Хук для управления данными галереи
	useEffect(() => {
		console.log('Layout mounted'); // Логирование монтирования компонента
	}, []);
	return (
		<>
			<Header /> {/* Шапка сайта */}
			<Outlet context={gallery} />{' '}
			{/* Outlet для рендеринга дочерних компонентов с контекстом */}
		</>
	);
}

// Главный компонент приложения
function App(): React.ReactElement {
	return <RouterProvider router={router} />; // Провайдер роутера для всего приложения
}

export default App;
