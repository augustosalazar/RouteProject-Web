<?php
  include('configuration.php');
  header("Content-type: text/xml");
?>
<?php
  $connection = mysql_connect($db_host,$db_username,$db_password);
  mysql_select_db($db_schema);

  $query = "SELECT lat,lng,predio FROM routes WHERE ";
  
  $query.= "1=1";

  $result = mysql_query($query,$connection);

?>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<position>
<?php
  echo $query;
  while( $row = mysql_fetch_array($result) ){
?>
<Info lat="<?php echo $row['lat']; ?>" lng="<?php echo $row['lng']; ?>"/>
<?php

  }
  mysql_close($connection);
?>
</position>