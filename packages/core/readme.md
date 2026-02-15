# Pulse Core Framework

Pulse是一个类似SolidJS的UI框架，使用Signals进行响应式状态管理，直接操作DOM而不使用虚拟DOM。

## 核心特性

- **响应式状态管理**：基于Signals的响应式系统，自动追踪依赖并更新UI
- **无虚拟DOM**：直接操作真实DOM，减少内存开销和运行时计算
- **组件系统**：支持函数式组件和生命周期管理
- **高效渲染**：只更新变化的部分，避免全量重渲染
- **简洁API**：与SolidJS类似的API设计，易于学习和使用

## 快速开始

### 安装

```bash
npm install @pulse/core
```

### 基本用法

```javascript
import { createSignal, computed, render, h } from '@pulse/core';

function Counter() {
  const [count, setCount] = createSignal(0);
  const doubled = computed(() => count() * 2);
  
  function increment() {
    setCount(count() + 1);
  }
  
  function decrement() {
    setCount(count() - 1);
  }
  
  return h('div', { class: 'counter' },
    h('h1', null, 'Pulse Counter'),
    h('div', { class: 'count' }, count),
    h('div', { class: 'buttons' },
      h('button', { onClick: decrement }, '-'),
      h('button', { onClick: increment }, '+')
    ),
    h('div', { class: 'doubled' }, `Doubled: ${doubled}`)
  );
}

render(Counter, '#app');
```

## API文档

### Signals

#### createSignal(initialValue)
创建一个响应式信号，返回一个包含getter和setter的数组。

- **参数**：`initialValue` - 信号的初始值
- **返回值**：`[getter, setter]` - getter函数返回当前值，setter函数更新值并触发依赖更新

#### effect(fn)
创建一个副作用函数，当依赖的信号变化时自动重新执行。

- **参数**：`fn` - 副作用函数

#### computed(fn)
创建一个计算信号，基于其他信号的值计算得出。

- **参数**：`fn` - 计算函数
- **返回值**：`getter` - 返回计算结果的函数

### 渲染

#### render(component, container)
将组件渲染到指定的容器中。

- **参数**：
  - `component` - 组件函数
  - `container` - 容器选择器或DOM元素

#### h(tag, props, ...children)
创建一个DOM元素。

- **参数**：
  - `tag` - 元素标签名
  - `props` - 元素属性和事件监听器
  - `children` - 子元素或文本内容
- **返回值**：DOM元素

### 组件

#### component(fn)
将函数包装为组件。

- **参数**：`fn` - 组件函数
- **返回值**：组件函数

#### onMount(fn)
组件挂载后执行的函数。

- **参数**：`fn` - 挂载回调函数

#### onCleanup(fn)
组件清理时执行的函数。

- **参数**：`fn` - 清理回调函数

## 示例

### 计数器应用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pulse Counter Example</title>
</head>
<body>
  <div id="app"></div>
  
  <script type="module">
    import { createSignal, computed, render, h } from '@pulse/core';
    
    function Counter() {
      const [count, setCount] = createSignal(0);
      const doubled = computed(() => count() * 2);
      
      function increment() {
        setCount(count() + 1);
      }
      
      function decrement() {
        setCount(count() - 1);
      }
      
      return h('div', { class: 'counter' },
        h('h1', null, 'Pulse Counter'),
        h('div', { class: 'count' }, count),
        h('div', { class: 'buttons' },
          h('button', { onClick: decrement }, '-'),
          h('button', { onClick: increment }, '+')
        ),
        h('div', { class: 'doubled' }, `Doubled: ${doubled}`)
      );
    }
    
    render(Counter, '#app');
  </script>
</body>
</html>
```

## 开发

### 构建

```bash
npm run build
```

### 开发模式

```bash
npm run dev
```

### 测试

```bash
npm test
```

## 许可证

MIT
