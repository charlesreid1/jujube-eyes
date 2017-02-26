<h2>Bar Chart: JSON</h2>

This multiple-series bar chart is created with C3.js. This turns a key-value dictionary 
into properly-formatted column-major data.

<h3>JSON Data</h3>

We start with data in a JSON file that looks like this:

<pre>
{
    "Country 1" : [ 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.27],
    "Country 2" : [ 7.45, 7.31, 8.69, 8.74, 5.7, -6.15, 4.4, 4.67, 3.8, 2.02, 3.04],
    "Country 3" : [ 3.82, 3.06, 2.56, 4.43, 2.2, 1.23, 2.53, 2.4, 3.53, 2.62, 2.58],
    "Country 4" : [ 7.58, 8.57, 8.24, 7.54, 4.69, 3.68, 7.62, 6.55, 3.64, 4.02, 4.63],
    "Country 5" : [ 6.48, 5.78, 6.1, 6.51, 4.27, 1.15, 8.04, 4.57, 5.51, 4.99, 5.1]
}
</pre>

Using Javascript, we parse the data to put it in the format C3 wants, 
so it is transformed into this:

<pre>
[
    [ "Country 1", 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.27],
    [ "Country 2", 7.45, 7.31, 8.69, 8.74, 5.7, -6.15, 4.4, 4.67, 3.8, 2.02, 3.04],
    [ "Country 3", 3.82, 3.06, 2.56, 4.43, 2.2, 1.23, 2.53, 2.4, 3.53, 2.62, 2.58],
    [ "Country 4", 7.58, 8.57, 8.24, 7.54, 4.69, 3.68, 7.62, 6.55, 3.64, 4.02, 4.63],
    [ "Country 5", 6.48, 5.78, 6.1, 6.51, 4.27, 1.15, 8.04, 4.57, 5.51, 4.99, 5.1]
]
</pre>

This is the data that is then passed to the <code>columns</code> argument of the <code>data</code>
variable of our C3 chart. 

<h3>Drop-Down Controls</h3>

When the drop-down menus are used to select different data series, these controls are linked
to listeners that update the chart. Each time one of the three drop-down menus is changed,
the chart first turns off all series being plotted, then turns on any series selected in the 
drop-down menus. 

That's done by this bit of code, <a href="http://jsfiddle.net/panubear/q8h39/">gleaned from panubear on jsfiddle</a>:

<pre>
$("#s1,#s2,#s3").change(function () {
    var c1 = $("#s1").find('option:selected').val();
    var c2 = $("#s2").find('option:selected').val();
    var c3 = $("#s3").find('option:selected').val();

    chart.hide(null, {
        withLegend: true
    });
    chart.show([c1,c2,c3], {
        withLegend: true
    });
});
</pre>


