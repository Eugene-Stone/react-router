import CollectionCard from './CollectionCard';

// Интерфейс для коллекции
interface Collection {
	id: number;
	category: number;
	name: string;
	photos: string[];
}

// Интерфейс для пропсов CollectionList
interface CollectionListProps {
	paginatedCollections: Collection[];
	collectionCardPage?: boolean;
}

export default function CollectionList({
	paginatedCollections,
	collectionCardPage = false,
}: CollectionListProps): React.ReactElement {
	return (
		<div className="content">
			{paginatedCollections.map((collection, index) => {
				return (
					<CollectionCard
						key={index}
						collection={collection}
						name={collection.name}
						images={collection.photos}
						collectionCardPage={collectionCardPage}
					/>
				);
			})}
		</div>
	);
}
