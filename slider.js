$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        observer: true,
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

      var mySwiperTwo = new Swiper ('.swiper-containerTwo', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        observer: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

    setTimeout("PopUpHide()", 5);
    // PopUpHide();
    PopUpHideForm();
    $(".buttonBuy__mod","#popupForm").on('click', function(event) {
        var name = $('#popupForm [name="name"]').val();
        var phone = $('#popupForm [name="phone"]').val();

        // event.preventDefault();
        // var date = $("#popupForm").serialize();
        console.log('send name '+name + ' phone '+phone);

        /*$.ajax({
            url: "send.php",
            type: "POST",
            data: date,
            success:function(data){
                console.log(data);
                alert('Заявка на заказ отправлена!');
                //$(".form-message").html('Ваш заказ принят!');
            }
        });*/
        
    });
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popupCertificate").show();
    document.getElementById("popupCertificate").style.opacity = "1";
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popupCertificate").hide();
}


//Функция отображения PopUp
function PopUpShowForm(){
    $("#popupForm").show();
    document.getElementById("popupForm").style.opacity = "1";
    $('body').addClass('my-body-noscroll-class');
}
//Функция скрытия PopUp
function PopUpHideForm(){
    $("#popupForm").hide();
    $('body').removeClass('my-body-noscroll-class');
}





