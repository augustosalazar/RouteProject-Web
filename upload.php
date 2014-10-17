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

			fwrite($log,date("Y-m-d H:i:s")." Hola\r\n");

			if( is_uploaded_file($_FILES['uploaded_file']['tmp_name']) ){

				$uploaded_file = 'uploads/'.date("U").'-l.txt';
				if( move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $uploaded_file) ){

					$connection = mysql_connect($db_host,$db_username,$db_password);
					mysql_select_db($db_schema);

					
					$fecha_carga = date("Y-m-d");
					$values = "";

					$file = fopen($uploaded_file,"r+");
					$data = fgetcsv($file,1000,",");
					$c=0;
					while( $data = fgetcsv($file,1000,",")){
						$c=$c+1;
                        $predio = "'".$data[1]."'";
						$values.= "(". $data[0] . "," . "$predio" . "," . $data[2] . "," . $data[3]  . "," . $data[4]  . ",'$fecha_carga'" . "," ."GeomFromText('POINT(".$data[2]." ".$data[3].")')" ."),";
					}

					fclose($file);

					fwrite($log,date("Y-m-d H:i:s")."- Se cargaron $c registros de location\r\n");



					$values = substr($values,0,-1);

					$query = "INSERT INTO routes (timestamp,predio,lat,lng,alt,fecha_carga,coord) VALUES $values";

					fwrite($log,"<<".$query.">>\r\n");


					fclose($log);
                    

					$result = mysql_query($query,$connection);

					if( $result ) echo '=)';

					mysql_close($connection);

				}

			} else {
				fclose($log);
			}

	?>
	<form method="post" enctype="multipart/form-data" action="">
		<input type="file" name="location">
		<input type="submit" value="Upload" name="upload">
	</form>
</body>
</html>