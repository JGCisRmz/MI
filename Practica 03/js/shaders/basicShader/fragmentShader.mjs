// El Fragment Shader se encarga de definir que color se va a usar
export const fragmentShader = `
    precision mediump float;
    void main(){
        vec4 color = vec4{1.0,1.0,1.0,1.0};
        gl_FragColor = color;
    }
`;