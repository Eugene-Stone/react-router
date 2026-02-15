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
					<NavLink to={'/'}>Gallery page</NavLink>
				</li>
				<li>
					<NavLink to={'/test'}>Test page</NavLink>
				</li>
				<li>
					<NavLink to={'/123'}>404 page</NavLink>
				</li>
			</ul>
		</nav>
	);
}
