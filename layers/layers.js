var wms_layers = [];


        var lyr_MapabaseImagemareaGoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Mapa-base - Imagem aérea (Google Satellite)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_MapabaseLogradourosGoogleRoads_1 = new ol.layer.Tile({
            'title': 'Mapa-base - Logradouros (Google Roads)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_reasdeabrangnciadeUBS_2 = new ol.format.GeoJSON();
var features_reasdeabrangnciadeUBS_2 = format_reasdeabrangnciadeUBS_2.readFeatures(json_reasdeabrangnciadeUBS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdeabrangnciadeUBS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdeabrangnciadeUBS_2.addFeatures(features_reasdeabrangnciadeUBS_2);
var lyr_reasdeabrangnciadeUBS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasdeabrangnciadeUBS_2, 
                style: style_reasdeabrangnciadeUBS_2,
                popuplayertitle: "Áreas de abrangência de UBS",
                interactive: true,
    title: 'Áreas de abrangência de UBS<br />\
    <img src="styles/legend/reasdeabrangnciadeUBS_2_0.png" /> 1197 - 19079<br />\
    <img src="styles/legend/reasdeabrangnciadeUBS_2_1.png" /> 19079 - 36960<br />\
    <img src="styles/legend/reasdeabrangnciadeUBS_2_2.png" /> 36960 - 54842<br />\
    <img src="styles/legend/reasdeabrangnciadeUBS_2_3.png" /> 54842 - 72723<br />\
    <img src="styles/legend/reasdeabrangnciadeUBS_2_4.png" /> 72723 - 90605<br />'
        });
var format_SupervisoTcnicadeSadeSTS_3 = new ol.format.GeoJSON();
var features_SupervisoTcnicadeSadeSTS_3 = format_SupervisoTcnicadeSadeSTS_3.readFeatures(json_SupervisoTcnicadeSadeSTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupervisoTcnicadeSadeSTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupervisoTcnicadeSadeSTS_3.addFeatures(features_SupervisoTcnicadeSadeSTS_3);
var lyr_SupervisoTcnicadeSadeSTS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SupervisoTcnicadeSadeSTS_3, 
                style: style_SupervisoTcnicadeSadeSTS_3,
                popuplayertitle: "Supervisão Técnica de Saúde (STS)",
                interactive: true,
    title: 'Supervisão Técnica de Saúde (STS)<br />\
    <img src="styles/legend/SupervisoTcnicadeSadeSTS_3_0.png" /> 199715 - 348435<br />\
    <img src="styles/legend/SupervisoTcnicadeSadeSTS_3_1.png" /> 348435 - 497154<br />\
    <img src="styles/legend/SupervisoTcnicadeSadeSTS_3_2.png" /> 497154 - 645874<br />\
    <img src="styles/legend/SupervisoTcnicadeSadeSTS_3_3.png" /> 645874 - 794593<br />\
    <img src="styles/legend/SupervisoTcnicadeSadeSTS_3_4.png" /> 794593 - 943313<br />'
        });
var format_CoordenadoriaRegionaldeSadeCRS_4 = new ol.format.GeoJSON();
var features_CoordenadoriaRegionaldeSadeCRS_4 = format_CoordenadoriaRegionaldeSadeCRS_4.readFeatures(json_CoordenadoriaRegionaldeSadeCRS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordenadoriaRegionaldeSadeCRS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordenadoriaRegionaldeSadeCRS_4.addFeatures(features_CoordenadoriaRegionaldeSadeCRS_4);
var lyr_CoordenadoriaRegionaldeSadeCRS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordenadoriaRegionaldeSadeCRS_4, 
                style: style_CoordenadoriaRegionaldeSadeCRS_4,
                popuplayertitle: "Coordenadoria Regional de Saúde (CRS)",
                interactive: true,
    title: 'Coordenadoria Regional de Saúde (CRS)<br />\
    <img src="styles/legend/CoordenadoriaRegionaldeSadeCRS_4_0.png" /> 534026 - 1146464<br />\
    <img src="styles/legend/CoordenadoriaRegionaldeSadeCRS_4_1.png" /> 1146464 - 1758903<br />\
    <img src="styles/legend/CoordenadoriaRegionaldeSadeCRS_4_2.png" /> 1758903 - 2371341<br />\
    <img src="styles/legend/CoordenadoriaRegionaldeSadeCRS_4_3.png" /> 2371341 - 2983780<br />\
    <img src="styles/legend/CoordenadoriaRegionaldeSadeCRS_4_4.png" /> 2983780 - 3596218<br />'
        });
var format_CRSSul_5 = new ol.format.GeoJSON();
var features_CRSSul_5 = format_CRSSul_5.readFeatures(json_CRSSul_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRSSul_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRSSul_5.addFeatures(features_CRSSul_5);
var lyr_CRSSul_5 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_CRSSul_5, 
                radius: 4 * 2,
                gradient: ['#f1eef6', '#e3d0e6', '#d7b5d8', '#db8ac2', '#df65b0', '#de3c90', '#dd1c77', '#ba0e5d', '#980043', '#980043'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'POP2022';
        var featureWeight = feature.get(weightField);
        var maxWeight = 1967;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'CRS Sul'
            });
var format_CRSSudeste_6 = new ol.format.GeoJSON();
var features_CRSSudeste_6 = format_CRSSudeste_6.readFeatures(json_CRSSudeste_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRSSudeste_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRSSudeste_6.addFeatures(features_CRSSudeste_6);
var lyr_CRSSudeste_6 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_CRSSudeste_6, 
                radius: 4 * 2,
                gradient: ['#f1eef6', '#e3d0e6', '#d7b5d8', '#db8ac2', '#df65b0', '#de3c90', '#dd1c77', '#ba0e5d', '#980043', '#980043'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'POP2022';
        var featureWeight = feature.get(weightField);
        var maxWeight = 2221;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'CRS Sudeste'
            });
