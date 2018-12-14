$("#loading").hide();
var n=1;
$("#boton").click(function(){
    buscar(n)
})

function buscar(pagina){
    $("#resultado").html("");
    $("#paginacion").html("");
    $("#loading").show();
    console.log("hola")
    let buscar = $("#buscar").val();
    if (buscar.length>0){
        let url="http://www.omdbapi.com/?page="+pagina+"&apikey=477db7f4&s="+buscar;
        $.getJSON(url,procesarRespuesta);
    }
}

function procesarRespuesta(respuesta){
    console.log(respuesta);
    
    if (respuesta.Search==undefined) 
        $("#resultado").html("No hay resultados para "+$("#buscar").val());
    else{

        for (let i=0;i<respuesta.Search.length;i++){
            $("#resultado").append("<img src='"+respuesta.Search[i].Poster+"' />")
            $("#resultado").append("<p>"+
                respuesta.Search[i].Title+"</p>");
        }
        $("#resultado").append("Resultados: "+respuesta.totalResults)
        
        let npaginas = Math.ceil(respuesta.totalResults / 10);
        $("#paginacion").html("");
        for (let i=1;i<=npaginas;i++)
        {
            let vinculo = document.createElement("a");
            vinculo.href="#"+i;
            vinculo.innerHTML = i+" ";
            vinculo.onclick=function (){
                buscar(i)
            }
            $("#paginacion").append(vinculo)
        }    
    }
    $("#loading").hide();
}