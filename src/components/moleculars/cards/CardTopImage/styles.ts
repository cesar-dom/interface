import styled from "styled-components";

export const Container = styled.div`
  width: 160px;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral10};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.defaultShadow};
`;

export const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

export const Text = styled.p`
  margin-top: 16px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray40};
`;
