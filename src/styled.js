import styled from 'styled-components'

export const Header = styled.div`
font-size: 20px;
padding: 8px;
height:2%;
border-bottom: 1px solid black;
`;
export const Footer = styled.div`
font-size: 20px;
padding: 8px;
height:2%;
border-top: 1px solid black;
position: absolute;
bottom:0;
width:97.5%;
display: flex;
flex-direction: column;
align-items: flex-end;
`;

export const Container = styled.div`
display: flex;
height: 100vh;
padding-top:10%;
align-item:center;
justify-content:center;
`

export const ModalContainer = styled.div`
position: absolute;
border: 2px solid black;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
background-color:#ffff;
width: 700px;
height: 40%;
border-radius: 5px;
`
export const Body = styled.div`
display:flex;
flex-direction: row;
height:92%;
`
export const LeftSection = styled.div`
border-right: 1px solid black;
padding: 8px;
width: 20%;
`
export const RightSection = styled.div`
width: 80%;
padding: 8px;
display:flex;
flex-direction:column;
gap:14px;
`
