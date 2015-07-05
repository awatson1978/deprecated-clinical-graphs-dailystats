/*Meteor.startup(function(){
  console.log('starting statistics writer....');

  var queryObject = { _id: { $gt: objectIdWithTimestamp(moment().format('YYYY/MM/DD'))}};
  console.log(queryObject);

  var dataCursor = DailyStats.find(queryObject,{limit:20, sort: {$natural: -1}});

  var initFinished = false;
  var handle = dataCursor.observeChanges({
    added: function (id, record) {
      if(initFinished){
        console.log("Received an interaction! " + id);
        console.log(record);


          // it's a valid record; solets add it to our stats
          // Campaigns.update({_id: record.campaign_id}, {$inc:{
          //   'statistics.total_interactions': 1
          // }});

          //updateHourlyInteractions(id, record.campaign_id);
          //updateEngagementData(record.campaign_id, record);
          updateDailyInteractions(id, record);
      }
    },
    removed: function () {
      console.log("Lost one.");
    }
  });
  initFinished = true;

});

updateDailyInteractions = function(id, record){


  // we have a new record; first thing to do is discard it if its a monitoring interaction
  if(!/monitis/.test(record.user_agent)){

    // now lets set some default values for each browser type
    var safariCount = 0;
    var chromeCount = 0;
    var androidCount = 0;
    var firefoxCount = 0;
    var msieCount = 0;
    var blackberryCount = 0;
    var otherCount = 0;

    // and parse the user agent string, and figure out which browser to increment
    if(/Safari/.test(record.user_agent)){
      safariCount = 1;
    }else if(/Chrome/.test(record.user_agent)){
      chromeCount = 1;
    }else if(/Android/.test(record.user_agent)){
      androidCount = 1;
    }else if(/Firefox/.test(record.user_agent)){
      firefoxCount = 1;
    }else if(/MSIE/.test(record.user_agent)){
      msieCount = 1;
    }else if(/BlackBerry/.test(record.user_agent)){
      blackberryCount = 1;
    }else{
      otherCount = 1;
    }

    // next, we get the timestamp from the record _id
    var date = new Date(parseInt(id._str.slice(0,8), 16) *1000);

    // and see if we've already created a daily total for that date in this campaign
    var dateRecord = InteractionsDaily.findOne({
      //date: (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear(),
      dateIncrement: date.getFullYear() + (date.getMonth() + 1) + date.getDate(),
      campaign_id: record.campaign_id._str
    });


    if(dateRecord){
      // if there's a date record, we update it with the stats
      InteractionsDaily.update({_id: dateRecord._id},{$inc:{
        daily_total: 1,
        safari_total: safariCount,
        chrome_total: chromeCount,
        blackberry_total: blackberryCount,
        msie_total: msieCount,
        firefox_total: firefoxCount,
        android_total: androidCount,
        other_total: otherCount
      }});
    }else{
      // otherwise, we need to create a new record
      InteractionsDaily.insert({
        // and assign it some date info that we can later lookup and sort against
        date: (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear(),
        dateIncrement: date.getFullYear() + (date.getMonth() + 1) + date.getDate(),
        campaign_id: record.campaign_id._str,

        // and then assign some default stats
        daily_total: 1,
        safari_total: safariCount,
        chrome_total: chromeCount,
        blackberry_total: blackberryCount,
        msie_total: msieCount,
        firefox_total: firefoxCount,
        android_total: androidCount,
        other_total: otherCount
      });
    }

  }
}*/
