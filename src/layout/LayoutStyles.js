import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;
height: 100vh
scroll-snap-type: y proximity;
overflow-y: scroll;

::-webkit-scrollbar {
    display: none;
  }
  
    -ms-overflow-style: none; 
    scrollbar-width: none; 
`;
