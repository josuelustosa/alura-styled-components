import React from "react"

import { IconeTema } from "../Components/UI"
import alimentacao from "../assets/images/alimentacao.svg"
import utilidades from "../assets/images/utilidades.svg"
import saude from "../assets/images/saude.svg"
import transporte from "../assets/images/transporte.svg"
import outros from "../assets/images/outros.svg"

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
        Saude: <IconeTema src={saude} alt="Saúde" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        Outros: <IconeTema src={outros} alt="Outros" />,
    }

    return Images[type] || Images.Outros;
};