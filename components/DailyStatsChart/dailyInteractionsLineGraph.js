totalDataBucketConfig = {
  color: "#45b76f",
  key: "Total"
}
bucketAConfig = {
  color: "#E68A2E",
  key: "BucketA"
}
bucketBConfig = {
  color: "#80B2FF",
  key: "BucketB"
}
bucketCConfig = {
  color: "#DB4D4D",
  key: "BucketC"
}

Graphs = {
  renderDailyInteractionsDailyStats: function(){
    console.log('Graphs.renderDailyInteractionsDailyStats');


      // Begin rendering our graph by creating a query object
      // this is usually relevent for scoping the entire graph by date range
      // or by a particular group, organization, client, etc
      var queryObject = {};
      /*queryObject.dateIncrement = {
        $lt: parseInt(moment(Session.get('endDate')).format("YYYYMMDD")),
        $gt: parseInt(moment(Session.get('startDate')).format("YYYYMMDD"))
      };*/
      console.log('queryObject', queryObject);


      var dailyStatsConfig = Session.get('DailyStatsConfig');
      Object.keys(dailyStatsConfig).forEach(function(key){

        // we fetch our dataset, sort it, and make copies for each line we're going to draw
        dailyStatsConfig[key].values = DailyStats.find(queryObject, {sort: {dateIncrement: -1}}).fetch();

        /*dailyStatsConfig[key].values.map(function(doc, i){
          doc.yAxisValue = doc[key];
        });*/

        // now we want to normalize each data array to use the same field name
        // because the graph is simple that way
        /*key.bucket.map(function(doc, i){
          doc.yAxisValue = doc[key];
        });*/


      });
      Object.keys(dailyStatsConfig).forEach(function(key){
        dailyStatsConfig[key].values.map(function(doc, i){
          doc.yAxisValue = doc[key];
        });
      });
      console.log("dailyStatsConfig", dailyStatsConfig);

      /*var totalData = DailyStats.find(queryObject, {sort:{dateIncrement: -1}}).fetch();
      var totalsBucketA = DailyStats.find(queryObject ,{sort:{dateIncrement: -1}}).fetch();
      var totalsBucketB = DailyStats.find(queryObject ,{sort:{dateIncrement: -1}}).fetch();
      var totalsBucketC = DailyStats.find(queryObject ,{sort:{dateIncrement: -1}}).fetch();*/

      /*console.log('totalData', totalData);*/


      // now we want to normalize each data array to use the same field name
      // because the graph is simple that way
      /*totalData.map(function(doc, i){
        doc.yAxisValue = doc.daily_total;
      });
      totalsBucketA.map(function(doc, i){
        doc.yAxisValue = doc.bucketA;
      });
      totalsBucketB.map(function(doc, i){
        doc.yAxisValue = doc.bucketB;
      });
      totalsBucketC.map(function(doc, i){
        doc.yAxisValue = doc.bucketC;
      });*/

      // once normalized, we need to attach the data arrayas to our config objects
      /*totalDataBucketConfig.values = totalData;
      bucketAConfig.values = totalsBucketA;
      bucketBConfig.values = totalsBucketB;
      bucketCConfig.values = totalsBucketC;*/


      // and then bundle each of our config objects into an array
      /*var graphData = [
        totalDataBucketConfig,
        bucketAConfig,
        bucketBConfig,
        bucketCConfig
      ];*/

      var graphData = [];
      Object.keys(dailyStatsConfig).forEach(function(key){
        graphData[key] = dailyStatsConfig[key];
      });

      console.log("graphData", graphData);




      // now we want to define our graph
      var chart;
      nv.addGraph({
        generate: function(){
          console.log('generating dailyInteractionsDailyStats...');

          // we set some height & width values, apply margins, etc.
          var width = $('#dailyInteractionsDailyStats').width();
          $('#dailyInteractionsDailyStats').height($('#dailyInteractionsDailyStatsPanel').height() - 20);
          var height = $('#dailyInteractionsDailyStats').height();
          if(height > 380){
            height = 380;
          }
          width = width - 40;

          // this defines how we're going to draw the data
          chart = nv.models.lineChart()
            .x(function(d) { return moment(d.date); })
            .y(function(d) { return d.yAxisValue; })
            .forceY([0,100])
            .color(d3.scale.category20().range())
            //.useInteractiveGuideline(true)
            .clipVoronoi(false);

          // and how we'll draw our x and y axises
          chart.xAxis
            .tickFormat(function(d) {
              return d3.time.format('%x')(new Date(d));
            });
          chart.yAxis
            .tickFormat(d3.format(''));

          // and this is the  function that actually draws everything
          d3.select('#dailyInteractionsDailyStats svg')
            .attr('width', width)
            .attr('height', height)
            .datum(graphData)
            .call(chart);

          nv.utils.windowResize(chart.update);

          //chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

          return chart;
        },
        callback: function(graph){
          window.onresize = function () {
            var width = $('#dailyInteractionsDailyStats').width();
            var height =  $('#dailyInteractionsDailyStats').height();
            var margin = graph.margin();

            if (width < margin.left + margin.right + 20){
              width = margin.left + margin.right + 20;
            }else{
              width = width - 40;
            }

            if (height < margin.top + margin.bottom + 20){
              height = margin.top + margin.bottom + 20;
            }
            if(height > 380){
              height = 380;
            }

            graph.width(width).height(height);

            d3.select('#dailyInteractionsDailyStats svg')
              .attr('width', width)
              .attr('height', height)
              .call(graph);
          };
        }
      });
    //}
  }
}
