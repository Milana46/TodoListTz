import React, { FC } from 'react';
import gitHub from '@/assets/images/gitHub.png';

import { Avatar, AvatarContainer, Card, CardWrapper } from './styled';

interface GitCardProps {
  login: string;
}

export const GitCard: FC<GitCardProps> = ({ login }) => {
  return (
    <CardWrapper>
      <Card>
        <AvatarContainer>
          <p>
            <strong>Login:</strong> {login}
          </p>
          <Avatar src={gitHub} alt="GitHub Avatar"></Avatar>
        </AvatarContainer>
      </Card>
    </CardWrapper>
  );
};
