<?php

  header('Content-Type: application/json');

  require_once 'db.php';

  echo json_encode($database);





  // per seconda versione, i risultati escono dopo aver premuto il tasto invio


  // header('Content-Type: application/json');
  //
  // require 'db.php';
  //
  // $result = [];
  //
  // $name = $_GET['name'];
  //
  // foreach ($database as $cd) {
  //   $author = strtolower($cd['author']);
  //
  //   if (strpos($author, $name) !== false) {
  //     $result[] = $cd;
  //   }
  // }
  //
  // echo json_encode($result);
  //

?>
