export class IterationCounter {
  constructor(body) {
    this.frames = [];
    this.startTime = 0;
    this.EndTime = 0;
    this.delta = 0;
  }
  startCalc(body) {
    this.startTime = performance.now();
  }
  endCalc(body) {
    this.endTime = performance.now();
    const delta = this.endTime - this.startTime;
    this.frames.push(delta);
    if (this.frames.length > 10) {
      this.frames.shift();
    }
  }
  getData(body) {
    let sum = 0;
    this.frames.forEach((val, idx) => {
      sum += this.frames[idx];
    });
    let mean = sum / this.frames.length;
    return mean.toFixed(3);
  }
}
