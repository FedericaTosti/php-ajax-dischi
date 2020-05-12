$(document).ready(function() {

  // inizializzo template handlebars
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  // chiamata ajax
  $.ajax ({
    url : "partials-php/api.php",
    method : "GET",
    // se tutto va bene
    success : function(risultato) {
      // console.log(risultato);
      // for per stampare in html tutti gli elementi e le tutte le info da dare in pasto ad handlebars
      for(var i = 0; i < risultato.length; i++) {

        // singolo album con tutte le proprietà
        var albumCorrente = risultato[i];
        // console.log(albumCorrente);

        // creo oggetto context che contiene tutti i dati
        var context = {
          poster: albumCorrente.poster,
          title : albumCorrente.title,
          author : albumCorrente.author,
          year : albumCorrente.year,
          genre : albumCorrente.genre
        };

        // stampo in pagina tramite handlebars
        var risultatoDaAggiungere = template(context);
        $(".cds-container").append(risultatoDaAggiungere);
      };
    },

    // se ci sono errori
    error : function(richiesta, stato, errori) {

      // stampo in pagina
      $(".cds-container").html("<p>Si è verificato un errore.</p>");
      console.log("Si è verificato un errore: ", richiesta, stato, errori);
    }
  });
})
