export function calcData(state) {
  const now = performance.now();
  const delta = now - state.lastFrameTimeStamp;
  state.lastFrameTimeStamp = now;
  const fps = (1 / delta) * 1000;

  state.frames.push(fps);

  if (state.frames.length > 10) {
    state.frames.shift();
  }
}
export function getData(state) {
  let sum = 0;
  state.frames.forEach((val, idx) => {
    sum += state.frames[idx];
  });
  let mean = sum / state.frames.length;
  return Math.round(mean);
}
