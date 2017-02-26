$(document).ready(function () {










    ////////////////////////////////
    // Generate Death-Age Data
    //


    function deathage_data(name) {

      return context.metric(function(start, stop, step, callback) {
        console.log(start);
        console.log(stop);

        var values = [];
        var last;

        // make milliseconds (+ means convert to numbers/digits)
        start = +start;
        stop = +stop;

        // check s'ok
        if (isNaN(last)) last = start;

        while (last < stop) {
          last += step;
          values.push(  Math.random()*80  );
        }



        var mean = 0.0;
        for(var i in values) {
            mean += values[i];
        }
        mean /= values.length;
        for(var i in values) {
            values[i] -= mean; 
        }



        callback(null, values);
      }, name);
    }





    ////////////////////////////
    // Static Chart:
    // Random Series
    //
    //
    //.serverDelay(new Date(2012, 4, 2) - Date.now())

    var context = cubism.context()
        .serverDelay(0)
        .clientDelay(0)
        .step(20)
        .size(450)
        .stop();

    var wam = deathage_data("wam");
    var fram = deathage_data("fram");

    d3.select("#example1").call(function(div) {

      div.append("div")
          .attr("class", "axis")
          .call(context.axis().orient("top"));


      /*
      // old 
      div.selectAll(".comparison")
            .data([[foo,bar]])
            .enter()
            .append("div")
            .attr("class", "comparison")
            .call(context.comparison().extent([-20,20]));
      */

      div.selectAll(".horizon")
          .data([wam, fram])
        .enter().append("div")
          .attr("class", "horizon")
          .call(context.horizon());
          //.call(context.horizon().extent([-20, 20]));

      div.append("div")
          .attr("class", "rule")
          .call(context.rule());

    
    });


});
