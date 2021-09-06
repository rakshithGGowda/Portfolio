import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height:100%;
  }
`;
