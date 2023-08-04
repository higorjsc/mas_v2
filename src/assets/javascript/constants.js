
const coresDefault = {
    fluxoGreen: 'rgba(14, 224, 49, 0.8)',
    fluxoBlue: 'rgba(31, 191, 219, 0.493)',
    fluxoRed: 'rgba(31, 191, 219, 0.493)',

}

// const ilustrations = [
//     {
//         key:'shaft',
//         top: '20px',
//         left: '20px',
//         transform: 'rotate(0deg)',
//         src:'@\\assets\\Imagens\\shaft.png',
//     },
//     {
//         key:'rampa',
//         top: '20px',
//         left: '20px',
//         transform: 'rotate(0deg)',
//         src:'@\\assets\\Imagens\\rampa.png',
//     },
//     {
//         key:'correia',
//         top: '20px',
//         left: '20px',
//         transform: 'rotate(0deg)',
//         src:'@\\assets\\Imagens\\correia.png',
//     },
//     {
//         key:'ventilacao',
//         top: '20px',
//         left: '20px',
//         transform: 'rotate(0deg)',
//         src:'@\\assets\\Imagens\\vent.png',
//     },
//     {
//         key:'usina',
//         top: '20px',
//         left: '20px',
//         transform: 'rotate(0deg)',
//         src:'@\\assets\\Imagens\\usina.png',
//     },
//     {
//         key:'superficie',
//         top: '20px',
//         left: '20px',
//         transform: 'rotate(0deg)',
//         src:'@\\assets\\Imagens\\superficie.png',
//     },
//     {
//         key:'orebody',
//         top: '20px',
//         left: '20px',
//         transform: 'rotate(0deg)',
//         src:'@\\assets\\Imagens\\orebody.png',
//     },
//     {
//         key:'pit',
//         top: '20px',
//         left: '20px',
//         transform: 'rotate(0deg)',
//         src:'@\\assets\\Imagens\\superficie_pit.png',
//     },
// ]

