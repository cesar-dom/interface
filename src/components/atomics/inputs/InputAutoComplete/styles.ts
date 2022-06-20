import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    position: absolute;
    width: 100%;
    max-width: 300px;
    z-index: 999;
    box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.15);
    border-radius: 8px;
  `}
`;

export const Input = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    max-width: 472px;
    height: 40px;
    padding-left: 4px;
    margin-bottom: 12px;
    display: inline-block;
    color: ${theme.colors.ribonBlack};
    border: 1px solid ${theme.colors.ribonBlue};
    position: relative;

    label {
      position: relative;
      top: -9px;
      left: 10px;
      font-size: 14px;
      text-align: center;
      padding: 0 2px;
      display: inline;
      background-color: ${theme.colors.bgGray};
      color: ${theme.colors.ribonBlue};

      @media (min-width: ${theme.breakpoints.desktop}) {
        top: -8px;
      }
    }

    input {
      padding: 0 10px;
      border: none;
      position: relative;
      top: -5px;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: Lato;
      font-size: 14px;
      line-height: 20px;
      width: 100%;

      @media (min-width: ${theme.breakpoints.desktop}) {
        top: -8px;
      }

      &:hover {
        cursor: pointer;
      }
    }

    &:hover {
      cursor: pointer;
    }
  `}
`;

export const OptionContainer = styled.div`
  ${({ theme }) => css`
    padding: 8px 16px;
    background-color: ${theme.colors.bgGray};
    width: 100%;

    &:hover {
      background-color: ${theme.colors.hoverGray};
      cursor: pointer;
    }
  `}
`;

export const OptionText = styled.h4`
  font-weight: bold;
  line-height: 22px;
`;
