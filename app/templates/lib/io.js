import readline from 'readline';
import { hint } from '../dist/util';

const options = {
  ioFlag: true                // 此处 hack 掉循环时关闭流之后的输入数据提示
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkout = (arr) => {
  var index = arr.indexOf('');
      if(index > -1){
        arr.splice(index,1);
        checkout(arr)
      }
        return arr;
}

const readWrap = (max,type) => {
  return new Promise((resolve, reject) => {
    rl.on('line', (input) => {
      if(typeof max == 'undefined'){
        resolve(input);
      }else{
        var inputData = input.split(' ');
        inputData = checkout(inputData);
        if(inputData.length == max){
          var result = typeof type == 'undefined' ? inputData.join(' ') : inputData;
          console.log('result', result);
          resolve(result);
        }
        else
        console.log('请输入'+max+'个数据');
      }
    });
  }) 
}

export const read = async (max,type) => {
  if (!options.ioFlag) return ;
  hint.warn('请输入数据: ')
  return await readWrap(max,type);
}

export const print = (msg) => {
  hint.success('运行结果: ', msg)
  rl.close();
  options.ioFlag = false;
}
