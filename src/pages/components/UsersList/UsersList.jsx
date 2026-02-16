import { Skeleton } from './Skeleton';
import { User } from './User';

export const UsersList = ({
	items,
	isLoading,
	searchValue,
	invitesUsers,
	handleSearchInput,
	handleInviteUser,
	handleSendInvite,
}) => {
	// console.log(items.data);
	return (
		<>
			<div className="search">
				<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
				</svg>
				<input
					value={searchValue}
					onChange={handleSearchInput}
					type="text"
					placeholder="Search user..."
				/>
			</div>
			{isLoading ? (
				<div className="skeleton-list">
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			) : (
				<ul className="users-list">
					{/* {items.map((user) => (
						<User key={user.email} {...user} />
					))} */}
					{items
						.filter((obj) => {
							const full_name = obj.first_name + ' ' + obj.last_name;

							if (
								full_name.toLowerCase().includes(searchValue.toLowerCase()) ||
								obj.email.toLowerCase().includes(searchValue.toLowerCase())
							) {
								return obj;
							}
						})
						.map((user) => (
							<User
								invitesUsers={invitesUsers}
								handleInviteUser={handleInviteUser}
								key={user.email}
								{...user}
							/>
						))}
				</ul>
			)}
			{invitesUsers.length > 0 && (
				<button onClick={handleSendInvite} className="send-invite-btn">
					Send invite
				</button>
			)}
		</>
	);
};
