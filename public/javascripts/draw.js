var drawer;

var setRotation = function (coords, xm, ym, a) {
    var cos = Math.cos,
        sin = Math.sin,

        a = a * Math.PI / 180, // Convert to radians because that is what
                               // JavaScript likes

        // Subtract midpoints, so that midpoint is translated to origin
        // and add it in the end again
        xr = (coords.x - xm) * cos(a) - (coords.y - ym) * sin(a)   + xm,
        yr = (coords.x - xm) * sin(a) + (coords.y - ym) * cos(a)   + ym;
        coords.x = xr;
        coords.y = yr;
    return coords;
}


drawer = {
  plots:[],
  temp: [],
  canvas: null,
  ctx: null,
  setupCanvas: function() {
    bd = document.body.getBoundingClientRect();
    this.canvas = document.getElementById('drawCanvas');
    this.resizeCanvas()
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineWidth = 1;
    document.body.addEventListener('mousemove', this.draw.bind(this));
    document.body.addEventListener('touchmove', this.draw.bind(this));
    window.addEventListener('resize', this.resizeCanvas.bind(this), true)
  },
  drawOnCanvas: function(plots) {
    var i;
    if (plots.length) {
      this.ctx.beginPath();
      // this.ctx.moveTo(plots[0].x, plots[0].y);
      i = 1;
      while (i < plots.length) {
        this.ctx.strokeStyle = '#6a3eb9';
        var points = this.calcShapePos(plots, i);
        var pi = 0;
        while (pi < points.length) {
          this.ctx.lineTo(points[pi].x, points[pi].y);
          pi++;
        }
        i++;
      }
      this.ctx.stroke();
      this.ctx.closePath();
    }
  },
  draw: function(e) {
    var x, y;
    x = e.clientX || e.layerX - this.canvas.offsetLeft;
    y = (e.clientY + window.scrollY) || e.layerY - this.canvas.offsetTop;
    this.temp.push({
      x: x,
      y: y
    });
    this.drawOnCanvas(this.temp);
  },
  calcShapePos: function(plots, i) {
    var scale = 2.5;
    xDiff = plots[i].x - plots[i-1].x
    xAbs = Math.abs(xDiff);
    yAbs = Math.abs(plots[i].y - plots[i-1].y)

    var length = (xAbs + yAbs)*scale;
    var points = [];
    var top   = {x: plots[i].x, y: plots[i].y - (length/2)}
    var right = {x: plots[i].x + (length/2), y: plots[i].y + (length/2)}
    var left  = {x: plots[i].x - (length/2), y: plots[i].y + (length/2)}

    top   = setRotation(top, plots[i].x, plots[i].y, xDiff);
    right = setRotation(right, plots[i].x, plots[i].y, xDiff);
    left  = setRotation(left, plots[i].x, plots[i].y, xDiff);

    points.push(top); points.push(right); points.push(left);
    return points;
  },
  resizeCanvas: function() {
    this.canvas.setAttribute('width', bd.width);
    this.canvas.setAttribute('height', bd.height + 50);
  }

};

window.onload = function() {
  drawer.setupCanvas();
}
