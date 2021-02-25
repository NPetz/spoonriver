poems = require('../data/spoonRiver.json')

function getPoem(index){

    if (index>0 && index<215 ){

        index = Math.trunc(index) - 1

        let {title,text,order} = poems[index]

        return JSON.stringify({title,text,order})

    }


    let randomNumber = Math.floor(Math.random() * 214)

    let {title,text,order} = poems[randomNumber]


    return JSON.stringify({title,text,order})

}



exports.handler = async (event,context) =>{

    let path = event.path
    let index = path.replace('/.netlify/functions/getPoem/',"")
    return {
        statusCode:200,
        body: getPoem(index)
    }
}