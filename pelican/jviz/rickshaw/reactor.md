<h2>The Rickshaw Reactor</h2>

Using Rickshaw to visualize chemical process data is possible by 
creating a graph that is linked to a data structure, then updating
the data structure with new data. When the <code>graph.update()</code> 
method is called, the graph is re-drawn with new data.

The format of the series being plotted closely follows the Rickshaw examples.
The variable <code>seriesData</code> is a multi-column array of arrays, 
and this is used to form the series data for the chart, which looks like
this:

<pre>
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
    ]
</pre>

where the variable <code>seriesData[n]</code> consists of the nth column
of data (the nth array) in the <code>seriesData</code> array of arrays.

The <code>seriesData</code> variable is modified in a call to <code>setInterval</code>,
which will update the data at the specified interval. One piece of data is popped from the end,
and a new piece of data is pushed to the top. The data are modified like so:

<pre>
    setInterval( function() {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph.update();
    
    }, 3000 );
</pre>

here, <code>random</code> is a Rickshaw random data object:

<pre>
    var random = new Rickshaw.Fixtures.RandomData(150);
</pre>


