import { createSignal, computed, render, h, Fragment } from '../src/index';

console.log('Testing JSX functionality...');

function CounterJSX() {
  const [count, setCount] = createSignal(0);
  const doubled = computed(() => count() * 2);
  
  function increment() {
    setCount(count() + 1);
  }
  
  function decrement() {
    setCount(count() - 1);
  }
  
  return (
    <div className="counter">
      <h1>Pulse Counter (JSX)</h1>
      <div className="count">{count()}</div>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div className="doubled">Doubled: {doubled()}</div>
    </div>
  );
}

// Test Fragment
function TestFragment() {
  return (
    <Fragment>
      <h2>Fragment Test</h2>
      <p>This is a paragraph inside a fragment</p>
    </Fragment>
  );
}

console.log('JSX components created successfully!');

// 测试组件创建
const component = CounterJSX();
console.log('Component created:', component);

console.log('All JSX tests completed!');
