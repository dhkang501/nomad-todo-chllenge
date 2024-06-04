import styled from "styled-components";
import AddCategory from "./AddCategory";
import Categories from "./Categories";
import Navbar from "./Navbar";

const Container = styled.div`
    margin: 20px;
    text-align: center;
    div{
        font-size: 20px;
    }
`

function ToDoList() {
    return (
        <Container>
            <Navbar></Navbar>
            <div>TO DO LIST</div>
            <AddCategory/>
            <Categories></Categories>
        </Container>
    )
};

export default ToDoList;