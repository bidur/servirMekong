var flddph1991 =
    new ol.layer.Tile({title: 'Simulated flood depth (1991)',
		       source: new ol.source.TileWMS ({
			   url: 'http://guam.csis.u-tokyo.ac.jp:8080/geoserver/servir/wms?',
			   params:{'LAYERS':'servir:flddph1991-sub','TILED': true},
			   serverType: 'geoserver'			
		       })
		       ,visible: false
		      });

