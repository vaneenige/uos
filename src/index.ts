const observers = [];

function tick() {
  let len = observers.length,
    o,
    r;
  while (len--) {
    o = observers[len];
    r =
      o[1] <= 1
        ? (pageYOffset / (document.body.scrollHeight - innerHeight) - o[0]) / (o[1] - o[0])
        : (pageYOffset - o[0]) / (o[1] - o[0]);
    o[2](r < 0 ? 0 : r > 1 ? 1 : r);
  }
}

function uos(begin: number, end: number, callback: Function) {
  let len = observers.push([begin, end, callback]);
  len > 1 || addEventListener('scroll', tick);
  return function(removeListener: boolean) {
    observers.splice(len - 1, 1);
    if (removeListener) removeEventListener('scroll', tick);
  };
}

export default uos;
