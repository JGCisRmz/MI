export function initBuffers(gl){
    // Creamos un Buffer para los vertices
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    // Definimos nuestros vertices
    const positions = [
        1.0, 1.0, 
        -1.0, 1.0, 
        1.0, -1.0,
        -1.0, -1.0,
    ];
    
    // Pasamos la lista de posiciones para generar la forma
    gl.bufferData(gl.ARRAY_BUFFER, 
        new Float32Array(positions), 
        gl.STATIC_DRAW);

    return {
        position: positionBuffer
    };

}