import styled from "styled-components";
import AddCategory from "./AddCategory";
import Categories from "./Categories";

const Container = styled.div`
    margin-top: 20px;
    text-align: center;
    div{
        font-size: 20px;
    }
`

function ToDoList() {
    return (
        <Container>
            <div>TO DO LIST</div>
            <AddCategory/>
            <Categories></Categories>
        </Container>
    )
};

export default ToDoList;