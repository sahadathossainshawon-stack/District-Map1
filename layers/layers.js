var wms_layers = [];

var format_bgd_admin1_0 = new ol.format.GeoJSON();
var features_bgd_admin1_0 = format_bgd_admin1_0.readFeatures(json_bgd_admin1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bgd_admin1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bgd_admin1_0.addFeatures(features_bgd_admin1_0);
var lyr_bgd_admin1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bgd_admin1_0, 
                style: style_bgd_admin1_0,
                popuplayertitle: 'bgd_admin1',
                interactive: true,
                title: '<img src="styles/legend/bgd_admin1_0.png" /> bgd_admin1'
            });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_bgd_admin2_2 = new ol.format.GeoJSON();
var features_bgd_admin2_2 = format_bgd_admin2_2.readFeatures(json_bgd_admin2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bgd_admin2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bgd_admin2_2.addFeatures(features_bgd_admin2_2);
var lyr_bgd_admin2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bgd_admin2_2, 
                style: style_bgd_admin2_2,
                popuplayertitle: 'bgd_admin2',
                interactive: true,
    title: 'bgd_admin2<br />\
    <img src="styles/legend/bgd_admin2_2_0.png" /> Barishal<br />\
    <img src="styles/legend/bgd_admin2_2_1.png" /> Chattogram<br />\
    <img src="styles/legend/bgd_admin2_2_2.png" /> Dhaka<br />\
    <img src="styles/legend/bgd_admin2_2_3.png" /> Khulna<br />\
    <img src="styles/legend/bgd_admin2_2_4.png" /> Mymensingh<br />\
    <img src="styles/legend/bgd_admin2_2_5.png" /> Rajshahi<br />\
    <img src="styles/legend/bgd_admin2_2_6.png" /> Rangpur<br />\
    <img src="styles/legend/bgd_admin2_2_7.png" /> Sylhet<br />' });

lyr_bgd_admin1_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_bgd_admin2_2.setVisible(true);
var layersList = [lyr_bgd_admin1_0,lyr_GoogleMaps_1,lyr_bgd_admin2_2];
lyr_bgd_admin1_0.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm1_ref_n': 'adm1_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_bgd_admin2_2.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_bgd_admin1_0.set('fieldImages', {'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm1_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_bgd_admin2_2.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_bgd_admin1_0.set('fieldLabels', {'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm1_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_bgd_admin2_2.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_bgd_admin2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});