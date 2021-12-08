import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App.js";
import events from '../components/events'
import fetch from '../components/fetch'

// 通过mock函数我们可以通过以下三个特性去更好的编写我们的测试代码：
//
// 捕获函数调用情况
// 设置函数返回值
// 改变函数的内部实现
// 在实际项目的单元测试中，jest.fn()常被用来进行某些有回调函数的测试；jest.mock()可以mock整个模块中的方法，当某个模块已经被单元测试100%覆盖时，使用jest.mock()去mock该模块，节约测试时间和测试的冗余度是十分必要；当需要测试某些必须被完整执行的方法时，常常需要使用jest.spyOn()。
describe("App", () => {
  test("renders App component", () => {
    render(<App/>);
    screen.debug();
  });

  test('测试jest.fn()调用', () => {
    let mockFn = jest.fn();
    let result = mockFn(1, 2, 3);

    // 断言mockFn的执行后返回undefined
    expect(result).toBeUndefined();
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了一次
    expect(mockFn).toBeCalledTimes(1);
    // 断言mockFn传入的参数为1, 2, 3
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  })

  test('测试jest.fn()返回固定值', () => {
    let mockFn = jest.fn().mockReturnValue('default');
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe('default');
  })

  test('测试jest.fn()内部实现', () => {
    let mockFn = jest.fn((num1, num2) => {
      return num1 * num2;
    })
    // 断言mockFn执行后返回100
    expect(mockFn(10, 10)).toBe(100);
  })

  test('测试jest.fn()返回Promise', async () => {
    let mockFn = jest.fn().mockResolvedValue('default');
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default');
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
  })
});

describe('', () => {
  test('fetchPostsList中的回调函数应该能够被调用', async () => {
    expect.assertions(1);
    let mockFn = jest.fn();
    await fetch.fetchPostsList(mockFn);
//A调用B，mockB
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
  })

  jest.mock('../components/fetch.js');
  test('mock 整个 fetch.js模块', async () => {
    expect.assertions(2);
    await events.getPostList();
    //A调用B，mockB的整个模块
    //mock不会真正执行
    expect(fetch.fetchPostsList).toHaveBeenCalled();
    expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1);
  });
})
describe('',()=>{
  test('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async() => {
    expect.assertions(2);
    const spyFn = jest.spyOn(fetch, 'fetchPostsList');
    await events.getPostList();
    expect(spyFn).toHaveBeenCalled();
    expect(spyFn).toHaveBeenCalledTimes(1);
  })
})


