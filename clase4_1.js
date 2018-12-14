$("#loading").hide();
var n=1;
$("#boton").click(function(){
    $("#loading").show();
    console.log("hola")
    let buscar = $("#buscar").val();
    if (buscar.length>0){
        $.ajax({
            url         : "http://www.omdbapi.com/",
            data        : {"apikey":"477db7f4","page":n,"s":buscar},
            type        : "get",
            dataType    : "json",
            success     : function(respuesta){
                console.log(respuesta);
                $("#resultado").html("");
                for (let i=0;i<respuesta.Search.length;i++){
                    $("#resultado").append("<img src='"+respuesta.Search[i].Poster+"' />")
                    $("#resultado").append("<p>"+
                        respuesta.Search[i].Title+"</p>");
                }
                $("#resultado").append("Resultados: "+respuesta.totalResults)
            },
            error       : function(){
                console.log("Error:")
            },
            complete : function(){
                $("#loading").hide();
            }
        })
    }
})