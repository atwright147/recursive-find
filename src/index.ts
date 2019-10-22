const data = require('./data.json');

// from: https://stackoverflow.com/a/40604288/633056
const findVal = (obj, keys = []) => {
  let active = [obj];
  const found = [];
  while (active.length) {
    const new_active = [];
    for (let i = 0; i < active.length; i++) {
      Object.keys(active[i]).forEach((k) => {
        const x = active[i][k];
        if (keys.includes(k)) {
          found.push(x);
        } else if (x && typeof x === "object") {
          new_active.push(x);
        }
      });
    }
    active = new_active;
  }
  return found;
}

console.info(findVal(data, ['t273', 't279']));
