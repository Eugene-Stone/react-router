import { Link } from 'react-router-dom';

export default function CollectionCard({ name, images, index }) {
	return (
		<div className="collection">
			<Link className="collection__big-link" to={`/collection/${index}`}>
				<img className="collection__big" src={images[0]} alt="Item" />
			</Link>
			<div className="collection__bottom">
				<img className="collection__mini" src={images[1]} alt="Item" />
				<img className="collection__mini" src={images[2]} alt="Item" />
				<img className="collection__mini" src={images[3]} alt="Item" />
			</div>
			<h4>{name}</h4>
		</div>
	);
}
