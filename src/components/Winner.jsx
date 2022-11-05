import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function Winner() {
    
    const { winner } = useContext(AppContext)

    return (
        <div>Hurrah! <br/><span>{winner}</span> - WON : )</div>
    )
}

export default Winner