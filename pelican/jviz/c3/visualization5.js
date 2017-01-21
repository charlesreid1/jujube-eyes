$(document).ready(function () {


    ////////////////////////////////////////////
    //
    // Make a button for each ICD 10 code
    //
    var make_buttons = function(allCodes, chartData, filter_data) { 

        var mydiv = "div#buttons";
        var el = $(mydiv);
        var div = $("<div />");

        var btn_grp = $("<div />", {
                "id" : "codebtns",
                "class" : "btn-group"
            });


        // Loop over all ICD 10 codes.
        // Make a button for each one.
        // Make button number 1 active.
        for( var j = 0; j < allCodes.length; j++ ) {
            var thisCode = allCodes[j];
            var codegrp = $("<a />", {
                            "class" : "btn btn-code btn-large btn-primary btn-controllers",
                            "id" : "btn_"+thisCode,
                            "code" : thisCode,
                        })
                        .html( thisCode )
                        .on("click", function(d) {
                            onBtnClick(d, chartData, filter_data);
                        })
                        .appendTo(btn_grp);

            if(j==0) { 
                console.log("Unselecting buttons.");
                d3.selectAll("a.btn-code").classed('active',false);
                console.log("Selecting default button.");
                console.log(thisCode)
                d3.selectAll("a#btn_"+thisCode).classed('active',true);
            }

            if((j+1)%6==0) {
                var brk = $("<br />").appendTo(btn_grp);
            }
        }
        
        el.append(btn_grp);

    }


    ////////////////////////////////////////////
    //
    // When an ICD 10 code button is clicked:
    // - get the ICD 10 code
    // - then call the filter_data callback 
    //
    var onBtnClick = function (d, jsonData, filter_data) { 

        var code = d.target.attributes.code.value;
        d3.selectAll("a.btn-code").classed('active',false);
        d3.selectAll("a#btn_"+code).classed('active',true);

        console.log('about to call filter_data with this code:');
        console.log(code);

        filter_data(code, jsonData);

        // now that we have the code, 
        // filter the data 
        // pass it off to a chart builder

    }


    ////////////////////////////////////////////
    //
    // This is it - 
    // Filter the data based on an ICD 10 code,
    // and chart the results.
    //
    // This function is called on button clicks,
    // and once when the page is loaded.
    //
    var filter_data = function(code,jsonData) {
        // here, jsonData is the whole enchilada
        console.log('in filter_data with this code and chart data:');
        console.log(code);
        var thisIndex = -1;
        for( var j in jsonData) { 
            if( code == jsonData[j]['code'] ) {
                thisIndex = j;
            }
        }
        if(thisIndex < 0) { 
            console.log("Could not find code "+code+" in JSON data!");
        } else {

            //////////////////////////////////
            // Draw the dang charts already

            var codeData = jsonData[thisIndex];
            var barData = codeData['modbars'];

            barDataFmt = key_value_json_to_c3bar_json(barData);

            ////////////////////////
            //
            var barchart = c3.generate({
                bindto: '#barchart',
                data: {
                    columns : barDataFmt,
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

        }
    }


    ////////////////////////////////////////////
    //
    // Utility function: data transform
    //
    // Convert key-value dictionaries (keys-to-arrays)
    // into something fit for C3.
    //
    // Turn this:
    //
    // {
    //      'label1' : [0, 1, 2, 3, 4, 5, ...],
    //      'label2' : [0, 1, 2, 3, 4, 5, ...]
    // }
    //
    // To this:
    //
    // [
    //   ['label1', 0, 1, 2, 3, 4, 5, ... ],
    //   ['label2', 0, 1, 2, 3, 4, 5, ... ]
    // ]
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
    
    
    ////////////////////////////////////////////
    //
    // Fetch JSON
    //
    // This is a bit of a mazurka.
    //
    // We fetch the JSON - which is an asynchronous task,
    // so we need to be aware of timing and order.
    //
    // We parse the JSON data, and extract a list of codes.
    // We pass the list of codes, the JSON data, and a function handle.
    // The function handle will filter data and chart it.
    // Then we use the first code, and filter data and chart it.
    //
    fetch('/chartdata_all.json')

        .then(function(response) {
            return response.json();
        })
        .then(function(chartData) {

            // chartData is an array of objects.
            // Each object is a dictionary.
            // Keys are code, description, donut, modbars.
            var allCodes = [];
            for(var codeix in chartData) {
                thisData = chartData[codeix];
                allCodes.push(thisData['code']);
            }


            // Filter data and make bar charts
            // for the first code.
            //
            var firstData = chartData[0];
            var firstCode = firstData['code'];
            filter_data(firstCode, chartData);




            // Make button controls
            // that control the charts.
            //
            make_buttons(allCodes, chartData, filter_data);



        });//end load json


});

