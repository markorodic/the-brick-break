export class FramesPerSecondCounter {
  constructor(body) {
    this.frames = [];
    this.lastFrameTimeStamp = performance.now();
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
    return mean.toFixed(2);
  }
}

// const fpsState = {
//   frames: [],
//   lastFrameTimeStamp: performance.now()
// };

// export function calcData() {
//   // if (this.count % 100 === 0) {
//   const now = performance.now();
//   const delta = now - fpsState.lastFrameTimeStamp;
//   fpsState.lastFrameTimeStamp = now;
//   const fps = (1 / delta) * 1000;

//   fpsState.frames.push(fps);

//   if (fpsState.frames.length > 10) {
//     fpsState.frames.shift();
//   }
// }

// export function getData() {
//   let sum = 0;
//   fpsState.frames.forEach((val, idx) => {
//     sum += fpsState.frames[idx];
//   });
//   let mean = sum / fpsState.frames.length;
//   return Math.round(mean);
// }

// export const fpsData = {
//   frames = []
// };

// export function calcData(state) {
//   const now = performance.now();
//   const delta = now - state.lastFrameTimeStamp;
//   state.lastFrameTimeStamp = now;
//   const fps = (1 / delta) * 1000;

//   state.frames.push(fps);

//   if (state.frames.length > 10) {
//     state.frames.shift();
//   }
// }
// export function getData(state) {
//   let sum = 0;
//   state.frames.forEach((val, idx) => {
//     sum += state.frames[idx];
//   });
//   let mean = sum / state.frames.length;
//   return Math.round(mean);
// }
