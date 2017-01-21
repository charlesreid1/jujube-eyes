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
    var key_value_json_to_c3_json = function(jsonData) {
        var c3data = [];
        for(var i in jsonData){
            var key = i;
            var val = jsonData[i];
            
            // prepend label to list
            val.unshift(key);
            c3data.push(val);
        }
        return c3data;
    }
    
    
    // Fetch JSON
    //
    fetch('c3/visualization2.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(d) {

            // -------
            // Process the data
            //
            var processed_data = key_value_json_to_c3_json(d);
    

            // -------
            // Make a C3 chart
            //
            var chart = c3.generate({
                data: {
                    columns : processed_data,
                    hide : true
                },
                legend: {
                    show: false
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
                console.log(c1);
                console.log(c2);
                console.log(c3);
                console.log('------');
                chart.hide(null, {
                    withLegend: true
                });
                chart.show([c1, c2, c3], {
                    withLegend: true
                });
            });


    
        });//end load json


});
