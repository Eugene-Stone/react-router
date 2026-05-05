// Интерфейс для пропсов Filter
interface FilterProps {
	tags: { name: string }[];
	tagCurrent: number;
	handleCurrentTag: (index: number) => void;
	searchValue: string;
	setSearchValue: (value: string) => void;
	setCurrentPage: (page: number) => void;
}

export default function Filter({
	tags,
	tagCurrent,
	handleCurrentTag,
	searchValue,
	setSearchValue,
	setCurrentPage,
}: FilterProps): React.ReactElement {
	return (
		<div className="top">
			<ul className="tags">
				{tags.map((tag, index) => {
					return (
						<li
							className={tagCurrent === index ? 'active' : ''}
							key={tag.name}
							onClick={() => handleCurrentTag(index)}>
							{tag.name}
						</li>
					);
				})}
			</ul>
			<input
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
					setCurrentPage(1);
				}}
				className="search-input"
				placeholder="Поиск по названию"
			/>
		</div>
	);
}
