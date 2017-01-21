$(document).ready(function () {

    // Convert key-value dictionaries (keys-to-arrays)
    // into something fit for C3.
    //
    // Turn this:
    //
    // {
    //      'label' : [0, 1, 2, 3, 4, 5, ...]
    // }
    //
    // To this:
    //
    // ['label', 0, 1, 2, 3, 4, 5, ... ]
    // 
    var key_value_json_to_c3bar_json = function(jsonData) {
        var c3data = [];
        for(var i in jsonData){
            var key = i;
            var vec = jsonData[i];

            // prepend label to list
            vec.unshift(key);
            c3data.push(vec);
        }
        return c3data;
    }
    
    
    // Fetch JSON
    //
    fetch('c3/visualization4.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(d) {

            // -------
            // Process the data
            //
            var processed_data = key_value_json_to_c3bar_json(d);
    
            // -------
            // Make a C3 chart
            //
            var chart = c3.generate({
                data: {
                    columns : processed_data,
                    hide: true,
                    type: 'bar'
                },
                bar: {
                    title: "Bar Chart: Countries",
                    width: {
                        ratio: 0.5 // this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                }
            });


            // -----
            // http://jsfiddle.net/panubear/q8h39/
            //
            // Set drop-down controls

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

    
        });//end load json


});
