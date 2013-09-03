;define(['cyto'], function(){
  
    return cytoscape.stylesheet()
      .selector("node")
            .css({
                "content": "data(id)",
                "shape": "data(shape)",
                "border-width": 3,
                "background-color": "#DDD",
                "border-color": "#555"
            })
        .selector("edge")
            .css({
                "width": "mapData(weight, 0, 100, 1, 4)",
                "target-arrow-shape": "circle",
                "source-arrow-shape": "circle",
                "line-color": "#444"
            })
        .selector(":selected")
            .css({
                "background-color": "#000",
                "line-color": "#000",
                "source-arrow-color": "#000",
                "target-arrow-color": "#000"
            })
        .selector(".ui-cytoscape-edgehandles-source")
            .css({
                "border-color": "#5CC2ED",
                "border-width": 3
            })
        .selector(".ui-cytoscape-edgehandles-target, node.ui-cytoscape-edgehandles-preview")
            .css({
                "background-color": "#5CC2ED"
            })
        .selector("edge.ui-cytoscape-edgehandles-preview")
            .css({
                "line-color": "#5CC2ED"
            })
        .selector("node.ui-cytoscape-edgehandles-preview, node.intermediate")
            .css({
                "shape": "rectangle",
                "width": 15,
                "height": 15
            });
}); // end define
