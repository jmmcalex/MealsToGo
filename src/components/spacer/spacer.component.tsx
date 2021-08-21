import React from 'react';
import styled from 'styled-components/native';

export enum SpacerTypes {
  TOP_SM = 'TOP_SM',
  TOP_MD = 'TOP_MD',
  TOP_LG = 'TOP_LG',

  LEFT_SM = 'LEFT_SM',
  LEFT_MD = 'LEFT_MD',
  LEFT_LG = 'LEFT_LG',
}

export const Spacer = ({ variant }: { variant: SpacerTypes }) => {
  switch (variant) {
    case SpacerTypes.TOP_SM:
      return <TopSm />;
    case SpacerTypes.TOP_MD:
      return <TopMd />;
    case SpacerTypes.TOP_LG:
      return <TopLg />;
    case SpacerTypes.LEFT_SM:
      return <LeftSm />;
    case SpacerTypes.LEFT_MD:
      return <LeftMd />;
    case SpacerTypes.LEFT_LG:
      return <LeftLg />;
    default:
      return <TopSm />;
  }
};

const TopSm = styled.View`
  margin-top: ${({ theme }) => theme.space[1]};
`;

const TopMd = styled.View`
  margin-top: ${({ theme }) => theme.space[2]};
`;

const TopLg = styled.View`
  margin-top: ${({ theme }) => theme.space[3]};
`;

const LeftSm = styled.View`
  margin-left: ${({ theme }) => theme.space[1]};
`;

const LeftMd = styled.View`
  margin-left: ${({ theme }) => theme.space[2]};
`;

const LeftLg = styled.View`
  margin-left: ${({ theme }) => theme.space[3]};
`;
