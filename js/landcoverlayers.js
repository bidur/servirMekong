var lc2016 =
    new ol.layer.Tile({title: 'Land Cover (2016)',
		       source: new ol.source.TileWMS ({
			   url: 'http://guam.csis.u-tokyo.ac.jp:8080/geoserver/servir/wms?',
			   params:{'LAYERS':'servir:lc2016','TILED': true},
			   serverType: 'geoserver'			
		       })
		       ,visible: false
		      });
var lc2009 =
    new ol.layer.Tile({title: 'Land Cover (2009)',
		       source: new ol.source.TileWMS ({
			   url: 'http://guam.csis.u-tokyo.ac.jp:8080/geoserver/servir/wms?',
			   params:{'LAYERS':'servir:lc2009','TILED': true},
			   serverType: 'geoserver'			
		       })
		       ,visible: false
		      });

var lc2005 =
    new ol.layer.Tile({title: 'Land Cover (2005)',
		       source: new ol.source.TileWMS ({
			   url: 'http://guam.csis.u-tokyo.ac.jp:8080/geoserver/servir/wms?',
			   params:{'LAYERS':'servir:lc2005','TILED': true},
			   serverType: 'geoserver'			
		       })
		       ,visible: false
		      });

var lc2020 =
    new ol.layer.Tile({title: 'Projected Land Cover (2020)',
		       source: new ol.source.TileWMS ({
			   url: 'http://guam.csis.u-tokyo.ac.jp:8080/geoserver/servir/wms?',
			   params:{'LAYERS':'servir:lc2020','TILED': true},
			   serverType: 'geoserver'			
		       })
		       ,visible: false
		      });

var lc2025 =
    new ol.layer.Tile({title: 'Projected Land Cover (2025)',
		       source: new ol.source.TileWMS ({
			   url: 'http://guam.csis.u-tokyo.ac.jp:8080/geoserver/servir/wms?',
			   params:{'LAYERS':'servir:lc2025','TILED': true},
			   serverType: 'geoserver'			
		       })
		       ,visible: false
		      });

var lc2030 =
    new ol.layer.Tile({title: 'Projected Land Cover (2030)',
		       source: new ol.source.TileWMS ({
			   url: 'http://guam.csis.u-tokyo.ac.jp:8080/geoserver/servir/wms?',
			   params:{'LAYERS':'servir:lc2030','TILED': true},
			   serverType: 'geoserver'			
		       })
		       ,visible: false
		      });
