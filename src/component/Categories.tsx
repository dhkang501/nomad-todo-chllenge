import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { categoryState, ICategory } from '../model/recoil';
import styled from 'styled-components';

const Container = styled.div`
    width: 1000px;
`;

const CategoryBox = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid;
`;

function Categories() {
    const [categories, setCategories] = useRecoilState<ICategory[]>(categoryState);

    useEffect(() => {
        const storedCategories = localStorage.getItem('categories');
        if (storedCategories && categories.length === 0) {
            setCategories(JSON.parse(storedCategories));
        }
    }, [categories, setCategories]);

    return (
        <Container>
            {categories.map(category => (
                <CategoryBox key={category.id}>{category.category}</CategoryBox>
            ))}
        </Container>
    );
}

export default Categories;
