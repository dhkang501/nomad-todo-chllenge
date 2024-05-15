import { atom } from 'recoil';

export interface ICategory {
    id: number;
    category: string;
}

const storedCategories = localStorage.getItem('categories');
const defaultCategories: ICategory[] = storedCategories ? JSON.parse(storedCategories) : [];

export const categoryState = atom<ICategory[]>({
    key: 'category',
    default: defaultCategories,
});
