import styled from 'styled-components';

export const LoginBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--palette1);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--palette2);
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 80vw;
  border-radius: 20px;
  box-shadow: 10px 12px 10px 15px rgb(90, 87, 87);
  -webkit-box-shadow: 10px 12px 30px 25px rgb(90, 87, 87);
  -moz-box-shadow: 10px 12px 30px 25px rgb(90, 87, 87);
`;
export const H1 = styled.h1`
  font-family: 'Barlow', sans-serif;
  color: var(--palette3);
  font-size: xx-large;
  align-self: flex-start;
  padding: 2rem 0 0 2rem;
`;
export const Block = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
  height: 80vh;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Image = styled.img`
  height: 40rem;
  align-self: flex-end;
`;
export const Form = styled.form`
  align-self: center;
`;
export const Input = styled.input`
  :focus {
    box-shadow: 10px 12px 10px 15px rgb(90, 87, 87);
    -webkit-box-shadow: 10px 12px 30px 25px rgb(90, 87, 87);
    -moz-box-shadow: 10px 12px 30px 25px rgb(90, 87, 87);
  }
`;
