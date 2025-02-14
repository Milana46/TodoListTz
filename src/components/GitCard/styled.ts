import styled, { css } from 'styled-components';

const AVATAR_SIZE_SMALL = '150px';

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    border: ${theme.border.xxs} solid ${theme.colors.primary};
    padding: ${theme.margins.s};
    margin-top: ${theme.margins.s};
    text-align: center;
    margin-left: ${theme.margins.xxxl};

    @media (${theme.media.small}) {
      flex-direction: column;
      margin-left: ${theme.margins.s};
      padding: ${theme.margins.xss};
    }
  `}
`;

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: flex-start;

    @media (${theme.media.small}) {
      align-items: center;
    }
  `}
`;

export const AvatarContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: ${theme.sizeOfElement.l};
    height: ${theme.sizeOfElement.l};

    @media (${theme.media.small}) {
      width: ${AVATAR_SIZE_SMALL};
      height: ${AVATAR_SIZE_SMALL};
    }
  `}
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: ${theme.width.max};
    height: ${theme.width.max};
    border-radius: ${theme.borderRadius.s};
    object-fit: cover;
  `}
`;
