const REPORT_TEST = true;
let NUMBER_OF_ITERATORS = 2;
let iteratorCounter = 0;

class IterationCounter {
  constructor(name) {
    this.frameCount = 0;
    this.frameLog = [];
    this.frames = [];
    this.delta = 0;
    this.name = name;
  }
  calc(delta) {
    this.frames.push(delta);
    console.log(this.frameCount);
    if (REPORT_TEST) {
      console.log(this.frames, delta);
      if (this.frameCount < 100) {
        this.frameCount++;
        this.frameLog.push({
          delta
        });
      } else if (this.frameCount === 100) {
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
  }
}
