import { useEffect } from 'react';
import './Modal.scss';
// import { useState } from 'react';
// import { useModal } from './useModal';

function Modal({ photos, modal }) {
	const { currentImage, setCurrentImage, showClass, handleToggleModal } = modal;

	const disabledPrev = currentImage === 0 ? 'disabled' : '';
	const disabledNext = currentImage === photos.length - 1 ? 'disabled' : '2';

	function handleNextImage() {
		if (currentImage < photos.length - 1) {
			setCurrentImage(currentImage + 1);
		}
		// Если нужно зациклить
		// else if (currentImage === photos.length - 1) {
		// 	setCurrentImage(0);
		// }
	}
	function handlePrevImage() {
		if (currentImage >= 1) {
			setCurrentImage(currentImage - 1);
		}
		// Если нужно зациклить
		// else if (currentImage === 0) {
		// 	setCurrentImage(photos.length - 1);
		// }
	}

	useEffect(() => {
		if (!showClass) {
			return;
		}

		function handleKeyDown(e) {
			if (e.key === 'ArrowRight') {
				handleNextImage();
			}
			if (e.key === 'ArrowLeft') {
				handlePrevImage();
			}
			if (e.key === 'Escape') {
				handleToggleModal();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [currentImage, showClass]);

	return (
		<div className="modal-box">
			{/* <button onClick={() => handleToggleModal()}>open</button> */}

			<div className={`overlay animated ${showClass}`}>
				<div className="modal">
					<svg onClick={handleToggleModal} height="200" viewBox="0 0 200 200" width="200">
						<title />
						<path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
					</svg>

					<div className="modal-images--controls">
						<button className={disabledPrev} onClick={() => handlePrevImage()}>
							prev
						</button>
						<button className={disabledNext} onClick={() => handleNextImage()}>
							next
						</button>
					</div>
					<br />

					<img src={photos[currentImage]} />
				</div>
			</div>
		</div>
	);
}

export default Modal;