var format_CRSNorte_7 = new ol.format.GeoJSON();
var features_CRSNorte_7 = format_CRSNorte_7.readFeatures(json_CRSNorte_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRSNorte_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRSNorte_7.addFeatures(features_CRSNorte_7);
var lyr_CRSNorte_7 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_CRSNorte_7, 
                radius: 4 * 2,
                gradient: ['#f1eef6', '#e3d0e6', '#d7b5d8', '#db8ac2', '#df65b0', '#de3c90', '#dd1c77', '#ba0e5d', '#980043', '#980043'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'POP2022';
        var featureWeight = feature.get(weightField);
        var maxWeight = 2202;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'CRS Norte'
            });
var format_CRSOeste_8 = new ol.format.GeoJSON();
var features_CRSOeste_8 = format_CRSOeste_8.readFeatures(json_CRSOeste_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRSOeste_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRSOeste_8.addFeatures(features_CRSOeste_8);
var lyr_CRSOeste_8 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_CRSOeste_8, 
                radius: 4 * 2,
                gradient: ['#f1eef6', '#e3d0e6', '#d7b5d8', '#db8ac2', '#df65b0', '#de3c90', '#dd1c77', '#ba0e5d', '#980043', '#980043'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'POP2022';
        var featureWeight = feature.get(weightField);
        var maxWeight = 2142;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'CRS Oeste'
            });
var format_CRSCentro_9 = new ol.format.GeoJSON();
var features_CRSCentro_9 = format_CRSCentro_9.readFeatures(json_CRSCentro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRSCentro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRSCentro_9.addFeatures(features_CRSCentro_9);
var lyr_CRSCentro_9 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_CRSCentro_9, 
                radius: 4 * 2,
                gradient: ['#f1eef6', '#e3d0e6', '#d7b5d8', '#db8ac2', '#df65b0', '#de3c90', '#dd1c77', '#ba0e5d', '#980043', '#980043'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'POP2022';
        var featureWeight = feature.get(weightField);
        var maxWeight = 1272;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'CRS Centro'
            });
var format_CRSLeste_10 = new ol.format.GeoJSON();
var features_CRSLeste_10 = format_CRSLeste_10.readFeatures(json_CRSLeste_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRSLeste_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRSLeste_10.addFeatures(features_CRSLeste_10);
var lyr_CRSLeste_10 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_CRSLeste_10, 
                radius: 4 * 2,
                gradient: ['#f1eef6', '#e3d0e6', '#d7b5d8', '#db8ac2', '#df65b0', '#de3c90', '#dd1c77', '#ba0e5d', '#980043', '#980043'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'POP2022';
        var featureWeight = feature.get(weightField);
        var maxWeight = 2112;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'CRS Leste'
            });
var format_ProvisoHabitacional_11 = new ol.format.GeoJSON();
var features_ProvisoHabitacional_11 = format_ProvisoHabitacional_11.readFeatures(json_ProvisoHabitacional_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvisoHabitacional_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvisoHabitacional_11.addFeatures(features_ProvisoHabitacional_11);
var lyr_ProvisoHabitacional_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvisoHabitacional_11, 
                style: style_ProvisoHabitacional_11,
                popuplayertitle: "Provisão Habitacional",
                interactive: true,
                title: '<img src="styles/legend/ProvisoHabitacional_11.png" /> Provisão Habitacional'
            });
var format_Assentamentosprecrios_12 = new ol.format.GeoJSON();
var features_Assentamentosprecrios_12 = format_Assentamentosprecrios_12.readFeatures(json_Assentamentosprecrios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Assentamentosprecrios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Assentamentosprecrios_12.addFeatures(features_Assentamentosprecrios_12);
var lyr_Assentamentosprecrios_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Assentamentosprecrios_12, 
                style: style_Assentamentosprecrios_12,
                popuplayertitle: "Assentamentos precários",
                interactive: true,
    title: 'Assentamentos precários<br />\
    <img src="styles/legend/Assentamentosprecrios_12_0.png" /> Abrigo/Alojamento<br />\
    <img src="styles/legend/Assentamentosprecrios_12_1.png" /> Favela<br />\
    <img src="styles/legend/Assentamentosprecrios_12_2.png" /> Núcleo<br />\
    <img src="styles/legend/Assentamentosprecrios_12_3.png" /> Ocupação de Terreno<br />'
        });
var format_Setorescensitrios2022versopreliminarCRSSul_13 = new ol.format.GeoJSON();
var features_Setorescensitrios2022versopreliminarCRSSul_13 = format_Setorescensitrios2022versopreliminarCRSSul_13.readFeatures(json_Setorescensitrios2022versopreliminarCRSSul_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Setorescensitrios2022versopreliminarCRSSul_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Setorescensitrios2022versopreliminarCRSSul_13.addFeatures(features_Setorescensitrios2022versopreliminarCRSSul_13);
var lyr_Setorescensitrios2022versopreliminarCRSSul_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Setorescensitrios2022versopreliminarCRSSul_13, 
                style: style_Setorescensitrios2022versopreliminarCRSSul_13,
                popuplayertitle: "Setores censitários 2022 (versão preliminar) - CRS Sul",
                interactive: true,
                title: '<img src="styles/legend/Setorescensitrios2022versopreliminarCRSSul_13.png" /> Setores censitários 2022 (versão preliminar) - CRS Sul'
            });
var format_Setorescensitrios2022versopreliminarCRSSudeste_14 = new ol.format.GeoJSON();
var features_Setorescensitrios2022versopreliminarCRSSudeste_14 = format_Setorescensitrios2022versopreliminarCRSSudeste_14.readFeatures(json_Setorescensitrios2022versopreliminarCRSSudeste_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Setorescensitrios2022versopreliminarCRSSudeste_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Setorescensitrios2022versopreliminarCRSSudeste_14.addFeatures(features_Setorescensitrios2022versopreliminarCRSSudeste_14);
var lyr_Setorescensitrios2022versopreliminarCRSSudeste_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Setorescensitrios2022versopreliminarCRSSudeste_14, 
                style: style_Setorescensitrios2022versopreliminarCRSSudeste_14,
                popuplayertitle: "Setores censitários 2022 (versão preliminar) - CRS Sudeste",
                interactive: true,
                title: '<img src="styles/legend/Setorescensitrios2022versopreliminarCRSSudeste_14.png" /> Setores censitários 2022 (versão preliminar) - CRS Sudeste'
            });
