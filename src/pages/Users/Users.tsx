import { Fragment, useState, useEffect } from 'react';

import { Success } from '../../components/Success';
import { UsersList } from '../../components/UsersList/UsersList';

import './Users.scss';

// Интерфейс для пользователя
interface UserItem {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

function Users(): React.ReactElement {
	const [users, setUsers] = useState<UserItem[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [searchValue, setSearchValue] = useState<string>('');
	const [invitesUsers, setInvitesUsers] = useState<string[]>([]);
	const [inviteSend, setInviteSend] = useState<boolean>(false);

	useEffect(() => {
		// Аналог как с сервера
		fetch('/react-router/data/users.json')
			.then((res) => res.json())
			.then((json) => setUsers(json.data))
			.then(() => setIsLoading(false))
			.catch((err) => console.error('Ошибка загрузки:', err)); // Всегда добавляй catch!
	}, []);

	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
		setSearchValue(e.target.value);
	}

	function handleInviteUser(email: string): void {
		if (invitesUsers.includes(email)) {
			setInvitesUsers(invitesUsers.filter((prev) => prev !== email));
		} else {
			setInvitesUsers((prev) => [...prev, email]);
		}
	}

	function handleSendInvite(): void {
		setInviteSend(true);
	}

	return (
		<Fragment>
			<div className="users">
				{inviteSend ? (
					<Success invitesUsers={invitesUsers} />
				) : (
					<UsersList
						items={users}
						isLoading={isLoading}
						searchValue={searchValue}
						invitesUsers={invitesUsers}
						handleSearchInput={handleSearchInput}
						handleInviteUser={handleInviteUser}
						handleSendInvite={handleSendInvite}
					/>
				)}
			</div>
		</Fragment>
	);
}

export default Users;
