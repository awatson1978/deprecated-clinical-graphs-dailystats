if(Meteor.isClient){
  Meteor.subscribe('interactionsDaily');
}


DailyStats = new Meteor.Collection('interactionsDaily');
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


if(Meteor.isServer){
  Meteor.publish('interactionsDaily', function(){
    return DailyStats.find();
  });
}
