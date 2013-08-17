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
  /* Open dialog */
  $('[data-dialog]').click(function() {
    var $this = $(this),
           id = $this.data('dialog');
    $('#' + id).arcticmodal();
    return false;
  });

  /* Close dialog */
  $('.dialog_h_close').click(function() {
    var $this = $(this),
           id = $this.closest('.dialog').attr('id');
    $('#' + id).arcticmodal('close');
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