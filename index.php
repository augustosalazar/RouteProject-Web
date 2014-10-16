
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Trip Quality</title>
  <link rel="stylesheet" type="text/css" href="screen.css" media="all">
  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization"></script>
  <script src="jquery.js"></script>

</head>

<body>
  <div id="loading">
    <img src="img/loading.gif">
  </div>

  <div id="panel">
    <h1>Trip Quality</h1>
    <form action="" name="filters" id="filters">
      <fieldset>
        <p>
          <input type="checkbox" name="dates" id="dates">
          <label for="dates">Fechas:</label>
        </p>
        <p>
          <label for="start">Fecha inicial:</label><br>
          <input type="date" name="start" id="start" disabled="true">
        </p>
        <p>
          <label for="end">Fecha final:</label><br>
          <input type="date" name="end" id="end" disabled="true">
        </p>
      </fieldset>
      <fieldset>
        <p>
          <input type="checkbox" name="noise" id="noise" checked="checked">
          <label for="noise">Ruido:</label>
        </p>
        <p>
          <label for="min">Mínimo:</label><br>
          <input type="number" name="min" id="min" min="0" value="8">
        </p>
        <p>
          <label for="max">Máximo:</label><br>
          <input type="number" name="max" id="max" min="0" value="20">
        </p>
      </fieldset>
      <fieldset>
        <p>
          <input type="checkbox" name="user" id="user">
          <label for="user">Usuario:</label>
        </p>
        <p>
          <label for="users">Usuarios:</label><br>
          <select name="users" id="users" disabled="true">

          </select>
        </p>
      </fieldset>
      <p>
        <input type="button" value="Refrescar" name="filter" id="filter">
      </p>

      <p align="center">
        El numero de anomalias es:
      </p>
      <p id="msg_number">

      </p>
    </form>
  </div>
  <div id="map-canvas">

  </div>

  <script>

    function drawPoints(map,params){

      $('#loading').show();

      clearMap();

      $.post('output.php',
        {
          tripnoise: 'true',
          dates: params['dates'],
          start: params['start'],
          end: params['end'],
          noise: params['noise'],
          min: params['min'],
          max: params['max'],
          user: params['user'],
          users: params['users']
        },
        function(xml){
            $('#msg_number').html($(xml).find('Info').length);

            $(xml).find('Info').each(
              function(i,node){

                var valor;
                var lat, lng;

                var latlng = new google.maps.LatLng(
                  $(this).attr('lat'),
                  $(this).attr('lng')
                );

                valor = parseFloat($(this).attr('weight'));

                // verde 00ff00
                // azul 0000FF
                // rojo ff0000
                //1.5-2 2-3  3-4  4-4.5  5

                if (valor < 2) {
                  var circle = new google.maps.Circle({
                    center:latlng,
                    radius:4,
                    strokeColor:"#0000FF", //blue
                    strokeOpacity:1,
                    strokeWeight:2,
                    fillColor:"#0000FF",
                    fillOpacity:0.1
                  });
                } else if (valor < 3){
                  var circle = new google.maps.Circle({
                    center:latlng,
                    radius:6,
                    strokeColor:"#00ff00",  //green
                    strokeOpacity:1,
                    strokeWeight:2,
                    fillColor:"#00ff00",
                    fillOpacity:0.4
                  });
                }else if (valor < 4){
                  var circle = new google.maps.Circle({
                    center:latlng,
                    radius:8,
                    strokeColor:"#FF6600", //orange
                    strokeOpacity:1,
                    strokeWeight:2,
                    fillColor:"#FF6600",
                    fillOpacity:0.4
                  });
                }else if (valor < 4.5){
                  var circle = new google.maps.Circle({
                    center:latlng,
                    radius:9,
                    strokeColor:"##FF6600", //red
                    strokeOpacity:1,
                    strokeWeight:2,
                    fillColor:"##FF6600",
                    fillOpacity:0.8
                  });
                }else {
                  var circle = new google.maps.Circle({
                    center:latlng,
                    radius:10,
                    strokeColor:"#ff0000",
                    strokeOpacity:1,
                    strokeWeight:2,
                    fillColor:"#ff0000",
                    fillOpacity:1
                  });
                }

                circle.setMap(map);
                circles.push(circle);

                if (valor >= 0){
                  var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: $(this).attr('weight')
                  });
                  markers.push(marker);
                }


             });//$(xml).find('Info').each(

        }); //$.get



        $('#loading').hide();
    }

    function setAllMap(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
      for (var i = 0; i < circles.length; i++) {
        circles[i].setMap(map);
      }
    }

    function clearMap() {
      setAllMap(null);
    }

    var map;
    var markers = [];
    var circles = [];

    function initialize(){
      var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(11.01888521, -74.8512709),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      google.maps.event.addListenerOnce(map, 'idle', function(event){
        drawPoints(map,
          {
            tripnoise: true,
            dates: false,
            start: '',
            end: '',
            noise:true,
            min:8,
            max:20,
            user: false,
            users: ''
          }
        );

      });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    $('#dates').click(function(){
      $('#start, #end').prop('disabled', !$('#dates').is(':checked'));
    });

    $('#noise').click(function(){
      $('#min, #max').prop('disabled', !$('#noise').is(':checked'));
    });

    $('#user').click(function(){
      $('#users').prop('disabled', !$('#user').is(':checked'));
    });

    $('#filter').click(function(){
      drawPoints(map,{
          dates: $('#dates').is(':checked'),
          start: $('#start').val(),
          end: $('#end').val(),
          noise: $('#noise').is(':checked'),
          min: $('#min').val(),
          max: $('#max').val(),
          user: $('#user').is(':checked'),
          users: $('#users').val()
      });
    });

    $('#users').load('users.php?tripnoise=true');

</script>

</body>
</html>