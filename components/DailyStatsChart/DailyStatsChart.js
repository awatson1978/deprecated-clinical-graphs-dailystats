

Template.DailyStatsChart.events({

});


Template.DailyStatsChart.helpers({
  getMostRecentDate:function(){
    var record = DailyStats.find({},{sort:{dateIncrement: -1}}).fetch()[0];

    if(record){
      var date = moment(record.date);
      return date.add('days',1).format('MM-DD-YYYY');
    }else{
      return "";
    }
  },
  dailyStatsResized: function() {
    //console.log("dailyStatsResized", this.data.id);

    Graphs.renderDailyInteractionsDailyStats();
    return Session.get('resize');
  },
  destroyed: function() {
    //console.log("destroyed", this.data.id);
    this.handle && this.handle.stop();
    $('#dailyInteractionsDailyStats').html('<svg id="dailyInteractionsDailyStatsCanvas"></svg>');
  }
});