var format_Setorescensitrios2022versopreliminarCRSNorte_15 = new ol.format.GeoJSON();
var features_Setorescensitrios2022versopreliminarCRSNorte_15 = format_Setorescensitrios2022versopreliminarCRSNorte_15.readFeatures(json_Setorescensitrios2022versopreliminarCRSNorte_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Setorescensitrios2022versopreliminarCRSNorte_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Setorescensitrios2022versopreliminarCRSNorte_15.addFeatures(features_Setorescensitrios2022versopreliminarCRSNorte_15);
var lyr_Setorescensitrios2022versopreliminarCRSNorte_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Setorescensitrios2022versopreliminarCRSNorte_15, 
                style: style_Setorescensitrios2022versopreliminarCRSNorte_15,
                popuplayertitle: "Setores censitários 2022 (versão preliminar) - CRS Norte",
                interactive: true,
                title: '<img src="styles/legend/Setorescensitrios2022versopreliminarCRSNorte_15.png" /> Setores censitários 2022 (versão preliminar) - CRS Norte'
            });
var format_Setorescensitrios2022versopreliminarCRSOeste_16 = new ol.format.GeoJSON();
var features_Setorescensitrios2022versopreliminarCRSOeste_16 = format_Setorescensitrios2022versopreliminarCRSOeste_16.readFeatures(json_Setorescensitrios2022versopreliminarCRSOeste_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Setorescensitrios2022versopreliminarCRSOeste_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Setorescensitrios2022versopreliminarCRSOeste_16.addFeatures(features_Setorescensitrios2022versopreliminarCRSOeste_16);
var lyr_Setorescensitrios2022versopreliminarCRSOeste_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Setorescensitrios2022versopreliminarCRSOeste_16, 
                style: style_Setorescensitrios2022versopreliminarCRSOeste_16,
                popuplayertitle: "Setores censitários 2022 (versão preliminar) - CRS Oeste",
                interactive: true,
                title: '<img src="styles/legend/Setorescensitrios2022versopreliminarCRSOeste_16.png" /> Setores censitários 2022 (versão preliminar) - CRS Oeste'
            });
var format_Setorescensitrios2022versopreliminarCRSLeste_17 = new ol.format.GeoJSON();
var features_Setorescensitrios2022versopreliminarCRSLeste_17 = format_Setorescensitrios2022versopreliminarCRSLeste_17.readFeatures(json_Setorescensitrios2022versopreliminarCRSLeste_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Setorescensitrios2022versopreliminarCRSLeste_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Setorescensitrios2022versopreliminarCRSLeste_17.addFeatures(features_Setorescensitrios2022versopreliminarCRSLeste_17);
var lyr_Setorescensitrios2022versopreliminarCRSLeste_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Setorescensitrios2022versopreliminarCRSLeste_17, 
                style: style_Setorescensitrios2022versopreliminarCRSLeste_17,
                popuplayertitle: "Setores censitários 2022 (versão preliminar) - CRS Leste",
                interactive: true,
                title: '<img src="styles/legend/Setorescensitrios2022versopreliminarCRSLeste_17.png" /> Setores censitários 2022 (versão preliminar) - CRS Leste'
            });
var format_Setorescensitrios2022versopreliminarCRSCentro_18 = new ol.format.GeoJSON();
var features_Setorescensitrios2022versopreliminarCRSCentro_18 = format_Setorescensitrios2022versopreliminarCRSCentro_18.readFeatures(json_Setorescensitrios2022versopreliminarCRSCentro_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Setorescensitrios2022versopreliminarCRSCentro_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Setorescensitrios2022versopreliminarCRSCentro_18.addFeatures(features_Setorescensitrios2022versopreliminarCRSCentro_18);
var lyr_Setorescensitrios2022versopreliminarCRSCentro_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Setorescensitrios2022versopreliminarCRSCentro_18, 
                style: style_Setorescensitrios2022versopreliminarCRSCentro_18,
                popuplayertitle: "Setores censitários 2022 (versão preliminar) - CRS Centro",
                interactive: true,
                title: '<img src="styles/legend/Setorescensitrios2022versopreliminarCRSCentro_18.png" /> Setores censitários 2022 (versão preliminar) - CRS Centro'
            });
var format_reasdeabrangnciadeUBS_19 = new ol.format.GeoJSON();
var features_reasdeabrangnciadeUBS_19 = format_reasdeabrangnciadeUBS_19.readFeatures(json_reasdeabrangnciadeUBS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdeabrangnciadeUBS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdeabrangnciadeUBS_19.addFeatures(features_reasdeabrangnciadeUBS_19);
var lyr_reasdeabrangnciadeUBS_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasdeabrangnciadeUBS_19, 
                style: style_reasdeabrangnciadeUBS_19,
                popuplayertitle: "Áreas de abrangência de UBS",
                interactive: true,
                title: '<img src="styles/legend/reasdeabrangnciadeUBS_19.png" /> Áreas de abrangência de UBS'
            });
var format_SupervisoTcnicadeSadeSTS_20 = new ol.format.GeoJSON();
var features_SupervisoTcnicadeSadeSTS_20 = format_SupervisoTcnicadeSadeSTS_20.readFeatures(json_SupervisoTcnicadeSadeSTS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupervisoTcnicadeSadeSTS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupervisoTcnicadeSadeSTS_20.addFeatures(features_SupervisoTcnicadeSadeSTS_20);
var lyr_SupervisoTcnicadeSadeSTS_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SupervisoTcnicadeSadeSTS_20, 
                style: style_SupervisoTcnicadeSadeSTS_20,
                popuplayertitle: "Supervisão Técnica de Saúde (STS)",
                interactive: true,
                title: '<img src="styles/legend/SupervisoTcnicadeSadeSTS_20.png" /> Supervisão Técnica de Saúde (STS)'
            });
