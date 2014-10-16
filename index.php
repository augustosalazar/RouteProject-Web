
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Rutas</title>
  <link rel="stylesheet" type="text/css" href="screen.css" media="all">
  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization"></script>
  <script src="jquery.js"></script>

</head>

<body>
  <div id="loading">
    <img src="img/loading.gif">
  </div>

  <div id="panel">
    <h1>Rutas</h1>
 
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

             var circle = new google.maps.Circle({
                    center:latlng,
                    radius:10,
                    strokeColor:"#ff0000",
                    strokeOpacity:1,
                    strokeWeight:2,
                    fillColor:"#ff0000",
                    fillOpacity:1
                  });

                circle.setMap(map);
                circles.push(circle);

    
                  var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: $(this).attr('weight')
                  });
                  markers.push(marker);



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


</script>

</body>
</html>