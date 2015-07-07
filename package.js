Package.describe({
  name: 'clinical:graphs-dailystats',
  version: '1.3.2',
  // Brief, one-line summary of the package.
  summary: 'DailyStats linechart for Meteor ClinicalFramework ',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/awatson1978/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('session');
  api.use('less');
  api.use('d3js:d3@3.5.5');
  api.use('nvd3:nvd3@1.7.1');
  api.use('momentjs:moment@2.10.3');

  api.addFiles('lib/collections.js', ['server', 'client']);
  api.addFiles('lib/statsCounter.js', ['server', 'client']);

  api.addFiles('components/DailyStatsChart/dailyInteractionsLineGraph.js', 'client');

  api.addFiles('components/DailyStatsChart/DailyStatsChart.html', 'client');
  api.addFiles('components/DailyStatsChart/DailyStatsChart.js', 'client');
  api.addFiles('components/DailyStatsChart/DailyStatsChart.less', 'client');

  api.addFiles('server/dailystats.initialize.js', 'server');
  api.addFiles('server/dailystats.observer.js', 'server');
  api.addFiles('server/dailystats.methods.js', 'server');

  api.export('DailyStatsChart');
  api.export('DailyStats');
  api.export('Graphs');
  api.export('StatsCounter');
  //api.export('Graphs.renderDailyInteractionsDailyStats');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:graphs-dailystats');
  api.addFiles('tests/verification/dailystats.js');
});
