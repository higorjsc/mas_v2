// translation.js
const translation = {
    // GERAL PORTUGUES
    switchLanguage: "Mudar para inglês",
    ptSwitchLanguage: "PT",
    enSwitchLanguage: "EN",
    selectMethod: "SELECIONE O MÉTODO",
    sim: "Sim",
    nao: "Não",
    selecione: "Selecione",
    baixo: "Baixo",
    medio: "Médio",
    alto: "Alto",
    tituloFluxograma: "FLUXOGRAMA",
    tituloInputs: "PARÂMETROS DE ESCOLHA",
    tituloIlustration: "ILUSTRAÇÃO",
    // FOOTER PORTUGUES
    universidadeFooter: "Universidade Federal do Rio Grande do Sul",
    laboratorioFooter: "Laboratório de Processamento Mineral",
    localizacaoFooter: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
    contatoFooter: "Contato: email@ufrgs.com",
    linksFooter: "Links",
    creditosFooter: "Creditos",
    referenciasFooter: "Referências",
    reportarErroFooter: "Reportar Erro",
    // POPUP CREDITOS PORTUGUES
    tituloPopUpCreditos: "CREDITOS",
    universidadeCreditos: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL",
    laboratorioCreditos: "LABORATÓRIO DE PROCESSAMENTO MINERAL",
    versaoCreditos: "VERSÃO 2.0",
    tituloFerramentaCreditos: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS",
    tituloAutoresCreditos: "AUTORES",
    nomeAutoresCreditos: "CARDOZO, F. &ensp; CAMPOS, H.",
    tituloApoioCreditos: "APOIO",
    apoioUmCreditos: "EQUIPE MAFMINE",
    localizacaoCreditos: "Porto Alegre, Rio Grande do Sul, Brasil",
    dataCreditos: "2023",
    // POPUP REFERENCIAS PORTUGUES
    tituloPopUpReferencias: "REFERENCIAS",
    tituloReferencias: "REFERENCIAS",
    referenciaCardozoArtigo: "CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.",
    referenciaCardozoTese: "CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.",
    referenciaVergne: "LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003.",
    referenciaMoser: "MOSER, P. Primary development of underground hard rock mines. In: Symposium On Mine Planning And Equipment Selection. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3.",
    // POP UP REPORTAR ERRO
    tituloPopUpReportarErro: "REPORTAR ERRO",
    userNameReportarErro: "Seu nome:",
    userEmailReportarErro: "Seu e-mail:",
    userMessageReportarErro: "Sua mensagem:",
    botaoEnviarReportarErro: "ENVIAR",

    // CARDOZO PORTUGUES
    tituloCardozo: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método Cardozo (2023)",
    paragrafoExplicacaoCardozo: "" +
        "O método de Cardozo (2023) para seleção de acessos a minas subterrâneas é uma combinação e atualização dos procedimentos propostos por Moser (1996) e La Vergne (2003)." +
        " Nesse método, Cardozo incorpora alguns dos parâmetros propostos por Moser ao layout do fluxograma apresentado por La Vergne, além de atualizar os valores propostos como limites para profundidade e produção de acordo com a realidade de 2023." +
        "<br><br><strong>OBSERVAÇÕES:</strong>" +
        "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina.<br>" +
        "<br><br><strong>REFERÊNCIAS:</strong>" +
        "- CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.<br>" +
        "- CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.",
    // INPUTS CARDOZO PORTUGUES
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
    depthMenorCardozo: "<700 m",
    depthEntreCardozo: "700-1700 m",
    depthMaiorCardozo: ">1700 m",
    prodTituloCardozo: "Produção",
    prodDescriptionCardozo: "Produção prevista para a mina em kt por dia:",
    prodMenorCardozo: "<1.5 kt/d",
    prodEntreCardozo: "1.5-7.5 kt/d",
    prodMaiorCardozo: ">7.5 kt/d",
    // FLUXOGRAMA CARDOZO PORTUGUES
    startFluxoCardozo: "START",
    smFluxoCardozo: "SURFACE MATERIAL",
    rmFluxoCardozo: "ROCK MASS",
    depthCenterFluxoCardozo: "OREBODY <1700 m DEEP",
    prodCenterFluxoCardozo: "PRODUCTION <7.5 kt/d",
    depthLeftFluxoCardozo: "OREBODY <700 m DEEP",
    prodLeftFluxoCardozo: "PRODUCTION <1.5 kt/d",
    shaftFluxoCardozo: "VERTICAL SHAFT HOISTING",
    correiaFluxoCardozo: "RAMP HAULAGE BY TRUCK",
    rampaFluxoCardozo: "INCLINED BELT CONVEYOR",
    // RESULTADOS CARDOZO PORTUGUES
    resultadoShaftCardozo: "POÇO VERTICAL",
    resultadoRampaCardozo: "RAMPA E CAMINHÕES",
    resultadoCorreiaCardozo: "CORREIA TRANSPORTADORA",
    // BALÕES CARDOZO PORTUGUES
    smCardozo: "A camada de materiais não consolidados (solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui espessura menor que 70 m?",
    rmCardozo: "- Classe I-IV: rocha &ldquo;Muito boa&rdquo; a &ldquo;pobre&rdquo; (RMR 21-100)<br>- Classe V: material inconsolidado (solo), classe &ldquo;muito pobre&rdquo; (RMR 1-20)",
    surfaceMateriallCardozo: "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui<br>espessura menor que 70 m?",
    rockMassCardozo: "A classe do maciço, segundo a classificação RMR<br>de Bienawski (1989), é menor do que 4 (IV)?",
    depthCenterCardozo: "O ponto mais profundo do corpo de minério<br>está a menos de 1700 m da superfície?",
    depthLeftCardozo: "O ponto mais profundo do corpo de minério<br>está a menos de 700 m da superfície?",
    prodCenterCardozo: "A produção da mina será menor<br>que 7.5 mil toneladas por dia?",
    prodLeftCardozo: "A produção da mina será menor<br>que 1,5 mil toneladas por dia?",
    shaftCardozo: "Utilizar poço",
    rampaCardozo: "Utilizar rampa e caminhões",
    correiaCardozo: "Utilizar correia transportadora",

    // MOSER PORTUGUES
    tituloMoser: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método Moser (1996)",
    tituloInputsMoser: "PARÂMETROS DE ESCOLHA",
    labelCoberturaSuperficialMoser: "Cobertura superficial",
    paragrafoExplicacaoMoser: "" +
            "O método de Moser (1996) para a seleção de acesso a minas subterrâneas foi desenvolvido a partir da análise de dados de várias minas de 'rochas duras' (hard rock) em escala global." +
            "<br><br><strong>Observações:</strong>" +
            "- Moser não analisou minas de rochas brandas (soft rock) para a elaboração de seu modelo.<br>" +
            "- O método de Moser não considera como opção o transporte de minérios por correias transportadoras.<br>" +
            "- Os limites propostos para profundidade e produção foram superados por avanços tecnológicos.<br>" +
            "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina." +
            "<br><br><strong>Referência:</strong>" +
            "- MOSER, P. Primary development of underground hard rock mines. In: Symposium On Mine Planning And Equipment Selection. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3.",
    // INPUTS MOSER PORTUGUÊS
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
    depthMenorMoser: "<500 m",
    depthEntreMoser: "500-600 m",
    depthMaiorMoser: ">600 m",
    prodTituloMoser: "Produção",
    prodDescriptionMoser: "Produção prevista para a mina em kt por ano:",
    prodMenorMoser: "<400 kt/y",
    prodEntreMoser: "400-600 kt/y",
    prodMaiorMoser: ">600 kt/y",
    // FLUXOGRAMA MOSER PORTUGUÊS
    logisticaFluxoMoser: "USE TRUCKS",
    rmFluxoMoser: "ROCK MASS",
    smFluxoMoser: "SURFACE MATERIAL",
    opFluxoMoser: "ACESS BY OPEN PIT",
    depthLeftFluxoMoser: "DEEPEST POINT",
    prodLeftFluxoMoser: "PRODUCTION",
    depthCenterFluxoMoser: "DEEPEST POINT",
    prodCenterFluxoMoser: "PRODUCTION",
    rampaFluxoMoser: "RAMP",
    shaftFluxoMoser: "SHAFT",
    // RESULTADOS MOSER PORTUGUES
    resultadoShaftMoser: "POÇO VERTICAL",
    resultadoRampaMoser: "RAMPA",
    // BALÕES MOSER PORTUGUES
    logisticaMoser: "Se não utilizar caminhões, deverá utilizar poço.",
    rmMoser: "- Classe I-V: rocha íntegra e resistente a pobre.<br>- Classe VI-VII: material inconsolidado (solo).",
    smMoser: "A camada de materiais não consolidados (solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui espessura menor que 70 m?",
    opMoser: "O depósito será acessado a partir da<br>cava de uma mina a céu aberto?",
    startMoser: "A mina utilizará caminhões?",
    rockMassMoser: "A classe do maciço é menor do que 5 (I-V)?",
    surfaceMaterialMoser: "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui<br>espessura menor que 70 m?",
    openPitMoser: "O depósito será acessado a partir da<br>cava de uma mina a céu aberto?",
    depthCenterMoser: "O ponto mais profundo do corpo de minério<br>está a menos de 500 m da superfície?",
    depthLeftMoser: "O ponto mais profundo do corpo de minério<br>está a menos de 600 m da superfície?",
    prodCenterMoser: "A produção da mina será menor ou maior<br>que 400 mil toneladas por ano?",
    prodLeftMoser: "A produção da mina será menor ou maior<br>que 600 mil toneladas por ano?",
    shaftMoser: "Utiliiar poço",
    rampaMoser: "Utilizar rampa e caminhões",

    // VERGNE PORTUGUÊS
    tituloVergne: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método La Vergne (2003)",
    paragrafoExplicacaoVergne: ""
    + "O método de La Vergne (2003) para a seleção de acesso a minas subterrâneas foi apresentado pelo autor como um"
    + "&rdquo;guia superfícial&ldquo; para uma análise preliminar dos possíveis acessos."
    + "<br><br><strong>Observações:</strong><br>"
    + "- O modelo é baseado em regras de ouro compiladas à época<br>"
    + "- Os limites propostos para profundidade e produção foram superados por avanços tecnológicos.<br>"
    + "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina."
    + "<br><br><strong>Referência:</strong><br>"
    + "- LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003."
    ,
    // INPUTS VERGNE PORTUGUÊS
    smTituloVergne: "Cobertura superficial",
    smDescriptionVergne: "Camada estreita de materiais inconsolidados?",
    rmTituloVergne: "Condições do Maciço",
    rmDescriptionVergne: "Rocha íntegra e de boa qualidade/resitencia?",
    depthTituloVergne: "Profundidade",
    depthDescriptionVergne: "Ponto mais profundo do corpo de minério:",
    depthMenorVergne: "<300 m",
    depthEntreVergne: "300-500 m",
    depthMaiorVergne: ">500 m",
    prodTituloVergne: "Produção",
    prodDescriptionVergne: "Produção prevista para a mina em kt por dia:",
    prodMenorVergne: "<2.0 kt/d",
    prodEntreVergne: "2.5 kt/d",
    prodMaiorVergne: ">5.0 kt/d",
    // FLUXOGRAMA VERGNE PORTUGUÊS
    startFluxoVergne: "START",
    smFluxoVergne: "SHALLOW OVERBURDEN",
    rmFluxoVergne: "SOUND ROCK",
    depthCenterFluxoVergne: "OREBODY <500 m DEEP",
    prodCenterFluxoVergne: "PRODUCTION <5 kt/d",
    depthLeftFluxoVergne: "OREBODY <300 m DEEP",
    prodLeftFluxoVergne: "PRODUCTION <2.5 kt/d",
    shaftFluxoVergne: "VERTICAL SHAFT HOISTING",
    correiaFluxoVergne: "RAMP HAULAGE BY TRUCK",
    rampaFluxoVergne: "INCLINED BELT CONVEYOR",
    // RESULTADOS VERGNE PORTUGUÊS
    resultadoShaftVergne: "POÇO VERTICAL",
    resultadoRampaVergne: "RAMPA E CAMINHÕES",
    resultadoCorreiaVergne: "PLANO INCLINADO E CORREIA TRANSPORTADORA",
    // BALÕES VERGNE PORTUGUÊS
    smVergne: "Existe uma camada espessa de materiais não consolidados<br>(solos, depósitos aluvionares, etc.) sobre o depósito mineral?",
    rmVergne: "A rocha está integra e possui boa qualidade/resistencia?",
    surfaceMaterialVergne: "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.) sobre o<br> depósito mineral é <strong>estreita</strong>?",
    rockMassVergne: "A rocha está integra <br>e possui boa qualidade/resistencia?",
    depthCenterVergne: "O ponto mais profundo do corpo de minério<br>está a menos de 500 m da superfície?",
    prodCenterVergne: "A produção da mina será menor<br>que 5 mil toneladas por dia?",
    depthLeftVergne: "O ponto mais profundo do corpo de minério<br>está a menos de 300 m da superfície?",
    prodLeftVergne: "A produção da mina será menor<br>que 2,5 mil toneladas por dia?",
    rampaVergne: "Utilizar rampa e caminhões",
    shaftVergne: "Utilizar poço",
    correiaVergne: "Utilizar correia transportadora",

    // MCDM PORTUGUES
    tituloMcdm: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Análise Multicriterial",
    paragrafoExplicacaoMcdm: ""
    + "A aplicação de metodologias de análise multicritérial vem sendo amplamente utilizadas para a "
    + "tomada de decisões em projetos de mineração, em questões como: escolha de métodos de acesso, "
    + "transporte de minério e método de lavra, dentre outras. (CITAÇÃO, ANO; CITAÇÃO, ANO; CITAÇÃO, ANO; CITAÇÃO, ANO;)"
    + "<br><br><strong>Dentre suas vantagens:</strong>"
    + "- Permitem uma análise personalizada da situação, considerando individualidades da cada mina.<br>"
    + "- São flexíveis ao considerar a experiência/opinião de especialistas.<br>"
    + "- Favorecem a análise dos riscos associados a cada critério.<br>"
    + "- Garantem uma medida de consistência (lógica) da decisão."
    + "<br><br><strong>Observações:</strong><br>"
    + "- <br>"
    + "- "

    ,

    templatesMcdmTitulo: "Método de decisão",
    primeiraTemplateMcdm: "AHP Cardozo 2023",
    segundaTemplateMcdm: "Segunda Template",
    terceiraTemplateMcdm: "Terceira Template",
    ahpPersonalizado: "AHP Personalizado",
    mcdmTituloCriterios: "Critérios de decisão:",
    mcdmTituloOptions: "Opções para comparação:",
    helpEscalaSaaty: "ESCALA AHP",
    matrizFluxogramaCardozo: "Fluxograma Empírico",
    tituloMatrizSegundaEtapaAhp: "Comparação de Critérios",
    matrizPrioridadesGlobais: "MATRIZ DE PRIORIDADES LOCAIS",
    vetorPrioridadeGlobal: "VETOR DE PRIORIDADES GLOBAIS",
    tituloPesoGlobal: "Peso do critério",


    // AHP CARDOZO PORTUGUES
    paragrafoExplicacaoSocial: "Cardozo (2023) sugere o ponderamento do desempenho social, dentre as opções de acesso a mina, "
    + "em relação a aspectos como geração de empregos, qualificação da mão de obra, segurança dos trabalhadores e uso de recursos locais."
    + "<br><br>Os pesos relativos de cada opção são sugeridos com base no risco social que o empreendimento representa à região:"
    ,
    paragrafoExplicacaoFluxograma: "Cardozo (2023) propõe o uso dos fluxogramas empíricos de escolha de acesso"
    + "(MOSER, 1996; VERGNE, 2003; CARDOZO, 2023), como critério de seleção na análise multicriterial,"
    + "onde deve-se dar plena prioridade ao resultado obtido dos mesmos."
    + "O autor ressalta que a opção por correia, quando é expressa, tem grande peso sobre as demais."
    + "<br><br>Os pesos relativos de cada opção são sugeridos com base no resultado dos fluxogramas empíricos:"
    ,
    paragrafoExplicacaoEmissoes: ""
    + "Segundo Cardozo (2023), deve-se dar preferência à alternativa com melhor desempenho em termos de emissões frente às outras, como métrica."
    + "'A geração de CO² eq/ton explotada pode ser utilizada como referência para refinamento da escolha.'\n"
    + "<br><br>Os pesos sugeridos são:"
    ,
    paragrafoRiscoEnergetico: ""
    + "Segundo Cardozo (2023), deve-se observar se a opção é favorecida pela possibilidade de geração própria de energia e/ou por sua disponibilidade local"
    + "<br><br>Os pesos relativos de cada opção são sugeridos com base no risco energético que o empreendimento representa à região:"
    ,
    poco:"Poço",
    rampaDiesel:"R. Diesel",
    rampaEletrico:"R. Elétrico",
    rampaCaminhoes:"Rampa e Caminhões",
    correia:"Correia",
    correiaTransportadora:"Correia Transportadora",
    predefinido:"Pré-definido",
    personalizado:"Personalizado",

    // TABELA SAATY ESCALA AHP PORTUGUES
    tituloEscalaSaaty: "ESCALA DE COMPARAÇÃO DE PARES",
    verbalEscalaSaaty: "Verbal",
    numericaEscalaSaaty: "Númerica",
    igualImportanciaEscalaSaaty: "Igual importância",
    moderadamenteSuperiorEscalaSaaty: "Moderadamente superior",
    superiorEscalaSaaty: "Superior",
    muitoSuperiorEscalaSaaty: "Muito Superior",
    extremamenteSuperiorEscalaSaaty: "Extremamente superior",
    legendaEscalaSaaty: "Os valores 2,4,6 e 8 são intermediários."

}

export default translation
