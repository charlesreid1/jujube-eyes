$(document).ready(function () {


    // ----------------
    // Data 

    // set up our data series with 150 random data points
    
    var seriesData = [ [], [], [], [], [], [], [], [], [] ];
    var random = new Rickshaw.Fixtures.RandomData(150);

    for (var i = 0; i < 150; i++) {
        random.addData(seriesData);
    }




    // ----------------
    // Colors

    var palette = new Rickshaw.Color.Palette( { scheme: 'spectrum2001' } );




    // ----------------
    // Graph
    //
    // instantiate our graph!

    var graph = new Rickshaw.Graph( {
        element: document.getElementById("reactor"),
        width: 500,
        height: 200,
        renderer: 'area',
        stroke: true,
        offset: 'expand',
        preserve: true,
        series: [
            {
                color: palette.color(),
                data: seriesData[0],
                name: 'CO2'
            }, {
                color: palette.color(),
                data: seriesData[1],
                name: 'H2O'
            }, {
                color: palette.color(),
                data: seriesData[2],
                name: 'CO'
            }, {
                color: palette.color(),
                data: seriesData[3],
                name: 'H2'
            }, {
                color: palette.color(),
                data: seriesData[4],
                name: 'C2H6'
            }, {
                color: palette.color(),
                data: seriesData[5],
                name: 'C2H4'
            }, {
                color: palette.color(),
                data: seriesData[6],
                name: 'O2'
            }
        ],
        onComplete: function(transport) {
            console.log('all finished!');
            //var graph = transport.graph;
            //var detail = new Rickshaw.Graph.HoverDetail({ graph: graph });
        }
        
    } );

    var legend = new Rickshaw.Graph.Legend( {
        graph: graph,
        element: document.querySelector('#legend'),
    } );
    
    graph.render();
    


    // ----------------
    // Annotations
    //


    /*
    var preview = new Rickshaw.Graph.RangeSlider( {
        graph: graph,
        element: document.getElementById('preview'),
    } );
    
    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph,
        xFormatter: function(x) {
            return new Date(x * 1000).toString();
        }
    } );
    
    var annotator = new Rickshaw.Graph.Annotate( {
        graph: graph,
        element: document.getElementById('timeline')
    } );
    
    
    var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
        graph: graph,
        legend: legend
    } );
    
    var order = new Rickshaw.Graph.Behavior.Series.Order( {
        graph: graph,
        legend: legend
    } );
    
    var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight( {
        graph: graph,
        legend: legend
    } );
    
    var smoother = new Rickshaw.Graph.Smoother( {
        graph: graph,
        element: document.querySelector('#smoother')
    } );

    */

    var ticksTreatment = 'glow';
    
    var xAxis = new Rickshaw.Graph.Axis.Time( {
        graph: graph,
        ticksTreatment: ticksTreatment,
        timeFixture: new Rickshaw.Fixtures.Time.Local()
    } );
    
    xAxis.render();
    
    var yAxis = new Rickshaw.Graph.Axis.Y( {
        graph: graph,
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        ticksTreatment: ticksTreatment
    } );
    
    yAxis.render();
    
    
    /*
    var controls = new RenderControls( {
        element: document.querySelector('form'),
        graph: graph
    } );
    
    // add some data every so often
    
    var messages = [
        "Changed home page welcome message",
        "Minified JS and CSS",
        "Changed button color from blue to green",
        "Refactored SQL query to use indexed columns",
        "Added additional logging for debugging",
        "Fixed typo",
        "Rewrite conditional logic for clarity",
        "Added documentation for new methods"
    ];
    */
    
    setInterval( function() {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph.update();
    
    }, 3000 );
    
    /*
    function addAnnotation(force) {
        if (messages.length > 0 && (force || Math.random() >= 0.95)) {
            annotator.add(seriesData[2][seriesData[2].length-1].x, messages.shift());
            annotator.update();
        }
    }
    addAnnotation(true);
    
    setTimeout( function() { setInterval( addAnnotation, 6000 ) }, 6000 );
    */
    
    var previewXAxis = new Rickshaw.Graph.Axis.Time({
        graph: preview.previews[0],
        timeFixture: new Rickshaw.Fixtures.Time.Local(),
        ticksTreatment: ticksTreatment
    });
    
    previewXAxis.render();





});

