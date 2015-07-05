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

You can currently only have one DaiilyStatsChart on the page at a time.


==========================
#### API  

````js
// isomorphic object
StatsCounter.incrementTodayCount();

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
