$(document).ready(function () {

    var data3 = [ { x: -1893456000, y: 92228531 }, { x: -1577923200, y: 106021568 }, { x: -1262304000, y: 123202660 }, { x: -946771200, y: 132165129 }, { x: -631152000, y: 151325798 }, { x: -315619200, y: 179323175 }, { x: 0, y: 203211926 }, { x: 315532800, y: 226545805 }, { x: 631152000, y: 248709873 }, { x: 946684800, y: 281421906 }, { x: 1262304000, y: 508745538 } ];

    var graph3 = new Rickshaw.Graph( {
            element: document.querySelector("#example3"),
                width: 400,
                height: 150,
            series: [ {
                    data: data3,
                    color: 'orange'
            } ]
    } );
    
    var x_axis3 = new Rickshaw.Graph.Axis.Time( { graph: graph3 } );
    
    var y_axis3 = new Rickshaw.Graph.Axis.Y( {
            graph: graph3,
            orientation: 'left',
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
            element: document.getElementById('y_axis'),
    } );
    
    graph3.render();

});

