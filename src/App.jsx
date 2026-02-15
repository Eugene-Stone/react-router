import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import Header from './pages/components/Header/Header';
import Gallery from './pages/Gallery';
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
			{ index: true, element: <Gallery /> },
			{ path: 'test', element: <Test /> },
			{ path: 'collection/:id', element: <CollectionCardPage /> },
		],
	},
]);

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

function App() {
	return <RouterProvider router={router} />;
}

export default App;
