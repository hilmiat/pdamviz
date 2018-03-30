!(function(undefined) {

  var DEFAULTS,
      GEO,
      client,
      circle,
      marker,
      map,
      activeMapData,
      keenMapData;

  // DOM Elements
  var appWrapperNode,
      appMapAreaNode,
      latNode,
      lngNode,
      radiusValueNode,
      radiusUnitsNode,
      timeframeStartNode,
      timeframeEndNode,
      refreshButton;

  client = new Keen({
    projectId: '53eab6e12481962467000000',
    readKey: 'd1b97982ce67ad4b411af30e53dd75be6cf610213c35f3bd3dd2ef62eaeac14632164890413e2cc2df2e489da88e87430af43628b0c9e0b2870d0a70580d5f5fe8d9ba2a6d56f9448a3b6f62a5e6cdd1be435c227253fbe3fab27beb0d14f91b710d9a6e657ecf47775281abc17ec455'
  });

  DEFAULTS = {
    timeframe: {
      start: '2018-01-01',
      end: '2018-01-15'
    },
    lat: -6.933264441036495,
    lng: 107.60370254516603,
    radius: 10,
    units: 'km',
    zoom: 12
  };

  GEO = {
    meters: 0,
    miles: 0,
    lat: DEFAULTS.lat,
    lng: DEFAULTS.lng,
    center: [ DEFAULTS.lat, DEFAULTS.lng ],
    radius: DEFAULTS.radius,
    units: DEFAULTS.units,
    zoom: DEFAULTS.zoom
  };

  Keen.ready(function() {

    // DOM is ready
    appWrapperNode     = document.getElementById('app-wrapper');
    appMapAreaNode     = document.getElementById('app-maparea');
    latNode            = document.getElementById('coordinates-lat');
    lngNode            = document.getElementById('coordinates-lng');
    radiusValueNode    = document.getElementById('radius-value');
    radiusUnitsNode    = document.getElementById('radius-suffix');
    timeframeStartNode = document.getElementById('timeframe-start');
    timeframeEndNode   = document.getElementById('timeframe-end');
    refreshButton      = document.getElementById('refresh');

    adjust();
    init();
  });

  function init(){
    var params = getParams();

    // Get params
    if (params.center) {
      GEO.center = params.center.split(',');
    }
    if (params.latitude && params.longitude) {
      GEO.lat = parseFloat(params.latitude);
      GEO.lng = parseFloat(params.longitude);
    }
    if (params.units) {
      GEO.units = params.units;
      radiusUnitsNode.value = GEO.units;
    }
    if (params.meters) {
      GEO.meters = parseFloat(params.meters);
      if (GEO.units === 'km') radiusValueNode.value = parseInt(GEO.meters) / 1000;
    }
    if (params.miles) {
      GEO.miles = parseFloat(params.miles);
      if (GEO.units === 'mi') radiusValueNode.value = GEO.miles;
    }
    if (params.zoom) {
      GEO.zoom = parseFloat(params.zoom);
    }

    // Prefill input fields

    latNode.value = GEO.lat;
    lngNode.value = GEO.lng;
    timeframeStartNode.value = DEFAULTS.timeframe['start'];
    timeframeEndNode.value   = DEFAULTS.timeframe['end'];

    // Create map instance
    L.mapbox.accessToken = 'pk.eyJ1Ijoia2Vlbi1pbyIsImEiOiIza0xnNXBZIn0.PgzKlxBmYkOq6jBGErpqOg';
    map = L.mapbox.map('app-maparea', 'keen-io.kae20cg0', {
      attributionControl: true,
      center: GEO.center,
      zoom: GEO.zoom
    });
    map.on('dragend', updateQuery);
    map.on('zoomend', function(e){
      GEO.zoom = e.target._zoom;
      updateQuery();
    });

    // Contains query result markers
    activeMapData = L.layerGroup().addTo(map);

    // Create primary marker
    marker = L.marker(new L.LatLng(GEO.lat, GEO.lng), {
      icon: L.mapbox.marker.icon({
        'marker-color': 'ff8888'
      }),
      draggable: true,
      zIndexOffset: 9999
    });
    marker.addTo(map);
    marker.on('dragend', function(e){
      var newCoords = e.target.getLatLng();
      var newLat = newCoords.lat.toPrecision(8);
      var newLng = newCoords.lng.toPrecision(8);
      circle.setLatLng({ lat: newLat, lng: newLng });
      latNode.value = GEO.lat = newLat;
      lngNode.value = GEO.lng = newLng;
      refresh();
    });

    circle = L.circle([ GEO.lat, GEO.lng ], 1000);
    circle.addTo(map);
    setGeoSelection();

    map.attributionControl.addAttribution('<a href=\'http://alkhatech.com/\'>Custom Analytics by AlKhatech</a>');
    keenMapData = L.layerGroup().addTo(map);

    // Listen for input changes
    radiusValueNode.onchange = setGeoSelection;
    radiusUnitsNode.onchange = setGeoSelection;

    // Listen for refresh events
    refreshButton.onclick = refresh;

    // Listen for resize events
    window.onresize = adjust;

    // Go!
    refresh();
  }

  function getParams(selector) {
    var params = Keen.utils.parseParams(document.location.search);
    return (selector) ? params[selector] : params;
  }

  function updateQuery() {
    var params, str;
    setGeoSelection();
    params = {
      start: timeframeStartNode.value,
      end: timeframeEndNode.value,
      latitude: latNode.value,
      longitude: lngNode.value,
      miles: GEO.miles,
      meters: GEO.meters,
      units: GEO.units,
      zoom: GEO.zoom,
      center: GEO.center
    };
    str = '?';
    Keen.utils.each(params, function(value, key){
      str += key + '=' + value + '&';
    });
    history.pushState(null, null, str);
  }

  function setGeoSelection(){
    GEO.radius = radiusValueNode.value || 10;
    GEO.units = radiusUnitsNode.value || 'km';
    GEO.meters = GEO.radius * ((GEO.units === 'mi') ? 1609.34 : 1000);
    GEO.miles = GEO.meters / 1609.34;
    GEO.center[0] = map.getCenter().lat;
    GEO.center[1] = map.getCenter().lng;
    GEO.lat = latNode.value;
    GEO.lng = lngNode.value;
    circle.setRadius(GEO.meters);
  }

  function refresh() {
    updateQuery();
    draw();
  }

  function adjust(){
    appWrapperNode.style.height = window.innerHeight + 'px';
    appMapAreaNode.style.height = window.innerHeight + 'px';
  }

  // Keen.utils.each(queries, function(q){});

  function draw(){
    var options = {
      start: timeframeStartNode.value,
      end: timeframeEndNode.value,
      latitude: latNode.value,
      longitude: lngNode.value,
      radius: GEO.miles,
      zoom: GEO.zoom
    };

    var end = (options['end']) ? new Date(Date.parse(options['end'])) : new Date();
    var start = (options['start']) ? new Date(Date.parse(options['start'])) : new Date(end.getFullYear(), end.getMonth(), end.getDate()-14);

    var rad = (options['radius']) ? parseFloat(options['radius']) : false;
    var lat = (options['latitude']) ? parseFloat(options['latitude']) : false;
    var lng = (options['longitude']) ? parseFloat(options['longitude']) : false;

    var geoFilter = [];
    if (lat && lng && rad) {
      geoFilter.push({
        property_name : 'keen.location.coordinates',
        operator : 'within',
        property_value: {
          coordinates: [ parseFloat(options['longitude']), parseFloat(options['latitude']) ],
          max_distance_miles: parseFloat(options['radius'])
        }
      });
    };

    var baseParams = {
      timeframe: {
        start: start.toISOString(),
        end: end.toISOString()
      },
      filters: geoFilter
    };

    var dat = {"result":[[-6.920675523029533,107.59666442871095],
    [-6.888296392821641,107.62344360351564],
    [-6.906701643911691,107.6433563232422],
    [-6.964298626657358,107.65468597412111],
    [-6.9973540592764865,107.61142730712892],
    [-6.997013293542099,107.53967285156251],
    // [-6.9932648540496585,107.49332427978517],
    // [-6.976907675349587,107.45040893554689],
    [-6.900566639694596,107.53967285156251],
    [-6.882161150304414,107.57469177246095],
    [-6.880456902196523,107.60250091552736],
    [-6.9019299808381005,107.64541625976564],
    [-6.9172672979411285,107.62378692626955],
    [-6.951689239000287,107.63957977294923],
    [-6.98815329717506,107.59529113769533],
    [-6.980656245991958,107.6275634765625],
    [-6.951348440040515,107.57125854492189],
    [-6.899884967650522,107.60833740234376],
    [-6.8937924801846995,107.58705139160158],
    [-6.895155840828311,107.62962341308595],
    [-6.925830416714826,107.63992309570314],
    [-6.987855121298228,107.55065917968751],
    [-6.9796765088356105,107.6103973388672],
    [-6.974224021113486,107.6495361328125],
    [-6.94968704157262,107.66120910644533],
    [-6.921058946812288,107.65228271484376],
    [-6.904699255445889,107.63580322265626],
    [-6.889020687049081,107.53486633300783],
    [-6.905380920555986,107.60284423828126],
    [-6.894474160996839,107.64747619628906],
    [-6.9169690770754775,107.66120910644533],
    [-6.94968704157262,107.64198303222658],
    [-6.9169690770754775,107.53280639648439],
    [-6.891065747131394,107.55958557128908],
    [-6.859025460631483,107.58567810058594],
    [-6.899245899217878,107.65159606933595],
    [-6.976268711450287,107.64129638671876],
    [-6.94968704157262,107.61795043945314],
    [-6.895837519679028,107.58636474609375]
  ]};

    // Fetch events within geo target
    var scoped_events = new Keen.Query('select_unique', {
      event_collection: 'user_action',
      target_property: 'keen.location.coordinates',
      timeframe: baseParams.timeframe,
      filters: baseParams.filters
    });
    client.run(scoped_events, function(err, res){
      activeMapData.clearLayers();
      console.log(dat);
      Keen.utils.each(dat.result, function(coord, index){
        var em = L.marker(new L.LatLng(coord[0], coord[1]), {
          icon: L.mapbox.marker.icon({
            'marker-color': '#00bbde'
          })
        }).addTo(activeMapData);;
      });
    });

    // Keen.utils.each(dat.result, function(coord, index){
    //   var em = L.marker(new L.LatLng(coord[1], coord[0]), {
    //     icon: L.mapbox.marker.icon({
    //       'marker-color': '#00bbde'
    //     })
    //   }).addTo(activeMapData);;
    // });

    // Sample queries
    // groupBy not supported for Geo Filters

    var hearts = new Keen.Query('median', {
      event_collection: 'user_action',
      interval: 'daily',
      target_property: 'bio_sensors.heart_rate',
      timeframe: baseParams.timeframe,
      filters: baseParams.filters
    });
    var daily_median_heartrate = new Keen.Dataviz()
      .el('#chart-01')
      .height(300)
      .colors(['#fe6672'])
      .title('Daily Water Usage')
      .type('area')
      .prepare();

var day={
    "result": [
        {
            "value": 64,
            "timeframe": {
                "start": "2018-01-01T00:00:00.000Z",
                "end": "2018-01-02T00:00:00.000Z"
            }
        },
        {
            "value": 63,
            "timeframe": {
                "start": "2018-01-02T00:00:00.000Z",
                "end": "2018-01-03T00:00:00.000Z"
            }
        },
        {
            "value": 69,
            "timeframe": {
                "start": "2018-01-03T00:00:00.000Z",
                "end": "2018-01-04T00:00:00.000Z"
            }
        },
        {
            "value": 68,
            "timeframe": {
                "start": "2018-01-04T00:00:00.000Z",
                "end": "2018-01-05T00:00:00.000Z"
            }
        },
        {
            "value": 65,
            "timeframe": {
                "start": "2018-01-05T00:00:00.000Z",
                "end": "2018-01-06T00:00:00.000Z"
            }
        },
        {
            "value": 79,
            "timeframe": {
                "start": "2018-01-06T00:00:00.000Z",
                "end": "2018-01-07T00:00:00.000Z"
            }
        },
        {
            "value": 74,
            "timeframe": {
                "start": "2018-01-07T00:00:00.000Z",
                "end": "2018-01-08T00:00:00.000Z"
            }
        },
        {
            "value": 77,
            "timeframe": {
                "start": "2018-01-08T00:00:00.000Z",
                "end": "2018-01-09T00:00:00.000Z"
            }
        },
        {
            "value": 59,
            "timeframe": {
                "start": "2018-01-09T00:00:00.000Z",
                "end": "2018-01-10T00:00:00.000Z"
            }
        },
        {
            "value": 67,
            "timeframe": {
                "start": "2018-01-10T00:00:00.000Z",
                "end": "2018-01-11T00:00:00.000Z"
            }
        },
        {
            "value": 73,
            "timeframe": {
                "start": "2018-01-11T00:00:00.000Z",
                "end": "2018-01-12T00:00:00.000Z"
            }
        },
        {
            "value": 71,
            "timeframe": {
                "start": "2018-01-12T00:00:00.000Z",
                "end": "2018-01-13T00:00:00.000Z"
            }
        },
        {
            "value": 68,
            "timeframe": {
                "start": "2018-01-13T00:00:00.000Z",
                "end": "2018-01-14T00:00:00.000Z"
            }
        },
        {
            "value": 72,
            "timeframe": {
                "start": "2018-01-14T00:00:00.000Z",
                "end": "2018-01-15T00:00:00.000Z"
            }
        }
    ]
};

    client.run(hearts, function(err, res) {
      daily_median_heartrate
        .data(day)
        .render();
    });


    var cnt = {
    "result": [
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-01T00:00:00.000Z",
                "end": "2018-01-02T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-02T00:00:00.000Z",
                "end": "2018-01-03T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-03T00:00:00.000Z",
                "end": "2018-01-04T00:00:00.000Z"
            }
        },
        {
            "value": 1,
            "timeframe": {
                "start": "2018-01-04T00:00:00.000Z",
                "end": "2018-01-05T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-05T00:00:00.000Z",
                "end": "2018-01-06T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-06T00:00:00.000Z",
                "end": "2018-01-07T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-07T00:00:00.000Z",
                "end": "2018-01-08T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-08T00:00:00.000Z",
                "end": "2018-01-09T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-09T00:00:00.000Z",
                "end": "2018-01-10T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-10T00:00:00.000Z",
                "end": "2018-01-11T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-11T00:00:00.000Z",
                "end": "2018-01-12T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-12T00:00:00.000Z",
                "end": "2018-01-13T00:00:00.000Z"
            }
        },
        {
            "value": 1,
            "timeframe": {
                "start": "2018-01-13T00:00:00.000Z",
                "end": "2018-01-14T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-14T00:00:00.000Z",
                "end": "2018-01-15T00:00:00.000Z"
            }
        }
    ]
};
    var activations = new Keen.Query('count', {
      event_collection: 'activations',
      interval: 'daily',
      timeframe: baseParams.timeframe,
      filters: baseParams.filters
    });
    var daily_activations = new Keen.Dataviz()
      .el('#chart-02')
      .height(300)
      .colors(['#5a9eed'])
      .title('Daily Activations')
      .type('area')
      .prepare();
    client.run(activations, function(err, res) {
      daily_activations
        .data(cnt)
        .render();
    });

var sm = {
    "result": [
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-01T00:00:00.000Z",
                "end": "2018-01-02T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-02T00:00:00.000Z",
                "end": "2018-01-03T00:00:00.000Z"
            }
        },
        {
            "value": 2499,
            "timeframe": {
                "start": "2018-01-03T00:00:00.000Z",
                "end": "2018-01-04T00:00:00.000Z"
            }
        },
        {
            "value": 2499,
            "timeframe": {
                "start": "2018-01-04T00:00:00.000Z",
                "end": "2018-01-05T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-05T00:00:00.000Z",
                "end": "2018-01-06T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-06T00:00:00.000Z",
                "end": "2018-01-07T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-07T00:00:00.000Z",
                "end": "2018-01-08T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-08T00:00:00.000Z",
                "end": "2018-01-09T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-09T00:00:00.000Z",
                "end": "2018-01-10T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-10T00:00:00.000Z",
                "end": "2018-01-11T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-11T00:00:00.000Z",
                "end": "2018-01-12T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-12T00:00:00.000Z",
                "end": "2018-01-13T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-13T00:00:00.000Z",
                "end": "2018-01-14T00:00:00.000Z"
            }
        },
        {
            "value": 0,
            "timeframe": {
                "start": "2018-01-14T00:00:00.000Z",
                "end": "2018-01-15T00:00:00.000Z"
            }
        }
    ]
}

    var purchases = new Keen.Query('sum', {
      event_collection: 'purchases',
      target_property: 'order_price',
      interval: 'daily',
      timeframe: baseParams.timeframe,
      filters: baseParams.filters
    });

    var daily_purchases = new Keen.Dataviz()
      .el('#chart-03')
      .height(300)
      .colors(['#eeb058'])
      .title('Daily Purchases')
      .type('area')
      .prepare();

    client.run(purchases, function(err, res) {
      daily_purchases
        .data(sm)
        .render();
    });

  }

})();
