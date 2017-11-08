"use strict";

//JavaScript ES 2017: Learn Async/Await by Example


function add(x,y){
    return x +y;
}


function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }


  doubleAfter2Seconds(2).then((r)=>{
      console.log(r);
  })

  let sum =   doubleAfter2Seconds(10)
  + doubleAfter2Seconds(20)
  + doubleAfter2Seconds(30);
console.log(sum);
// undefined


function addPromise(x){
    return new Promise(resolve => {
        doubleAfter2Seconds(10).then((a) => {
            doubleAfter2Seconds(20).then((b) => {
              doubleAfter2Seconds(30).then((c) => {
                resolve(x + a + b + c);
            })
        })
      })
    });
  }

  console.log(addPromise(10).then((x)=>{console.log(x)}))



  ///Switching from Promises to Async/Await.
///Async functions are not supported by Node versions older than version 7.6.

  async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
  }

  addAsync(10).then((sum)=> {
    console.log("WAIT ASYNC");
    console.log(sum);
  })
