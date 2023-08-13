// translation.js
const translation = {
    en: {
        // GERAL ENGLISH
        switchLanguage: "Change to portuguese",
        ptSwitchLanguage: "PT",
        enSwitchLanguage: "EN",
        selectMethod: "SELECT THE METHOD",
        tituloFluxograma: "FLOWCHART",
        tituloInputs: "SELECTION PARAMETERS",
        tituloIlustration: "ILUSTRATION",
        observations: "NOTES:",
        references: "REFERENCES:",
        sim: "Yes",
        nao: "No",
        // FOOTER ENGLISH
        universidadeFooter: "Universidade Federal do Rio Grande do Sul",
        laboratorioFooter: "Laboratório de Processamento Mineral",
        localizacaoFooter: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
        contatoFooter: "Contact: email@ufrgs.com",
        linksFooter: "Links",
        creditosFooter: "Credits",
        referenciasFooter: "References",
        reportarErroFooter: "Report issue",
        // POPUP CREDITOS ENGLISH
        tituloPopUpCreditos: "CREDITS",
        universidadeCreditos: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL",
        laboratorioCreditos: "LABORATÓRIO DE PROCESSAMENTO MINERAL",
        versaoCreditos: "VERSION: 2.0",
        tituloFerramentaCreditos: "SELECTION OF ACESS FOR UNDERGROUND MINING",
        tituloAutoresCreditos: "AUTHORS",
        nomeAutoresCreditos: "CARDOZO, F. &ensp; CAMPOS, H.",
        tituloApoioCreditos: "SUPPORTERS",
        apoioUmCreditos: "EQUIPE MAFMINE",
        localizacaoCreditos: "Porto Alegre, Rio Grande do Sul, Brasil",
        dataCreditos: "2023",
        // POPUP REFERENCIAS ENGLISH
        tituloPopUpReferencias: "REFERENCES",
        tituloReferencias: "REFERENCES",
        referenciaCardozoArtigo: "CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.",
        referenciaCardozoTese: "CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.",
        referenciaVergne: "LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003.",
        referenciaMoser: "MOSER, P. Primary development of underground hard rock mines. In: Symposium On Mine Planning And Equipment Selection. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3.",
        // POP UP REPORTAR ERRO ENGLISH
        tituloPopUpReportarErro: "REPORT ISSUE",
        userNameReportarErro: "Your name:",
        userEmailReportarErro: "Your e-mail:",
        userMessageReportarErro: "Your mensage:",
        botaoEnviarReportarErro: "SEND",

        // CARDOZO ENGLISH
        tituloCardozo: "SELECTION OF ACESS FOR UNDERGROUND MINING: Cardozo Method (2023)",
        paragrafoExplicacaoCardozo: "" +
        "The Cardozo method (2023) for selecting underground mine acess is a combination and update of the procedures proposed by Moser (1996) and La Vergne (2003)." +
        "In this method, Cardozo incorporates  some of the parameters proposed by Moser into the flowchart layout presented by La Vergne, and updates the proposed values as limits for depth and production according to the reality of 2023.  " +
        "<br><br><strong>Notes:</strong><br>" +
        "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning." +
        "<br><br>Referênces:<br>" +
        "<a href ='http://dx.doi.org/10.1590/0370-44672021760094' target ='_blank'>- CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.<br/></a>" +
        "<a href ='http://hdl.handle.net/10183/262393' target ='_blank'>- CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.</a>",
        // INPUTS CARDOZO ENGLISH
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
        depthMenorCardozo: "<700 m",
        depthEntreCardozo: "700-1700 m",
        depthMaiorCardozo: ">1700 m",
        prodTituloCardozo: "Production",
        prodDescriptionCardozo: "Projected production for the mine in kt per day:",
        prodMenorCardozo: "<1.5 kt/d",
        prodEntreCardozo: "1.5-7.5 kt/d",
        prodMaiorCardozo: ">7.5 kt/d",
        // FLUXOGRAMA CARDOZO ENGLISH
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
        // RESULTADOS CARDOZO ENGLISH
        resultadoShaftCardozo: "VERTICAL SHAFT HOISTING",
        resultadoRampaCardozo: "RAMP HAULAGE BY TRUCK",
        resultadoCorreiaCardozo: "INCLINED BELT CONVEYOR",
        // BALÕES CARDOZO  ENGLISH
        smCardozo: "Is the thickness of unconsolidated materials (soils, alluvial deposit, ...)<br> over the mineral deposit greater than 70 m?",
        rmCardozo: "- Class I-IV: &ldquo;Very Good&rdquo; to &ldquo;Poor Rock&rdquo; rock (RMR 21-100)<br>- Class V: &ldquo;Very Poor&rdquo; unconsolidated material (RMR 1-20)",
        surfaceMateriallCardozo: "Is the thickness of unconsolidated<br>materials (soils, alluvial deposit, ...)<br> over the mineral deposit greater than 70 m?",
        rockMassCardozo: "Is the rock intact <br> and of good quality/strength?",
        depthCenterCardozo: "Is the deepest point of the orebody<br>less than 1700 m from the surface?<br>",
        prodCenterCardozo: "Will the mine production be less<br>than 7.5 thousand tons per day?",
        depthLeftCardozo: "Is the deepest point of the orebody<br>less than 700 m from the surface?<br>",
        prodLeftCardozo: "Will the mine production be less<br>than 1.5 thousand tons per day?",
        shaftCardozo: "Utilize shaft",
        rampaCardozo: "Utilize ramps and trucks",
        correiaCardozo: "Utilize inclined belt conveyor",

        // MOSER ENGLISH
        tituloMoser: "SELECTION OF ACESS FOR UNDERGROUND MINING: Moser Method (1996)",
        tituloInputsMoser: "SELECTION PARAMETERS",
        labelCoberturaSuperficialMoser: "Surface material",
        paragrafoExplicacaoMoser: "" +
            "The Moser (1996) method for selecting underground mine access was developed over several projects of hard rock mines around the world." +
            "<br><br><strong>Notes:</strong>" +
            "- Moser did not take into account any data from soft rock mining operations.<br>" +
            "- The author’s proposed limits for each parameter have been surpassed by advancements in technology.<br>" +
            "- The model does not consider the use of inclined belt conveyors as a viable option for transporting ore.<br>" +
            "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning." +
            "<br><br><strong>References:</strong>" +
            "- MOSER, P. Primary development of underground hard rock mines. In: Symposium On Mine Planning And Equipment Selection. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3.",
        // FLUXOGRAMA MOSER ENGLISH
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
        // INPUTS MOSER ENGLISH
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
        depthMenorMoser: "<500 m",
        depthEntreMoser: "500-600 m",
        depthMaiorMoser: ">600 m",
        prodTituloMoser: "Produção",
        prodDescriptionMoser: "Projected production for the mine in kt per year:",
        prodMenorMoser: "<400 kt/y",
        prodEntreMoser: "400-600 kt/y",
        prodMaiorMoser: ">600 kt/y",
        // RESULTADOS MOSER ENGLISH
        resultadoShaftMoser: "VERTICAL SHAFT",
        resultadoRampaMoser: "RAMP",
        // BALÕES MOSER ENGLISH
        logisticaMoser: "If trucks are not used,<br>shaft should be utilized",
        rmMoser: "- Class I-V: intact and resistant rock to poor rock<br>- Class VI-VII: unconsolidated material (soil).",
        smMoser: "Is the thickness of unconsolidated materials (soils, alluvial deposit, ...)<br>over the mineral deposit greater than 70 m?",
        opMoser: "Will the deposit be accessed<br>from an open pit mine?",
        startMoser: "Is the mine going to utilize trucks?",
        rockMassMoser: "Is the rock mass classification less than 5 (I-V)?",
        surfaceMateriallMoser: "Is the layer of unconsolidated materials (soils, alluvial deposit, ...) over<br> the mineral deposit less than 70 m thick?",
        openPitMoser: "Will the deposit be accessed<br>from an open pit mine?",
        depthCenterMoser: "Is the deepest point of the orebody<br>less than 500 m from the surface?<br>",
        depthLeftMoser: "Is the deepest point of the orebody<br>less than 600 m from the surface?",
        prodCenterMoser: "Will the mine production be less<br>than 400 thousand tons per year?",
        prodLeftMoser: "Will the mine production be less<br>than 600 thousand tons per yer?",
        shaftMoser: "Utilize shaft",
        rampaMoser: "Utilize ramps and trucks",

        // VERGNE ENGLISH
        tituloVergne: "SELECTION OF ACESS FOR UNDERGROUND MINING: La Vergne Method (2003)",
        paragrafoExplicacaoVergne: "" +
            "The method developed by La Verne (2003) for selecting underground mine access was presented as a 'roughly guide' to determine a  viable access in early stages of mining planning." +
            "<br><br><strong>Notes:</strong><br>" +
            "- The model is based upon golden rules of the time of its creation.<br>" +
            "- The author’s proposed limits for each parameter have been surpassed by advancements in technology.<br>" +
            "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning." +
            "<br><br><strong>Reference:</strong><br>" +
            "- LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003.",
        // INPUTS VERGNE ENGLISH
        smTituloVergne: "Surface material",
        smDescriptionVergne: "Narrow layer of unconsolidated materials?",
        rmTituloVergne: "Rock mass conditions",
        rmDescriptionVergne: "Is the rock intact and of good quality/strength?",
        depthTituloVergne: "Depth",
        depthDescriptionVergne: "Orebody deepest point:",
        depthMenorVergne: "<300 m",
        depthEntreVergne: "300-500 m",
        depthMaiorVergne: ">500 m",
        prodTituloVergne: "Production",
        prodDescriptionVergne: "Projected production for the mine in kt per day:",
        prodMenorVergne: "<2.0 kt/d",
        prodEntreVergne: "2.5 kt/d",
        prodMaiorVergne: ">5.0 kt/d",
        // FLUXOGRAMA VERGNE ENGLISH
        startFluxoVergne: "START",
        smFluxoVergne: "SURFACE MATERIAL",
        rmFluxoVergne: "ROCK MASS",
        depthCenterFluxoVergne: "OREBODY <500 m DEEP",
        prodCenterFluxoVergne: "PRODUCTION <5 kt/d",
        depthLeftFluxoVergne: "OREBODY <300 m DEEP",
        prodLeftFluxoVergne: "PRODUCTION <2.5 kt/d",
        shaftFluxoVergne: "VERTICAL SHAFT HOISTING",
        correiaFluxoVergne: "RAMP HAULAGE BY TRUCK",
        rampaFluxoVergne: "INCLINED BELT CONVEYOR",
        // RESULTADOS VERGNE ENGLISH
        resultadoShaftVergne: "VERTICAL SHAFT HOISTING",
        resultadoRampaVergne: "RAMP HAULAGE BY TRUCK",
        resultadoCorreiaVergne: "INCLINED BELT CONVEYOR",
        // BALÕES VERGNE ENGLISH
        smVergne: "Is there a thick layer of unconsolidated materials (soils, alluvial deposit, ...) over the mineral deposit?",
        rmVergne: "Is the rock intact and of good quality/strength?",
        surfaceMateriallVergne: "Is the layer of unconsolidated<br>materials (soils, alluvial deposit, ...) over the mineral deposit <strong>narrow</strong>?",
        rockMassVergne: "Is the rock intact <br> and of good quality/strength?",
        depthCenterVergne: "Is the deepest point of the orebody<br>less than 500 m from the surface?<br>",
        prodCenterVergne: "\"Will the mine production be less<br>than 5 thousand tons per day?",
        depthLeftVergne: "Is the deepest point of the orebody<br>less than 300 m from the surface?<br>",
        prodLeftVergne: "Will the mine production be less<br>than 2.5 thousand tons per day?",
        rampaVergne: "Utilize ramps and trucks",
        shaftVergne: "Utilize shaft",
        correiaVergne: "Utilize inclined belt conveyor"
    },

    pt: {
        // GERAL PORTUGUES
        switchLanguage: "Mudar para inglês",
        ptSwitchLanguage: "PT",
        enSwitchLanguage: "EN",
        selectMethod: "SELECIONE O MÉTODO",
        sim: "Sim",
        nao: "Não",
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
        paragrafoExplicacaoVergne: "" +
        "O método de La Vergne (2003) para a seleção de acesso a minas subterrâneas foi apresentado pelo autor como um &rdquo;guia superfícial&ldquo; para uma análise preliminar dos possíveis acessos." +
        "<br><br><strong>Observações:</strong><br>" +
        "- O modelo é baseado em regras de ouro compiladas à época<br>" +
        "- Os limites propostos para profundidade e produção foram superados por avanços tecnológicos.<br>" +
        "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina." +
        "<br><br><strong>Referência:</strong><br>" +
            "- LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003.",
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
        correiaVergne: "Utilizar correia transportadora"
    }
}

export default translation
