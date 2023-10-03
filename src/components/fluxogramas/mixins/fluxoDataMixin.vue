
<!--
    ADICIONA OS DADOS DE CONSTRUÇÃO DOS FLUXOGRAMAS NO COMPONENTE "fluxograma.vue"
-->
<script>

export default {
    name: "vue-dados-fluxograma-mixin",
    data() {
        return {
            // DEFINE AS PROPRIEDADES DOS OBJETOS DE CADA FLUXOGRAMA
            objetos: {
                Cardozo: [
                    {
                        id: "start-cardozo",
                        backgroundKey: "start",
                        top: "10px",
                        left: "180px",
                        Text: "startFluxoCardozo"
                    },
                    {
                        id: "surface-material-cardozo",
                        backgroundKey: "surfaceMaterial",
                        top: "70px",
                        left: "140px",
                        width: "150px",
                        Text: "smFluxoCardozo"
                    },
                    {
                        id: "rock-mass-cardozo",
                        backgroundKey: "rockMass",
                        top: "130px",
                        left: "180px",
                        Text: "rmFluxoCardozo"
                    },
                    {
                        id: "depth-center-cardozo",
                        backgroundKey: "depthCenter",
                        top: "190px",
                        left: "140px",
                        width: "150px",
                        Text: "depthCenterFluxoCardozo"
                    },
                    {
                        id: "prod-center-cardozo",
                        backgroundKey: "prodCenter",
                        top: "250px",
                        left: "140px",
                        width: "150px",
                        Text: "prodCenterFluxoCardozo"
                    },
                    {
                        id: "depth-left-cardozo",
                        backgroundKey: "depthLeft",
                        top: "310px",
                        left: "140px",
                        width: "150px",
                        Text: "depthLeftFluxoCardozo"
                    },
                    {
                        id: "prod-left-cardozo",
                        backgroundKey: "prodLeft",
                        top: "300px",
                        left: "32px",
                        Text: "prodLeftFluxoCardozo",
                        transform: "rotate(-90deg)"
                    },
                    {
                        id: "correia-cardozo",
                        backgroundKey: "correia",
                        top: "385px",
                        left: "60px",
                        width: "180px",
                        Text: "correiaFluxoCardozo",
                        transform: "rotate(-12deg)"
                    },
                    {
                        id: "shaft-cardozo",
                        backgroundKey: "shaft",
                        top: "132px",
                        left: "-15px",
                        width: "170px",
                        Text: "shaftFluxoCardozo",
                        transform: "rotate(-90deg)"
                    },
                    {
                        id: "rampa-cardozo",
                        backgroundKey: "rampa",
                        top: "250px",
                        left: "270px",
                        width: "200px",
                        Text: "rampaFluxoCardozo",
                        transform: "rotate(-70deg)"
                    }
                ],
                Moser: [
                    {
                        id: "start-moser",
                        backgroundKey: "logistica",
                        top: "10px",
                        left: "20px",
                        Text: "logisticaFluxoMoser"
                    },
                    {
                        id: "rock-mass-moser",
                        backgroundKey: "rockMass",
                        top: "70px",
                        left: "20px",
                        Text: "rmFluxoMoser"
                    },
                    {
                        id: "surface-material-moser",
                        backgroundKey: "surfaceMaterial",
                        top: "135px",
                        left: "20px",
                        Text: "smFluxoMoser"
                    },
                    {
                        id: "depth-center-moser",
                        backgroundKey: "depthCenter",
                        top: "218px",
                        left: "170px",
                        Text: "depthCenterFluxoMoser"
                    },
                    {
                        id: "prod-center-moser",
                        backgroundKey: "prodCenter",
                        top: "305px",
                        left: "170px",
                        Text: "prodCenterFluxoMoser"
                    },
                    {
                        id: "open-pit-moser",
                        backgroundKey: "openPit",
                        top: "218px",
                        left: "20px",
                        Text: "opFluxoMoser"
                    },
                    {
                        id: "depth-left-moser",
                        backgroundKey: "depthLeft",
                        top: "300px",
                        left: "20px",
                        Text: "depthLeftFluxoMoser"
                    },
                    {
                        id: "prod-left-moser",
                        backgroundKey: "prodLeft",
                        top: "382px",
                        left: "20px",
                        Text: "prodLeftFluxoMoser"
                    },
                    {
                        id: "rampa-moser",
                        backgroundKey: "rampa",
                        top: "420px",
                        left: "170px",
                        Text: "rampaFluxoMoser"
                    },
                    {
                        id: "shaft-moser",
                        backgroundKey: "shaft",
                        top: "220px",
                        left: "320px",
                        Text: "shaftFluxoMoser"
                    }
                ],
                Vergne: [
                    {
                        id: "start-vergne",
                        backgroundKey: "start",
                        top: "10px",
                        left: "180px",
                        Text: "startFluxoVergne"
                    },
                    {
                        id: "surface-material-vergne",
                        backgroundKey: "surfaceMaterial",
                        top: "70px",
                        left: "140px",
                        width: "155px",
                        Text: "smFluxoVergne"
                    },
                    {
                        id: "rock-mass-vergne",
                        backgroundKey: "rockMass",
                        top: "130px",
                        left: "172px",
                        width: "90px",
                        Text: "rmFluxoVergne"
                    },
                    {
                        id: "depth-center-vergne",
                        backgroundKey: "depthCenter",
                        top: "190px",
                        left: "140px",
                        width: "150px",
                        Text: "depthCenterFluxoVergne"
                    },
                    {
                        id: "prod-center-vergne",
                        backgroundKey: "prodCenter",
                        top: "250px",
                        left: "140px",
                        width: "150px",
                        Text: "prodCenterFluxoVergne"
                    },
                    {
                        id: "depth-left-vergne",
                        backgroundKey: "depthLeft",
                        top: "310px",
                        left: "140px",
                        width: "150px",
                        Text: "depthLeftFluxoVergne"
                    },
                    {
                        id: "prod-left-vergne",
                        backgroundKey: "prodLeft",
                        top: "300px",
                        left: "32px",
                        Text: "prodLeftFluxoVergne",
                        transform: "rotate(-90deg)"
                    },
                    {
                        id: "correia-vergne",
                        backgroundKey: "correia",
                        top: "385px",
                        left: "60px",
                        width: "180px",
                        Text: "correiaFluxoVergne",
                        transform: "rotate(-12deg)"
                    },
                    {
                        id: "shaft-vergne",
                        backgroundKey: "shaft",
                        top: "132px",
                        left: "-15px",
                        width: "170px",
                        Text: "shaftFluxoVergne",
                        transform: "rotate(-90deg)"
                    },
                    {
                        id: "rampa-vergne",
                        backgroundKey: "rampa",
                        top: "250px",
                        left: "270px",
                        width: "200px",
                        Text: "rampaFluxoVergne",
                        transform: "rotate(-70deg)"
                    }
                ]
            },
            // DEFINE AS PROPRIEDADES DOS TEXTOS DO CAMINHO DE CADA FLUXOGRAMA (EM CIMA DAS SETAS)
            ways: {
                Cardozo: [
                    { // surfaceMaterial - rockMass
                        top: "95px",
                        left: "210px",
                        Text: "<70 m"
                    },
                    { // rockMass - depthCenter
                        top: "155px",
                        left: "180px",
                        Text: "Class I-IV (good-poor)"
                    },
                    { // depthCenter - prodCenter
                        top: "215px",
                        left: "213px",
                        Text: "YES"
                    },
                    { // prodCenter - depthLeft
                        top: "275px",
                        left: "213px",
                        Text: "YES"
                    },
                    { // depthCenter - rampa
                        top: "335px",
                        left: "213px",
                        Text: "YES"
                    },
                    { // prodCenter - correia
                        top: "254px",
                        left: "320px",
                        Text: "NO"
                    },
                    { // depthLeft - prodLeft
                        top: "315.5px",
                        left: "117px",
                        Text: "NO"
                    },
                    { // prodLeft - rampa
                        top: "365px",
                        left: "64px",
                        Text: "YES"
                    },
                    { // prodLeft - shaft
                        top: "250px",
                        left: "68px",
                        Text: "NO"
                    },
                    { // depthCenter - shaft
                        top: "195px",
                        left: "110px",
                        Text: "NO"
                    },
                    { // rockMass - shaft
                        top: "124px",
                        left: "120px",
                        Text: "Class V"
                    },
                    { // rockMass - shaft
                        top: "139px",
                        left: "100px",
                        Text: "(very poor-soil)"
                    },
                    { // surfaceMaterial - shaft
                        top: "74px",
                        left: "102px",
                        Text: ">70 m"
                    }

                ],
                Moser: [
                    { // logistica - shaft
                        top: "45px",
                        left: "358px",
                        Text: "NO"
                    },
                    { // logistica - rockMass
                        top: "37px",
                        left: "52px",
                        width: "20px",
                        Text: "YES"
                    },
                    { // rockMass - surfaceMaterial
                        top: "98px",
                        left: "36px",
                        width: "60px",
                        Text: "Class I - V"
                    },
                    { // surfaceMaterial - openPit
                        top: "178px",
                        left: "44px",
                        width: "40px",
                        Text: "<70 m"
                    },
                    { // openPit - depthLeft
                        top: "260px",
                        left: "55px",
                        width: "20px",
                        Text: "YES"
                    },
                    { // depthLeft - prodLeft
                        top: "342px",
                        left: "40px",
                        width: "50px",
                        Text: "<600 m"
                    },
                    { // rockMass - shaft
                        top: "78px",
                        left: "180px",
                        width: "65px",
                        Text: "class VI-VII"
                    },
                    { // surfaceMaterial - shaft
                        top: "152px",
                        left: "195px",
                        Text: ">70 m",
                        width: "40px"
                    },
                    { // depthCenter - prodCenter
                        top: "260px",
                        left: "185px",
                        Text: "<500 m",
                        width: "60px"
                    },
                    { // depthCenter - shaft
                        top: "227px",
                        left: "265px",
                        Text: ">500 m",
                        width: "41px"
                    },
                    { // prodCenter - rampa
                        top: "340px",
                        left: "180px",
                        Text: "<400 k ton/year",
                        width: "80px"
                    },
                    { // prodCenter - shaft
                        top: "310px",
                        left: "270px",
                        Text: ">400 k ton/year",
                        width: "80px"
                    },
                    { // prodleft - shaft
                        top: "390px",
                        left: "125px",
                        Text: ">600 k ton/year",
                        width: "80px"
                    },
                    { // prodleft - rampa
                        top: "425px",
                        left: "72px",
                        Text: "<600 k ton/year",
                        width: "80px"
                    },
                    { // depthleft - shaft
                        top: "317px",
                        left: "118px",
                        Text: ">600 m",
                        width: "40px"
                    },
                    { // openPit - depthCenter
                        top: "228px",
                        left: "126px",
                        Text: "No",
                        width: "20px"
                    }
                ],
                Vergne: [
                    { // shallowOverburden - soundRock
                        top: "95px",
                        left: "213px",
                        Text: "YES"
                    },
                    { // soundRock - depthCenter
                        top: "155px",
                        left: "213px",
                        Text: "YES"
                    },
                    { // depthCenter - prodCenter
                        top: "215px",
                        left: "213px",
                        Text: "YES"
                    },
                    { // prodCenter - depthLeft
                        top: "275px",
                        left: "213px",
                        Text: "YES"
                    },
                    { // depthCenter - rampa
                        top: "335px",
                        left: "213px",
                        Text: "YES"
                    },
                    { // depthCenter - correia
                        top: "252px",
                        left: "320px",
                        Text: "NO"
                    },
                    { // depthLeft - prodLeft
                        top: "313px",
                        left: "117px",
                        Text: "NO"
                    },
                    { // prodLeft - rampa
                        top: "365px",
                        left: "64px",
                        Text: "YES"
                    },
                    { // prodLeft - shaft
                        top: "250px",
                        left: "68px",
                        Text: "NO"
                    },
                    { // depthCenter - shaft
                        top: "192px",
                        left: "110px",
                        Text: "NO"
                    },
                    { // soundRock - shaft
                        top: "130px",
                        left: "134px",
                        Text: "NO"
                    },
                    { // shallowOverburden - shaft
                        top: "71px",
                        left: "105px",
                        Text: ">70 m"
                    }
                ]
            },
            // DEFINE AS PROPRIEDADES DAS SETAS DE CADA FLUXOGRAMA
            setas: {
                Cardozo: [
                    { // start - surfaceMaterial
                        top: "47px",
                        left: "207px",
                        width: "27px",
                        transform: "rotate(90deg)"
                    },
                    { // surfaceMaterial - rockMass
                        top: "107px",
                        left: "207px",
                        width: "27px",
                        transform: "rotate(90deg)"
                    },
                    { // rockMass - depthCenter
                        top: "167px",
                        left: "207px",
                        width: "27px",
                        transform: "rotate(90deg)"
                    },
                    { // depthCenter - prodCenter
                        top: "227px",
                        left: "207px",
                        width: "26px",
                        transform: "rotate(90deg)"
                    },
                    { // prodCenter - depthLeft
                        top: "287px",
                        left: "207px",
                        width: "27px",
                        transform: "rotate(90deg)"
                    },
                    { // prodCenter - correia
                        top: "257px",
                        left: "303px",
                        width: "50px"
                    },
                    { // depthLeft - rampa
                        top: "347px",
                        left: "206px",
                        width: "29px",
                        transform: "rotate(90deg)"
                    },
                    { // prodLeft - rampa
                        top: "378px",
                        left: "56px",
                        width: "30px",
                        transform: "rotate(90deg)"
                    },
                    { // depthLeft - prodLeft 1
                        top: "249px",
                        left: "57px",
                        width: "29px",
                        transform: "rotate(-90deg)"
                    },
                    { // depthLeft - prodLeft
                        top: "318px",
                        left: "97px",
                        width: "34px",
                        transform: "rotate(-180deg)"
                    },
                    { // depthCenter - shaft
                        top: "197px",
                        left: "87px",
                        width: "44px",
                        transform: "rotate(-180deg)"
                    },
                    { // rockMass - shaft
                        top: "137px",
                        left: "87px",
                        width: "85px",
                        transform: "rotate(-180deg)"
                    },
                    { // prodLeft - shaft
                        top: "77px",
                        left: "87px",
                        width: "44px",
                        transform: "rotate(-180deg)"
                    }
                ],
                Moser: [
                    { // logistica - shaft 1
                        head: false,
                        top: "25px",
                        left: "110px",
                        width: "256px"
                    },
                    { // logistica - shaft 2
                        top: "118px",
                        left: "268px",
                        width: "185px",
                        transform: "rotate(90deg)"
                    },
                    { // logistica - rockMass
                        top: "47px",
                        left: "45px",
                        width: "25px",
                        transform: "rotate(90deg)"
                    },
                    { // rockMass - shaft
                        head: false,
                        top: "84px",
                        left: "110px",
                        width: "256px"
                    },
                    { // rockMass - surfaceMaterial
                        top: "110px",
                        left: "44px",
                        width: "29px",
                        transform: "rotate(90deg)"
                    },
                    { // surfaceMaterial - shaft
                        head: false,
                        top: "158px",
                        left: "110px",
                        width: "256px"
                    },
                    { // surfaceMaterial - openPith
                        top: "189px",
                        left: "42px",
                        width: "35px",
                        transform: "rotate(90deg)"
                    },
                    { // openPith - depthLeft
                        top: "272px",
                        left: "44px",
                        width: "35px",
                        transform: "rotate(90deg)"
                    },
                    { // openPit - depthCenter
                        top: "230px",
                        left: "112px",
                        width: "50px"
                    },
                    { // depthLeft - prodLeft
                        top: "355px",
                        left: "44px",
                        width: "35px",
                        transform: "rotate(90deg)"
                    },
                    { // depthLeft - shaft 1
                        head: false,
                        top: "323px",
                        left: "112px",
                        width: "50px"
                    },
                    { // depthLeft - shaft 2
                        head: false,
                        top: "344px",
                        left: "140px",
                        width: "42px",
                        transform: "rotate(90deg)"
                    },
                    { // depthCenter - prodCenter
                        top: "275px",
                        left: "192px",
                        width: "40px",
                        transform: "rotate(90deg)"
                    },
                    { // depthLeft - shaft 3
                        head: false,
                        top: "365px",
                        left: "160px",
                        width: "207px"
                    },
                    { // prodCenter - Rampa
                        top: "370px",
                        left: "172px",
                        width: "80px",
                        transform: "rotate(90deg)"
                    },
                    { // prodCenter - shaft
                        top: "312px",
                        left: "262px",
                        width: "94px"
                    },
                    { // depthCenter - shaft
                        top: "230px",
                        left: "262px",
                        width: "50px"
                    },
                    { // prodLeft -shaft 1
                        head: false,
                        top: "395px",
                        left: "112px",
                        width: "255px"
                    },
                    { // prodLeft -shaft 2
                        top: "318px",
                        left: "293px",
                        width: "138px",
                        transform: "rotate(-90deg)"
                    },
                    { // prodLeft - rampa 1
                        head: false,
                        top: "416px",
                        left: "53px",
                        width: "28px",
                        transform: "rotate(90deg)"
                    },
                    { // prodLeft - rampa 2
                        top: "428px",
                        left: "66px",
                        width: "95px"
                    }

                ],
                Vergne: [
                    { // start - shallowOverburden
                        top: "47px",
                        left: "207px",
                        width: "27px",
                        transform: "rotate(90deg)"
                    },
                    { // shallowOverburden - soundRock
                        top: "107px",
                        left: "207px",
                        width: "27px",
                        transform: "rotate(90deg)"
                    },
                    { // soundRock - depthCenter
                        top: "167px",
                        left: "207px",
                        width: "27px",
                        transform: "rotate(90deg)"
                    },
                    { // depthCenter - prodCenter
                        top: "227px",
                        left: "207px",
                        width: "26px",
                        transform: "rotate(90deg)"
                    },
                    { // prodCenter - depthLeft
                        top: "287px",
                        left: "207px",
                        width: "27px",
                        transform: "rotate(90deg)"
                    },
                    { // prodCenter - correia
                        top: "257px",
                        left: "303px",
                        width: "50px"
                    },
                    { // depthLeft - rampa
                        top: "347px",
                        left: "206px",
                        width: "29px",
                        transform: "rotate(90deg)"
                    },
                    { // prodLeft - rampa
                        top: "378px",
                        left: "56px",
                        width: "30px",
                        transform: "rotate(90deg)"
                    },
                    { // depthLeft - prodLeft 1
                        top: "249px",
                        left: "57px",
                        width: "29px",
                        transform: "rotate(-90deg)"
                    },
                    { // depthLeft - prodLeft
                        top: "318px",
                        left: "97px",
                        width: "34px",
                        transform: "rotate(-180deg)"
                    },
                    { // depthCenter - shaft
                        top: "197px",
                        left: "87px",
                        width: "44px",
                        transform: "rotate(-180deg)"
                    },
                    { // soundRock - shaft
                        top: "137px",
                        left: "87px",
                        width: "85px",
                        transform: "rotate(-180deg)"
                    },
                    { // prodLeft - shaft
                        top: "77px",
                        left: "87px",
                        width: "44px",
                        transform: "rotate(-180deg)"
                    }
                ]
            }
        }
    }
}

</script>
