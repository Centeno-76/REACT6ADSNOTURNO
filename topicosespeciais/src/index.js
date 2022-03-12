import React from "react";
import  ReactDOM  from "react-dom";
import  Component1  from "./componentes/Componente1";
import { CompA,CompB } from "./componentes/DoisComponentes";
// import MultiElementos from "./componentes/MultiElementos";
import { Teste1,Teste2,Teste3 } from "./componentes/MultiElementos";
import FamiliaGomes from "./componentes/FamiliaGomes";
import Familia from "./componentes/Familia";
import Nome from "./componentes/Nome";
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
import Pai from "./componentes/Pai";

const element = document.getElementById('root')

ReactDOM.render(
        <div>
            {/* <Component1 valor="Ola pessoal" soma={3+4}/>
            <CompA valor="Primeiro Componente"/>
            <CompB valor="Segundo componente"/> */}
            {/* <Teste1 />
            <Teste2 />
            <Teste3 /> */}
            {/* <FamiliaGomes /> */}
            {/* <Familia>
                <Nome nome="joão" sobrenome="Cintra"/>
                <Nome nome="Carlos" sobrenome="Cintra"/>
                <Nome nome="Talhes" sobrenome="Cintra"/>
            </Familia>
            <Familia>
                <Nome nome="Mateus" sobrenome="Centeno"/>
                <Nome nome="Amanda" sobrenome="Centeno"/>
                <Nome nome="Bruna" sobrenome="Centeno"/>
            </Familia> */}
            {/* <FamiliaGomes sobrenome="Centeno" /> */}
            {/* <Familia sobrenome="Centeno  " endereco="Rua Tal  " numero="2431  " cidade="Franca  " estado="  São Paulo">
                <Nome nome="Mateus "/>
                <Nome nome="João "/>
                <Nome nome="Carlos "/>
            </Familia> */}
            {/* <ComponenteComFuncao /> */}
            <Pai />
        </div>
    , element
)
