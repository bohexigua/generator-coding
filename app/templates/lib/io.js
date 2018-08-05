import readline from 'readline';
import { hint } from '../dist/util';

const options = {
  ioFlag: true                // 此处 hack 掉循环时关闭流之后的输入数据提示
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const readWrap = () => {
  return new Promise((resolve, reject) => {
    rl.on('line', (input) => {
      resolve(input);
    });
  }) 
}

export const read = async () => {
  if (!options.ioFlag) return ;
  hint.warn('请输入数据: ')
  return await readWrap();
}

export const print = (msg) => {
  hint.success('运行结果: ', msg)
  rl.close();
  options.ioFlag = false;
}
