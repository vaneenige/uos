const instances = [];

function tick() {
  let i=0, arr, val;

  for (; i < instances.length; i++) {
    arr = instances[i]; // [begin, end, callback]

    val = arr[1] <= 1
      ? (window.pageYOffset / (document.body.scrollHeight - window.innerHeight) - arr[0]) / (arr[1] - arr[0])
      : (window.pageYOffset - arr[0]) / (arr[1] - arr[0]);

    arr[2](val < 0 ? 0 : val > 1 ? 1 : val);
  }
}

function uos(begin, end, callback) {
  instances.push([begin, end, callback]);
  window.addEventListener('scroll', tick, { passive: true });
}

export default uos;
