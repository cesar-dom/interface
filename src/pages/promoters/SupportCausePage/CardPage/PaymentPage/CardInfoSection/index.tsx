import InputText from "components/atomics/inputs/InputText";
import { useCardPaymentInformation } from "contexts/cardPaymentInformationContext";
import { useCurrentUser } from "contexts/currentUserContext";
import { maskToCreditCard } from "lib/maskToCreditCard";
import { maskToExpirationDate } from "lib/maskToExpirationDate";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logEvent } from "services/analytics";
import * as S from "./styles";

function CardInfoSection() {
  const { t } = useTranslation("translation", {
    keyPrefix:
      "promoters.supportTreasurePage.cardSection.paymentInformationPage.paymentInformationSection",
  });

  const {
    email,
    setEmail,
    name,
    setName,
    number,
    setNumber,
    expirationDate,
    setExpirationDate,
    cvv,
    setCvv,
    setButtonDisabled,
  } = useCardPaymentInformation();

  const { currentUser } = useCurrentUser();

  useEffect(() => {
    logEvent("treasureSupportPayment_view");
  }, []);

  const maskExpiration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(maskToExpirationDate(e.target.value));
  };

  const maskCreditCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(maskToCreditCard(e.target.value));
  };

  useEffect(() => {
    setButtonDisabled(
      !(email && number && name && expirationDate && cvv.length >= 3),
    );
  }, [email, number, name, expirationDate, cvv]);

  return (
    <S.PaymentInformationSectionContainer>
      <S.Form>
        <InputText
          name="email"
          placeholder={t("email")}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!!currentUser?.email}
          required
        />
        <InputText
          name="number"
          placeholder={t("cardNumber")}
          value={number}
          onChange={maskCreditCard}
          maxLength={19}
          minLength={19}
          required
        />
        <InputText
          name="name"
          placeholder={t("cardName")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <S.Half>
          <InputText
            name="expirationDate"
            autofill="cc-exp"
            value={expirationDate}
            placeholder={t("cardDueDate")}
            onChange={maskExpiration}
            maxLength={7}
            required
          />
          <InputText
            name="cvv"
            placeholder={t("cvv")}
            maxLength={4}
            minLength={3}
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </S.Half>
      </S.Form>
    </S.PaymentInformationSectionContainer>
  );
}

export default CardInfoSection;
