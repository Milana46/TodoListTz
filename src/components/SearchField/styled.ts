import styled, { css } from 'styled-components';

const COLOR_BORDER_BOTTOM = '#9b9b9b';
const IMG_HEIGHT = '29px';
const IMG_WIDTH = '28px';

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: ${theme.margins.xxxl};
    margin-top: ${theme.margins.xxl};

    @media (${theme.media.small}) {
      margin-left: ${theme.margins.s};
      margin-top: ${theme.margins.l};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.normal};
    font-size: ${theme.fontSize.s};
    line-height: ${theme.lineHeight.xxs};
    margin-bottom: ${theme.margins.xsx};

    @media (${theme.media.small}) {
      font-size: ${theme.fontSize.xs};
    }
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-bottom: ${theme.border.xxs} solid ${COLOR_BORDER_BOTTOM};
    width: ${theme.sizeOfElement.xl};

    @media (${theme.media.small}) {
      width: ${theme.width.max};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    border: none;
    outline: none;
    padding: ${theme.margins.xss};
    font-size: ${theme.fontSize.xs};

    @media (${theme.media.small}) {
      font-size: ${theme.fontSize.xss};
    }
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    cursor: pointer;
    font-size: ${theme.fontSize.s};
    margin-left: ${theme.margins.xss};

    img {
      width: ${IMG_WIDTH};
      height: ${IMG_HEIGHT};

      @media (${theme.media.small}) {
        width: ${theme.sizeOfElement.xss};
        height: ${theme.sizeOfElement.xss};
      }
    }

    @media (${theme.media.small}) {
      font-size: ${theme.fontSize.xs};
    }
  `}
`;
