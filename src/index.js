const observers = [];

function tick() {
  let i = observers.length, o, r;
  while (i--) {
    o = observers[i];
    r = o[1] <= 1
        ? (pageYOffset / (document.body.scrollHeight - innerHeight) - o[0]) / (o[1] - o[0])
        : (pageYOffset - o[0]) / (o[1] - o[0]);
    o[2](r < 0 ? 0 : r > 1 ? 1 : r);
  }
}

function uos(begin, end, callback) {
  observers.push([begin, end, callback]) > 1 || addEventListener('scroll', tick, { passive: true });
}

export default uos;
