

if(Meteor.isClient){
  Meteor.subscribe('dailyStats');
  Session.setDefault('DailyStatsConfig', {
    totalDataBucketConfig: {
      color: "#45b76f",
      key: "Total"
    }
  });


}


DailyStats = new Meteor.Collection('dailyStats');
DailyStats.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});


// DailyStats.configure([
//   bucketA: {
//     color: #E68A2E
//     label: "Foo"
//   },
//   bucketB: {
//     color: #80B2FF
//     label: "Bar"
//   },
//   bucketC: {
//     color: #DB4D4D
//     label: "Squee"
//   }
// ])

  DailyStats.configure = function(configObject){
    if(Meteor.isClient){
      Session.set('DailyStatsConfig', configObject);
    }
    //console.log("DailStats.configObject", configObject);
  }

if(Meteor.isServer){
  Meteor.publish('dailyStats', function(){
    return DailyStats.find();
  });
}
