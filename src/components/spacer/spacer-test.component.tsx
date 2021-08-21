import styled, { DefaultTheme } from 'styled-components/native';

interface SizeVariant {
  small: 1;
  medium: 2;
  large: 3;
}

interface PositionVariant {
  top: 'marginTop';
  left: 'marginLeft';
  bottom: 'marginBottom';
  right: 'marginRight';
}

export interface SpacerProps {
  position: PositionVariant;
  size: SizeVariant;
}

const getVariant = (
  position: PositionVariant,
  size: SizeVariant,
  theme: DefaultTheme
) => {
  // const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[size];
  return `${property}:${value}`;
};

export const Spacer = styled.View<SpacerProps>`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;
