import { read as readline, print } from './dist/io';
let line;

/**
 * 适用于牛客网，赛码网编程题目
 * 代码运行环境请选择: javascript(V8)
 * 
 * TODO: 下面是一个 a + b Problem 的样例
 * 在网站提交代码时请注释掉 1, 2 行，不然会编译错误，此 API 仅供本地调试
 */

  (async function main() {
    // 你的代码

    while( line = await readline() ){
      var lines = line.split(' ');
      var a = parseInt(lines[0]);
      var b = parseInt(lines[1]);
      print( a + b );
    }
  })();
