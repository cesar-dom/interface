import styled from "styled-components";
import { Link } from "react-router-dom";
import { defaultParagraphSmall } from "styles/typography/default";

type Props = {
  theme: any;
  enabled: boolean;
};

export const Container = styled.div`
  width: 100%;
  padding: 3px 12px;
  position: fixed;
  bottom: 0;
  z-index: ${({ theme }) => theme.zindex.navbar};
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-self: flex-end;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0 -2px 4px ${({ theme }) => theme.colors.defaultShadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    max-width: 80px;
    min-height: 100vh;
    padding: 56px 0;
    position: fixed;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    justify-content: flex-start;
    background: ${({ theme }) => theme.colors.neutral10};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};
  }
`;

export const Title = styled.p`
  ${defaultParagraphSmall}
  text-decoration: none;
  color: ${({ theme, enabled }: Props) =>
    enabled ? theme.colors.gray40 : theme.colors.gray30};
`;

export const StyledLink = styled(Link)`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: space-between;
  text-decoration: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    gap: 6px;
  }
`;

export const Icon = styled.img`
  height: 30px;
`;
