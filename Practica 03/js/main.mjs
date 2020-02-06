import { initShaderProgram } from "./shaders/methods.mjs";
import { vertexShader } from "./shaders/basicShader/vertexShader.mjs";
import { fragmentShader } from "./shaders/basicShader/fragmentShader.mjs";
import { initBuffers } from "./shaders/basicShader/init.mjs";


function main(){
    alert("Hola WebGL");

    // obtenemos el canvas de nuestro DOM
    const canvas = document.getElementById("gl");
    // Obtenemos el contexto de WebGL
    const gl = canvas.getContext("webgl");

    try{    
        if(!gl){
            throw "No se inicializo WebGL o su navegado no lo soporta";
        } 

        const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);
        const programInfo = {
            program: shaderProgram,
            attribLocations:{
                vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition")
            },
            uniformLocation = {
                projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
                modelViewMatrix: gl.uniformLocation(shaderProgram, "uModelViewMatrix")
            },
            
        };

        const buffers = initBuffers(gl);
        drawScene(gl, programInfo, buffers);

    }catch(error){
        console.error(error);
    }

}

window.onload = main;