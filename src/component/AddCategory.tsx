import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { categoryState, ICategory } from '../model/recoil';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 20px;
`;

function AddCategory() {
    const [categories, setCategories] = useRecoilState<ICategory[]>(categoryState);
    const { register, handleSubmit, setValue } = useForm<ICategory>();

    const handleValid = ({ category }: ICategory) => {
        const newCategory: ICategory = { category, id: Date.now() };
        const updatedCategories = [...categories, newCategory];
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
        setCategories(updatedCategories);
        setValue('category', '');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("category", {
                    required: "Please write a  To Do"
                })} 
                placeholder="Write a to do" 
                />
                <button> + add Category</button>
            </form>
        </Container>
    );
}

export default AddCategory;
