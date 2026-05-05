// Интерфейс для пропсов Pagination
interface PaginationProps {
	totalPages: number;
	currentPage: number;
	setCurrentPage: (page: number) => void;
}

export default function Pagination({
	totalPages,
	currentPage,
	setCurrentPage,
}: PaginationProps): React.ReactElement {
	return (
		<ul className="pagination">
			{[...Array(totalPages)].map((_, index) => (
				<li
					key={index}
					className={currentPage === index + 1 ? 'active' : ''}
					onClick={() => setCurrentPage(index + 1)}>
					{index + 1}
				</li>
			))}
		</ul>
	);
}
