// translation.js
const translation = {
  en: {
    
    // GERAL
    selectMethod: 'SELECT THE METHOD',
    ptSwitchLanguage: 'PT',
    enSwitchLanguage: 'EN',
    tituloFluxograma: "FLOWCHART",
    tituloInputs: "SELECTION PARAMETERS",
    tituloIlustration: "ILUSTRATION",
    observations: "NOTES:",
    references: "REFERENCES:",

    // CARDOZO
    tituloCardozo: "SELECTION OF ACESS FOR UNDERGROUND MINING: Cardozo Method (2023)",
    paragrafoDescriptionCardozo: ""
    + "The Cardozo method (2023) for selecting underground mine acess is a combination and update of the procedures proposed by Moser (1996) and La Vergne (2003)."
    + "In this method, Cardozo incorporates  some of the parameters proposed by Moser into the flowchart layout presented by La Vergne, and updates the proposed values as limits for depth and production according to the reality of 2023.  "
    ,
    pragrafoExplicacaoCardozo: ""
      + "The Cardozo method (2023) for selecting underground mine acess is a combination and update of the procedures proposed by Moser (1996) and La Vergne (2003)."
      + "In this method, Cardozo incorporates  some of the parameters proposed by Moser into the flowchart layout presented by La Vergne, and updates the proposed values as limits for depth and production according to the reality of 2023.  "
      + "<br><br><strong>Notes:</strong><br>"
      + "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning."
      + "<br><br>Referênces:<br>"
      + "<a href ='http://dx.doi.org/10.1590/0370-44672021760094' target ='_blank'>- CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.<br/></a>"
      + "<a href ='http://hdl.handle.net/10183/262393' target ='_blank'>- CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.</a>"
    ,        
    // Inputs cardozo
    smTituloCardozo: "Surface material",
    smDescriptionCardozo: "Thickness of unconsolidated material:",
    smMenorCardozo: " <70 m",
    smMaiorCardozo: " >70 m",
    rmTituloCardozo: "Rock mass conditions",
    rmDescriptionCardozo: "RMR class of rock mass:",
    rmMenorCardozo: "I - IV",
    rmMaiorCardozo: "V",
    depthTituloCardozo: "Depth",
    depthDescriptionCardozo: "Orebody deepest point:",
    prodTituloCardozo: "Production",
    prodDescriptionCardozo: "Projected production for the mine in kt per year:",
    // Fluxograma cardozo
    startFluxoCardozo: 'START',
    smFluxoCardozo: 'SURFACE MATERIAL',
    rmFluxoCardozo: 'ROCK MASS',
    depthCenterFluxoCardozo: 'OREBODY <1700 m DEEP',
    prodCenterFluxoCardozo: 'PRODUCTION <7.5 kt/d',
    depthLeftFluxoCardozo: 'OREBODY <700 m DEEP',
    prodLeftFluxoCardozo: 'PRODUCTION <1.5 kt/d',
    shaftFluxoCardozo: 'VERTICAL SHAFT HOISTING',
    correiaFluxoCardozo: 'RAMP HAULAGE BY TRUCK',
    rampaFluxoCardozo: 'INCLINED BELT CONVEYOR',

    // MOSER
    tituloInputsMoser: 'SELECTION PARAMETERS',
    labelCoberturaSuperficialMoser: 'Surface material',
    // Fluxograma moser
    logisticaFluxoMoser: 'USE TRUCKS',
    rmFluxoMoser: 'ROCK MASS',
    smFluxoMoser: 'SURFACE MATERIAL',
    opFluxoMoser: 'ACESS BY OPEN PIT',
    depthLeftFluxoMoser: 'DEEPEST POINT',
    prodLeftFluxoMoser: 'PRODUCTION',
    depthCenterFluxoMoser: 'DEEPEST POINT',
    prodCenterFluxoMoser: 'PRODUCTION',
    rampaFluxoMoser: 'RAMP',
    shaftFluxoMoser: 'SHAFT',
    // Inputs moser
    logisticaTituloMoser: "Logistics",
    logisticaDescriptionMoser: "Is the mine going to use trucks?",
    rmTituloMoser: "Rock mass conditions",
    rmDescriptionMoser: "Class of rock mass quality:",
    rmMenorMoser: "I-V",
    rmMaiorMoser: "VI-VII",
    smTituloMoser: "Surface material",
    smDescriptionMoser: "Thickness of unconsolidated material:",
    smMenorMoser: " <70 m",
    smMaiorMoser: " >70 m",
    opTituloMoser: "Acess",
    opDescriptionMoser: "Acess from open pit mining?",
    depthTituloMoser: "Depth",
    depthDescriptionMoser: "Orebody deepest point:",
    prodTituloMoser: "Produção",
    prodDescriptionMoser: "Projected production for the mine in kt per year:",


    // VERGNE
    tituloVergne: "SELECTION OF ACESS FOR UNDERGROUND MINING: La Vergne Method (2003)",
    pragrafoExplicacaoVergne: ""
     ,  
    // Inputs vergne
    smTituloVergne: "Surface material",
    smDescriptionVergne: "Narrow layer of unconsolidated materials?",
    rmTituloVergne: "Rock mass conditions",
    rmDescriptionVergne: "Is the rock intact and of good quality/strength?",
    depthTituloVergne: "Depth",
    depthDescriptionVergne: "Orebody deepest point:",
    prodTituloVergne: "Production",
    prodDescriptionVergne: "Projected production for the mine in kt per day:",
    // Fluxograma vergne
    startFluxoVergne: 'START',
    smFluxoVergne: 'SURFACE MATERIAL',
    rmFluxoVergne: 'ROCK MASS',
    depthCenterFluxoVergne: 'OREBODY <500 m DEEP',
    prodCenterFluxoVergne: 'PRODUCTION <5 kt/d',
    depthLeftFluxoVergne: 'OREBODY <300 m DEEP',
    prodLeftFluxoVergne: 'PRODUCTION <2.5 kt/d',
    shaftFluxoVergne: 'VERTICAL SHAFT HOISTING',
    correiaFluxoVergne: 'RAMP HAULAGE BY TRUCK',
    rampaFluxoVergne: 'INCLINED BELT CONVEYOR',
},

  pt: {
    // GERAL
    ptSwitchLanguage: 'PT',
    enSwitchLanguage: 'EN',
    selectMethod: 'SELECIONE O MÉTODO',
    sim: 'Sim',
    nao: 'Não',
    tituloFluxograma: 'FLUXOGRAMA',
    tituloInputs: 'PARÂMETROS DE ESCOLHA',
    tituloIlustration: "ILUSTRAÇÃO",
    observations: "OBSERVAÇÕES",
    references: `REFERÊNCIAS`+'\n'+'\n'+'\n',


    // CARDOZO
    tituloCardozo: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método Cardozo (2023)",

    paragrafoDescriptionCardozo: ""
    + "O método de Cardozo (2023) para seleção de acessos a minas subterrâneas é uma combinação e atualização dos procedimentos propostos por Moser (1996) e La Vergne (2003)."
    + " Nesse método, Cardozo incorpora alguns dos parâmetros propostos por Moser ao layout do fluxograma apresentado por La Vergne, além de atualizar os valores propostos como limites para profundidade e produção de acordo com a realidade de 2023."
    ,
    paragrafoObservationsCardozo: "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina.<br>"   
    ,
    paragrafoReferencesCardozo: ""
    + "- CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.\n\n"
    + "- CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023."
    ,
    // Inputs cardozo
    smTituloCardozo: "Cobertura superficial",
    smDescriptionCardozo: "Espessura da camada de material inconsolidado:",
    smMenorCardozo: " <70 m",
    smMaiorCardozo: " >70 m",
    rmTituloCardozo: "Condições do Maciço",
    rmDescriptionCardozo: "Classe do maciço no sistema RMR:",
    rmMenorCardozo: "I - IV",
    rmMaiorCardozo: "V",
    depthTituloCardozo: "Profundidade",
    depthDescriptionCardozo: "Ponto mais profundo do corpo de minério:",
    prodTituloCardozo: "Produção",
    prodDescriptionCardozo: "Produção prevista para a mina em kt por dia:",
    // Fluxograma cardozo
    startFluxoCardozo: 'START',
    smFluxoCardozo: 'SURFACE MATERIAL',
    rmFluxoCardozo: 'ROCK MASS',
    depthCenterFluxoCardozo: 'OREBODY <1700 m DEEP',
    prodCenterFluxoCardozo: 'PRODUCTION <7.5 kt/d',
    depthLeftFluxoCardozo: 'OREBODY <700 m DEEP',
    prodLeftFluxoCardozo: 'PRODUCTION <1.5 kt/d',
    shaftFluxoCardozo: 'VERTICAL SHAFT HOISTING',
    correiaFluxoCardozo: 'RAMP HAULAGE BY TRUCK',
    rampaFluxoCardozo: 'INCLINED BELT CONVEYOR',

    // MOSER
    tituloInputsMoser: 'PARÂMETROS DE ESCOLHA',
    labelCoberturaSuperficialMoser: 'Cobertura superficial',
    // Fluxograma moser
    logisticaFluxoMoser: 'USE TRUCKS',
    rmFluxoMoser: 'ROCK MASS',
    smFluxoMoser: 'SURFACE MATERIAL',
    opFluxoMoser: 'ACESS BY OPEN PIT',
    depthLeftFluxoMoser: 'DEEPEST POINT',
    prodLeftFluxoMoser: 'PRODUCTION',
    depthCenterFluxoMoser: 'DEEPEST POINT',
    prodCenterFluxoMoser: 'PRODUCTION',
    rampaFluxoMoser: 'RAMP',
    shaftFluxoMoser: 'SHAFT',
    // Inputs moser
    logisticaTituloMoser: "Logística",
    logisticaDescriptionMoser: "A mina utilizará caminhões?",
    rmTituloMoser: "Condições do Maciço",
    rmDescriptionMoser: "Classe do maciço no sistema RMR:",
    rmMenorMoser: "I-V",
    rmMaiorMoser: "VI-VII",
    smTituloMoser: "Cobertura superficial",
    smDescriptionMoser: "Espessura da camada de material inconsolidado:",
    smMenorMoser: " <70 m",
    smMaiorMoser: " >70 m",
    opTituloMoser: "Acesso",
    opDescriptionMoser: "O acesso será a partir de uma mina a céu aberto?",
    depthTituloMoser: "Profundidade",
    depthDescriptionMoser: "Ponto mais profundo do corpo de minério:",
    prodTituloMoser: "Produção",
    prodDescriptionMoser: "Produção prevista para a mina em kt por ano:",

    // VERGNE
    tituloVergne: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método La Vergne (2003)",
    pragrafoExplicacaoVergne: ""
    ,  
    // Inputs vergne
    smTituloVergne: "Cobertura superficial",
    smDescriptionVergne: "Camada estreita de materiais inconsolidados?",
    rmTituloVergne: "Condições do Maciço",
    rmDescriptionVergne: "Rocha íntegra e de boa qualidade/resitencia?",
    depthTituloVergne: "Profundidade",
    depthDescriptionVergne: "Ponto mais profundo do corpo de minério:",
    prodTituloVergne: "Produção",
    prodDescriptionVergne: "Produção prevista para a mina em kt por dia:",
    // Fluxograma vergne
    startFluxoVergne: 'START',
    smFluxoVergne: 'SURFACE MATERIAL',
    rmFluxoVergne: 'ROCK MASS',
    depthCenterFluxoVergne: 'OREBODY <500 m DEEP',
    prodCenterFluxoVergne: 'PRODUCTION <5 kt/d',
    depthLeftFluxoVergne: 'OREBODY <300 m DEEP',
    prodLeftFluxoVergne: 'PRODUCTION <2.5 kt/d',
    shaftFluxoVergne: 'VERTICAL SHAFT HOISTING',
    correiaFluxoVergne: 'RAMP HAULAGE BY TRUCK',
    rampaFluxoVergne: 'INCLINED BELT CONVEYOR',
  },
};

export default translation
