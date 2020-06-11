function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

  function compareArrays( arr1, arr2 ) {
    return arr1.length == arr2.length && arr1.every((key,i) => key === arr2[i]);
  }

  function memorize(fn, limit) {
    const memory = [
        {
          args: [args], // массив аргументов, с которыми была вызвана функция
          result: fn(args),// результат работы
        }
      ];
    const findArg = memory.find(args);
    
    if(!compareArrays(findArg, memory.args)) {
        const resultFn = fn(args);
        memory.push(resultFn);
        if (memory.length > limit) {
            memory.shift();
        }
    }   

     return memory.result;
  }