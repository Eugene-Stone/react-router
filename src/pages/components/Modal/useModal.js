import { useState } from "react";

export function useModal() {
	const [currentImage, setCurrentImage] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const showClass = isOpen ? "show" : "";

	function handleToggleModal(imageIndex) {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
			// setCurrentImage(imageSrc)
			setCurrentImage(0);

		}

		console.log(imageIndex);
	}


	return {
		isOpen,
		setIsOpen,
		showClass,
		handleToggleModal,
		currentImage,
		setCurrentImage,
	};
}	

