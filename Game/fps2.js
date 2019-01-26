class Fps {
  constructor(body) {
    this.frames = [];
    this.lastFrameTimeStamp = performance.now();
    this.body = body;
  }
  calcData() {
    // if (this.count % 100 === 0) {
    const now = performance.now();
    const delta = now - this.lastFrameTimeStamp;
    this.lastFrameTimeStamp = now;
    const fps = (1 / delta) * 1000;

    this.frames.push(fps);

    if (this.frames.length > 10) {
      this.frames.shift();
    }
  }
  getData() {
    let sum = 0;
    this.frames.forEach((val, idx) => {
      sum += this.frames[idx];
    });
    let mean = sum / this.frames.length;
    return Math.round(mean);
  }
}
