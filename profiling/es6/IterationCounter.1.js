const REPORT_TEST = true;
let NUMBER_OF_ITERATORS = 2;
let iteratorCounter = 0;

export class IterationCounter {
  constructor(name) {
    this.frameCount = 0;
    this.frameLog = [];
    this.frames = [];
    this.startTime = 0;
    this.EndTime = 0;
    this.delta = 0;
    this.name = name;
  }
  startCalc() {
    this.startTime = performance.now();
  }
  endCalc(name) {
    this.endTime = performance.now();
    const delta = this.endTime - this.startTime;
    this.frames.push(delta);
    if (REPORT_TEST) {
      if (this.frameCount < 1500) {
        this.frameCount++;
        this.frameLog.push({
          startTime: this.startTime,
          endTime: this.endTime,
          delta
        });
      } else if (this.frameCount === 1500) {
        this.frameCount++;
        window.DO_REPORT(this.frameLog, this.name);
        // if (++iteratorCounter >= NUMBER_OF_ITERATORS) {
        window.PLEASE_CLOSE_ME();
        // }
      }
    }
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
