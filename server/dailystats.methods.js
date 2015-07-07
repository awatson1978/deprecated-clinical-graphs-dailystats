Meteor.methods({
  incrementTodayCount:function(){
    StatsCounter.incrementTodayCount();
  },
  incrementCount:function(bucketName){
    StatsCounter.incrementCount(bucketName);
  }
});