var format_CoordenadoriaRegionaldeSadeCRS_21 = new ol.format.GeoJSON();
var features_CoordenadoriaRegionaldeSadeCRS_21 = format_CoordenadoriaRegionaldeSadeCRS_21.readFeatures(json_CoordenadoriaRegionaldeSadeCRS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordenadoriaRegionaldeSadeCRS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordenadoriaRegionaldeSadeCRS_21.addFeatures(features_CoordenadoriaRegionaldeSadeCRS_21);
var lyr_CoordenadoriaRegionaldeSadeCRS_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordenadoriaRegionaldeSadeCRS_21, 
                style: style_CoordenadoriaRegionaldeSadeCRS_21,
                popuplayertitle: "Coordenadoria Regional de Saúde (CRS)",
                interactive: true,
                title: '<img src="styles/legend/CoordenadoriaRegionaldeSadeCRS_21.png" /> Coordenadoria Regional de Saúde (CRS)'
            });
var group_Densidadepopulacional2022segCRS = new ol.layer.Group({
                                layers: [lyr_CRSSul_5,lyr_CRSSudeste_6,lyr_CRSNorte_7,lyr_CRSOeste_8,lyr_CRSCentro_9,lyr_CRSLeste_10,],
                                title: "Densidade populacional 2022 seg CRS"});
var group_Populao2022Pontosproporcionais = new ol.layer.Group({
                                layers: [lyr_reasdeabrangnciadeUBS_2,lyr_SupervisoTcnicadeSadeSTS_3,lyr_CoordenadoriaRegionaldeSadeCRS_4,],
                                title: "População 2022 - Pontos proporcionais"});
var group_Mapasbase = new ol.layer.Group({
                                layers: [lyr_MapabaseImagemareaGoogleSatellite_0,lyr_MapabaseLogradourosGoogleRoads_1,],
                                title: "Mapas-base"});

