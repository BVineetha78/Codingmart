let n = 5;
// let d = 0;

class a {
  constructor() {
    this.d = 0;
  }
  cal(x) {
    for (let i = 1; i <= x; i++) {
      i % 2 == 0 ? (this.d += i * i) : (this.d += i);
    }
    console.log(this.d);
  }
}

let r = new a();
r.cal(5);