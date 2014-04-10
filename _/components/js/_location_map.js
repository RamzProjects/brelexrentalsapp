


    // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
    //var yourStartLatLng = new google.maps.LatLng(25.892136, -80.276245);
    //$('#map_canvas').gmap({'center': yourStartLatLng});
    //$('#map_canvas').gmap('addMarker', { 'position': '25.892136, -80.276245', 'marker': MarkerWithLabel });


/*
$(function() {
      $('#map_canvas').gmap().bind('init', function(ev, map) {
           $('#map_canvas').gmap('addMarker', { 'position': '25.892136, -80.276245', 'bounds': true }).click(function() {
           $('#map_canvas').gmap('openInfoWindow', { 'content': '134 Some Street Name, postcode and such' }, this);
           $('#map_canvas').gmap({'zoom': 75});
            });
      });
      
});
*/

$(function() {

    $('#map_canvas').gmap({ 'center': '25.892136, -80.276245','scrollwheel':false});
    $('#map_canvas').gmap('option', 'mapTypeId', google.maps.MapTypeId.ROADMAP);
    $('#map_canvas').gmap('option', 'zoom', 17);
    $('#map_canvas').gmap('addMarker', { 'position': '25.892136, -80.276245', 'marker': MarkerWithLabel });
            
});