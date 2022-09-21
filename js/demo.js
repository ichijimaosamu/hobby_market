var events = [ // ※※※※ 設定月は0からカウント 1月→0 2月→1 3月→2 
  {'Date': new Date(2022, 0, 20), 'Title': '〇〇イベント開催', 'Link': 'https://hobbymarket.ents.jp/'},
  {'Date': new Date(2022, 0, 18), 'Title': '●●イベント開催', 'Link': 'https://hobbymarket.ents.jp/'},
  {'Date': new Date(2022, 0, 27), 'Title': '〇〇イベント開催', 'Link': 'https://hobbymarket.ents.jp/'},
];


var settings = {};
var element = document.getElementById('calendar');
caleandar(element, events, settings);