import styled from 'styled-components';

const AVATAR_SIZE = '200px';
const AVATAR_SIZE_SMALL = '150px';

export const Card = styled.div`
  display: flex;
  border: ${({ theme }) => `${theme.border.xxs} solid ${theme.colors.primary}`};
  padding: ${({ theme }) => theme.margins.s};
  margin-top: ${({ theme }) => theme.margins.s};
  text-align: center;
  margin-left: ${({ theme }) => theme.margins.xxxl};

  @media (${({ theme }) => theme.media.small}) {
    flex-direction: column;
    margin-left: ${({ theme }) => theme.margins.s};
    padding: ${({ theme }) => theme.margins.xss};
  }
`;

export const CardWrapper = styled.div`
  flex-direction: column;
  align-items: flex-start;

  @media (${({ theme }) => theme.media.small}) {
    align-items: center;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: ${AVATAR_SIZE};
  height: ${AVATAR_SIZE};

  @media (${({ theme }) => theme.media.small}) {
    width: ${AVATAR_SIZE_SMALL};
    height: ${AVATAR_SIZE_SMALL};
  }
`;

export const Avatar = styled.img`
  width: ${({ theme }) => theme.width.max};
  height: ${({ theme }) => theme.width.max};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  object-fit: cover;
`;
