exports.command = function() {
  this
    .verify.elementPresent("#dailyInteractionsDailyStatsPanel")
    .verify.elementPresent("#dailyInteractionsDailyStats")
    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas")

    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas .nvd3")
    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas .nvd3 g")
    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas .nvd3 g rect")
    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas .nvd3 g nv-x")
    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas .nvd3 g nv-y")
    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas .nvd3 g nv-linesWrap")
    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas .nvd3 g nv-legendWrap")
    .verify.elementPresent("#dailyInteractionsDailyStatsCanvas .nvd3 g nv-interactive")
  return this;
};
