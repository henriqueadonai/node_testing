    //https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

    function first(){
        console.log(1);
      }
      function second(){
        console.log(2);
      }
      first();
      second();


      function firstTime(){
          setTimeout(function(){
              console.log('time 1');
          }, 5000)
      }

      function secondTime(){
          console.log('time 2')
      }

      firstTime();
      secondTime();

      function doHomework(subject,callback) {
        console.log(`Starting my ${subject} homework.`);
        callback();
      }

      doHomework('math', () => {console.log('Finished my homework')})