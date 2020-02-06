export function initShaderProgram(gl, vsSource, fsSource){
    //Cargamos los Shaders
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl,gl.FRAGMENT_SHADER,fsSource);

    //Unimos Shaders con nuestro shaderProgram
    const shaderProgram = gl.createProgram();
    try{
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)){
            throw `no se inicializo el progra del Shader
            ${gl.getProgramInfoLog(shaderProgram)}`;
        }
    }catch(error){
        console.error(error);
        return null;
    }

    return shaderProgram;
}

function loadShader(gl, type, soruce){
    const shader = gl.createShader(type);
    try{
        //Mandamos el CF a el obejto Shader
        gl.shaderSource(shader, source)
        //Compilar el programa del Shader
        gl.compileShader(shader);

        if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
            throw `Sucedio un error de compilacion: 
            ${gl.getShaderInfolog(shader)}`;
        }

    }catch(error){
        console.error(error);
        //Liberamos la memoria utilizada
        gl.deleteShader(shader);
        return null
    }

    return shader
}