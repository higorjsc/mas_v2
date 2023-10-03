
const CORES = {
    fluxoVerde: "rgba(14, 224, 49, 0.8)",
    fluxoAzul: "rgba(31, 191, 219, 0.493)",
    fluxoVermelho: "rgba(227, 22, 22, 0.742)",
    defaultColor: {
        start: "var(--cor-tema-alt)",
        logistica: "var(--cor-tema-alt)",
        rockMass: "white",
        surfaceMaterial: "white",
        openPit: "white",
        prodCenter: "white",
        prodLeft: "white",
        depthCenter: "white",
        depthLeft: "white",
        correia: "var(--cor-tema-alt)",
        rampa: "var(--cor-tema-alt)",
        shaft: "var(--cor-tema-alt)"
    },
    defaultFontColor: {
        start: "white",
        logistica: "white",
        rockMass: "black",
        surfaceMaterial: "black",
        openPit: "black",
        prodCenter: "black",
        prodLeft: "black",
        depthCenter: "black",
        depthLeft: "black",
        correia: "white",
        rampa: "white",
        shaft: "white"
    }
}
const IMGS = {
    defaultIlustrations: {
        orebody: true,
        superficie: true,
        superficiePit: false,
        ventilacao: true,
        usina: true,
        shaft: false,
        rampa: false,
        rampaPit: false,
        truck: false,
        correia: false,
        pit: false
    }
}
const TEMAS = {
    temaVermelho: {
        HoverColor: "#300202d6",
        mainColor: "#650505d6",
        altColor: "#A72525",
        shadowInput: "-5px 0 5px  rgb(0 0 0 / 95%",
        shadowHover: "0 0 10px #650505d6",
        textColor: "white"
    },
    temaAzulClassico: {
        HoverColor: "#112536",
        mainColor: "#304454",
        shadowInput: "-5px 0 5px  rgb(0 0 0 / 95%",
        shadowHover: "0 0 10px #304454",
        textColor: "white"
    },
    temaAzulEscuro: {
        HoverColor: "#09131c",
        mainColor: "#112536",
        shadowInput: "-5px 0 5px  rgb(0 0 0 / 95%",
        shadowHover: "0 0 10px #304454",
        textColor: "white"
    },
    temaVerde: {
        HoverColor: "#14361e",
        mainColor: "#0d3313",
        altColor: "rgba(3, 49, 3, 0.8)",
        shadowInput: "-5px 0 5px  rgb(0 0 0 / 95%",
        shadowHover: "0 0 10px #58ed82",
        textColor: "white"
    }
}

const RI = [0, 0, 0, 0.58, 0.9, 1.12, 1.24, 1.32, 1.41, 1.45, 1.49]

export {
    CORES,
    TEMAS,
    RI,
    IMGS
}
