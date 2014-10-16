<?php
	include('configuration.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
			$log = fopen("log.txt","a+");

			if( is_uploaded_file($_FILES['uploaded_file']['tmp_name']) ){

				$uploaded_file = 'uploads/'.date("U").'-l.txt';
				if( move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $uploaded_file) ){

					$connection = mysql_connect($db_host,$db_username,$db_password);
					mysql_select_db($db_schema);

					$user_id = 1;
					$fecha_carga = date("Y-m-d");
					$values = "";

					$file = fopen($uploaded_file,"r+");
					$data = fgetcsv($file,1000,",");
					$c=0;
					while( $data = fgetcsv($file,1000,",")){
						$c=$c+1;

						$values.= "(". $data[0] . "," . $data[1] . "," . $data[2] . "," . $data[3]  . ",'$fecha_carga'," . "predio),";
					}

					fclose($file);

					fwrite($log,date("Y-m-d H:i:s")."- Se cargaron $c registros de location\r\n");

					fclose($log);

					$values = substr($values,0,-1);

					$query = "INSERT INTO routes (timestamp,lat,lng,alt,fecha_carga,predio) VALUES $values";
					$result = mysql_query($query,$connection);

					if( $result ) echo '=)';

					mysql_close($connection);

				}

			}

	?>
	<form method="post" enctype="multipart/form-data" action="">
		<input type="file" name="location">
		<input type="submit" value="Upload" name="upload">
	</form>
</body>
</html>