$(document).ready(function() {
    var quest = $('.quest__question');
    var answer = $('.quest__answer');
    var check = $('.quest__question .checkImage')
    $(answer).animate({height: 'hide'});
    $(quest).click(function(e) {
            var i = $.inArray(this, quest);
            if($(answer[i]).is(":visible")){
                $(answer[i]).animate({height: 'hide'});
                $(check[i]).removeClass('cheked');
            }
            else{
            $(answer).animate({height: 'hide'});
            $(check).removeClass('cheked');
            $(answer[i]).animate({height: "show"});
            $(check[i]).addClass('cheked');
		}
    });



         //$(".spincrement").spincrement();

    var show = true;
	var countbox = ".authorBlockNumbers";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				thousandSeparator: "",
				duration: 1600
			});
			show = false;
		}
	});
	// добавляем плавный скролл к елементу
	function scroll(){
		$('.curator').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $('.author'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top + "100px" }, 500); // анимируем скроолинг к элементу scroll_el
		}
		});
		$('.alternative').click( function(){ // ловим клик по ссылке с классом go_to
			var scroll_el = $('.tryFree'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
			if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
			}
			});
		}
		scroll()
});