const objetosFluxograma = {
    
    objeto: {
        cardozo: [
            {   
                id: 'start',
                top: '10px',
                left: '180px',
                Text: 'startFluxoCardozo'
            },
            {   
                id: 'surfaceMaterial',
                top: '70px',
                left: '140px',
                width: '150px',
                Text: 'smFluxoCardozo'
            },
            {   
                id: 'rockMass',
                top: '130px',
                left: '180px',
                Text: 'rmFluxoCardozo'
            },
            {   
                id: 'depthCenter',
                top: '190px',
                left: '140px',
                width: '150px',
                Text: 'depthCenterFluxoCardozo'
            },
            {   
                id: 'prodCenter',
                top:'250px',
                left: '140px',
                width: '150px',
                Text: 'prodCenterFluxoCardozo'
            },
            {   
                id: 'depthLeft',
                top: '310px',
                left: '140px',
                width: '150px',
                Text: 'depthLeftFluxoCardozo',
            },
            {   
                id: 'prodLeft',
                top: '300px',
                left: '32px',
                Text: 'prodLeftFluxoCardozo',
                transform: 'rotate(-90deg)'
            },
            {   
                id: 'rampa',
                top: '385px',
                left: '60px',
                width: '180px',
                Text: 'correiaFluxoCardozo',
                transform: 'rotate(-12deg)'
            },
            {   
                id:'shaft',
                top: '132px',
                left: '-15px',
                width: '170px',
                Text: 'shaftFluxoCardozo',
                transform: 'rotate(-90deg)'
            },
            {   
                id: 'correia',
                top: '250px',
                left: '270px',
                width: '200px',
                Text: 'rampaFluxoCardozo',
                transform: 'rotate(-70deg)'
            },
        ],
        moser:[
            {   
                id: 'logistica',
                top: '10px',
                left: '20px',
                Text: 'logisticaFluxoMoser'
            },
            {   
                id: 'rockMass',
                top: '70px',
                left: '20px',
                Text: 'rmFluxoMoser'
            },
            {   
                id: 'surfaceMaterial',
                top: '135px',
                left: '20px',
                Text: 'smFluxoMoser'
            },
            {   
                id: 'depthCenter',
                top: '218px',
                left: '170px',
                Text: 'depthCenterFluxoMoser'
            },
            {   
                id: 'prodCenter',
                top:'305px',
                left: '170px',
                Text: 'prodCenterFluxoMoser'
            },
            {   
                id:'openPit',
                top: '218px',
                left: '20px',
                Text: 'opFluxoMoser'
            },
            {   
                id: 'depthLeft',
                top: '300px',
                left: '20px',
                Text: 'depthLeftFluxoMoser'
            },
            {   
                id: 'prodLeft',
                top: '382px',
                left: '20px',
                Text: 'prodLeftFluxoMoser'
            },
            {   
                id: 'rampa',
                top: '420px',
                left: '170px',
                Text: 'rampaFluxoMoser'
            },
            {   
                id: 'shaft',
                top: '220px',
                left: '320px',
                Text: 'shaftFluxoMoser'
            },
        ],
        vergne:[
            {   
                id: 'start',
                top: '10px',
                left: '180px',
                Text: 'startFluxoVergne'
            },
            {   
                id: 'surfaceMaterial',
                top: '70px',
                left: '140px',
                width: '150px',
                Text: 'smFluxoVergne'
            },
            {   
                id: 'rockMass',
                top: '130px',
                left: '180px',
                Text: 'rmFluxoVergne'
            },
            {   
                id: 'depthCenter',
                top: '190px',
                left: '140px',
                width: '150px',
                Text: 'depthCenterFluxoVergne'
            },
            {   
                id: 'prodCenter',
                top:'250px',
                left: '140px',
                width: '150px',
                Text: 'prodCenterFluxoVergne'
            },
            {   
                id: 'depthLeft',
                top: '310px',
                left: '140px',
                width: '150px',
                Text: 'depthLeftFluxoVergne',
            },
            {   
                id: 'prodLeft',
                top: '300px',
                left: '32px',
                Text: 'prodLeftFluxoVergne',
                transform: 'rotate(-90deg)'
            },
            {   
                id: 'rampa',
                top: '385px',
                left: '60px',
                width: '180px',
                Text: 'correiaFluxoVergne',
                transform: 'rotate(-12deg)'
            },
            {   
                id:'shaft',
                top: '132px',
                left: '-15px',
                width: '170px',
                Text: 'shaftFluxoVergne',
                transform: 'rotate(-90deg)'
            },
            {   
                id: 'correia',
                top: '250px',
                left: '270px',
                width: '200px',
                Text: 'rampaFluxoVergne',
                transform: 'rotate(-70deg)'
            },
        ]
    },
    way: {
        cardozo: [
            {   //surfaceMaterial - rockMass
                top: '95px',
                left: '210px',
                Text: '<70 m',
            },  
            {   //rockMass - depthCenter
                top: '155px',
                left: '180px',
                Text: 'Class I-IV (good-poor)',
            }, 
            {   //depthCenter - prodCenter
                top: '215px',
                left: '213px',
                Text: 'YES',
            },  
            {   //prodCenter - depthLeft
                top: '275px',
                left: '213px',
                Text: 'YES',
            }, 
            {   //depthCenter - rampa
                top: '335px',
                left: '213px',
                Text: 'YES',
            },  
            {   //depthCenter - correia
                top: '252px',
                left: '320px',
                Text: 'NO',
            }, 
            {   //depthLeft - prodLeft 
                top: '313px',
                left: '117px',
                Text: 'NO',
            },  
            {   //prodLeft - rampa
                top: '365px',
                left: '64px',
                Text: 'YES',
            }, 
            {   //prodLeft - shaft
                top: '250px',
                left: '68px',
                Text: 'NO',
            }, 
            {   //depthCenter - shaft
                top: '192px',
                left: '110px',
                Text: 'NO',
            },  
            {   //rockMass - shaft
                top: '124px',
                left: '120px',
                Text: 'Class V',
            },   
            {   //rockMass - shaft
                top: '139px',
                left: '100px',
                Text: '(very poor-soil)',
            },   
            {   //surfaceMaterial - shaft
                top: '71px',
                left: '102px',
                Text: '>70 m',
            }, 
            
        ],
        moser:[
            {   //logistica - shaft
                top: '45px',
                left: '358px',
                Text: 'NO',
            }, 
            {   //logistica - rockMass
                top: '41px',
                left: '53px',
                width: '20px',
                Text: 'YES',
            }, 
            {   //rockMass - surfaceMaterial
                top: '102px',
                left: '39px',
                width: '60px',
                Text: 'Class I - V',
            }, 
            {   //surfaceMaterial - openPit
                top: '185px',
                left: '45px',
                width: '40px',
                Text: '<70 m',
            }, 
            {   //openPit - depthLeft
                top: '268px',
                left: '53px',
                width: '20px',
                Text: 'YES',
            }, 
            {   //depthLeft - prodLeft
                top: '349px',
                left: '40px',
                width: '50px',
                Text: '<600 m',
            },
            {   //rockMass - shaft
                top: '75px',
                left: '180px',
                Text: 'class VI-VII',
            }, 
            {   //surfaceMaterial - shaft
                top: '150px',
                left: '195px',
                Text: '>70 m',
                width: '40px',
            }, 
            {   //depthCenter - prodCenter
                top: '260px',
                left: '185px',
                Text: '<500 m',
                width: '60px',
            },  
            {   //depthCenter - shaft
                top: '225px',
                left: '265px',
                Text: '>500 m',
                width: '41px',
            }, 
            {   //prodCenter - rampa
                top: '340px',
                left: '180px',
                Text: '<400 k ton/year',
                width: '80px',
            }, 
            {   //prodCenter - shaft
                top: '307px',
                left: '270px',
                Text: '>400 k ton/year',
                width: '80px',
            },
            {   //prodleft - shaft
                top: '387px',
                left: '125px',
                Text: '>600 k ton/year',
                width: '80px',
            },
            {   //prodleft - rampa
                top: '423px',
                left: '72px',
                Text: '>600 k ton/year',
                width: '80px',
            },
            {   //depthleft - shaft
                top: '314.5px',
                left: '118px',
                Text: '>600 m',
                width: '40px',
            },
            {   //openPit - depthCenter
                top: '223px',
                left: '126px',
                Text: 'No',
                width: '20px',
            },
        ],
        vergne:[
            {   //shallowOverburden - soundRock
                top: '95px',
                left: '213px',
                Text: 'YES',
            },  
            {   //soundRock - depthCenter
                top: '155px',
                left: '213px',
                Text: 'YES',
            }, 
            {   //depthCenter - prodCenter
                top: '215px',
                left: '213px',
                Text: 'YES',
            },  
            {   //prodCenter - depthLeft
                top: '275px',
                left: '213px',
                Text: 'YES',
            }, 
            {   //depthCenter - rampa
                top: '335px',
                left: '213px',
                Text: 'YES',
            },  
            {   //depthCenter - correia
                top: '252px',
                left: '320px',
                Text: 'NO',
            }, 
            {   //depthLeft - prodLeft 
                top: '313px',
                left: '117px',
                Text: 'NO',
            },  
            {   //prodLeft - rampa
                top: '365px',
                left: '64px',
                Text: 'YES',
            }, 
            {   //prodLeft - shaft
                top: '250px',
                left: '68px',
                Text: 'NO',
            }, 
            {   //depthCenter - shaft
                top: '192px',
                left: '110px',
                Text: 'NO',
            },  
            {   //soundRock - shaft
                top: '124px',
                left: '134px',
                Text: 'NO',
            },
            {   //shallowOverburden - shaft
                top: '71px',
                left: '102px',
                Text: '>70 m',
            }, 
        ]
    },
    setas: {
        cardozo:[
            {   //start - surfaceMaterial
                top: '47px', 
                left: '207px',
                width: '27px',
                transform: 'rotate(90deg)',
            },
            {   //surfaceMaterial - rockMass
                top: '107px', 
                left: '207px',
                width: '27px',
                transform: 'rotate(90deg)',
            },
            {   //rockMass - depthCenter
                top: '167px', 
                left: '207px',
                width: '27px',
                transform: 'rotate(90deg)',
            },
            {   //depthCenter - prodCenter
                top: '227px', 
                left: '207px',
                width: '26px',
                transform: 'rotate(90deg)',
            },
            {   //prodCenter - depthLeft
                top: '287px', 
                left: '207px',
                width: '27px',
                transform: 'rotate(90deg)',
            },
            {   //prodCenter - correia
                top: '257px', 
                left: "303px",
                width: '50px',
            },
            {   //depthLeft - rampa
                top: '347px', 
                left: '206px',
                width: '29px',
                transform: 'rotate(90deg)',
            },
            {   //prodLeft - rampa
                top: '378px', 
                left: '56px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   //depthLeft - prodLeft 1
                top: '249px', 
                left: '57px',
                width: '29px',
                transform: 'rotate(-90deg)',
            },
            {   //depthLeft - prodLeft
                top: '318px', 
                left: '97px',
                width: '34px',
                transform: 'rotate(-180deg)',
            },
            {   //depthCenter - shaft
                top: '197px', 
                left: '87px',
                width: '44px',
                transform: 'rotate(-180deg)',
            },
            {   //rockMass - shaft
                top: '137px', 
                left: '87px',
                width: '85px',
                transform: 'rotate(-180deg)',
            },
            {   //prodLeft - shaft
                top: '77px', 
                left: '87px',
                width: '44px',
                transform: 'rotate(-180deg)',
            },
        ],
        moser: [
            {   //logistica - shaft 1
                head: false,
                top: '25px', 
                left: '110px',
                width: '256px',
            },
            {   //logistica - shaft 2
                top: '118px', 
                left: '268px',
                width: '185px',
                transform: 'rotate(90deg)'
            },
            {   //rockMass - shaft 
                head: false,
                top: '84px', 
                left: '110px',
                width: '256px',
            },
            {   //surfaceMaterial - shaft
                head: false,
                top: '158px', 
                left: '110px',
                width: '256px',
            },
            {   //logistica - rockMass
                top: '50px', 
                left: '47px',
                width: '20px',
                transform: 'rotate(90deg)',
            },
            {   //rockMass - surfaceMaterial
                top: '112px', 
                left: '46px',
                width: '25px',
                transform: 'rotate(90deg)',
            },
            {   //surfaceMaterial - openPith
                top: '196px', 
                left: '46px',
                width: '25px',
                transform: 'rotate(90deg)',
            },
            {   //openPith - depthLeft
                top: '278px', 
                left: '46px',
                width: '25px',
                transform: 'rotate(90deg)',
            },
            {   //depthLeft - prodLeft
                top: '360px', 
                left: '46px',
                width: '25px',
                transform: 'rotate(90deg)',
            },
            {   //depthCenter - prodCenter
                top: '280px', 
                left: '197px',
                transform: 'rotate(90deg)',
            },
            {   //prodCenter - Rampa
                top: '372px', 
                left: '175px',
                width: '75px',
                transform: 'rotate(90deg)',
            },
            {   //prodCenter - shaft
                top: '312px', 
                left: '262px',
                width: '94px',
            },
            {   //openPit - depthCenter
                top: '230px', 
                left: '112px',
                width: '50px',
            },
            {   //depthLeft - shaft 1
                head: false,
                top: '323px', 
                left: '112px',
                width: '50px',
            },
            {   //depthLeft - shaft 2
                head: false,
                top: '344px', 
                left: '140px',
                width: '42px',
                transform: 'rotate(90deg)'
            },
            {   //depthLeft - shaft 3
                head: false,
                top: '365px', 
                left: '160px',
                width: '207px',
            },
            {   //depthCenter - shaft
                top: '230px', 
                left: '262px',
                width: '50px',
            },
            {   //prodLeft -shaft 1
                head: false,
                top: '395px', 
                left: '112px',
                width: '255px',
            },
            {   //prodLeft -shaft 2
                top: '318px', 
                left: '293px',
                width: '138px',
                transform: 'rotate(-90deg)'
            },
            {   //prodLeft - rampa 1 
                head: false,
                top: '416px', 
                left: '49px',
                width: '28px',
                transform: 'rotate(90deg)',
            },
            {   //prodLeft - rampa 2 
                top: '428px', 
                left: '61.5px',
                width: '99px',
            },

        ],
        vergne: [
            {   //start - shallowOverburden
                top: '47px', 
                left: '207px',
                width: '27px',
                transform: 'rotate(90deg)',
            },
            {   //shallowOverburden - soundRock
                top: '107px', 
                left: '207px',
                width: '27px',
                transform: 'rotate(90deg)',
            },
            {   //soundRock - depthCenter
                top: '167px', 
                left: '207px',
                width: '27px',
                transform: 'rotate(90deg)',
            },
            {   //depthCenter - prodCenter
                top: '227px', 
                left: '207px',
                width: '26px',
                transform: 'rotate(90deg)',
            },
            {   //prodCenter - depthLeft
                top: '287px', 
                left: '207px',
                width: '27px',
                transform: 'rotate(90deg)',
            },
            {   //prodCenter - correia
                top: '257px', 
                left: "303px",
                width: '50px',
            },
            {   //depthLeft - rampa
                top: '347px', 
                left: '206px',
                width: '29px',
                transform: 'rotate(90deg)',
            },
            {   //prodLeft - rampa
                top: '378px', 
                left: '56px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   //depthLeft - prodLeft 1
                top: '249px', 
                left: '57px',
                width: '29px',
                transform: 'rotate(-90deg)',
            },
            {   //depthLeft - prodLeft
                top: '318px', 
                left: '97px',
                width: '34px',
                transform: 'rotate(-180deg)',
            },
            {   //depthCenter - shaft
                top: '197px', 
                left: '87px',
                width: '44px',
                transform: 'rotate(-180deg)',
            },
            {   //soundRock - shaft
                top: '137px', 
                left: '87px',
                width: '85px',
                transform: 'rotate(-180deg)',
            },
            {   //prodLeft - shaft
                top: '77px', 
                left: '87px',
                width: '44px',
                transform: 'rotate(-180deg)',
            },
        ]
    }

}

export {
    objetosFluxograma,
    coresDefault,
    // ilustrations
}