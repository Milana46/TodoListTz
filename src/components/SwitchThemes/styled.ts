import styled from 'styled-components';

const SELECT_WIDTH = '150px';
const SELECT_HEIGHT = '40px';
const SELECT_BACK_COLOR = '#fffafa';
const SELECT_BORDER_COLOR = '#a1a1a1';

export const ThemeContainer = styled.div`
  margin-top: ${({ theme }) => theme.margins.xll};
  margin-bottom: ${({ theme }) => theme.margins.s};
  margin-left: ${({ theme }) => theme.margins.xxxl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xxs};

  @media (${({ theme }) => theme.media.small}) {
    margin-left: ${({ theme }) => theme.margins.s};
    margin-top: ${({ theme }) => theme.margins.l};
  }
`;

export const Select = styled.select`
  width: ${SELECT_WIDTH};
  height: ${SELECT_HEIGHT};
  background-color: ${SELECT_BACK_COLOR};
  border: 1px solid ${SELECT_BORDER_COLOR};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  padding: ${({ theme }) => theme.margins.xss};
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media (${({ theme }) => theme.media.small}) {
    width: ${({ theme }) => theme.width.max};
  }
`;

export const Label = styled.label`
  width: ${({ theme }) => theme.sizeOfElement.s};
  color: ${({ theme }) => theme.colors.brown};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xxs};

  @media (${({ theme }) => theme.media.small}) {
    width: auto;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Option = styled.option`
  width: ${({ theme }) => theme.sizeOfElement.m};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xxs};

  @media (${({ theme }) => theme.media.small}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
