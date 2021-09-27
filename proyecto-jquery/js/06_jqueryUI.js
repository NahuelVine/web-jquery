'use strict'

//JQuery UI Interface

window.addEventListener("load",()=>{
    $(document).ready(()=>{
        //Verificacion integridad JQuery
        console.log("JQuery cargado con exito");

        //Draggable (Mover elemento por la pagina)
        $(".elemento").draggable();

        //Resizable (Redimensionar)
        $(".elemento").resizable();

        //Selectable (Seleccionable)
        //$(".lista_seleccionable").selectable();

        //Sortable (Ordenable) NO SE PUEDE USAR JUNTO A SELECTABLE POR LO CUAL LO COMENTO
        $(".lista_seleccionable").sortable({
            update: function(event, ui){
                console.log("Se cambio la lista");
            }
        });

        //Droppable (Soltar)
        $("#elemento_movido").draggable();
        $("#area").droppable({
            drop: function(){
                console.log("Se solto el elemento sobre el area");
            }
        });

        //Efectos
        $("#mostrar").click(function(){
            $(".caja_efectos").toggle("drop","slow");
        });

        //Tooltip
        $(document).tooltip();

        //Dialog
        $("#lanzar-popup").click(function(){
            $("#popup").dialog();
        });

        //Datepicker
        $("#calendario").datepicker();

        //Tabs
        $("#pestana").tabs();
    });
});