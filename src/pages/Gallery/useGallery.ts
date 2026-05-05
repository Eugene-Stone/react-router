import { useState, useEffect } from 'react';

// Определяем интерфейсы для данных из JSON
interface Category {
	name: string;
}

interface Collection {
	id: number;
	category: number;
	name: string;
	photos: string[];
}

interface GalleryData {
	categories: Category[];
	collections: Collection[];
}

export function useGallery() {
	// Состояния с типами
	const [searchValue, setSearchValue] = useState<string>('');
	const [collections, setCollections] = useState<Collection[]>([]);
	const [tags, setTags] = useState<Category[]>([]);
	const [tagCurrent, setTagCurrent] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const limitPerPage = 3;

	// Фильтрация коллекций на основе поиска и категории
	const filteredCollections = collections.filter(
		(object) =>
			object.name.toLowerCase().includes(searchValue.toLowerCase()) &&
			(tagCurrent === 0 || object.category === tagCurrent),
	);

	const totalPages = Math.ceil(filteredCollections.length / limitPerPage);

	const paginatedCollections = filteredCollections.slice(
		(currentPage - 1) * limitPerPage,
		currentPage * limitPerPage,
	);

	// useEffect для загрузки данных
	// Путь `/react-router/data/data-images.json` используется потому что:
	// 1. В vite.config.ts установлен base: "/react-router"
	// 2. Файл находится в public/data/data-images.json
	// 3. При доступе через fetch нужно учитывать полный путь от root
	useEffect(() => {
		fetch('/react-router/data/data-images.json')
			.then((response) => response.json())
			.then((json: GalleryData) => {
				setCollections(json.collections);
				setTags(json.categories);
				setIsLoading(false);
			})
			.catch((error) => console.error('Error fetch: ', error));
	}, []);

	// Функция для изменения текущей категории
	function handleCurrentTag(index: number) {
		setTagCurrent(index);
		setCurrentPage(1);
	}

	// Возвращаем объект с состояниями и функциями
	return {
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
		collections,
	};
}
