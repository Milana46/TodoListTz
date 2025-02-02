import React, { FC } from "react";
import {Card, Avatar, CardWrapper, AvatarContainer} from "./style";


interface GitCardProps{
    login:string,
    userUrl:string
}

export const GitCard: React.FC<GitCardProps> = ({ login, userUrl }) => {
    return (
      <CardWrapper>
        <Card>
          <AvatarContainer>
            <p><strong>Login:</strong> {login}</p>
            <Avatar src={userUrl} alt="GitHub Avatar" />
          </AvatarContainer>
        </Card>
      </CardWrapper>
    );
  };