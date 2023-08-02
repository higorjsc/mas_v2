
const coresDefault = {
    fluxoGreen: 'rgba(14, 224, 49, 0.8)',
    fluxoBlue: 'rgba(31, 191, 219, 0.493)',
    fluxoRed: 'rgba(31, 191, 219, 0.493)',

}

const objetos = {

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
        ]
    }

}





export {
    objetos,
    coresDefault

}