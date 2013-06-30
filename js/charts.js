var Chart = function(options) {

  this.createOn = function(parentID) {
    var 
      lastPos = 0,
      total = _.reduce(options.parts, function(t, part) { return t + part.val; }, 0);

    _.each(options.parts, function(part) {
      var
        div = $('<div></div>'),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext("2d"),
        radius = (options.height - options.border.size) / 2,
        origin = radius + options.border.size / 2,
        disp = options.disp,
        delta = (options.clockwise ? 1 : -1) * options.avail * part.val / total;

      canvas.width = canvas.height = radius * 2 + options.border.size;
      ctx.lineWidth = options.border.size;
      ctx.lineCap = "butt";

      ctx.beginPath();
      ctx.strokeStyle = options.border.color;
      ctx.arc(origin, origin, radius, disp, (options.clockwise ? 1 : -1) * options.avail + disp, !options.clockwise);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = part.color;
      ctx.arc(origin, origin, radius, disp + lastPos, disp + lastPos + delta, !options.clockwise);
      lastPos += delta;
      ctx.stroke();

      div.append(canvas);

      div.appendTo('#' + parentID);
    });
  }

};

var SingleChart = function(options) {

  this.createOn = function(parentID) {
    var 
      lastPos = 0,
      total = _.reduce(options.parts, function(t, part) { return t + part.val; }, 0),
      canvas = document.createElement('canvas'),
      ctx = canvas.getContext("2d"),
      radius = (options.height - options.border.size) / 2,
      origin = radius + options.border.size / 2,     
      disp = options.disp;

    canvas.width = canvas.height = radius * 2 + options.border.size;
    ctx.lineWidth = options.border.size;
    ctx.lineCap = "butt";
   
    _.each(options.parts, function(part) {
      var delta = (options.clockwise ? 1 : -1) * options.avail * part.val / total;

      ctx.strokeStyle = part.color;
      ctx.beginPath();
      
      ctx.arc(origin, origin, radius, disp + lastPos, disp + lastPos + delta, !options.clockwise);
      lastPos += delta;
      ctx.stroke();
    });

    $('#' + parentID).find('.chart_total').html(total);

    $('#' + parentID).append(canvas);
  }

};