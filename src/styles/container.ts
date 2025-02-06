import styled from 'styled-components';

const CONTAINER_MARGIN_LEFT='177px';
const CONTAINER_MARGIN_TOP='60PX';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${CONTAINER_MARGIN_LEFT};
  margin-top: ${CONTAINER_MARGIN_TOP};

  @media (${({ theme }) => theme.media.medium}) {
    margin-left: ${({ theme }) => theme.margins.s};
    flex-direction: column;
    padding: ${({ theme }) => theme.margins.s};
  }
`;
