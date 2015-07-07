## clinical:graphs-dailystats


DailyStats linechart for Meteor ClinicalFramework using D3 and NVD3.  

![DailyStats Screenshot](https://raw.githubusercontent.com/awatson1978/clinical-graphs-dailystats/master/screenshot.png)

==========================
####Package Installation  

````bash
meteor add clinical:graphs-dailystats
````

Then add the graph to your application with the following.  

````html
{{> DailyStatsChart }}
````  

Note that you can currently only have one DaiilyStatsChart on the page at a time.  After adding the DailyStatsChart to your document object model, you'll need to subscribe to the collection and render the graph.  The best pattern we've found so far is within the router, like so:

````js
Router.map(function(){
  this.route('dashboardPageRoute', {
    path: '/',
    template: 'dashboardPage',
    waitOn: function(){
      Meteor.subscribe ('interactionsDaily');
    },
    onAfterAction: function() {
      Graphs.renderDailyInteractionsDailyStats();
    }
  });
});
````

If you want multiple lines in your graph, you'll need to set up a configuration object.

````js
Meteor.startup(function(){  
  DailyStats.configure({
     bucketA: {
       color: "#E68A2E",
       label: "Foo"
     },
     bucketB: {
       color: "#80B2FF",
       label: "Bar"
     },
     bucketC: {
       color: "#DB4D4D",
       label: "Squee"
     }
  });
});
````


==========================
#### API  

````js
// isomorphic object
StatsCounter.incrementTodayCount();
StatsCounter.incrementCount("bucketA");

// remote procedure call
Meteor.call('incrementTodayCount');
````  


==========================
#### Testing API  

Be sure to run ``starrynight generate-autoconfig`` to add the component tests to your ``.meteor/nightwatch.js`` config file.

````js
// component output
.reviewDailyStatsChart()

// component input
.clickDailyStatsChart()
````  

==========================
####Contributions & Licensing  

Made possible by the support of the Open Health Imaging Foundation and the Open Genomics Core.  

MIT licensed.  Use as you will.
