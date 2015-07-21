var drawer;



drawer = {
  plots:[],
  temp: [],
  canvas: null,
  ctx: null,
  setupCanvas: function() {
    bd = document.body.getClientRects()[0]
    this.canvas = document.getElementById('drawCanvas');
    this.canvas.setAttribute('width', bd.width);
    this.canvas.setAttribute('height', bd.height);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineWidth = 1;
    document.body.addEventListener('mousemove', this.draw.bind(this));
  },
  drawOnCanvas: function(plots) {
    var i;
    if (plots.length) {
      this.ctx.beginPath();
      this.ctx.moveTo(plots[0].x, plots[0].y);
      i = 1;
      while (i < plots.length) {
        this.ctx.strokeStyle = '#785fa6';
        this.ctx.lineTo(plots[i].x, plots[i].y);
        i++;
      }
      this.ctx.stroke();
    }
  },
  draw: function(e) {
    var x, y;
    x = e.clientX || e.layerX - this.canvas.offsetLeft;
    y = (e.clientY - 38 + window.scrollY) || e.layerY - this.canvas.offsetTop;

    this.temp.push({
      x: x,
      y: y
    });

    this.drawOnCanvas(this.temp);
  }

};

drawer.setupCanvas()
