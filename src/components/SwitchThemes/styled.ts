import styled, { css } from 'styled-components';

const SELECT_WIDTH = '150px';
const SELECT_HEIGHT = '40px';
const SELECT_BACK_COLOR = '#fffafa';
const SELECT_BORDER_COLOR = '#a1a1a1';

export const ThemeContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.margins.xll};
    margin-bottom: ${theme.margins.s};
    margin-left: ${theme.margins.xxxl};
    display: flex;
    flex-direction: column;
    gap: ${theme.gap.xxs};

    @media (${theme.media.small}) {
      margin-left: ${theme.margins.s};
      margin-top: ${theme.margins.l};
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    width: ${SELECT_WIDTH};
    height: ${SELECT_HEIGHT};
    background-color: ${SELECT_BACK_COLOR};
    border: 1px solid ${SELECT_BORDER_COLOR};
    border-radius: ${theme.borderRadius.s};
    padding: ${theme.margins.xss};
    font-size: ${theme.fontSize.xs};

    @media (${theme.media.small}) {
      width: ${theme.width.max};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    width: ${theme.sizeOfElement.s};
    color: ${theme.colors.brown};
    font-size: ${theme.fontSize.s};
    font-weight: ${theme.fontWeight.normal};
    line-height: ${theme.lineHeight.xxs};

    @media (${theme.media.small}) {
      width: auto;
      font-size: ${theme.fontSize.xs};
    }
  `}
`;

export const Option = styled.option`
  ${({ theme }) => css`
    width: ${theme.sizeOfElement.m};
    font-size: ${theme.fontSize.s};
    font-weight: ${theme.fontWeight.normal};
    line-height: ${theme.lineHeight.xxs};

    @media (${theme.media.small}) {
      font-size: ${theme.fontSize.xs};
    }
  `}
`;
