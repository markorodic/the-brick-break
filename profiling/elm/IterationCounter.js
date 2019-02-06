const REPORT_TEST = true;
let NUMBER_OF_ITERATORS = 2;
let iteratorCounter = 0;

class IterationCounter {
  constructor(name) {
    this.frameCount = 0;
    this.frameLog = [];
    this.frames = [];
    this.startTime = performance.now();
    this.delta = 0;
    this.name = name;
  }
  endCalc(name) {
    this.endTime = performance.now();
    const delta = (this.endTime - this.startTime) / 1000;
    this.frames.push(delta);
    console.log(this.frameCount);
    if (REPORT_TEST) {
      if (this.frameCount < 600) {
        this.frameCount++;
        this.frameLog.push({
          startTime: this.startTime,
          endTime: this.endTime,
          delta
        });
      } else if (this.frameCount === 600) {
        this.frameCount++;
        console.log(iteratorCounter, NUMBER_OF_ITERATORS);
        window.DO_THA_REPORT_PLEASE(this.frameLog, this.name);
        // if (++iteratorCounter >= NUMBER_OF_ITERATORS) {
        window.PLEASE_CLOSE_ME();
        // }
      }
    }
    if (this.frames.length > 10) {
      this.frames.shift();
    }
    this.startTime = performance.now();
  }
}
