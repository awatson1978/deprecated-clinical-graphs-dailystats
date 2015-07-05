## clinical:graphs-dailystats


DailyStats linechart for Meteor ClinicalFramework using D3 and NVD3.  

![DailyStats Screenshot](https://raw.githubusercontent.com/awatson1978/clinical-graphs-dailystats/master/screenshot.png)

==========================
####Package Installation  

````bash
meteor add clinical:graphs-dailystats
````

==========================
#### API  

**HTML**  
````html
{{> DailyStatsChart id='dailyInteractionsDailyStatsPanel'}}
````  
**JS**  
````js
// isomorphic object
StatsCounter.incrementTodayCount();

// remote procedure call
Meteor.call('incrementTodayCount');
````  



==========================
####Contributions & Licensing  

Made possible by the support of the Open Health Imaging Foundation and the Open Genomics Core.  

MIT licensed.  Use as you will.
