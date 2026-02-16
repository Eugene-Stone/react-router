import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	return (
		<nav className="header">
			<div className="logo">
				<NavLink to={'/'}>
					<span>Home</span>
				</NavLink>
			</div>

			<ul>
				<li>
					<NavLink to={'/react-router/gallery'}>Gallery</NavLink>
				</li>
				<li>
					<NavLink to={'/react-router/convertor'}>Convertor</NavLink>
				</li>
				<li>
					<NavLink to={'/react-router/users'}>Users</NavLink>
				</li>
				<li>
					<NavLink to={'/123'}>404 page</NavLink>
				</li>
			</ul>
		</nav>
	);
}
