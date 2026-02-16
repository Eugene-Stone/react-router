import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useGallery } from './pages/Gallery/useGallery';
import { useEffect } from 'react';

import Home from './pages/Home/Home';
import Header from './pages/components/Header/Header';
import NotFoundPage from './pages/NotFoundPage';
import Gallery from './pages/Gallery/Gallery';
import CollectionCardPage from './pages/CollectionCardPage';
import CurrencyConvertor from './pages/CurrencyConvertor/CurrencyConvertor';
import Users from './pages/Users/Users';

// const router = createBrowserRouter([
// 	{ path: '*', element: <NotFoundPage /> },
// 	{ path: '/', element: <Gallery /> },
// 	{ path: '/test', element: <Test /> },
// ]);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '*', element: <NotFoundPage /> },
			{ index: true, element: <Home /> },
			{ path: '/react-router', element: <Home /> },
			{ path: '/react-router/gallery', element: <Gallery /> },
			{ path: '/react-router/convertor', element: <CurrencyConvertor /> },
			{ path: '/react-router/users', element: <Users /> },
			{ path: '/react-router/gallery/collection/:id', element: <CollectionCardPage /> },
		],
	},
]);

function Layout() {
	const gallery = useGallery();
	useEffect(() => {
		console.log('Layout mounted');
	}, []);
	return (
		<>
			<Header />
			<Outlet context={gallery} />
		</>
	);
}

function App() {
	return <RouterProvider router={router} />;
}

export default App;
