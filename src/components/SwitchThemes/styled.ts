import styled from 'styled-components';

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
  width: 150px;
  height: 40px;
  background-color: #fffafa;
  border: 1px solid #a1a1a1;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  padding: ${({ theme }) => theme.margins.xss};
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media (${({ theme }) => theme.media.small}) {
    width: ${({ theme }) => theme.width.max};
  }
`;

export const Label = styled.label`
  width: 122px;
  color: #646464;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xxs};

  @media (${({ theme }) => theme.media.small}) {
    width: auto;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Option = styled.option`
  width: 172px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.xxs};

  @media (${({ theme }) => theme.media.small}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
