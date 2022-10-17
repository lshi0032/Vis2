var vg_1 = "final_chloro_line.vl.json"; 
vegaEmbed("#map_line", vg_1,{"actions":false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);    

var vg_2 = "final_scatter.vl.json"; 
vegaEmbed("#scatterplot", vg_2,{"actions":false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_3 = "final_spine.vl.json"; 
vegaEmbed("#spinechart", vg_3,{"actions":false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_4 = "final_stacked.vl.json"; 
vegaEmbed("#stackedbar", vg_4,{"actions":false}).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);