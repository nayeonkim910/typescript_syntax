console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();
class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const counterA = new Counter();  //인스턴스 생성함.
counterA.testSkill = ()=>{console.log('인스턴스가리키는지, 클래스 가리키는지 확인');};
counterA.increase();
console.log(new Counter());
// const caller = counter.increase;
//const caller = counter.increase.bind(counter);
// caller();

// class Bob {}
// const bob = new Bob();
// bob.run = counter.increase;
// bob.run();
// 