lyr_MapabaseImagemareaGoogleSatellite_0.setVisible(true);lyr_MapabaseLogradourosGoogleRoads_1.setVisible(true);lyr_reasdeabrangnciadeUBS_2.setVisible(false);lyr_SupervisoTcnicadeSadeSTS_3.setVisible(false);lyr_CoordenadoriaRegionaldeSadeCRS_4.setVisible(false);lyr_CRSSul_5.setVisible(true);lyr_CRSSudeste_6.setVisible(true);lyr_CRSNorte_7.setVisible(true);lyr_CRSOeste_8.setVisible(true);lyr_CRSCentro_9.setVisible(true);lyr_CRSLeste_10.setVisible(true);lyr_ProvisoHabitacional_11.setVisible(false);lyr_Assentamentosprecrios_12.setVisible(false);lyr_Setorescensitrios2022versopreliminarCRSSul_13.setVisible(true);lyr_Setorescensitrios2022versopreliminarCRSSudeste_14.setVisible(true);lyr_Setorescensitrios2022versopreliminarCRSNorte_15.setVisible(true);lyr_Setorescensitrios2022versopreliminarCRSOeste_16.setVisible(true);lyr_Setorescensitrios2022versopreliminarCRSLeste_17.setVisible(true);lyr_Setorescensitrios2022versopreliminarCRSCentro_18.setVisible(true);lyr_reasdeabrangnciadeUBS_19.setVisible(true);lyr_SupervisoTcnicadeSadeSTS_20.setVisible(true);lyr_CoordenadoriaRegionaldeSadeCRS_21.setVisible(true);
var layersList = [group_Mapasbase,group_Populao2022Pontosproporcionais,group_Densidadepopulacional2022segCRS,lyr_ProvisoHabitacional_11,lyr_Assentamentosprecrios_12,lyr_Setorescensitrios2022versopreliminarCRSSul_13,lyr_Setorescensitrios2022versopreliminarCRSSudeste_14,lyr_Setorescensitrios2022versopreliminarCRSNorte_15,lyr_Setorescensitrios2022versopreliminarCRSOeste_16,lyr_Setorescensitrios2022versopreliminarCRSLeste_17,lyr_Setorescensitrios2022versopreliminarCRSCentro_18,lyr_reasdeabrangnciadeUBS_19,lyr_SupervisoTcnicadeSadeSTS_20,lyr_CoordenadoriaRegionaldeSadeCRS_21];
lyr_reasdeabrangnciadeUBS_2.set('fieldAliases', {'CNES': 'CNES', 'NOMEUBS': 'NOMEUBS', 'STS': 'STS', 'CRS': 'CRS', 'PERC_ESF': 'PERC_ESF', 'EAB': 'EAB', 'DENS_DEMOG': 'DENS_DEMOG', 'STS_UBS': 'STS_UBS', 'CRS_UBS': 'CRS_UBS', 'POP2022': 'POP2022', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'MORDOMPO': 'MORDOMPO', 'DOMIMPUT': 'DOMIMPUT', 'DOMPO': 'DOMPO', 'SUM_AREASC': 'SUM_AREASC', });
lyr_SupervisoTcnicadeSadeSTS_3.set('fieldAliases', {'STS_UBS': 'STS_UBS', 'CRS_UBS': 'CRS_UBS', 'POP22': 'POP22', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'MORDOM': 'MORDOM', 'DOMIMP': 'DOMIMP', 'DOMPO': 'DOMPO', 'SUM_AR_SC': 'SUM_AR_SC', });
lyr_CoordenadoriaRegionaldeSadeCRS_4.set('fieldAliases', {'CRS_UBS': 'CRS_UBS', 'POP22': 'POP22', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'MORDOM': 'MORDOM', 'DOMIMP': 'DOMIMP', 'DOMPO': 'DOMPO', 'SUM_AR': 'SUM_AR', });
lyr_ProvisoHabitacional_11.set('fieldAliases', {'id': 'id', 'id_hsp': 'id_hsp', 'id_sgm': 'id_sgm', 'meta': 'meta', 'name': 'name', 'endereco': 'endereco', 'subprefeit': 'subprefeit', 'a_tec_cons': 'a_tec_cons', 'ent_organ': 'ent_organ', 'his1': 'his1', 'his2': 'his2', 'hmp': 'hmp', 'r2v': 'r2v', 'nr': 'nr', 'total_uh': 'total_uh', 'programa': 'programa', 'subprogram': 'subprogram', 'st_empreen': 'st_empreen', 'dis': 'dis', 'sql_princi': 'sql_princi', 'sql_secund': 'sql_secund', 'incra': 'incra', 'zoneamento': 'zoneamento', 'area_terre': 'area_terre', 'gestao': 'gestao', 'hist_gesta': 'hist_gesta', });
lyr_Assentamentosprecrios_12.set('fieldAliases', {'gid': 'gid', 'uuid_id': 'uuid_id', 'nome': 'nome', 'nome_secun': 'nome_secun', 'localizaca': 'localizaca', 'categoria': 'categoria', 'totdomicil': 'totdomicil', 'fonte_totd': 'fonte_totd', 'data_totdo': 'data_totdo', 'anoocupaca': 'anoocupaca', 'propriedad': 'propriedad', 'propried_1': 'propried_1', 'nome_propr': 'nome_propr', 'prog_habit': 'prog_habit', 'areageo_m2': 'areageo_m2', 'alcaacesso': 'alcaacesso', 'embaixopon': 'embaixopon', 'rotatoriai': 'rotatoriai', 'aterrosani': 'aterrosani', 'embaixored': 'embaixored', 'sobreoleod': 'sobreoleod', 'sobrearean': 'sobrearean', 'sobreareac': 'sobreareac', 'sistemavia': 'sistemavia', 'sistemafer': 'sistemafer', 'sobrealtad': 'sobrealtad', 'qtdremocao': 'qtdremocao', 'abastecime': 'abastecime', 'esgotament': 'esgotament', 'redeeletri': 'redeeletri', 'viaspavime': 'viaspavime', 'drenagempl': 'drenagempl', 'iluminacao': 'iluminacao', 'coletalixo': 'coletalixo', 'op_data_vi': 'op_data_vi', 'distrito_n': 'distrito_n', 'distrito_p': 'distrito_p', 'subprefeit': 'subprefeit', 'subprefe_1': 'subprefe_1', 'dear_nome': 'dear_nome', 'dear_porc': 'dear_porc', 'zonlei1640': 'zonlei1640', 'zonlei16_1': 'zonlei16_1', 'zonlei16_2': 'zonlei16_2', 'per_acao_i': 'per_acao_i', 'per_acao_1': 'per_acao_1', 'ipvs_2010': 'ipvs_2010', 'ipvs_2010_': 'ipvs_2010_', 'risco_tipo': 'risco_tipo', 'risco_grau': 'risco_grau', 'risco_porc': 'risco_porc', 'macrozona_': 'macrozona_', 'macrozon_1': 'macrozon_1', 'macrozon_2': 'macrozon_2', 'macroarea_': 'macroarea_', 'macroare_1': 'macroare_1', 'macroare_2': 'macroare_2', 'regiao8_no': 'regiao8_no', 'regiao8_po': 'regiao8_po', 'ouc_sigla': 'ouc_sigla', 'ouc_nome': 'ouc_nome', 'ouc_porc': 'ouc_porc', 'sit_ativa_': 'sit_ativa_', 'op_data_cr': 'op_data_cr', 'op_data_al': 'op_data_al', 'op_histori': 'op_histori', });
lyr_Setorescensitrios2022versopreliminarCRSSul_13.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'POP2022': 'POP2022', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'DENS_DOM': 'DENS_DOM', 'DOMIMPUT': 'DOMIMPUT', 'DOMPO': 'DOMPO', 'CD_DIST_MS': 'CD_DIST_MS', 'SUBPREF': 'SUBPREF', 'STS': 'STS', 'CRS': 'CRS', 'UVIS': 'UVIS', });
lyr_Setorescensitrios2022versopreliminarCRSSudeste_14.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'POP2022': 'POP2022', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'DENS_DOM': 'DENS_DOM', 'DOMIMPUT': 'DOMIMPUT', 'DOMPO': 'DOMPO', 'CD_DIST_MS': 'CD_DIST_MS', 'SUBPREF': 'SUBPREF', 'STS': 'STS', 'CRS': 'CRS', 'UVIS': 'UVIS', });
lyr_Setorescensitrios2022versopreliminarCRSNorte_15.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'POP2022': 'POP2022', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'DENS_DOM': 'DENS_DOM', 'DOMIMPUT': 'DOMIMPUT', 'DOMPO': 'DOMPO', 'CD_DIST_MS': 'CD_DIST_MS', 'SUBPREF': 'SUBPREF', 'STS': 'STS', 'CRS': 'CRS', 'UVIS': 'UVIS', });
lyr_Setorescensitrios2022versopreliminarCRSOeste_16.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'POP2022': 'POP2022', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'DENS_DOM': 'DENS_DOM', 'DOMIMPUT': 'DOMIMPUT', 'DOMPO': 'DOMPO', 'CD_DIST_MS': 'CD_DIST_MS', 'SUBPREF': 'SUBPREF', 'STS': 'STS', 'CRS': 'CRS', 'UVIS': 'UVIS', });
lyr_Setorescensitrios2022versopreliminarCRSLeste_17.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'POP2022': 'POP2022', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'DENS_DOM': 'DENS_DOM', 'DOMIMPUT': 'DOMIMPUT', 'DOMPO': 'DOMPO', 'CD_DIST_MS': 'CD_DIST_MS', 'SUBPREF': 'SUBPREF', 'STS': 'STS', 'CRS': 'CRS', 'UVIS': 'UVIS', });
lyr_Setorescensitrios2022versopreliminarCRSCentro_18.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'POP2022': 'POP2022', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'DENS_DOM': 'DENS_DOM', 'DOMIMPUT': 'DOMIMPUT', 'DOMPO': 'DOMPO', 'CD_DIST_MS': 'CD_DIST_MS', 'SUBPREF': 'SUBPREF', 'STS': 'STS', 'CRS': 'CRS', 'UVIS': 'UVIS', });
lyr_reasdeabrangnciadeUBS_19.set('fieldAliases', {'CNES': 'CNES', 'NOMEUBS': 'NOMEUBS', 'STS': 'STS', 'CRS': 'CRS', 'PERC_ESF': 'PERC_ESF', 'EAB': 'EAB', 'DENS_DEMOG': 'DENS_DEMOG', 'STS_UBS': 'STS_UBS', 'CRS_UBS': 'CRS_UBS', 'POP2022': 'POP2022', 'DOM': 'DOM', 'DOMP': 'DOMP', 'DOMC': 'DOMC', 'MORDOMPO': 'MORDOMPO', 'DOMIMPUT': 'DOMIMPUT', 'DOMPO': 'DOMPO', 'SUM_AREASC': 'SUM_AREASC', });
lyr_SupervisoTcnicadeSadeSTS_20.set('fieldAliases', {'Cod_STS': 'Cod_STS', 'STS': 'STS', 'STS_M': 'STS_M', 'STS_SSG': 'STS_SSG', 'X': 'X', 'Y': 'Y', 'STS_rotulo': 'STS_rotulo', 'ID_COD': 'ID_COD', });
lyr_CoordenadoriaRegionaldeSadeCRS_21.set('fieldAliases', {'CRS': 'CRS', 'AREA_KM2': 'AREA_KM2', });
lyr_reasdeabrangnciadeUBS_2.set('fieldImages', {'CNES': 'TextEdit', 'NOMEUBS': 'TextEdit', 'STS': 'TextEdit', 'CRS': 'TextEdit', 'PERC_ESF': 'TextEdit', 'EAB': 'TextEdit', 'DENS_DEMOG': 'TextEdit', 'STS_UBS': 'TextEdit', 'CRS_UBS': 'TextEdit', 'POP2022': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'MORDOMPO': 'TextEdit', 'DOMIMPUT': 'TextEdit', 'DOMPO': 'TextEdit', 'SUM_AREASC': 'TextEdit', });
lyr_SupervisoTcnicadeSadeSTS_3.set('fieldImages', {'STS_UBS': 'TextEdit', 'CRS_UBS': 'TextEdit', 'POP22': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'MORDOM': 'TextEdit', 'DOMIMP': 'TextEdit', 'DOMPO': 'TextEdit', 'SUM_AR_SC': 'TextEdit', });
lyr_CoordenadoriaRegionaldeSadeCRS_4.set('fieldImages', {'CRS_UBS': 'TextEdit', 'POP22': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'MORDOM': 'TextEdit', 'DOMIMP': 'TextEdit', 'DOMPO': 'TextEdit', 'SUM_AR': 'TextEdit', });
lyr_ProvisoHabitacional_11.set('fieldImages', {'id': 'TextEdit', 'id_hsp': 'TextEdit', 'id_sgm': 'TextEdit', 'meta': 'TextEdit', 'name': 'TextEdit', 'endereco': 'TextEdit', 'subprefeit': 'TextEdit', 'a_tec_cons': 'TextEdit', 'ent_organ': 'TextEdit', 'his1': 'TextEdit', 'his2': 'TextEdit', 'hmp': 'TextEdit', 'r2v': 'TextEdit', 'nr': 'TextEdit', 'total_uh': 'TextEdit', 'programa': 'TextEdit', 'subprogram': 'TextEdit', 'st_empreen': 'TextEdit', 'dis': 'TextEdit', 'sql_princi': 'TextEdit', 'sql_secund': 'TextEdit', 'incra': 'TextEdit', 'zoneamento': 'TextEdit', 'area_terre': 'TextEdit', 'gestao': 'TextEdit', 'hist_gesta': 'TextEdit', });
lyr_Assentamentosprecrios_12.set('fieldImages', {'gid': 'TextEdit', 'uuid_id': 'TextEdit', 'nome': 'TextEdit', 'nome_secun': 'TextEdit', 'localizaca': 'TextEdit', 'categoria': 'TextEdit', 'totdomicil': 'TextEdit', 'fonte_totd': 'TextEdit', 'data_totdo': 'DateTime', 'anoocupaca': 'TextEdit', 'propriedad': 'TextEdit', 'propried_1': 'TextEdit', 'nome_propr': 'TextEdit', 'prog_habit': 'TextEdit', 'areageo_m2': 'TextEdit', 'alcaacesso': 'TextEdit', 'embaixopon': 'TextEdit', 'rotatoriai': 'TextEdit', 'aterrosani': 'TextEdit', 'embaixored': 'TextEdit', 'sobreoleod': 'TextEdit', 'sobrearean': 'TextEdit', 'sobreareac': 'TextEdit', 'sistemavia': 'TextEdit', 'sistemafer': 'TextEdit', 'sobrealtad': 'TextEdit', 'qtdremocao': 'TextEdit', 'abastecime': 'TextEdit', 'esgotament': 'TextEdit', 'redeeletri': 'TextEdit', 'viaspavime': 'TextEdit', 'drenagempl': 'TextEdit', 'iluminacao': 'TextEdit', 'coletalixo': 'TextEdit', 'op_data_vi': 'DateTime', 'distrito_n': 'TextEdit', 'distrito_p': 'TextEdit', 'subprefeit': 'TextEdit', 'subprefe_1': 'TextEdit', 'dear_nome': 'TextEdit', 'dear_porc': 'TextEdit', 'zonlei1640': 'TextEdit', 'zonlei16_1': 'TextEdit', 'zonlei16_2': 'TextEdit', 'per_acao_i': 'TextEdit', 'per_acao_1': 'TextEdit', 'ipvs_2010': 'TextEdit', 'ipvs_2010_': 'TextEdit', 'risco_tipo': 'TextEdit', 'risco_grau': 'TextEdit', 'risco_porc': 'TextEdit', 'macrozona_': 'TextEdit', 'macrozon_1': 'TextEdit', 'macrozon_2': 'TextEdit', 'macroarea_': 'TextEdit', 'macroare_1': 'TextEdit', 'macroare_2': 'TextEdit', 'regiao8_no': 'TextEdit', 'regiao8_po': 'TextEdit', 'ouc_sigla': 'TextEdit', 'ouc_nome': 'TextEdit', 'ouc_porc': 'TextEdit', 'sit_ativa_': 'TextEdit', 'op_data_cr': 'DateTime', 'op_data_al': 'DateTime', 'op_histori': 'TextEdit', });
lyr_Setorescensitrios2022versopreliminarCRSSul_13.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'POP2022': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'DENS_DOM': 'TextEdit', 'DOMIMPUT': 'TextEdit', 'DOMPO': 'TextEdit', 'CD_DIST_MS': '', 'SUBPREF': '', 'STS': '', 'CRS': '', 'UVIS': '', });
lyr_Setorescensitrios2022versopreliminarCRSSudeste_14.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'POP2022': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'DENS_DOM': 'TextEdit', 'DOMIMPUT': 'TextEdit', 'DOMPO': 'TextEdit', 'CD_DIST_MS': '', 'SUBPREF': '', 'STS': '', 'CRS': '', 'UVIS': '', });
lyr_Setorescensitrios2022versopreliminarCRSNorte_15.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'POP2022': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'DENS_DOM': 'TextEdit', 'DOMIMPUT': 'TextEdit', 'DOMPO': 'TextEdit', 'CD_DIST_MS': '', 'SUBPREF': '', 'STS': '', 'CRS': '', 'UVIS': '', });
lyr_Setorescensitrios2022versopreliminarCRSOeste_16.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'POP2022': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'DENS_DOM': 'TextEdit', 'DOMIMPUT': 'TextEdit', 'DOMPO': 'TextEdit', 'CD_DIST_MS': '', 'SUBPREF': '', 'STS': '', 'CRS': '', 'UVIS': '', });
lyr_Setorescensitrios2022versopreliminarCRSLeste_17.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'POP2022': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'DENS_DOM': 'TextEdit', 'DOMIMPUT': 'TextEdit', 'DOMPO': 'TextEdit', 'CD_DIST_MS': '', 'SUBPREF': '', 'STS': '', 'CRS': '', 'UVIS': '', });
lyr_Setorescensitrios2022versopreliminarCRSCentro_18.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'POP2022': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'DENS_DOM': 'TextEdit', 'DOMIMPUT': 'TextEdit', 'DOMPO': 'TextEdit', 'CD_DIST_MS': '', 'SUBPREF': '', 'STS': '', 'CRS': '', 'UVIS': '', });
lyr_reasdeabrangnciadeUBS_19.set('fieldImages', {'CNES': 'TextEdit', 'NOMEUBS': 'TextEdit', 'STS': 'TextEdit', 'CRS': 'TextEdit', 'PERC_ESF': 'TextEdit', 'EAB': 'TextEdit', 'DENS_DEMOG': 'TextEdit', 'STS_UBS': 'TextEdit', 'CRS_UBS': 'TextEdit', 'POP2022': 'TextEdit', 'DOM': 'TextEdit', 'DOMP': 'TextEdit', 'DOMC': 'TextEdit', 'MORDOMPO': 'TextEdit', 'DOMIMPUT': 'TextEdit', 'DOMPO': 'TextEdit', 'SUM_AREASC': 'TextEdit', });
lyr_SupervisoTcnicadeSadeSTS_20.set('fieldImages', {'Cod_STS': 'Range', 'STS': 'TextEdit', 'STS_M': 'TextEdit', 'STS_SSG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'STS_rotulo': 'TextEdit', 'ID_COD': 'TextEdit', });
lyr_CoordenadoriaRegionaldeSadeCRS_21.set('fieldImages', {'CRS': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_reasdeabrangnciadeUBS_2.set('fieldLabels', {});
lyr_SupervisoTcnicadeSadeSTS_3.set('fieldLabels', {});
lyr_CoordenadoriaRegionaldeSadeCRS_4.set('fieldLabels', {});
lyr_ProvisoHabitacional_11.set('fieldLabels', {'id': 'no label', 'id_hsp': 'no label', 'id_sgm': 'no label', 'meta': 'no label', 'name': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'subprefeit': 'no label', 'a_tec_cons': 'no label', 'ent_organ': 'no label', 'his1': 'no label', 'his2': 'no label', 'hmp': 'no label', 'r2v': 'no label', 'nr': 'no label', 'total_uh': 'inline label - visible with data', 'programa': 'inline label - visible with data', 'subprogram': 'no label', 'st_empreen': 'inline label - visible with data', 'dis': 'no label', 'sql_princi': 'no label', 'sql_secund': 'no label', 'incra': 'no label', 'zoneamento': 'no label', 'area_terre': 'no label', 'gestao': 'no label', 'hist_gesta': 'no label', });
lyr_Assentamentosprecrios_12.set('fieldLabels', {'gid': 'no label', 'uuid_id': 'no label', 'nome': 'inline label - visible with data', 'nome_secun': 'no label', 'localizaca': 'no label', 'categoria': 'inline label - visible with data', 'totdomicil': 'inline label - visible with data', 'fonte_totd': 'no label', 'data_totdo': 'no label', 'anoocupaca': 'no label', 'propriedad': 'no label', 'propried_1': 'no label', 'nome_propr': 'no label', 'prog_habit': 'no label', 'areageo_m2': 'no label', 'alcaacesso': 'no label', 'embaixopon': 'no label', 'rotatoriai': 'no label', 'aterrosani': 'no label', 'embaixored': 'no label', 'sobreoleod': 'no label', 'sobrearean': 'no label', 'sobreareac': 'no label', 'sistemavia': 'no label', 'sistemafer': 'no label', 'sobrealtad': 'no label', 'qtdremocao': 'no label', 'abastecime': 'no label', 'esgotament': 'no label', 'redeeletri': 'no label', 'viaspavime': 'no label', 'drenagempl': 'no label', 'iluminacao': 'no label', 'coletalixo': 'no label', 'op_data_vi': 'no label', 'distrito_n': 'no label', 'distrito_p': 'no label', 'subprefeit': 'no label', 'subprefe_1': 'no label', 'dear_nome': 'no label', 'dear_porc': 'no label', 'zonlei1640': 'no label', 'zonlei16_1': 'no label', 'zonlei16_2': 'no label', 'per_acao_i': 'no label', 'per_acao_1': 'no label', 'ipvs_2010': 'no label', 'ipvs_2010_': 'inline label - visible with data', 'risco_tipo': 'no label', 'risco_grau': 'no label', 'risco_porc': 'no label', 'macrozona_': 'no label', 'macrozon_1': 'no label', 'macrozon_2': 'no label', 'macroarea_': 'no label', 'macroare_1': 'no label', 'macroare_2': 'no label', 'regiao8_no': 'no label', 'regiao8_po': 'no label', 'ouc_sigla': 'no label', 'ouc_nome': 'no label', 'ouc_porc': 'no label', 'sit_ativa_': 'no label', 'op_data_cr': 'no label', 'op_data_al': 'no label', 'op_histori': 'no label', });
lyr_Setorescensitrios2022versopreliminarCRSSul_13.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'hidden field', 'NM_DIST': 'inline label - visible with data', 'POP2022': 'inline label - visible with data', 'DOM': 'inline label - visible with data', 'DOMP': 'inline label - visible with data', 'DOMC': 'inline label - visible with data', 'DENS_DOM': 'inline label - visible with data', 'DOMIMPUT': 'inline label - visible with data', 'DOMPO': 'inline label - visible with data', 'CD_DIST_MS': 'no label', 'SUBPREF': 'hidden field', 'STS': 'hidden field', 'CRS': 'hidden field', 'UVIS': 'hidden field', });
lyr_Setorescensitrios2022versopreliminarCRSSudeste_14.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'hidden field', 'NM_DIST': 'inline label - visible with data', 'POP2022': 'inline label - visible with data', 'DOM': 'inline label - visible with data', 'DOMP': 'inline label - visible with data', 'DOMC': 'inline label - visible with data', 'DENS_DOM': 'inline label - visible with data', 'DOMIMPUT': 'inline label - visible with data', 'DOMPO': 'inline label - visible with data', 'CD_DIST_MS': 'hidden field', 'SUBPREF': 'hidden field', 'STS': 'hidden field', 'CRS': 'hidden field', 'UVIS': 'hidden field', });
lyr_Setorescensitrios2022versopreliminarCRSNorte_15.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'hidden field', 'NM_DIST': 'inline label - visible with data', 'POP2022': 'inline label - visible with data', 'DOM': 'inline label - visible with data', 'DOMP': 'inline label - visible with data', 'DOMC': 'inline label - visible with data', 'DENS_DOM': 'inline label - visible with data', 'DOMIMPUT': 'inline label - visible with data', 'DOMPO': 'inline label - visible with data', 'CD_DIST_MS': 'hidden field', 'SUBPREF': 'hidden field', 'STS': 'hidden field', 'CRS': 'hidden field', 'UVIS': 'hidden field', });
lyr_Setorescensitrios2022versopreliminarCRSOeste_16.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'hidden field', 'NM_DIST': 'inline label - visible with data', 'POP2022': 'inline label - visible with data', 'DOM': 'inline label - visible with data', 'DOMP': 'inline label - visible with data', 'DOMC': 'inline label - visible with data', 'DENS_DOM': 'inline label - visible with data', 'DOMIMPUT': 'inline label - visible with data', 'DOMPO': 'inline label - visible with data', 'CD_DIST_MS': 'hidden field', 'SUBPREF': 'hidden field', 'STS': 'hidden field', 'CRS': 'hidden field', 'UVIS': 'hidden field', });
lyr_Setorescensitrios2022versopreliminarCRSLeste_17.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'hidden field', 'NM_DIST': 'inline label - visible with data', 'POP2022': 'inline label - visible with data', 'DOM': 'inline label - visible with data', 'DOMP': 'inline label - visible with data', 'DOMC': 'inline label - visible with data', 'DENS_DOM': 'inline label - visible with data', 'DOMIMPUT': 'inline label - visible with data', 'DOMPO': 'inline label - visible with data', 'CD_DIST_MS': 'hidden field', 'SUBPREF': 'hidden field', 'STS': 'hidden field', 'CRS': 'hidden field', 'UVIS': 'hidden field', });
lyr_Setorescensitrios2022versopreliminarCRSCentro_18.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'hidden field', 'NM_DIST': 'inline label - visible with data', 'POP2022': 'inline label - visible with data', 'DOM': 'inline label - visible with data', 'DOMP': 'inline label - visible with data', 'DOMC': 'inline label - visible with data', 'DENS_DOM': 'inline label - visible with data', 'DOMIMPUT': 'inline label - visible with data', 'DOMPO': 'inline label - visible with data', 'CD_DIST_MS': 'hidden field', 'SUBPREF': 'hidden field', 'STS': 'hidden field', 'CRS': 'hidden field', 'UVIS': 'hidden field', });
lyr_reasdeabrangnciadeUBS_19.set('fieldLabels', {'CNES': 'inline label - visible with data', 'NOMEUBS': 'inline label - visible with data', 'STS': 'hidden field', 'CRS': 'hidden field', 'PERC_ESF': 'hidden field', 'EAB': 'hidden field', 'DENS_DEMOG': 'inline label - visible with data', 'STS_UBS': 'inline label - visible with data', 'CRS_UBS': 'inline label - visible with data', 'POP2022': 'inline label - visible with data', 'DOM': 'inline label - visible with data', 'DOMP': 'inline label - visible with data', 'DOMC': 'inline label - visible with data', 'MORDOMPO': 'inline label - visible with data', 'DOMIMPUT': 'inline label - visible with data', 'DOMPO': 'inline label - visible with data', 'SUM_AREASC': 'inline label - visible with data', });
lyr_SupervisoTcnicadeSadeSTS_20.set('fieldLabels', {'Cod_STS': 'hidden field', 'STS': 'inline label - visible with data', 'STS_M': 'hidden field', 'STS_SSG': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'STS_rotulo': 'hidden field', 'ID_COD': 'hidden field', });
lyr_CoordenadoriaRegionaldeSadeCRS_21.set('fieldLabels', {'CRS': 'inline label - visible with data', 'AREA_KM2': 'hidden field', });
lyr_CoordenadoriaRegionaldeSadeCRS_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});