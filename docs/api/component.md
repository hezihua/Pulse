# Component API

Component模块提供了组件系统和生命周期管理的功能。

## component

将函数包装为组件，提供生命周期管理和状态保持。

### 语法

```typescript
function component<P extends Props = Props>(fn: (props: P) => string | Node | null | undefined): Component<P>
```

### 参数

- `fn` - 组件函数，接收props作为参数，返回一个DOM节点、字符串或null/undefined

### 返回值

一个组件函数，接收props作为参数，返回与原函数相同的类型

### 示例

```typescript
import { component, h } from '@pulse/core';

const Button = component(({ text, onClick }) => {
  return h('button', { onClick }, text);
});

// 使用组件
const button = Button({ 
  text: 'Click Me', 
  onClick: () => console.log('Clicked!') 
});
```

## onMount

注册一个在组件挂载后执行的函数。

### 语法

```typescript
function onMount(fn: () => void): void
```

### 参数

- `fn` - 挂载回调函数，在组件挂载到DOM后执行

### 返回值

无返回值

### 示例

```typescript
import { component, h, onMount } from '@pulse/core';

const App = component(() => {
  onMount(() => {
    console.log('Component mounted!');
    // 可以在这里进行初始化操作，如数据加载、事件监听等
  });
  
  return h('div', null, 'Hello Pulse!');
});
```

## onCleanup

注册一个在组件清理时执行的函数。

### 语法

```typescript
function onCleanup(fn: () => void): void
```

### 参数

- `fn` - 清理回调函数，在组件被清理时执行

### 返回值

无返回值

### 示例

```typescript
import { component, h, onMount, onCleanup } from '@pulse/core';

const Timer = component(() => {
  let intervalId;
  
  onMount(() => {
    intervalId = setInterval(() => {
      console.log('Tick');
    }, 1000);
  });
  
  onCleanup(() => {
    clearInterval(intervalId);
    console.log('Timer cleaned up!');
  });
  
  return h('div', null, 'Timer Component');
});
```

## 组件生命周期

Pulse组件的生命周期包括以下阶段：

1. **初始化** - 组件首次被调用
2. **挂载** - 组件的返回值被添加到DOM中，`onMount`回调执行
3. **更新** - 组件的依赖发生变化，组件重新渲染
4. **清理** - 组件被移除，`onCleanup`回调执行

### 完整示例

```typescript
import { component, h, createSignal, onMount, onCleanup } from '@pulse/core';

const Counter = component(() => {
  const [count, setCount] = createSignal(0);
  
  onMount(() => {
    console.log('Counter mounted!');
    // 模拟从服务器加载数据
    setTimeout(() => {
      setCount(10);
    }, 1000);
  });
  
  onCleanup(() => {
    console.log('Counter cleaned up!');
    // 清理资源
  });
  
  return h('div', null,
    h('h2', null, 'Counter'),
    h('div', null, count),
    h('button', { onClick: () => setCount(count() + 1) }, '+'),
    h('button', { onClick: () => setCount(count() - 1) }, '-')
  );
});
```

## 组件通信

组件可以通过props进行通信，父组件可以向子组件传递数据和回调函数。

### 示例

```typescript
import { component, h, createSignal } from '@pulse/core';

const Child = component(({ value, onUpdate }) => {
  return h('div', null,
    h('p', null, `Child value: ${value}`),
    h('button', { onClick: () => onUpdate(value + 1) }, 'Increment')
  );
});

const Parent = component(() => {
  const [count, setCount] = createSignal(0);
  
  return h('div', null,
    h('h2', null, `Parent count: ${count()}`),
    Child({ 
      value: count(), 
      onUpdate: setCount 
    })
  );
});
```
