const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'salmon';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.3, 0, Math.PI * 2, false);
    context.fillStyle = 'red';
    context.fill();

    context.lineWidth = width * 0.03;
    context.strokeStyle = 'orange';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
