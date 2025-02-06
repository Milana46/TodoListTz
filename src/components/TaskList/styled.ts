import styled from 'styled-components';

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs};
  padding: ${({ theme }) => theme.margins.s};
  max-width: 500px;
  width: ${({ theme }) => theme.width.max};
  margin: ${({ theme }) => theme.margins.xsss} auto;

  @media (${({ theme }) => theme.media.medium}) {
    padding: ${({ theme }) => theme.margins.xss};
    max-width: ${({ theme }) => theme.width.max};
  }
`;

export const TaskListTitle = styled.text`
  margin-left: 518px;
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
  max-width: 600px;
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
  background-color: #f9f9f9;
  padding: ${({ theme }) => theme.margins.xss};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.black};
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
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.secondary};

  @media (${({ theme }) => theme.media.medium}) {
    width: 18px;
    height: 18px;
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
  width: 40px;
  height: 40px;
  background-color: #f1f1f1;
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
    width: 35px;
    height: 35px;
  }
`;
