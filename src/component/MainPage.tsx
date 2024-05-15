import styled from "styled-components";
import AddCategory from "./AddCategory";
import Categories from "./Categories";

const Container = styled.div`
    margin: 20px;
    text-align: center;
    div{
        margin-bottom: 20px;
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