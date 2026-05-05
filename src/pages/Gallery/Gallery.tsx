// import { useGallery } from '../useGallery';
import { useOutletContext } from 'react-router-dom';
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import CollectionList from '../../components/CollectionList';

import './Gallery.scss';

// Интерфейс для контекста галереи (из useGallery)
interface GalleryContext {
	tags: { name: string }[];
	tagCurrent: number;
	handleCurrentTag: (index: number) => void;
	searchValue: string;
	setSearchValue: (value: string) => void;
	setCurrentPage: (page: number) => void;
	paginatedCollections: {
		id: number;
		category: number;
		name: string;
		photos: string[];
	}[];
	totalPages: number;
	currentPage: number;
	isLoading: boolean;
}

export default function Gallery(): React.ReactElement {
	const {
		tags,
		tagCurrent,
		handleCurrentTag,
		searchValue,
		setSearchValue,
		setCurrentPage,
		paginatedCollections,
		totalPages,
		currentPage,
		isLoading,
		// } = useGallery();
	} = useOutletContext<GalleryContext>();

	return (
		<div className="gallery">
			<h1>Моя коллекция фотографий</h1>

			{isLoading ? (
				<h2 style={{ color: 'pink' }}>Loading...</h2>
			) : (
				<>
					<Filter
						tags={tags}
						tagCurrent={tagCurrent}
						handleCurrentTag={handleCurrentTag}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						setCurrentPage={setCurrentPage}
					/>

					<CollectionList paginatedCollections={paginatedCollections} />

					<Pagination
						totalPages={totalPages}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</>
			)}
		</div>
	);
}
