$(document).ready(function () {

    var sillyString = [];

    // Make a button for each ICD 10 code
    //
    var make_buttons = function(allCodes) { 
        console.log('allCodes:');
        console.log(allCodes);

        var mydiv = "div#buttons";
        var el = $(mydiv);
        var div = $("<div />");

        var btn_grp = $("<div />", {
                "id" : "codebtns",
                "class" : "btn-group"
            });

        for( var j = 0; j < allCodes.length; j++ ) {
            var this_code = allCodes[j];
            var code = $("<a />", {
                            "class" : "btn btn-code btn-large btn-primary btn-controllers",
                            "id" : "btn_"+this_code,
                            "code" : this_code,
                        })
                        .html( this_code )
                        .on("click", onBtnClick)
                        .appendTo(btn_grp);
            if((j+1)%6==0) {
                var brk = $("<br />").appendTo(btn_grp);
            }
        }
        
        el.append(btn_grp);

        console.log('sillyString:');
        console.log(sillyString);

    }


    // When a button is clicked:
    // - get the ICD 10 code,
    // - then update the description
    // - then update the bar 
    var onBtnClick = function (d) { 
            var code = d.target.attributes.code;
            console.log('code:');
            console.log(code);

            // now that we have the code, 
            // get the data and pass it off to a chart builder

    }




    // Utility function: data transform
    //
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

            // deal with scalar vec
            if(!vec.length){
                vec = [vec];
            }

            // prepend label to list
            vec.unshift(key);
            c3data.push(vec);
        }
        return c3data;
    }
    
    
    // Fetch JSON
    //
    fetch('chartdata_all.json')

        .then(function(response) {
            return response.json();
        })
        .then(function(chartData) {

            // d is an array of objects
            // each object is a dictionary 
            // keys are code, description, donut, modbars

            var all_codes = [];
            for(var codeix in chartData) {
                this_data = chartData[codeix];
                all_codes.push(this_data['code']);
            }

            // make button controls
            // that control the charts
            sillyString.push('a');
            sillyString.push('b');
            sillyString.push('c');
            make_buttons(all_codes);


            var first_data = chartData[4];
            var first_code = first_data['code'];
            var bar_data = first_data['modbars'];

            bar_data_fmt = key_value_json_to_c3bar_json(bar_data);

            var barchart = c3.generate({
                bindto: '#barchart',
                data: {
                    columns : bar_data_fmt,
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
            barchart.show(null, {
                withLegend: true
            });




            /*
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

            */

        });//end load json


});

