import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useGallery } from './pages/Gallery/useGallery';
import { useEffect } from 'react';

import Home from './pages/Home/Home';
import Header from './pages/components/Header/Header';
import NotFoundPage from './pages/NotFoundPage';
import Gallery from './pages/Gallery/Gallery';
import CollectionCardPage from './pages/CollectionCardPage';
import Test from './pages/Test';

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
			{ path: 'gallery', element: <Gallery /> },
			{ path: 'test', element: <Test /> },
			{ path: 'collection/:id', element: <CollectionCardPage /> },
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
