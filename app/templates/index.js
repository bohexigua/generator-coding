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


  // ------- 以下是算法题目常用到的 util 函数，可以在 main 中直接使用 --------->

  /**
   * 请注意: upperBound 接受一个升序的数组
   * @method upperBound
   * @param {Array} arr 要进行查找的数组
   * @param {Number} left 要查找区间的起始位置
   * @param {Number} right 要查找区间的结束位置
   * @param {Number, String} key 给定用来查找的值
   * @param {Function} cmp 扩展函数，可通过 cmp 函数实现对复杂数据结构的二分查找
   * @returns {Number} 数组的索引
   * @desc 可参考 C++ STL upperBound, 查找有序区间中第一个小于或等于某给定值的元素的位置, 时间复杂度 O(logN)
   */
  function upperBound(arr, left, right, key, cmp = param => param) {
    let mid;
    while(right > left) {
      mid = Math.floor( (left + right) / 2 );
      if (cmp(arr[mid]) >= key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return cmp(arr[left]) > key ? left - 1 : left;
  }

  /**
   * 请注意: lowerBound 接受一个升序的数组
   * @method lowerBound
   * @param {Array} arr 要进行查找的数组
   * @param {Number} left 要查找区间的起始位置
   * @param {Number} right 要查找区间的结束位置
   * @param {Number, String} key 给定用来查找的值
   * @param {Function} cmp 扩展函数，可通过 cmp 函数实现对复杂数据结构的二分查找
   * @returns {Number} 数组的索引
   * @desc 可参考 C++ STL lower_bound, 查找有序区间中第一个大于或等于某给定值的元素的位置, 时间复杂度 O(logN)
   */
  function lowerBound(arr, left, right, key, cmp = param => param) {
    let mid;
    while(right > left) {
      mid = Math.floor( (left + right) / 2 );
      if (cmp(arr[mid]) > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (left === right && cmp(arr[mid]) === key) right -= 1;
    return cmp(arr[right]) < key ? right + 1 : right;
  }
