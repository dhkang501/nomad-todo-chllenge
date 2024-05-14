import { useForm } from "react-hook-form";

function AddCategory(){
    interface Icategory {
        category: string
    }

    const {register, handleSubmit, setValue} = useForm<Icategory>();
    const handleValid = ({category}: Icategory) => {
        console.log(category);
        // setValue("category","");
    }

    return (
    <form onSubmit={handleSubmit(handleValid)}>
        <input type="text"  {...register("category")} placeholder="Write a category"  />
        <button> + add Category</button>
    </form>
    );
}

export default AddCategory;