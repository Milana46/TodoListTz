import styled from 'styled-components';

const COLOR_BORDER_BOTTOM = '#9b9b9b';
const IMG_HEIGHT = '29px';
const IMG_WIDTH = '28px';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${({ theme }) => theme.margins.xxxl};
  margin-top: ${({ theme }) => theme.margins.xxl};

  @media (${({ theme }) => theme.media.small}) {
    margin-left: ${({ theme }) => theme.margins.s};
    margin-top: ${({ theme }) => theme.margins.l};
  }
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: ${({ theme }) => theme.lineHeight.xxs};
  margin-bottom: ${({ theme }) => theme.margins.xsx};

  @media (${({ theme }) => theme.media.small}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => theme.border.xxs} solid ${COLOR_BORDER_BOTTOM};
  width: ${({ theme }) => theme.sizeOfElement.xl};

  @media (${({ theme }) => theme.media.small}) {
    width: ${({ theme }) => theme.width.max};
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.margins.xss};
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media (${({ theme }) => theme.media.small}) {
    font-size: ${({ theme }) => theme.fontSize.xss};
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-left: ${({ theme }) => theme.margins.xss};

  img {
    width: ${IMG_WIDTH};
    height: ${IMG_HEIGHT};

    @media (${({ theme }) => theme.media.small}) {
      width: ${({ theme }) => theme.sizeOfElement.xss};
      height: ${({ theme }) => theme.sizeOfElement.xss};
    }
  }

  @media (${({ theme }) => theme.media.small}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
