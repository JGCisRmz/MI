function setTextDiv(msg){
    $("div.holaMundo").text(msg);
}

$(document).ready(() => {
    //alert("hola Mundo");

    let setText = msg => {
        $("div.holaMundo").text(msg);
    }

    /**
     * Encapsula una funcion en el scope 
     * para ser usada solomente en este momento
     */
    $("body").css("background-color","gray");
    setText("Hola Mundo!! :)");

    // setTimeout(() => {
    //     setText("Adios~~ :(");
    // }, 3000);

    // $("body").css("background-color","cyan");
    // setTextDiv("Hola Mundo!! :)");

    // setTimeout(() => {
    //     setTextDiv("Adios~~ :(");
    // }, 3000);
    
    
    // let loteria = 0;
    // while(loteria !== 5){
    //     loteria = Math.floor(Math.random() * 1000);
    //     console.log(`Valor ${loteria}`);
    // }

    setText("Ejemplo Bonito de Ajax");

    // let prom = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject("No se gano la loteria nunca");
    //     }, 3000);
        
    //     let loteria = 0;
    //     while(loteria !== 5){
    //         loteria = Math.floor(Math.random() * 1000000);
    //         console.log(`Valor ${loteria}`);
    //     }

    //     resolve("GANO LA LOTERIA");
    // });  

    // setText("Realizando Loteria...");
    // prom.then(msg => {
    //     setText(msg);
    // })

    $.ajax({
        url: "/mock/data.json",
    }).done((data) => {
        console.log(data);
        let comment = data["_comment"];
        console.log(comment);
        let alumnos = data["alumnos"];
        console.log(alumnos);
        alumnos.forEach((v,k) => {
            console.log(`Key ${k}, value ${v}`);
            $("div.ajax").append(`<div> Alumno ${k}, Nombre: ${v.nombre}, Edad: ${v.edad}, Semestre: ${v.semestre}</div>`);
        });
    })
    
});