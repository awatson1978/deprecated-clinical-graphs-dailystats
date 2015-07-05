Meteor.methods({
  incrementTodayCount:function(){
    StatsCounter.incrementTodayCount();
  }
});
