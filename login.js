import { expresionRegulares } from "./services/utils.js";

let campoForm = document.querySelectorAll(".formulario__entrada");



    campoForm.forEach((campoForm) =>{
        campoForm.addEventListener("keyup", function(e){
            
            
            
            switch(e.target.id){
                case "usuario":
                    
                    if(expresionRegulares.textoRegex.test(e.target.value)){
                        console.log("Cumple la expression regular");
                        document.getElementById("usuario").style.backgroundColor = "#90EE90"
                        document.getElementById("usuario").style.outline = "none"
                        document.getElementById("usuario").style.borderColor = "#106510"
                        document.getElementById("usuario").style.borderWidth = "2px"
                        document.getElementById("usuario").style.color = "black"
                    }else{
                        console.log("No cumple la expression regular");
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.outline = "none"
                        e.target.style.borderColor = "red"
                        e.target.style.borderWidth = "2px"
                        e.target.style.color = "red"
                    }
                    break;
                    case "contrasena":
                        if(expresionRegulares.numeroRegex.test(e.target.value)){
                        console.log("Cumple la expression regular");
                        document.getElementById("contrasena").style.backgroundColor = "#90EE90"
                        document.getElementById("contrasena").style.outline = "none"
                        document.getElementById("contrasena").style.borderColor = "#106510"
                        document.getElementById("contrasena").style.borderWidth = "2px"
                        document.getElementById("contrasena").style.color = "black"
                        }else{
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.outline = "none"
                        e.target.style.borderColor = "red"
                        e.target.style.borderWidth = "2px"
                        e.target.style.color = "red"
                        }
                    break;
                        case "role":
                        if(expresionRegulares.numeroRegex.test(e.target.value)){
                        console.log("Cumple la expression regular");
                        document.getElementById("role").style.backgroundColor = "#90EE90"
                        document.getElementById("role").style.outline = "none"
                        document.getElementById("role").style.borderColor = "#106510"
                        document.getElementById("role").style.borderWidth = "2px"
                        document.getElementById("role").style.color = "black"
                        }else{
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.outline = "none"
                        e.target.style.borderColor = "red"
                        e.target.style.borderWidth = "2px"
                        e.target.style.color = "red"
                        }
                    break;

            }
        })
    })

    
