import React from "react";
import theme from "styles/theme";
import Button from "components/atomics/buttons/Button";
import RibonsSparkleNumber from "components/atomics/RibonsSparkleNumber";
import checkIcon from "assets/icons/check-icon.svg";
import * as S from "./styles";

const { colors } = theme;
const { green30, neutral10 } = colors;

export type Props = {
  backgroundColor?: string;
  icon: string;
  ribons?: number;
  title: string;
  description?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  buttonText?: string;
  onClick: () => void;
  counter?: number;
  isCollected?: boolean;
};
function CardSideImageButton({
  icon,
  ribons,
  title,
  buttonTextColor = neutral10,
  buttonBackgroundColor = green30,
  buttonText,
  description,
  onClick,
  counter,
  isCollected,
}: Props): JSX.Element {
  function renderCollectedButton() {
    return (
      buttonText && (
        <Button
          text={buttonText}
          textColor={isCollected ? green30 : buttonTextColor}
          backgroundColor={isCollected ? neutral10 : buttonBackgroundColor}
          borderColor={green30}
          leftIcon={isCollected ? checkIcon : undefined}
          onClick={() => {}}
        />
      )
    );
  }

  return (
    <S.Container onClick={onClick}>
      <S.CardSection>
        <S.Content>
          <S.ImageSection>
            {counter && <S.CounterContainer>{counter}</S.CounterContainer>}
            <S.Image src={icon} alt={title} />
            {ribons && (
              <S.RibonsAmountContainer>
                <RibonsSparkleNumber ribons={ribons} />
              </S.RibonsAmountContainer>
            )}
          </S.ImageSection>

          <S.TextContainer>
            <S.TitleContainer>
              <S.Title>{title}</S.Title>
            </S.TitleContainer>
            {description && (
              <S.DescriptionContainer>
                <S.Description>{description}</S.Description>
              </S.DescriptionContainer>
            )}
            {renderCollectedButton()}
          </S.TextContainer>
        </S.Content>
      </S.CardSection>
    </S.Container>
  );
}

export default CardSideImageButton;
