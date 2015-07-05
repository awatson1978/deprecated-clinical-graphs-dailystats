// Write your package code here!

Meteor.startup(function(){
  if(DailyStats.find().count() == 0){

    var data = [
      {
          "date" : moment().subtract('20', 'days').add('0', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('0', 'days').format("YYYYDDYY"),
          "daily_total" : 3
      },
      {
          "date" : moment().subtract('20', 'days').add('1', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('1', 'days').format("YYYYDDYY"),
          "daily_total" : 4
      },
      {
          "date" : moment().subtract('20', 'days').add('2', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('2', 'days').format("YYYYDDYY"),
          "daily_total" : 10
      },
      {
          "date" : moment().subtract('20', 'days').add('3', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('3', 'days').format("YYYYDDYY"),
          "daily_total" : 8
      },
      {
          "date" : moment().subtract('20', 'days').add('4', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('4', 'days').format("YYYYDDYY"),
          "daily_total" : 12
      },
      {
          "date" : moment().subtract('20', 'days').add('5', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('5', 'days').format("YYYYDDYY"),
          "daily_total" : 15
      },
      {
          "date" : moment().subtract('20', 'days').add('6', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('6', 'days').format("YYYYDDYY"),
          "daily_total" : 14
      },
      {
          "date" : moment().subtract('20', 'days').add('7', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('7', 'days').format("YYYYDDYY"),
          "daily_total" : 15
      },
      {
          "date" : moment().subtract('20', 'days').add('8', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('8', 'days').format("YYYYDDYY"),
          "daily_total" : 8
      },
      {
          "date" : moment().subtract('20', 'days').add('9', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('9', 'days').format("YYYYDDYY"),
          "daily_total" : 13
      },
      {
          "date" : moment().subtract('20', 'days').add('10', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('10', 'days').format("YYYYDDYY"),
          "daily_total" : 15
      },
      {
          "date" : moment().subtract('20', 'days').add('11', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('11', 'days').format("YYYYDDYY"),
          "daily_total" : 16
      },
      {
          "date" : moment().subtract('20', 'days').add('12', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('12', 'days').format("YYYYDDYY"),
          "daily_total" : 20
      },
      {
          "date" : moment().subtract('20', 'days').add('13', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('13', 'days').format("YYYYDDYY"),
          "daily_total" : 40
      },
      {
          "date" : moment().subtract('20', 'days').add('14', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('14', 'days').format("YYYYDDYY"),
          "daily_total" : 32
      },
      {
          "date" : moment().subtract('20', 'days').add('15', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('15', 'days').format("YYYYDDYY"),
          "daily_total" : 34
      },
      {
          "date" : moment().subtract('20', 'days').add('16', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('16', 'days').format("YYYYDDYY"),
          "daily_total" : 24
      },
      {
          "date" : moment().subtract('20', 'days').add('17', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('17', 'days').format("YYYYDDYY"),
          "daily_total" : 23
      },
      {
          "date" : moment().subtract('20', 'days').add('18', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('18', 'days').format("YYYYDDYY"),
          "daily_total" : 35
      },
      {
          "date" : moment().subtract('20', 'days').add('19', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : moment().subtract('20', 'days').add('19', 'days').format("YYYYDDYY"),
          "daily_total" : 52
      }
    ];

    data.forEach(function(datum){
      DailyStats.insert(datum);
    });

  }
});
