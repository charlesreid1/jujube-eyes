$(document).ready(function () {

    var firstIndex = 4;

    var codes_ = [];

    ////////////////////////////////////////////
    //
    // Make a button for each ICD 10 code
    //
    var make_buttons = function(allCodes, jsonData, barChart, filter_data) { 

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
        //
        for( var j = 0; j < allCodes.length; j++ ) {
            var thisCode = allCodes[j];

            var classList = "btn btn-code btn-large btn-primary btn-controllers"; 
            if(j==firstIndex) { 
                classList = classList + " active";
                console.log("Adding "+thisCode+" to plot.");
                codes_.push(thisCode);
            }

            var codegrp = $("<a />", {
                            "class" : classList, 
                            "id" : "btn_"+thisCode,
                            "code" : thisCode,
                        })
                        .html( thisCode )
                        .on("click", function(d) {
                            onBtnClick(d, jsonData, barChart, filter_data);
                        })
                        .appendTo(btn_grp);

            if((j+1)%6==0) {
                var brk = $("<br />").appendTo(btn_grp);
            }
        }
        
        el.append(btn_grp);

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
    var filter_data = function(jsonData, barChart) {
        /*
         * This uses codes_, a global list of codes to plot,
         * to know what to plot. No "codes" parameter required.
         * Stupid and reckless, I know.
         */

        // here, jsonData is the whole enchilada
        //
        //console.log('in filter_data with this code and chart data:');
        //console.log(code);

        //console.log("from filter_data:");
        //console.log(codes_);

        var indexes = [];
        for(var c in codes_){
            var thecode = codes_[c];
            var thisIndex = -1;
            for(var j in jsonData) { 
                //console.log("thecode: "+thecode);
                //console.log("jsonData[j][code]: "+jsonData[j]['code']);
                if( thecode == jsonData[j]['code'] ){
                    thisIndex = j;
                }
            }
            if(thisIndex < 0) {
                console.log("Could not find code " + thecode + " in json data!");
            } else {
                indexes.push(thisIndex);
            }
        }
        // codes_ = icd 10 codes on the plot
        // indexes = json data index


        myBarData = [];
        myDescription = "";
        for( var i in indexes ) {

            var codeData = jsonData[thisIndex];

            if(i>1) {
                myDescription += ", ";
            }
            myDescription += codeData['description'];

            var barData = codeData['modbars'];
            myBarData.push(barData);

        }

        console.log('formatting bar data');
        console.log(codes_);
        console.log(myBarData);
        var barDataFmt = multiple_key_value_json_to_c3bar_json(codes_,myBarData);

        barChart.load({
                        columns : barDataFmt
                    });

    }



    ////////////////////////////////////////////
    //
    // When an ICD 10 code button is clicked:
    // - get the ICD 10 code
    // - then call the filter_data callback 
    //
    var onBtnClick = function (d, jsonData, barChart, filter_data) { 

        //console.log("from onBtnClick:");
        //console.log(d);

        // this tag's 
        // ICD 10 code value
        //
        var code = d.target.attributes.code.value;

        // this tag's
        // list of classes:
        // d.target.classList
        // 
        var classList = d.target.classList;

        //console.log(classList);
        //console.log(classList.contains("active"));

        console.log('Checking button state');

        // Button state: active/inactive
        if( classList.contains("active") ) {

            console.log("Button a#btn_"+code+" is active");
            // if this button is active,
            // make this button inactive
            // 
            //console.log("Making code "+code+" inactive");
            d3.selectAll("a#btn_"+code).classed('active',false);
            codes_.push(code);

        } else {

            console.log("Button a#btn_"+code+" is inactive");
            // if this button is inactive,
            // make this button active
            //
            //console.log("Making code "+code+" active");
            d3.selectAll("a#btn_"+code).classed('active',true);
            var ix = codes_.indexOf(code);
            if(index>-1) { 
                codes_.splice(ix,1);
            }

        }

        // now that we have the code, 
        // filter the data 
        // pass it off to a chart builder
        filter_data(jsonData, barChart);

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
    

    var multiple_key_value_json_to_c3bar_json = function(whichCodes,myBarData) {
        /*
         * Data passed in as a list of key-value dictionaries
         * [
         *   { Lab1 : 15,
         *     Lab2 : 23,
         *     Lab3 : 45 },
         *   { Lab1 : 72,
         *     Lab2 : 49,
         *     Lab3 : 87 },
         *  ...
         *  ]
         *
         * This set of dictionaries is converted 
         * to this format for C3: 
         *
         * [
         *      [ 'Lab1', 15, 72, ... ],
         *      [ 'Lab2', 23, 49, ... ],
         *      [ 'Lab3', 45, 87, ... ],
         */
        
        /* Note: this requires all bar labels 
         * to be the same across the data sets.
         *
         * If so, column names extracted from myBarData[0] 
         * are same as those extracted from myBarData[4]
         */
        barLabels = [];
        var keys = Object.keys(myBarData[0]);
        for(var c in keys) { 
            barLabels.push( keys[c] );
        }

        // Now we assemble the column for each bar label,
        // by extracting the appropriate value from each Object.
        //
        // myBarData is an array of Objects (dictionaries)
        //
        //console.log('Extracting bar columns...');
        //console.log(myBarData);

        // barLabels contains labels for each category (second, 
        // nested dimension of the of data)
        //
        // whichCodes contains codes to include on the plot.
        // extract this data.
        
        console.log('extracting whichCodes');
        for(var c in whichCodes) {
            var theCode = whichCodes[c];
            console.log(theCode);

            for( var b in myBarData ) {
                var theBarData = myBarData[b];
                console.log(theBarData);
            }
        }

        /*
        var barColumns = [];
        for(var j in barLabels) {

            var thisColumn = [];

            var thisLabel = barLabels[j];

            // first item in column vector is name of column 
            thisColumn.push(thisLabel);


            //console.log('   Extracting columns for '+thisLabel);


            for( var k in myBarData ) { 
                var whichData = myBarData[k];
                thisColumn.push(whichData[thisLabel]);
            }

            //console.log(thisColumn);

            barColumns.push(thisColumn);
        }
        console.log(barColumns);
        */

        return ;

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
    fetch('chartdata_all.json')

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



            var firstData = chartData[firstIndex];
            var firstCode = firstData['code'];
            var firstDescr = firstData['description'];



            ////////////////////////
            //
            // Initial Bar Chart Object
            //
            var barChart = c3.generate({
                bindto: '#barchart',
                data: {
                    columns: [],
                    type: 'bar'
                },
                bar: {
                    title: firstDescr,
                    width: {
                        ratio: 0.5 // this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                }
            });
            barChart.show(null, {
                withLegend: true
            });




            // ~~~~~~~~~~~~~~~~~~~~~~~


            // Make button controls
            // that control the charts.
            //
            make_buttons(allCodes, chartData, barChart, filter_data);



            // Filter data and make bar charts
            // for the first code.
            //
            filter_data(chartData, barChart);



        });//end load json


});

