var client = new Keen({
  projectId: '5368fa5436bf5a5623000000',
  readKey: '3f324dcb5636316d6865ab0ebbbbc725224c7f8f3e8899c7733439965d6d4a2c7f13bf7765458790bd50ec76b4361687f51cf626314585dc246bb51aeb455c0a1dd6ce77a993d9c953c5fc554d1d3530ca5d17bdc6d1333ef3d8146a990c79435bb2c7d936f259a22647a75407921056'
});

Keen.ready(function(){

  // Pageviews by browser
var mo = {"result": [{"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-04T00:00:00.000Z", "end": "2014-04-05T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-05T00:00:00.000Z", "end": "2014-04-06T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-06T00:00:00.000Z", "end": "2014-04-07T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-07T00:00:00.000Z", "end": "2014-04-08T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-08T00:00:00.000Z", "end": "2014-04-09T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-09T00:00:00.000Z", "end": "2014-04-10T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-10T00:00:00.000Z", "end": "2014-04-11T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-11T00:00:00.000Z", "end": "2014-04-12T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-12T00:00:00.000Z", "end": "2014-04-13T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-13T00:00:00.000Z", "end": "2014-04-14T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-14T00:00:00.000Z", "end": "2014-04-15T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-15T00:00:00.000Z", "end": "2014-04-16T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-16T00:00:00.000Z", "end": "2014-04-17T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-17T00:00:00.000Z", "end": "2014-04-18T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-18T00:00:00.000Z", "end": "2014-04-19T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-19T00:00:00.000Z", "end": "2014-04-20T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-20T00:00:00.000Z", "end": "2014-04-21T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-21T00:00:00.000Z", "end": "2014-04-22T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-22T00:00:00.000Z", "end": "2014-04-23T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-23T00:00:00.000Z", "end": "2014-04-24T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-24T00:00:00.000Z", "end": "2014-04-25T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-25T00:00:00.000Z", "end": "2014-04-26T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-26T00:00:00.000Z", "end": "2014-04-27T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-27T00:00:00.000Z", "end": "2014-04-28T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-28T00:00:00.000Z", "end": "2014-04-29T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 0}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 0}], "timeframe": {"start": "2014-04-29T00:00:00.000Z", "end": "2014-04-30T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 412}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 377}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 164}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 156}], "timeframe": {"start": "2014-04-30T00:00:00.000Z", "end": "2014-05-01T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 567}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 539}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 233}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 184}], "timeframe": {"start": "2014-05-01T00:00:00.000Z", "end": "2014-05-02T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 573}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 542}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 220}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 221}], "timeframe": {"start": "2014-05-02T00:00:00.000Z", "end": "2014-05-03T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 543}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 466}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 299}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 244}], "timeframe": {"start": "2014-05-03T00:00:00.000Z", "end": "2014-05-04T00:00:00.000Z"}}, {"value": [{"user.device_info.browser.family": "Pelanggan Tipe-1", "result": 574}, {"user.device_info.browser.family": "Pelanggan Tipe-2", "result": 448}, {"user.device_info.browser.family": "Pelanggan Tipe-3", "result": 289}, {"user.device_info.browser.family": "Pelanggan Tipe-4", "result": 213}], "timeframe": {"start": "2014-05-04T00:00:00.000Z", "end": "2014-05-05T00:00:00.000Z"}}]};

  var pageviews_timeline = new Keen.Dataviz()
    .el('#chart-01')
    .type('area')
    .height(280)
    .stacked(true)
    .title('Water usage by customer type')
    .prepare();

  client
    .query('count', {
      event_collection: 'pageviews',
      interval: 'daily',
      group_by: 'user.device_info.browser.family',
      timeframe: {
        start: '2014-04-04T00:00:00.000Z',
        end: '2014-05-05T00:00:00.000Z'
      }
    })
    .then(function(res) {
      pageviews_timeline
        .data(mo)
        .sortGroups('desc')
        .render();
         window.open("data:application/json;charset=UTF-8,"+res);
    })
    .catch(function(err) {
      pageviews_timeline.message(err.message)
    });


  // Pageviews by browser (pie)

  var pageviews_pie = new Keen.Dataviz()
    .el('#chart-02')
    .type('pie')
    .height(280)
    .title('Pageviews by browser')
    .prepare();

  client
    .query('count', {
      event_collection: 'pageviews',
      group_by: 'user.device_info.browser.family',
      timeframe: {
        start: '2014-05-01T00:00:00.000Z',
        end: '2014-05-05T00:00:00.000Z'
      }
    })
    .then(function(res) {
      pageviews_pie
        .data(res)
        .sortGroups('desc')
        .render();
    })
    .catch(function(err) {
      pageviews_pie.message(err.message)
    });


  // Impressions timeline

  var impressions_timeline = new Keen.Dataviz()
    .el('#chart-03')
    .type('bar')
    .height(280)
    .stacked(true)
    .title('Impressions by advertiser')
    .prepare();

  client
    .query('count', {
      event_collection: 'impressions',
      group_by: 'ad.advertiser',
      interval: 'hourly',
      timeframe: {
        start: '2014-05-04T00:00:00.000Z',
        end: '2014-05-05T00:00:00.000Z'
      }
    })
    .then(function(res) {
      impressions_timeline
        .data(res)
        .sortGroups('desc')
        .render();
    })
    .catch(function(err) {
      impressions_timeline.message(err.message)
    });

  // Impressions by device

  var impressions_by_device = new Keen.Dataviz()
    .el('#chart-04')
    .type('bar')
    .height(280)
    .stacked(true)
    .title('Impressions by device')
    .prepare();

  client
    .query('count', {
      event_collection: 'impressions',
      group_by: 'user.device_info.device.family',
      interval: 'hourly',
      timeframe: {
        start: '2014-05-04T00:00:00.000Z',
        end: '2014-05-05T00:00:00.000Z'
      }
    })
    .then(function(res) {
      impressions_by_device
        .data(res)
        .sortGroups('desc')
        .render();
    })
    .catch(function(err) {
      impressions_by_device.message(err.message)
    });


  // Impressions by country

  var impressions_by_country = new Keen.Dataviz()
    .el('#chart-05')
    .type('bar')
    .height(280)
    .stacked(true)
    .title('Impressions by country')
    .prepare();

  client
    .query('count', {
      event_collection: 'impressions',
      group_by: 'user.geo_info.country',
      interval: 'hourly',
      timeframe: {
        start: '2014-05-04T00:00:00.000Z',
        end: '2014-05-05T00:00:00.000Z'
      }
    })
    .then(function(res) {
      impressions_by_country
        .data(res)
        .sortGroups('desc')
        .render();
    })
    .catch(function(err) {
      impressions_by_country.message(err.message)
    });

});
