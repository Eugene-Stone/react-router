import { useState } from 'react';

// Интерфейс для возвращаемого объекта useModal
interface ModalState {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	showClass: string;
	handleToggleModal: (src?: string) => void;
	currentImage: number;
	setCurrentImage: (index: number) => void;
}

export function useModal(): ModalState {
	const [currentImage, setCurrentImage] = useState<number>(0);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const showClass = isOpen ? 'show' : '';

	function handleToggleModal(src?: string): void {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
			setCurrentImage(0);
		}

		console.log(src);
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
