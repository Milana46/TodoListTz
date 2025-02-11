import styled, { css } from 'styled-components';

interface StyledButtonProps {
  variant: 'add' | 'delete';
}

const BUTTON_HEIGHT = '67px';
const BUTTON_DELETE_BACK_COLOR = '#FF4081';
const BUTTON_ADD_BACK_COLOR = '#3E50B5';

const VARIANT_ADD = 'add';
const VARIANT_DELETE = 'delete';

const baseButtonStyles = css`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.s};
    height: ${BUTTON_HEIGHT};
    font-size: ${theme.fontSize.l};
    line-height: ${theme.lineHeight.s};
    font-weight: ${theme.fontWeight.normal};
    text-align: center;

    @media (${theme.media.medium}) {
      width: ${theme.width.max};
      justify-content: center;
      margin-left: ${theme.margins.xsss};
      font-size: ${theme.fontSize.s};
      height: auto;
      padding: ${theme.margins.s};
    }
  `}
`;

const deleteButtonStyles = css`
  background-color: ${BUTTON_DELETE_BACK_COLOR};

  ${({ theme }) => css`
    margin-left: ${theme.margins.xxxxxxl};
    width: ${theme.width.midle};

    @media (${theme.media.medium}) {
      margin-top: ${theme.margins.l};
    }
  `}
`;

const addButtonStyles = css`
  background-color: ${BUTTON_ADD_BACK_COLOR};

  ${({ theme }) => css`
    margin-left: ${theme.margins.xsss};
    width: ${theme.width.xsmidle};

    @media (${theme.media.medium}) {
      margin-top: ${theme.margins.xxl};
    }
  `}
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${baseButtonStyles}
  ${({ variant }) => (variant === VARIANT_DELETE ? deleteButtonStyles : addButtonStyles)}
`;
