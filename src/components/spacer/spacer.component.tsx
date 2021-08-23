import styled, { DefaultTheme } from 'styled-components/native';

export const SizeMap = {
  small: 1,
  medium: 2,
  large: 3,
};

export const PositionMap = {
  top: 'marginTop',
  left: 'marginLeft',
  bottom: 'marginBottom',
  right: 'marginRight',
};

export type SizeVariants = 'small' | 'medium' | 'large';
export type PositionVariants = 'top' | 'left' | 'bottom' | 'right';

export interface SpacerProps {
  position: PositionVariants;
  size: SizeVariants;
  theme: DefaultTheme;
}

const getVariant = ({ position, size, theme }: SpacerProps) => {
  const sizeIndex = SizeMap[size];
  const property = PositionMap[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

export const Spacer = styled.View<SpacerProps>`
  ${({ position, size, theme }) => getVariant({ position, size, theme })}
`;
