<!DOCTYPE html>
<html lang="it" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Php-dischi</title>
    <link rel="stylesheet" href="style.css">

    <?php
      include "db.php";
      // var_dump($database);
    ?>
  </head>

  <!-- Stampare a schermo una decina di dischi musicali (vedi screenshot).
  Utilizzare:                                        Html, Sass, JS, jQuery, handlebars, PHP
  Prima Milestone:               Stampiamo i dischi solo con l’utilizzo di PHP, che stampa direttamente i dischi in pagina: al caricamento della pagina ci saranno tutti i dischi.
  Seconda Milestone:             Attraverso l’utilizzo di AJAX: al caricamento della pagina ajax chiederà attraverso una chiamata i dischi a php e li stamperà attraverso handlebars.
  Bonus:                            Attraverso un’altra chiamata ajax, filtrare gli album per artista -->

  <body>
    <header>
      <div class="container-img">
        <img src="img/logo.png" alt="logo">
      </div>
    </header>

    <div class="cds-container container">
      <?php foreach ($database as $album) { ?>

        <div class="cd">
          <img src=<?php echo $album["poster"]; ?> alt="cover">
          <h3><?php echo $album["title"]; ?></h3>
          <span class="author"><?php echo $album["author"]; ?></span>
          <span class="year"><?php echo $album["year"]; ?></span>
          <span class="genre"><?php echo $album["genre"]; ?></span>
        </div>

      <?php } ?>

    </div>

  </body>
</html>
