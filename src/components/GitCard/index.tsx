import React, { FC } from 'react';
import { Avatar, AvatarContainer, Card, CardWrapper } from './styled';

interface GitCardProps {
  login: string;
  userUrl: string;
}

export const GitCard: FC<GitCardProps> = ({ login, userUrl }) => {
  return (
    <CardWrapper>
      <Card>
        <AvatarContainer>
          <p>
            <strong>Login:</strong> {login}
          </p>
          <Avatar src={userUrl} alt="GitHub Avatar" />
        </AvatarContainer>
      </Card>
    </CardWrapper>
  );
};
