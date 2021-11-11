$(document).ready(function(){
	$('.slider__list').slick({
		infinite: true, //スライドをループさせるか
		arrows: true, //前後ボタンの表示
		dots: false, //点の表示
		variableWidth: true, //横幅が異なるスライドにするか
		autoplay: true, //自動切り替え
		autoplaySpeed: 4000, //自動切り替えにかかる時間
		centerMode: true, //要素を中央へ
		dots: true,
		responsive: [
			{
				breakpoint: 1300, // 横幅1300px以下で挙動変更
				settings: {
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 768, // 横幅768px以下で挙動変更
				settings: {
					variableWidth: false,
					centerMode: false
			}
		}]
	});

	$('.movie__list').slick({
		infinite: true, //スライドをループさせるか
		arrows: true, //前後ボタンの表示
		dots: false, //点の表示
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024, // 横幅768px以下で挙動変更
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768, // 横幅768px以下で挙動変更
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480, // 横幅480px以下で挙動変更
				settings: {
					slidesToShow: 1
			}
		}]
	});
});
