const instances = [];

function mm(v) {
  if (v < 0) return 0;
  if (v > 1) return 1;
  return v;
}

function tick() {
  const { pageYOffset, innerHeight } = window;
  const { scrollHeight } = document.body;
  for (let i = 0; i < instances.length; i += 1) {
    const [begin, end, callback] = instances[i];
    const result =
      end <= 1
        ? (pageYOffset / (scrollHeight - innerHeight) - begin) / (end - begin)
        : (pageYOffset - begin) / (end - begin);
    callback(mm(result));
  }
}

function uos(begin, end, callback) {
  instances.push([begin, end, callback]) > 1 || window.addEventListener('scroll', tick, { passive: true });
}

export default uos;
