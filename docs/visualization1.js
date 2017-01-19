$(document).ready(function () {
    $("#s1,#s2,#s3").change(function () {
        console.log('ohai');
        var c1 = $("#s1").find('option:selected').val();
        var c2 = $("#s2").find('option:selected').val();
        var c3 = $("#s3").find('option:selected').val();
        chart.hide(null, {
            withLegend: true
        });
        chart.show([c1, c2, c3], {
            withLegend: true
        });
    });
});

var chart = c3.generate({
    data: {
        columns: [
            ['Country 1', 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.27],
            ['Country 2', 7.45, 7.31, 8.69, 8.74, 5.7, -6.15, 4.4, 4.67, 3.8, 2.02, 3.04],
            ['Country 3', 3.82, 3.06, 2.56, 4.43, 2.2, 1.23, 2.53, 2.4, 3.53, 2.62, 2.58],
            ['Country 4', 7.58, 8.57, 8.24, 7.54, 4.69, 3.68, 7.62, 6.55, 3.64, 4.02, 4.63],
            ['Country 5', 6.48, 5.78, 6.1, 6.51, 4.27, 1.15, 8.04, 4.57, 5.51, 4.99, 5.1]
        ],
        hide: true
    },
    legend: {
        show: false
    }
});

/*
fetch('http://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(users) {
    var data = {
      labels: users.map(function(user) {
        return user.name;
      }),
      series: users.map(function(user) {
        return user.name.length;
      })
    };
  
    var chart = new Chartist.Bar('#chart', data, {
      distributeSeries: true
    });
  });
*/
