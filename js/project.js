// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  $.stickyFooter(30);

  // Clock init
  clock();

  // SLIDERS
  // ----------------------------------------------------------------------------------------------------
  $('#cycle-2-slider').cycle({
    speed: 1000,
    swipe: true,
    timeout: 3000
  });

  // DIALOGS
  // ----------------------------------------------------------------------------------------------------
  $('[data-dialog]').click(function() {
    var $this = $(this),
           id = $this.data('dialog');
    $.arcticmodal({
      type: 'ajax',
      url: '/views/dialogs/_' + id + '.html',
      afterOpen: function() {
        forms.init();
      }
    });
    return false;
  });

  // Close dialog
  $(document).on('click', '.js-dialog_close', function() {
    $.arcticmodal('close');
    return false;
  });

  // DATEPICKER
  // ----------------------------------------------------------------------------------------------------
  $.datepicker.regional['ru'] = { 
    closeText: 'Закрыть', 
    prevText: '&#x3c;Пред', 
    nextText: 'След&#x3e;', 
    currentText: 'Сегодня', 
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'], 
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
    dateFormat: 'dd.mm.yy', 
    firstDay: 1, 
    isRTL: false 
  }; 
  $.datepicker.setDefaults($.datepicker.regional['ru']); 
  $('.datepicker').datepicker({
    prevText: '',
    nextText: ''
  });

  // DATA TABLE
  // ----------------------------------------------------------------------------------------------------
  $('.table').dataTable({
    bPaginate: false,
    bLengthChange: false,
    bFilter: false,
    bSort: true,
    bInfo: false,
    bAutoWidth: false
  });

  // SHOW PUSH
  // ----------------------------------------------------------------------------------------------------
  $('#show-push').click(function() {
    var 
        pushView = new App.Views.Push(),
        push = pushView.render().$el
    $('.push-stack').append(push);
    return false;
  });

  // LOAD
  // ----------------------------------------------------------------------------------------------------
  $(window).load(function() {});

  // SCROLL
  // ----------------------------------------------------------------------------------------------------
  $(window).scroll(function() {});

  // RESIZE
  // ----------------------------------------------------------------------------------------------------
  $(window).smartresize(function() {

    $.stickyFooter(30);

  });
  
});