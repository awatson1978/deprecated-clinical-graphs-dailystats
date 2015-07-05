## clinical:graphs-dailystats


DailyStats linechart for Meteor ClinicalFramework using D3 and NVD3.  

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
# isomorphic object
StatsCounter.incrementTodayCount();

# remote procedure call
Meteor.call('incrementTodayCount');
````  

==========================
####Licensing  

MIT.  Use as you will.
