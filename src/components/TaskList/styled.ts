import styled, { css } from 'styled-components';

const TASKLIST_BACK_COLOR = '#f9f9f9';
const BUTTONICON_BACK_COLOR = '#f1f1f1';
const BUTTONICON_SIZE = '40px';
const MEDIA_BUTTONICON_SIZE = '35px';
const CHECKBOX_SIZE = '20px';
const MEDIA_CHECKBOX_SIZE = '18px';

export const TaskListContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.gap.xs};
    padding: ${theme.margins.s};
    max-width: ${theme.sizeOfElement.xxl};
    width: ${theme.width.max};
    margin: 0 auto;

    @media (${theme.media.medium}) {
      padding: ${theme.margins.xss};
      max-width: ${theme.width.max};
    }
  `}
`;

export const TaskListTitle = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.margins.xxl};
    text-align: center;
    width: 100%;
    font-size: ${theme.fontSize.xl};
    font-weight: ${theme.fontWeight.normal};
    line-height: ${theme.lineHeight.m};

    @media (${theme.media.medium}) {
      margin-top: ${theme.margins.xxl};
      font-size: ${theme.fontSize.l};
      line-height: ${theme.lineHeight.xs};
    }
  `}
`;

export const TaskListWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.gap.xs};
    padding: ${theme.margins.s};
    max-width: ${theme.sizeOfElement.xxxl};
    margin: 0 auto;
    max-height: 400px;
    overflow-y: auto;

    @media (${theme.media.medium}) {
      max-width: ${theme.width.max};
      padding: ${theme.margins.xss};
    }
  `}
`;

export const TaskItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${TASKLIST_BACK_COLOR};
    padding: ${theme.margins.xss};
    border-radius: ${theme.borderRadius.xs};
    box-shadow: ${theme.boxShadow.xsss} ${theme.boxShadow.xss} ${theme.boxShadow.xs}
      ${theme.colors.black};
    width: ${theme.width.max};

    @media (${theme.media.medium}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `}
`;

export const TaskText = styled.span<{ completed: boolean }>`
  ${({ theme, completed }) => css`
    flex-grow: 1;
    font-size: ${theme.fontSize.s};
    text-decoration: ${completed ? 'line-through' : 'none'};
    color: ${completed ? '#b5b5b5' : '#333'};
    margin-left: ${theme.margins.s};

    @media (${theme.media.medium}) {
      font-size: ${theme.fontSize.xs};
      margin-left: ${theme.margins.xsss};
    }
  `}
`;

export const TaskActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.gap.xs};

    @media (${theme.media.medium}) {
      width: ${theme.width.max};
      justify-content: space-between;
    }
  `}
`;

export const Checkbox = styled.input`
  ${({ theme }) => css`
    width: ${CHECKBOX_SIZE};
    height: ${CHECKBOX_SIZE};
    cursor: pointer;
    accent-color: ${theme.colors.secondary};

    @media (${theme.media.medium}) {
      width: ${MEDIA_CHECKBOX_SIZE};
      height: ${MEDIA_CHECKBOX_SIZE};
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.gap.xs};
    cursor: pointer;

    @media (${theme.media.medium}) {
      gap: ${theme.gap.xxs};
    }
  `}
`;

export const ButtonIcon = styled.div<{ isDelete?: boolean }>`
  ${({ theme, isDelete }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${BUTTONICON_SIZE};
    height: ${BUTTONICON_SIZE};
    background-color: ${BUTTONICON_BACK_COLOR};
    border-radius: ${theme.borderRadius.xs};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.colors.secondary};
    }

    svg {
      color: ${isDelete ? BUTTONICON_BACK_COLOR : '#333'};
      font-size: ${theme.fontSize.m};

      @media (${theme.media.medium}) {
        font-size: ${theme.fontSize.xs};
      }
    }

    @media (${theme.media.medium}) {
      width: ${MEDIA_BUTTONICON_SIZE};
      height: ${MEDIA_BUTTONICON_SIZE};
    }
  `}
`;
