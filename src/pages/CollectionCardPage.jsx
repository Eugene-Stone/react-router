import { useParams, useOutletContext } from 'react-router-dom';
// import { useGallery } from './Gallery/useGallery';

import CollectionCard from './components/CollectionCard';

export default function CollectionCardPage() {
	const { id } = useParams();
	// const { collections } = useGallery();
	const { collections } = useOutletContext();

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
