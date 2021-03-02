let ricette = "";
fetch('https://raw.githubusercontent.com/barbara06/ProvaEsame_Palazzo_Barbara/ricette.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                alert("File non raggiungibile");
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {

                ricette = data.ricette;               
                creaListaRicette(ricette);
            });
        }
    )

function creaListaRicette(ricette) {

    for (let i = 0; i < ricette.length; i++) {
        let ricetta = '<div class="anteprima_ricette" onclick="infoRicetta(' + i + ')">' +
                        '<img id="img_ricetta' + i + '" class="img_ricetta" src="' + ricette[i].immagine + '"alt="Immagine ricetta">' +
                        '<div class="contenuti_ricetta">' +
                            '<h2 id="nome_ricetta' + i + '" class="nome_ricetta">' + ricette[i].nome + '</h2>' +
                            '<p id="panoramica_ricetta' + i + '" class="panoramica_ricetta">' + ricette[i].panoramica + '</p>' +
                        '</div>' +
                        '<ul class="specifiche_ricetta">' +
                            '<li><i class="fa fa-line-chart" aria-hidden="true"></i> ' + ricette[i].livello + '</li>' +
                            '<li><i class="fa fa-clock-o" aria-hidden="true"></i> ' + ricette[i].preparazione + '</li>' +
                            '<li><i class="fa fa-users" aria-hidden="true"></i> ' + ricette[i].dosi + '</li></div>';
        
        $("#lista_ricette").append(ricetta);
    }   
}

function infoRicetta(id) {
    $("#ricetta_img").attr('src', ricette[id].immagine);
    $("#ricetta_nome").text(ricette[id].nome);
    $("#ricetta_panoramica").text(ricette[id].panoramica);
    $("#ricetta_livello").text(ricette[id].livello);
    $("#ricetta_preparazione").text(ricette[id].preparazione);
    $("#ricetta_dosi").html(ricette[id].dosi);
    $("#ricetta_procedimento").html(ricette[id].procedimento);
    $("#info_ricetta").show();
}


function nascondiInfoRicetta() {
    $("#info_ricetta").hide();

}
