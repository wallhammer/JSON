function aJSON() {
    let Nombre = document.querySelector("#NOMBRE").value;
    let Apellido = document.querySelector("#APELLIDO").value;
    let Edad = document.querySelector("#edad").value;
    let Email = document.querySelector("#email").value;
    let Object ={
        nombre:Nombre,
        apellido:Apellido,
        edad:Edad,
        email:Email,

    };
    document.querySelector("#textarea").value  = JSON.stringify(Object);
    

}
function aObject() {
    let JSONString =document.querySelector("#textarea").value;
    let objeto = JSON.parse(JSONString);
     document.querySelector("#NOMBRE").value = objeto.nombre;
     document.querySelector("#APELLIDO").value= objeto.apellido;
     document.querySelector("#edad").value= objeto.edad;
     document.querySelector("#email").value =objeto.email;
    
   
}
document.querySelector("#btnjson").addEventListener("click",aJSON);
document.querySelector("#btnObject").addEventListener("click",aObject);