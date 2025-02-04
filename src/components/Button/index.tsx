import React, { FC } from "react";

import {StyledAddButton,StyledDeleteButton} from "./style";
interface ButtonProps{
    content: string,
    variant?: "add" | "delete",
    onClick?: VoidFunction
}

export const Button:FC<ButtonProps>=({content, variant, onClick})=>{
    if(variant==="add"){
        return <StyledAddButton onClick={onClick}>{content}</StyledAddButton>
    }
    return(
          <StyledDeleteButton onClick={onClick}>{content}</StyledDeleteButton>
    )
}

     

