import styled from 'styled-components';

export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
  padding: 50px 0;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);

  @media (min-width: 768px) {
    width: 680px;
    padding: 100px 0;
  }

  @media (min-width: 1100px) {
    width: 850px;
  }
`;
