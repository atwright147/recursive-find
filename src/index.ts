const data = require('./data.json');

// Based on: https://stackoverflow.com/a/40604288/633056
const findVal = (obj, keys = []) => {
  let active = [obj];
  const found = [];
  while (active.length) {
    const new_active = [];
    for (let i = 0; i < active.length; i++) {
      const group = {};
      Object.keys(active[i]).forEach((k) => {
        const x = active[i][k];
        if (keys.includes(k)) {
          group[k] = x[0];
          if (Object.keys(group).length === keys.length) {
            found.push(group);
          }
        } else if (x && typeof x === 'object') {
          new_active.push(x);
        }
      });
    }
    active = new_active;
  }
  return found;
}

console.info(findVal(data, ['t273', 't279']));
