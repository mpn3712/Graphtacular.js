function Graphtacular (context, options) {
    this._context = context;
    this.data = (options.data || []);
    this.bar_padding = 10;
    console.log(context);
    this.animate();
}

Graphtacular.prototype.animate = function (label, value) {
    canvas.width = canvas.width;
    var bar_width = (this._context.canvas.width / this.data.length) - this.bar_padding;
        x = this.bar_padding;
    console.log(bar_width);
    this._context.fillStyle = "blue";
    for (var i = 0; i < this.data.length; i++) {
        var bar = this.data[i];
        this._context.fillRect(x, 100, bar_width - this.bar_padding, 50);
        x += bar_width + this.bar_padding;
    };
}

