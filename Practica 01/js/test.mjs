
import {ColorModel} from "./js/models/colorModel.mjs";

function main(){
	//document.getElementById("GL").innerHTML = "test";
	//arr = document.getElementsByClassName("rojo");
	//arr.array.forEach(element => {

	//});


	const canvas = document.querySelector("#GL");
	
	const cColor = new ColorModel(0,0,1,1);

	try{
		const gl = canvas.getContext("webgl");
		if(gl === null){
			throw "No se Inicializo WebGL"
		}

		gl.clearColor(cColor.r, cColor.g, cColor.b, cColor.a);
		gl.clear(gl.COLOR_BUFFER_B);

	}catch(e){
		console.error(e);
	}

	}
	
window.onload = main;	