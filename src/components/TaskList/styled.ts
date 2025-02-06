import styled from 'styled-components';

const TASKLIST_BACK_COLOR = '#f9f9f9';
const BUTTONICON_BACK_COLOR = '#f1f1f1';
const BUTTONICON_SIZE = '40px';
const MEDIA_BUTTONICON_SIZE = '35px';
const CHECKBOX_SIZE = '20px';
const MEDIA_CHECKBOX_SIZE = '18px';

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs};
  padding: ${({ theme }) => theme.margins.s};
  max-width: ${({ theme }) => theme.sizeOfElement.xxl};
  width: ${({ theme }) => theme.width.max};
  margin: ${({ theme }) => theme.margins.xsss} auto;

  @media (${({ theme }) => theme.media.medium}) {
    padding: ${({ theme }) => theme.margins.xss};
    max-width: ${({ theme }) => theme.width.max};
  }
`;

export const TaskListTitle = styled.text`
  margin-left: ${({ theme }) => theme.margins.xxvvv};
  margin-top: ${({ theme }) => theme.margins.xxxxxl};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.m};

  @media (${({ theme }) => theme.media.medium}) {
    margin-left: ${({ theme }) => theme.margins.xsss};
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: ${({ theme }) => theme.lineHeight.xs};
  }
`;

export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs};
  padding: ${({ theme }) => theme.margins.s};
  max-width: ${({ theme }) => theme.sizeOfElement.xxxl};
  margin: ${({ theme }) => theme.margins.xsss} auto;
  max-height: 400px;
  overflow-y: auto;

  @media (${({ theme }) => theme.media.medium}) {
    max-width: ${({ theme }) => theme.width.max};
    padding: ${({ theme }) => theme.margins.xss};
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${TASKLIST_BACK_COLOR};
  padding: ${({ theme }) => theme.margins.xss};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  box-shadow: box-shadow: ${({ theme }) => `${theme.boxShadow.xsss}, ${theme.boxShadow.xss}, ${theme.boxShadow.xs}`} ${({ theme }) => theme.colors.black};
  width: ${({ theme }) => theme.width.max};

  @media (${({ theme }) => theme.media.medium}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TaskText = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#b5b5b5' : '#333')};
  margin-left: ${({ theme }) => theme.margins.s};

  @media (${({ theme }) => theme.media.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-left: ${({ theme }) => theme.margins.xsss};
  }
`;

export const TaskActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs};

  @media (${({ theme }) => theme.media.medium}) {
    width: ${({ theme }) => theme.width.max};
    justify-content: space-between;
  }
`;

export const Checkbox = styled.input`
  width: ${CHECKBOX_SIZE};
  height: ${CHECKBOX_SIZE};
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.secondary};

  @media (${({ theme }) => theme.media.medium}) {
    width: ${MEDIA_CHECKBOX_SIZE};
    height: ${MEDIA_CHECKBOX_SIZE};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.xs};
  cursor: pointer;

  @media (${({ theme }) => theme.media.medium}) {
    gap: ${({ theme }) => theme.gap.xxs};
  }
`;

export const ButtonIcon = styled.div<{ isDelete?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${BUTTONICON_SIZE};
  height: ${BUTTONICON_SIZE};
  background-color: ${BUTTONICON_BACK_COLOR};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    color: ${(props) => (props.isDelete ? 'red' : '#333')};
    font-size: ${({ theme }) => theme.fontSize.m};

    @media (${({ theme }) => theme.media.medium};) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    width: ${MEDIA_BUTTONICON_SIZE};
    height: ${MEDIA_BUTTONICON_SIZE};
  }
`;
