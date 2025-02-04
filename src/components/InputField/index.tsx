import React, { FC } from "react";

import {StyledInput, StyledLabel} from "./style";


export const InputField:FC=()=>{
    return(
      <div>
      <StyledLabel>Add a new task</StyledLabel>
      <StyledInput type="text" value={"hello"}/>
    </div>
    )
}
