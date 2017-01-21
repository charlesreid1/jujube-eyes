$(document).ready(function () {

    ////////////////////////////////
    // Generate Random Data
    //
    function random(name) {
      var value = 0,
          values = [],
          i = 0,
          last;

      return context.metric(function(start, stop, step, callback) {

        // make digits
        start = +start, stop = +stop;

        // check s'ok
        if (isNaN(last)) last = start;

        // 
        while (last < stop) {
          last += step;
          value = Math.max(-10, Math.min(10, value + .8 * Math.random() - .4 + .2 * Math.cos(i += .2)));
          values.push(value);
        }
        callback(null, values = values.slice((start - stop) / step));
      }, name);
    }




    // -------------------------
    // Dynamic Chart:
    // Difference of 2 random series
    //

    var context = cubism.context()
        .serverDelay(0)
        .clientDelay(0)
        .step(1e3)
        .size(450);

    var foo = random("foo"),
        bar = random("bar");

    d3.select("#example1").call(function(div) {

      div.append("div")
          .attr("class", "axis")
          .call(context.axis().orient("top"));

      div.selectAll(".comparison")
            .data([[foo,bar]])
            .enter()
            .append("div")
            .attr("class", "comparison")
            .call(context.comparison().extent([-20,20]));
      /*
      div.selectAll(".horizon")
          .data([foo, bar, foo.add(bar), foo.subtract(bar)])
        .enter().append("div")
          .attr("class", "horizon")
          .call(context.horizon().extent([-20, 20]));
      */

      div.append("div")
          .attr("class", "rule")
          .call(context.rule());

      div.selectAll(".title").text(function( index ) {
            return "item number " + ( index + 1 );
      });
      //div.selectAll(".title").call(function(d){ console.log(d); });

      /*
      div.selectAll(".value")
          .call(function(d){
              //d += "|";
              console.log(d);
              return d;
          });
    */
    
    });







    ////////////////////////////
    // Static Chart:
    // Random Series
    //
    //
    //.serverDelay(new Date(2012, 4, 2) - Date.now())

    var context = cubism.context()
        .serverDelay(0)
        .clientDelay(0)
        .step(1e3)
        .size(450)
        .stop();

    var wam = random("wam");
    var fram = random("fram");

    d3.select("#example2").call(function(div) {

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
          .call(context.horizon().extent([-20, 20]));

      div.append("div")
          .attr("class", "rule")
          .call(context.rule());

    
    });


});

