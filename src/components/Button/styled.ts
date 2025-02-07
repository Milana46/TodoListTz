import styled, { css } from 'styled-components';

const BUTTON_HEIGHT = '67px';

const buttonStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  height: ${BUTTON_HEIGHT};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.lineHeight.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;

  @media (${({ theme }) => theme.media.medium}) {
    width: ${({ theme }) => theme.width.max};
    justify-content: center;
    margin-left: ${({ theme }) => theme.margins.xsss};
    font-size: ${({ theme }) => theme.fontSize.s};
    height: auto;
    padding: ${({ theme }) => theme.margins.s};
  }
`;

interface StyledButtonProps {
  variant: 'add' | 'delete';
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyles}
  background-color: ${({ variant }) => (variant === 'delete' ? '#FF4081' : '#3E50B5')};
  margin-left: ${({ variant }) => (variant === 'delete' ? '330px' : '0')};
  width: ${({ variant }) => (variant === 'delete' ? '238px' : '199px')};

  @media (${({ theme }) => theme.media.medium}) {
    ${({ variant }) =>
      variant === 'add' &&
      css`
        margin-top: ${({ theme }) => theme.margins.xxl};
      `}

    ${({ variant }) =>
      variant === 'delete' &&
      css`
        margin-top: ${({ theme }) => theme.margins.l};
      `}
  }
`;
