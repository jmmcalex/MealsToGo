import styled, { DefaultTheme } from 'styled-components/native';

const body = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme: DefaultTheme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.caption};
  color: ${theme.colors.text.secondary}
`;

const label = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const title = (theme: DefaultTheme) => `
  font-size: ${theme.fontSizes.title};
`;

const TextVariantMap = {
  body,
  label,
  caption,
  error,
  hint,
  title,
};

type TextVariants = 'body' | 'label' | 'caption' | 'error' | 'hint' | 'title';

const defaultTextStyles = (theme: DefaultTheme) => `
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export type TextProps = {
  variant: TextVariants;
  theme: DefaultTheme;
};

export const Text = styled.Text<TextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => TextVariantMap[variant](theme)}
`;
