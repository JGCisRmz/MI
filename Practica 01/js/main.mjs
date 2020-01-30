import * as Colors from "./colorsLibrary.mjs"

function log(message){
    console.log(message);
}

function main(){
    log("texto");

    const canvas = document.querySelector("#GL");
    const cColor = Colors.green     ;

    try{
        const gl = canvas.getContext("webgl");
        if(gl === null){
            throw "No se inicializo Webgl"
        }

        gl.clearColor(cColor.r, cColor.g, cColor.b, cColor.a);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }catch(error){
        console.error(error);
    }
}

window.onload = main;