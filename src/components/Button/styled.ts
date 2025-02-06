import styled, { css } from 'styled-components';

const DELETE_BUTTON_COLOR = '#FF4081';
const ADD_BUTTON_COLOR = '#3E50B5';
const DELETE_BUTTON_WIDTH = '238px';
const ADD_BUTTON_WIDTH = '199px';
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

export const StyledDeleteButton = styled.button`
  ${buttonStyles}
  background-color: ${DELETE_BUTTON_COLOR};
  margin-left: 320px;
  width: ${DELETE_BUTTON_WIDTH};
`;

export const StyledAddButton = styled.button`
  ${buttonStyles}
  background-color: ${ADD_BUTTON_COLOR};
  width: ${ADD_BUTTON_WIDTH};
`;
