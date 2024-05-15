import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { categoryState, ICategory } from '../model/recoil';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CategoryBox = styled.div`
    display: flex;
    /* justify-content: center;
    align-items: center; */
    width: 257px;
    height: 200px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    div{
        display: flex;
    }
`;

const DeleteBtn = styled.div`
    height: 25px;
    background-color: red;
    color: white;
    cursor: pointer;
`;

function Categories() {
    const [categories, setCategories] = useRecoilState<ICategory[]>(categoryState);

    useEffect(() => {
        const storedCategories = localStorage.getItem('categories');
        if (storedCategories) {
            setCategories(JSON.parse(storedCategories));
        }
    }, [setCategories]);

    const handleDelete = (id: number) => {
        const updatedCategories = categories.filter(category => category.id !== id);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
        setCategories(updatedCategories);
    };
    

    return (
        <Container>
            {categories.map(category => (
                <CategoryBox key={category.id}>
                    <div>
                        <div>{category.category}</div>
                        <DeleteBtn onClick={() => handleDelete(category.id)}>Delete</DeleteBtn>
                    </div>
                </CategoryBox>
            ))}
        </Container>
    );
}

export default Categories;
