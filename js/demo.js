var events = [ // ※※※※ 設定月は0からカウント 1月→0 2月→1 3月→2
  {'Date': new Date(2022, 8, 20), 'Title': '〇〇イベント開催', 'Link': 'https://stg.hobima.com/test_osamu/hobby_market/'},
  {'Date': new Date(2022, 8, 18), 'Title': '●●イベント開催', 'Link': 'https://stg.hobima.com/test_osamu/hobby_market/'},
  {'Date': new Date(2022, 8, 27), 'Title': '〇〇イベント開催', 'Link': 'https://stg.hobima.com/test_osamu/hobby_market/'},
  {'Date': new Date(2022, 9, 20), 'Title': '〇〇イベント開催', 'Link': 'https://stg.hobima.com/test_osamu/hobby_market/'},
  {'Date': new Date(2022, 9, 18), 'Title': '●●イベント開催', 'Link': 'https://stg.hobima.com/test_osamu/hobby_market/'},
  {'Date': new Date(2022, 9, 27), 'Title': '〇〇イベント開催', 'Link': 'https://stg.hobima.com/test_osamu/hobby_market/'},
];


var settings = {};
var element = document.getElementById('calendar');
caleandar(element, events, settings);