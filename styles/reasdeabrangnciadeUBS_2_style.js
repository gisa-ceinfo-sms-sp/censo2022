var size = 0;
var placement = 'point';

var style_reasdeabrangnciadeUBS_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("POP2022");
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
    if (value >= 1197.000000 && value <= 19078.600000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 19078.600000 && value <= 36960.200000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.9 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 36960.200000 && value <= 54841.800000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 54841.800000 && value <= 72723.400000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 11.3 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 72723.400000 && value <= 90605.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(72,123,182,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
