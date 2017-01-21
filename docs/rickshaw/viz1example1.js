$(document).ready(function () {

    var data1 = [ { x: 0, y: 40 }, 
                 { x: 1, y: 49 }, 
                 { x: 2, y: 17 }, 
                 { x: 3, y: 42 } ];

    var graph1 = new Rickshaw.Graph( {
            element: document.querySelector("#example1"),
            width: 400,
            height: 150,
            series: [ {
                    color: 'darkred',
                    data: data1
            } ]
    } );

    var axes = new Rickshaw.Graph.Axis.Time( { graph: graph1 } );
    
    graph1.render();
});
