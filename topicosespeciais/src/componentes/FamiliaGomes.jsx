import React from "react";
import Nome from "./Nome";

export default props =>
    <div>
        <Nome nome="Mateus " sobrenome={props.sobrenome}/>
        <Nome nome="Bruna " sobrenome={props.sobrenome}/>
        <Nome nome="Amanda " sobrenome={props.sobrenome}/>
        <Nome nome="Paulo " sobrenome={props.sobrenome}/>
    </div>