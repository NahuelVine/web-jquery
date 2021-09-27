'use strict'

//MAIN DE LA PAGINA

window.addEventListener("load",()=>{
    $(document).ready(()=>{
        //Verificar la integridad del JQuery
        console.log("JQuery carga exitosa");

        //Verifica si esta en el index.html
        if(window.location.href.indexOf("index") > -1){
            //Slider
            $('.galeria').bxSlider({
                mode: "fade",
                auto: true,
                autoControls: true,
                stopAutoOnClick: true,
                pager: true,
                slideWidth: 800,
                pager:false
            });

            //Posts
            //crear los posts en un JSON
            var posts = [
                {
                    title: "Prueba de Titulo 1",
                    date: "Published on: " + moment().format("MMMM") + " " + moment().format("Do") + " , " + moment().format("YYYY"),
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada nisi ut arcu dapibus congue nec et tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ipsum mi, volutpat eu tristique at, tempus vitae mi. Donec ullamcorper viverra tortor, in ultricies nibh lacinia consequat. Nam luctus sem ac quam mollis convallis. Donec rutrum orci sed tellus dignissim consectetur. Phasellus turpis orci, rutrum sit amet mattis in, maximus id ligula. Fusce quis gravida tellus. Ut ullamcorper pretium sem, ut gravida tortor condimentum vel. Curabitur venenatis nisi dui, ac viverra ipsum pulvinar ac."
                },
                {
                    title: "Prueba de Titulo 2",
                    date: "Published on: " + moment().format("MMMM") + " " + moment().format("Do") + " , " + moment().format("YYYY"),
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada nisi ut arcu dapibus congue nec et tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ipsum mi, volutpat eu tristique at, tempus vitae mi. Donec ullamcorper viverra tortor, in ultricies nibh lacinia consequat. Nam luctus sem ac quam mollis convallis. Donec rutrum orci sed tellus dignissim consectetur. Phasellus turpis orci, rutrum sit amet mattis in, maximus id ligula. Fusce quis gravida tellus. Ut ullamcorper pretium sem, ut gravida tortor condimentum vel. Curabitur venenatis nisi dui, ac viverra ipsum pulvinar ac."
                },
                {
                    title: "Prueba de Titulo 3",
                    date: "Published on: " + moment().format("MMMM") + " " + moment().format("Do") + " , " + moment().format("YYYY"),
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada nisi ut arcu dapibus congue nec et tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ipsum mi, volutpat eu tristique at, tempus vitae mi. Donec ullamcorper viverra tortor, in ultricies nibh lacinia consequat. Nam luctus sem ac quam mollis convallis. Donec rutrum orci sed tellus dignissim consectetur. Phasellus turpis orci, rutrum sit amet mattis in, maximus id ligula. Fusce quis gravida tellus. Ut ullamcorper pretium sem, ut gravida tortor condimentum vel. Curabitur venenatis nisi dui, ac viverra ipsum pulvinar ac."
                },
                {
                    title: "Prueba de Titulo 4",
                    date: "Published on: " + moment().format("MMMM") + " " + moment().format("Do") + " , " + moment().format("YYYY"),
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada nisi ut arcu dapibus congue nec et tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ipsum mi, volutpat eu tristique at, tempus vitae mi. Donec ullamcorper viverra tortor, in ultricies nibh lacinia consequat. Nam luctus sem ac quam mollis convallis. Donec rutrum orci sed tellus dignissim consectetur. Phasellus turpis orci, rutrum sit amet mattis in, maximus id ligula. Fusce quis gravida tellus. Ut ullamcorper pretium sem, ut gravida tortor condimentum vel. Curabitur venenatis nisi dui, ac viverra ipsum pulvinar ac."
                },
                {
                    title: "Prueba de Titulo 5",
                    date: "Published on: " + moment().format("MMMM") + " " + moment().format("Do") + " , " + moment().format("YYYY"),
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada nisi ut arcu dapibus congue nec et tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ipsum mi, volutpat eu tristique at, tempus vitae mi. Donec ullamcorper viverra tortor, in ultricies nibh lacinia consequat. Nam luctus sem ac quam mollis convallis. Donec rutrum orci sed tellus dignissim consectetur. Phasellus turpis orci, rutrum sit amet mattis in, maximus id ligula. Fusce quis gravida tellus. Ut ullamcorper pretium sem, ut gravida tortor condimentum vel. Curabitur venenatis nisi dui, ac viverra ipsum pulvinar ac."
                }
            ];
        
            //Cargar los posts en el HTML
            posts.forEach((item,index)=>{
                var post = `
                    <article class="art_post">
                        <h2>${item.title}</h2>
                        <span class="fecha">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="boton_mas">Leer más</a>
                    </article>   
                `;
                $("#div_post").append(post)
            });
        }

        //Selector Themes
        var theme = $("#theme");
        var href_theme;

        if(localStorage.getItem("theme") !== null){
            href_theme = localStorage.getItem("theme");
            theme.attr("href",href_theme)
        }else{
            href_theme = "css/violet.css"
            localStorage.setItem("theme",href_theme)
            theme.attr("href",href_theme)
        }

        $("#red").click(function(){
            theme.attr("href","css/red.css")
            localStorage.setItem("theme",theme.attr("href"))
        });
        $("#violet").click(function(){
            theme.attr("href","css/violet.css")
            localStorage.setItem("theme",theme.attr("href"))
        });
        $("#blue").click(function(){
            theme.attr("href","css/blue.css")
            localStorage.setItem("theme",theme.attr("href"))
        });
        
        //Scroll arriba de la web
        $(".subir").click(function(e){
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            },500);
        });

        //Login falso
        var form_name;

        $("#login form").submit(function(e){
            form_name = $("#form_name").val();
            if(form_name != ""){
                localStorage.setItem("user_name",form_name);
                location.reload();
            }else{
                alert("Ingrese un nombre de Usuario");
                e.preventDefault();
            }
            
        });

        form_name = localStorage.getItem("user_name");

        if(form_name != null && form_name != "undefined"){
            var about_parrafo = $("#about p");
            about_parrafo.html("Bienvenido, " + form_name);
            about_parrafo.css("text-align","center");
            about_parrafo.append("<br/>")
            about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
            $("#logout").css("float","left").css("margin-left","35%");
            $("#logout").click(function(){
                localStorage.removeItem("user_name");
                location.reload();
            });
            $("#login").hide();
        }

        //Verifica si esta en el about.html
        if(window.location.href.indexOf("about") > -1){
            //Acordeon
            $("#acordeon").accordion();
        }

        //Verifica si esta en el reloj.html
        if(window.location.href.indexOf("reloj") > -1){
            //Reloj
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
            setInterval(()=>{
                reloj = moment().format("h:mm:ss");
                $("#reloj").html(reloj);
            },1000);   
        }

        //Verifica si esta en el contacto.html
        if(window.location.href.indexOf("contacto") > -1){
            //Calendario
            $("#box [name = 'birth_date']").datepicker({
                dateFormat: "dd/mm/yy"
            });
            //Validacion del form
            $.validate({
                lang: "es"
            });
        }
    });
});