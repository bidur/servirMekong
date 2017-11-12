// START: code to change transparency of layer
function sliderOpacity(Layer,elemID,opacity){
    Layer.setOpacity(opacity);
    Layer.setVisible(true);// Layer is made visible, if its transparency is changed by slider movement
    if(elemID != 'NA') {
	showLegend(document.getElementById(elemID)) ;// hrsl2010 is the div ID of the legend for this layer
    }
};
function sliderUpdate(Layer, slider,opacity) {
    Layer.setOpacity(opacity);				
    slider.value = opacity *100;
    Layer.setVisible(true); // set the layer visible if its selected for setting transparency
}
