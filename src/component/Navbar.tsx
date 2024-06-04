import styled from "styled-components";

const Container = styled.div`
    /* display: none;
    flex-direction: column;
    align-items: center; */
    height: calc(100% - 2em);
    width: 15em;
    background-color: black;
    font-size: 17px;
    /* div{
        font-size: 20px;
    } */
`

function Navbar() {
    return (
        <Container>
            <div>ddd</div>
        </Container>
    )
};

export default Navbar;