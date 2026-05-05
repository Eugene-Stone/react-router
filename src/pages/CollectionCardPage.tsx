import { useParams, useOutletContext } from 'react-router-dom';
// import { useGallery } from './Gallery/useGallery';

import CollectionCard from '../components/CollectionCard';
// import Modal from './components/Modal/Modal';

// Интерфейс для коллекции
interface Collection {
	id: number;
	category: number;
	name: string;
	photos: string[];
}

// Интерфейс для контекста (частично)
interface GalleryContext {
	collections: Collection[];
}

export default function CollectionCardPage(): React.ReactElement {
	const { id } = useParams<{ id: string }>();
	// const { collections } = useGallery();
	const { collections } = useOutletContext<GalleryContext>();

	const collection = collections[Number(id)];
	const collectionCardPage = true;

	if (!collection) {
		return <div>Loading...</div>;
	}

	return (
		<section className="collection-page">
			<h1>{collection.name}</h1>
			<CollectionCard
				key={collection.id}
				collectionCardPage={collectionCardPage}
				collection={collection}
				// name={collection.name}
				images={collection.photos}
			/>
		</section>
	);
}
