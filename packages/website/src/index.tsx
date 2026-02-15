import { createSignal, computed, render, h, Fragment } from '@pulse/core';

// 主应用组件
function App() {
  const [count, setCount] = createSignal(0);
  const doubled = computed(() => count() * 2);
  
  function increment() {
    setCount(count() + 1);
  }
  
  function decrement() {
    setCount(count() - 1);
  }
  
  function reset() {
    setCount(0);
  }
  
  return (
    <div className="app">
      <header className="header">
        <h1>Pulse UI Website</h1>
        <p>A modern UI framework with Signals and no virtual DOM</p>
      </header>
      
      <main className="main">
        <section className="counter-section">
          <h2>Counter Example</h2>
          <div className="counter">
            <div className="count">{count}</div>
            <div className="buttons">
              <button onClick={decrement}>-</button>
              <button onClick={reset}>Reset</button>
              <button onClick={increment}>+</button>
            </div>
            <div className="doubled">Doubled: {doubled}</div>
          </div>
        </section>
        
        <section className="features-section">
          <h2>Features</h2>
          <div className="features">
            <div className="feature">
              <h3>Signals</h3>
              <p>Reactive state management with automatic dependency tracking</p>
            </div>
            <div className="feature">
              <h3>No Virtual DOM</h3>
              <p>Direct DOM manipulation for better performance</p>
            </div>
            <div className="feature">
              <h3>JSX Support</h3>
              <p>Write components with familiar JSX syntax</p>
            </div>
            <div className="feature">
              <h3>TypeScript Ready</h3>
              <p>Full TypeScript support for type safety</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2026 Pulse UI. All rights reserved.</p>
      </footer>
    </div>
  );
}

// 渲染应用
render(App, '#app');
