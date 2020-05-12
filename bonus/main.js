$(document).ready(function(){

  // inizializzo template handlebars
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  //chiamata ajax
  $.ajax({
    url: 'api.php',
    method: "GET",
    // se tutto va bene
    success: function(risultato){

      for(var i = 0; i < risultato.length; i++) {

        var albumCorrente = risultato[i];

        var context = {
          poster: albumCorrente.poster,
          title: albumCorrente.title,
          author: albumCorrente.author,
          year: albumCorrente.year,
          genre: albumCorrente.genre
        }

        var risultatoDaAggiungere = template(context);
        // ogni iterazione creo una nuova cover
        $('.cds-container').append(risultatoDaAggiungere);
      }
    },
    // se ci sono errori
    error : function(richiesta, stato, errori) {

      // stampo in pagina
      $(".cds-container").html("<p>Si è verificato un errore.</p>");
      console.log("Si è verificato un errore: ", richiesta, stato, errori);
    }
  });

  // Funzione per cercare artisti
  $('#search').keyup(function(){

    // creo variabile e salvo testo inserito
    var inputArtista = $(this).val().toLowerCase();

    //chiamata ajax per cercare artisti
    $.ajax({
      url: 'api.php',
      method: "GET",
      // se tutto va bene
      success: function(risultato){
        for (var i = 0; i < risultato.length; i++) {
          // creo variabile ogni album con la proprietà "autore"
          var artista = risultato[i].author;

          // funzione che cerca tra gli artisti presenti
          $('.author').each(function(){

            // se l'artista digitato è incluso tra gli artisti scritti in html
            if($(this).text().toLowerCase().includes(inputArtista)){
               // mostro le cover che hanno appunto l'artista o già parte del testo inserito in input
               $(this).parent().show();
            } else {
               // escludo quelli che non contengono le lettere inserite in input
               $(this).parent().hide();
            }
          });
        };
      },
      // se ci sono errori
      error : function(richiesta, stato, errori) {

        // stampo in pagina
        $(".cds-container").html("<p>Si è verificato un errore.</p>");
        console.log("Si è verificato un errore: ", richiesta, stato, errori);
      }
    });
  });
})




// per seconda versione, i risultati escono dopo aver premuto il tasto invio

//
// $(document).ready(init);
//
// // inizializzo template handlebars
// var source = $("#entry-template").html();
// var template = Handlebars.compile(source);
//
// // funzione chiamata ajax per stampare cover
// function init() {
//   // alla pressione del tasto invio
//   $('#search').keydown(function (e) {
//     // valore del tasto premuto
//     console.log(e.keyCode);
//
//     // creo variabile dove salvo il testo inserito in input
//     var searchVal = $('#search').val().toLowerCase();
//     // lunghezza testo presente in input
//     console.log(searchVal.length);
//
//     // se premo il tasto invio
//     if (e.keyCode == 13) {
//       // e se c'è del testo inserito in input
//       if (searchVal.length > 0) {
//
//         // parte la chiamata ajax
//         $.ajax({
//           method: "GET",
//           url: "api.php",
//           dataType: "json",
//           data: {
//             name: searchVal  // testo inserito in input
//           },
//           // se tutto va bene
//           success: function (data) {
//             console.log(data);
//             // funzione output per stampare cover
//             printSuccess(data);
//           },
//           // se ci sono errori
//           error : function(richiesta, stato, errori) {
//
//             // stampo in pagina
//             $(".cds-container").html("<p>Si è verificato un errore.</p>");
//             console.log("Si è verificato un errore: ", richiesta, stato, errori);
//           }
//         });
//       }
//     }
//   });
// }
//
//
// // funzione output per stampare cover
// function printSuccess(cover) {
//   console.log(cover);
//
//   // dopo ogni risultato pulisco la pagina
//   $('.cds-container').html("");
//
//   // se esiste
//   if (cover.length > 0) {
//     // cerco tra le cover
//     cover.forEach(function(proprieta) {
//       console.log(proprieta);
//
//       // creo oggetto con tutte le proprietà
//       var context = {
//         poster: proprieta.poster,
//         title: proprieta.title,
//         author: proprieta.author,
//         year: proprieta.year,
//         genre: proprieta.genre
//       }
//
//       // stampo cover corrispondente con tutte le proprietà
//       $('.cds-container').append(template(context));
//     });
//   } else {
//     // altrimenti avviso l' utente che non c'è nessun album
//     $('.cds-container').html("<h2>Non è presente nessun album</h2>");
//   }
// }
