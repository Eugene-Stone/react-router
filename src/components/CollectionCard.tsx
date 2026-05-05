import { Link } from 'react-router-dom';
import { useModal } from './Modal/useModal';
import Modal from './Modal/Modal';

// Интерфейс для пропсов CollectionCard
interface CollectionCardProps {
	name?: string;
	images: string[];
	collection: { id: number };
	collectionCardPage: boolean;
}

export default function CollectionCard({
	name,
	images,
	collection,
	collectionCardPage,
}: CollectionCardProps): React.ReactElement {
	const modal = useModal();
	const handleToggleModal = modal.handleToggleModal;

	return (
		<>
			<div className="collection">
				{collectionCardPage ? (
					<img
						className="collection__big has-modal"
						onClick={(e: React.MouseEvent<HTMLImageElement>) =>
							handleToggleModal(e.currentTarget.src)
						}
						src={images[0]}
						alt="Item"
					/>
				) : (
					<Link
						className="collection__big-link"
						to={`/react-router/gallery/collection/${collection.id}`}>
						<img className="collection__big" src={images[0]} alt="Item" />
					</Link>
				)}

				<div className="collection__bottom">
					<img className="collection__mini" src={images[1]} alt="Item" />
					<img className="collection__mini" src={images[2]} alt="Item" />
					<img className="collection__mini" src={images[3]} alt="Item" />
				</div>
				{collectionCardPage ? '' : <h4>{name}</h4>}
			</div>
			{collectionCardPage ? <Modal photos={images} modal={modal} /> : ''}
		</>
	);
}
