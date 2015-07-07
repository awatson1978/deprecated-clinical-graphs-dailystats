// Write your package code here!

Meteor.startup(function(){
  if(DailyStats.find().count() == 0){

    var data = [
      {
          "date" : moment().subtract('20', 'days').add('0', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('0', 'days').format("YYYYMMDD")),
          "daily_total" : 3,
          'bucketA': 1,
          'bucketB': 1,
          'bucketC': 1
      },
      {
          "date" : moment().subtract('20', 'days').add('1', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('1', 'days').format("YYYYMMDD")),
          "daily_total" : 4,
          'bucketA': 2,
          'bucketB': 3,
          'bucketC': 2
      },
      {
          "date" : moment().subtract('20', 'days').add('2', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('2', 'days').format("YYYYMMDD")),
          "daily_total" : 10,
          'bucketA': 7,
          'bucketB': 12,
          'bucketC': 9
      },
      {
          "date" : moment().subtract('20', 'days').add('3', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('3', 'days').format("YYYYMMDD")),
          "daily_total" : 8,
          'bucketA': 8,
          'bucketB': 10,
          'bucketC': 9
      },
      {
          "date" : moment().subtract('20', 'days').add('4', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('4', 'days').format("YYYYMMDD")),
          "daily_total" : 12,
          'bucketA': 10,
          'bucketB': 8,
          'bucketC': 14
      },
      {
          "date" : moment().subtract('20', 'days').add('5', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('5', 'days').format("YYYYMMDD")),
          "daily_total" : 15,
          'bucketA': 15,
          'bucketB': 16,
          'bucketC': 13
      },
      {
          "date" : moment().subtract('20', 'days').add('6', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('6', 'days').format("YYYYMMDD")),
          "daily_total" : 14,
          'bucketA': 16,
          'bucketB': 18,
          'bucketC': 15
      },
      {
          "date" : moment().subtract('20', 'days').add('7', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('7', 'days').format("YYYYMMDD")),
          "daily_total" : 15,
          'bucketA': 17,
          'bucketB': 19,
          'bucketC': 18
      },
      {
          "date" : moment().subtract('20', 'days').add('8', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('8', 'days').format("YYYYMMDD")),
          "daily_total" : 8,
          'bucketA': 21,
          'bucketB': 25,
          'bucketC': 19
      },
      {
          "date" : moment().subtract('20', 'days').add('9', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('9', 'days').format("YYYYMMDD")),
          "daily_total" : 13,
          'bucketA': 22,
          'bucketB': 21,
          'bucketC': 15

      },
      {
          "date" : moment().subtract('20', 'days').add('10', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('10', 'days').format("YYYYMMDD")),
          "daily_total" : 15,
          'bucketA': 23,
          'bucketB': 25,
          'bucketC': 11
      },
      {
          "date" : moment().subtract('20', 'days').add('11', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('11', 'days').format("YYYYMMDD")),
          "daily_total" : 16,
          'bucketA': 26,
          'bucketB': 19,
          'bucketC': 8
      },
      {
          "date" : moment().subtract('20', 'days').add('12', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('12', 'days').format("YYYYMMDD")),
          "daily_total" : 20,
          'bucketA': 24,
          'bucketB': 18,
          'bucketC': 9
      },
      {
          "date" : moment().subtract('20', 'days').add('13', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('13', 'days').format("YYYYMMDD")),
          "daily_total" : 40,
          'bucketA': 31,
          'bucketB': 25,
          'bucketC': 14
      },
      {
          "date" : moment().subtract('20', 'days').add('14', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('14', 'days').format("YYYYMMDD")),
          "daily_total" : 32,
          'bucketA': 33,
          'bucketB': 27,
          'bucketC': 18
      },
      {
          "date" : moment().subtract('20', 'days').add('15', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('15', 'days').format("YYYYMMDD")),
          "daily_total" : 34,
          'bucketA': 37,
          'bucketB': 30,
          'bucketC': 20
      },
      {
          "date" : moment().subtract('20', 'days').add('16', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('16', 'days').format("YYYYMMDD")),
          "daily_total" : 24,
          'bucketA': 42,
          'bucketB': 34,
          'bucketC': 21
      },
      {
          "date" : moment().subtract('20', 'days').add('17', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('17', 'days').format("YYYYMMDD")),
          "daily_total" : 23,
          'bucketA': 43,
          'bucketB': 36,
          'bucketC': 20
      },
      {
          "date" : moment().subtract('20', 'days').add('18', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('18', 'days').format("YYYYMMDD")),
          "daily_total" : 35,
          'bucketA': 48,
          'bucketB': 40,
          'bucketC': 19
      },
      {
          "date" : moment().subtract('20', 'days').add('19', 'days').format("MM-DD-YYYY"),
          "dateIncrement" : ParseInt(moment().subtract('20', 'days').add('19', 'days').format("YYYYMMDD")),
          "daily_total" : 52,
          'bucketA': 44,
          'bucketB': 42,
          'bucketC': 22
      }
    ];

    data.forEach(function(datum){
      DailyStats.insert(datum);
    });

  }
});
