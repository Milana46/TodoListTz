import styled from 'styled-components';

const BUTTON_HEIGHT = '67px';
const BUTTON_DELETE_BACK_COLOR = '#FF4081';
const BUTTON_ADD_BACK_COLOR = '#3E50B5';

const VARIANT_ADD = 'add';
const VARIANT_DELETE = 'delete';

const getButtonStyles = (theme: any) => `
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
`;

interface StyledButtonProps {
  variant: typeof VARIANT_ADD | typeof VARIANT_DELETE;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme }) => getButtonStyles(theme)}

  background-color: ${({ variant }) =>
    variant === VARIANT_DELETE ? BUTTON_DELETE_BACK_COLOR : BUTTON_ADD_BACK_COLOR};

  margin-left: ${({ variant, theme }) =>
    variant === VARIANT_DELETE ? theme.margins.xxxxxxl : theme.margins.xsss};

  width: ${({ variant, theme }) =>
    variant === VARIANT_DELETE ? theme.width.midle : theme.width.xsmidle};

  @media (${({ theme }) => theme.media.medium}) {
    ${({ variant, theme }) => variant === VARIANT_ADD && `margin-top: ${theme.margins.xxl};`}

    ${({ variant, theme }) => variant === VARIANT_DELETE && `margin-top: ${theme.margins.l};`}
  }
`;
