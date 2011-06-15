<?php
if (!isset($_GET['url']) || $_GET['url'] == '')
  die;
  
header('Content-Type: text/xml');
readfile($_GET['url']);
?>
