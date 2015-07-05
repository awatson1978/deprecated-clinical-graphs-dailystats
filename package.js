Package.describe({
  name: 'clinical:graphs-dailystats',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/awatson1978/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('less');
  api.use('momentjs:moment');

  api.addFiles('components/dailystats/dailyInteractionsLineGraph.js', 'client');

  api.addFiles('lib/collections.js', ['server', 'client']);
  api.addFiles('lib/statsCounter.js', ['server', 'client']);

  api.addFiles('components/dailystats/dailyStats.html', 'client');
  api.addFiles('components/dailystats/dailyStats.js', 'client');
  api.addFiles('components/dailystats/dailyStats.less', 'client');

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
  api.addFiles('graphs-dailystats-tests.js');
});
