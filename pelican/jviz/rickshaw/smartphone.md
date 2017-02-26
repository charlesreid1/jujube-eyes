<h2>Smartphone Time Series</h2>

This Rickshaw.js chart visualizes a time series of total CPU usage on a smartphone.
The data consists of approximately 2 weeks of data, polled every 5 seconds, so the 
data set is huge. This is down-sampled using Python and exported to an appropriate 
format. The data are stored in a JSON file that looks like this: 

<pre>
    [
        {"y": 60.029761999999998,   "x": 1462793200},
        {"y": 4.6590910000000001,   "x": 1462793464},
        {"y": 4.0687655999999999,   "x": 1462793726},
        {"y": 39.323672999999999,   "x": 1462793989},
        {"y": 0.0,                  "x": 1462794266},
        {"y": 0.0,                  "x": 1462794642},
        {"y": 5.381653,             "x": 1462794996},
        {"y": 50.717700000000001,   "x": 1462795370},

        ...

    ]
</pre>

The Javascript page starts by loading the JSON data, and then draws the chart. 

