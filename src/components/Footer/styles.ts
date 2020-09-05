import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: var(--color-white);
  border-top: 1px solid var(--color-border);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  > p {

    > a {
      text-decoration: none;
      color: #000;
    }
  }
`;
