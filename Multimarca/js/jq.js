$(document).ready(function() {

    $("#amosar").click(function() {

        if ($('#opcionsu').slideToggle()) {
            $('#opcionsu').hide();

            $('#pancartau').slideToggle();

            $("#pancartau").text("");

            $("#pancartau").append('<form><p><a type="button" href="vnuevos.html" class="btn btn-primary btn-sm mb-3">Buscar</a>&nbsp;<a class="mb-2"' +
                ' href="vnuevos.html">&nbsp;&nbsp;&nbsp;Cerrar</a></p> <div class="form-group"> <label for="exampleInputEmail1">Palabra clave</label>' +
                ' <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Audi, león...">' +
                ' <small id="emailHelp" class="form-text text-muted">Busca por palabraas que describan lo que buscas. EJ: Audi,R5...</small>' +
                ' </div> <div class="form-group"> <label for="exampleInputEmail1">Marca y modelo</label> <select class="form-control" id="exampleSelectUn">' +
                ' <option>Marca</option> <option>Audi</option> <option>BMW</option> <option>Citroen</option> <option>Seat</option>' +
                ' </select> <select class="mt-2 form-control" id="exampleSelectUn"> <option>Modelo</option> <option>modelo1</option> ' +
                '<option>modelo2</option> <option>modelo3</option> </select> </div> <div class="form-group">' +
                ' <label for="exampleInputEmail1">Precio</label> <select class="form-control" id="exampleSelectUn"> ' +
                '<option>Desde</option> <option>0 €</option> <option>1000 €</option> <option>3000 €</option> <option>10.000 €</option>' +
                ' <option>15.000 €</option> <option>20.000 €</option> <option>30.000 €</option> <option>40.000 €</option> </select> ' +
                '<select class="mt-2 form-control" id="exampleSelectUn"> <option>Hasta</option> <option>1000 €</option> ' +
                '<option>3000 €</option> <option>10.000 €</option> <option>15.000 €</option> <option>20.000 €</option> <option>30.000 €</option>' +
                ' <option>40.000 €</option> </select> </div> <div class="form-group"> <label for="exampleInputEmail1">Año</label> ' +
                '<select class="form-control" id="exampleSelectUn"> <option>Desde</option> <option>2000</option> <option>2001</option> ' +
                '<option>2002</option> <option>2012</option> </select> <select class="mt-2 form-control" id="exampleSelectUn"> <option>Hasta</option>' +
                ' <option>2000</option> <option>2001</option> <option>2002</option> <option>2012</option> </select> </div>' +
                ' <div class="form-group"> <label>Carrocerías</label> <ul class="mt-PictureSelector js-multi" id="filter-bodywork"> <li class="mt-PictureSelector-item"> <input type="checkbox" id="berlina" data-id="1" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="berlina" class="mt-PictureSelector-label mt-PictureSelector-label--berlina js-select" data-id="1" data-tagging="c_list_filter_bodywork_sedan">Berlina</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="familiar" data-id="4" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="familiar" class="mt-PictureSelector-label mt-PictureSelector-label--familiar js-select" data-id="4" data-tagging="c_list_filter_bodywork_family">Familiar</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="coupe" data-id="2" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="coupe" class="mt-PictureSelector-label mt-PictureSelector-label--coupe js-select" data-id="2" data-tagging="c_list_filter_bodywork_coupe">Coupe</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="monovolumen" data-id="5" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="monovolumen" class="mt-PictureSelector-label mt-PictureSelector-label--monovolumen js-select" data-id="5" data-tagging="c_list_filter_bodywork_minivan">Monovolúmen</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="suv" data-id="6" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="suv" class="mt-PictureSelector-label mt-PictureSelector-label--suv js-select" data-id="6" data-tagging="c_list_filter_bodywork_4x4">4x4 SUV</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="cabrio" data-id="3" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="cabrio" class="mt-PictureSelector-label mt-PictureSelector-label--cabrio js-select" data-id="3" data-tagging="c_list_filter_bodywork_cabrio">Cabrio</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="pickup" data-id="7" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="pickup" class="mt-PictureSelector-label mt-PictureSelector-label--pickup js-select" data-id="7" data-tagging="c_list_filter_bodywork_pickup">Pick Up</label> </li> </ul> </div> <label>Puertas</label><br> <div class="form-check form-check-inline"> <label class="form-check-label"> <input class="form-check-input" type="radio" id="inlineRadio1" value="option1"> 2 </label> </div> <div class="form-check form-check-inline"> <label class="form-check-label"> <input class="form-check-input" type="radio" id="inlineRadio2" value="option2"> 3 </label> </div> <div class="form-check form-check-inline"> <label class="form-check-label"> <input class="form-check-input" type="radio" id="inlineRadio3" value="option3"> 4 </label> </div> <div class="form-check form-check-inline"> <label class="form-check-label"> <input class="form-check-input" type="radio" id="inlineRadio3" value="option3" > 5 </label> </div> <div class="form-group"> <label for="exampleInputPassword1">Color</label> <input type="password" class="form-control" id="exampleInputPassword1"> </div> <button type="button" class="hidden-xs-down btn btn-primary">Buscar</button> </div> </form>');
        }
    });

    $("#amosar2").click(function() {

        if ($('#opcionsu').slideToggle()) {
            $('#opcionsu').hide();

            $('#pancartau').slideToggle();

            $("#pancartau").text("");

            $("#pancartau").append('<form><p><a type="button" href="vnuevos.html" class="btn btn-primary btn-sm mb-3">Buscar</a>&nbsp;<a class="mb-2"' +
                ' href="vnuevos.html">&nbsp;&nbsp;&nbsp;Cerrar</a></p> <div class="form-group"> <label for="exampleInputEmail1">Palabra clave</label>' +
                ' <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Audi, león...">' +
                ' <small id="emailHelp" class="form-text text-muted">Busca por palabraas que describan lo que buscas. EJ: Audi,R5...</small>' +
                ' </div> <div class="form-group"> <label for="exampleInputEmail1">Marca y modelo</label> <select class="form-control" id="exampleSelectUn">' +
                ' <option>Marca</option> <option>Audi</option> <option>BMW</option> <option>Citroen</option> <option>Seat</option>' +
                ' </select> <select class="mt-2 form-control" id="exampleSelectUn"> <option>Modelo</option> <option>modelo1</option> ' +
                '<option>modelo2</option> <option>modelo3</option> </select> </div> <div class="form-group">' +
                ' <label for="exampleInputEmail1">Precio</label> <select class="form-control" id="exampleSelectUn"> ' +
                '<option>Desde</option> <option>0 €</option> <option>1000 €</option> <option>3000 €</option> <option>10.000 €</option>' +
                ' <option>15.000 €</option> <option>20.000 €</option> <option>30.000 €</option> <option>40.000 €</option> </select> ' +
                '<select class="mt-2 form-control" id="exampleSelectUn"> <option>Hasta</option> <option>1000 €</option> ' +
                '<option>3000 €</option> <option>10.000 €</option> <option>15.000 €</option> <option>20.000 €</option> <option>30.000 €</option>' +
                ' <option>40.000 €</option> </select> </div> <div class="form-group"> <label for="exampleInputEmail1">Año</label> ' +
                '<select class="form-control" id="exampleSelectUn"> <option>Desde</option> <option>2000</option> <option>2001</option> ' +
                '<option>2002</option> <option>2012</option> </select> <select class="mt-2 form-control" id="exampleSelectUn"> <option>Hasta</option>' +
                ' <option>2000</option> <option>2001</option> <option>2002</option> <option>2012</option> </select> </div> <div class="form-group">' +
                ' <label for="exampleInputEmail1">Kilómetros</label> <select class="form-control" id="exampleSelectUn">' +
                ' <option>Desde</option> <option>0</option> <option>2000</option> <option>120.000</option> </select>' +
                ' <select class="mt-2 form-control" id="exampleSelectUn"> <option>Hasta</option> <option>0</option>' +
                ' <option>2000</option> <option>150.000</option> </select> </div> <div class="form-group"> <label>Carrocerías</label> <ul class="mt-PictureSelector js-multi" id="filter-bodywork"> <li class="mt-PictureSelector-item"> <input type="checkbox" id="berlina" data-id="1" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="berlina" class="mt-PictureSelector-label mt-PictureSelector-label--berlina js-select" data-id="1" data-tagging="c_list_filter_bodywork_sedan">Berlina</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="familiar" data-id="4" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="familiar" class="mt-PictureSelector-label mt-PictureSelector-label--familiar js-select" data-id="4" data-tagging="c_list_filter_bodywork_family">Familiar</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="coupe" data-id="2" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="coupe" class="mt-PictureSelector-label mt-PictureSelector-label--coupe js-select" data-id="2" data-tagging="c_list_filter_bodywork_coupe">Coupe</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="monovolumen" data-id="5" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="monovolumen" class="mt-PictureSelector-label mt-PictureSelector-label--monovolumen js-select" data-id="5" data-tagging="c_list_filter_bodywork_minivan">Monovolúmen</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="suv" data-id="6" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="suv" class="mt-PictureSelector-label mt-PictureSelector-label--suv js-select" data-id="6" data-tagging="c_list_filter_bodywork_4x4">4x4 SUV</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="cabrio" data-id="3" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="cabrio" class="mt-PictureSelector-label mt-PictureSelector-label--cabrio js-select" data-id="3" data-tagging="c_list_filter_bodywork_cabrio">Cabrio</label> </li> <li class="mt-PictureSelector-item"> <input type="checkbox" id="pickup" data-id="7" class="mt-PictureSelector-input js-dosearch js-Bodywork-input"> <label for="pickup" class="mt-PictureSelector-label mt-PictureSelector-label--pickup js-select" data-id="7" data-tagging="c_list_filter_bodywork_pickup">Pick Up</label> </li> </ul> </div> <label>Puertas</label><br> <div class="form-check form-check-inline"> <label class="form-check-label"> <input class="form-check-input" type="radio" id="inlineRadio1" value="option1"> 2 </label> </div> <div class="form-check form-check-inline"> <label class="form-check-label"> <input class="form-check-input" type="radio" id="inlineRadio2" value="option2"> 3 </label> </div> <div class="form-check form-check-inline"> <label class="form-check-label"> <input class="form-check-input" type="radio" id="inlineRadio3" value="option3"> 4 </label> </div> <div class="form-check form-check-inline"> <label class="form-check-label"> <input class="form-check-input" type="radio" id="inlineRadio3" value="option3" > 5 </label> </div> <div class="form-group"> <label for="exampleInputPassword1">Color</label> <input type="password" class="form-control" id="exampleInputPassword1"> </div> <button type="button" class="hidden-xs-down btn btn-primary">Buscar</button> </div> </form>');
        }
    });


    $("#op").click(function() {
        if ($('#pancartau').slideToggle()) {
            $('#pancartau').hide();
            $('#opcionsu').slideToggle();

            $("#opcionsu").text("");

            $("#opcionsu").append('<div class="form-group"> <select class="form-control" id="exampleSelectUn">' +
                ' <option>Ordenar por precio alto</option> <option>Ordenar por precio bajo</option> <option>Ordenar por más km</option>' +
                ' <option>Ordenar por menos km</option> <option>Ordenar por fecha</option> <option>Ordenar por marca</option> </select>' +
                ' </div><p><a type="button" href="vnuevos.html" class="btn btn-primary btn-sm mb-3">Ordenar</a>&nbsp;<a class="mb-2"' +
                ' href="vnuevos.html">&nbsp;&nbsp;&nbsp;Cerrar</a></p><div class="form-group"> ');
        }
    });

    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
});
