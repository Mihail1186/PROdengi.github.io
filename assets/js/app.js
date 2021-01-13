jQuery(document).ready(function () {


   $('.numb').number_plugin({
      width: '', //ширина инпута на выводе (по умолчанию 65px редактируется как тут так и через css)
      height: '', //высота инпута на выходе (по умолчанию 35px редактируется как тут так и через css)
      negative: false, //включение поддержки отрицательных чисел (по умолчанию false)
      step: 1, //шаг прибавления и убавления (по умолчанию 1)
      animate: true, //включение анимации прибавления и вычитания (по умолчанию false)
      delay: 100, //задержка анимации между прибавлениями (по умолчанию 10ms)
      max: 2021, //максимальное значение(по умолчанию false)
      min: 2011, //минимальное значение(по умолчанию false)
      style: 'line', //стиль кнопок +/-, по умолчанию classic
   });






   $(".phone").mask("+375 (99) 999-99-99");


   jQuery('.send-form').click(function () {
      var form = jQuery(this).closest('form');

      if (form.valid()) {
         /* form.css('opacity', '.2'); */
         var actUrl = form.attr('action');

         jQuery.ajax({
            url: actUrl,
            type: 'post',
            dataType: 'html',
            data: form.serialize(),
            success: function (data) {
               form.html(data);
               form.css('opacity', '1');
               form.find('.status').html('форма отправлена успешно');
            },
            error: function () {
               form.find('.status').html('серверная ошибка');
            }
         });
      }
   });


   $("#btnNext").click(function() {
      $('body').animate({ scrollTop: '+=' + window.innerHeight }, 'slow');
    });


});




