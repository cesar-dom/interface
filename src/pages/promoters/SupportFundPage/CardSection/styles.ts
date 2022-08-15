import styled from "styled-components";
import Button from "components/atomics/buttons/Button";

export const CardSectionContainer = styled.div`
  margin-top: 24px;
`;

export const Subtitle = styled.p`
  margin-top: 20px;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    font-size: 18px;
  }
`;

export const ValuesContainer = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
`;

export const CardValueButton = styled(Button)`
  max-width: 112px;
  height: 30px;
  border-radius: 66px;
  font-size: 12px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 12px 16px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-self: end;
  background-color: white;
  box-shadow: 0 -4px 4px ${({ theme }) => theme.colors.ribonShadow};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    height: 60px;
    padding: 0;
    position: static;
    box-shadow: none;

    button {
      height: 40px;
    }
  }
`;

export const FinishButton = styled(Button)`
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    height: 56px;
  }
`;

export const GivingValue = styled.h4`
  margin-top: 4px;
  font-weight: 900;
  font-size: 24px;
  line-height: 38.4px;
  color: ${({ theme }) => theme.colors.ribonBlack};
`;

export const NetGivingValue = styled.p`
  font-size: 14px;
  line-height: 23.8px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ServiceFeesValue = styled.p`
  font-size: 14px;
  line-height: 23.8px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const CryptoGivingValue = styled.p`
  margin-bottom: 32px;
  font-style: italic;
  font-size: 12px;
  line-height: 19.2px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
