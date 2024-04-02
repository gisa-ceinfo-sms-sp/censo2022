var size = 0;
var placement = 'point';

var style_SupervisoTcnicadeSadeSTS_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("POP22");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 199715.000000 && value <= 348434.600000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 348434.600000 && value <= 497154.200000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.7 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 497154.200000 && value <= 645873.800000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 11.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 645873.800000 && value <= 794593.400000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15.1 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 794593.400000 && value <= 943313.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 18.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
