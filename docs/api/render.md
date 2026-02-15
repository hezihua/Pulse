# Render API

Render模块负责将组件渲染到DOM中，并处理DOM的更新。

## render

将组件渲染到指定的容器中。

### 语法

```typescript
function render(component: Component, container: string | Element): void
```

### 参数

- `component` - 组件函数，返回一个DOM节点或字符串
- `container` - 容器选择器（字符串）或DOM元素

### 返回值

无返回值

### 示例

```typescript
import { render, h } from '@pulse/core';

function App() {
  return h('div', null, 'Hello Pulse!');
}

// 使用选择器
render(App, '#app');

// 使用DOM元素
const container = document.getElementById('app');
render(App, container);
```

## h

创建一个DOM元素。

### 语法

```typescript
function h(tag: string, props: Props | null, ...children: Child[]): Node
```

### 参数

- `tag` - 元素标签名，如'div'、'button'等，或'fragment'创建文档片段
- `props` - 元素属性和事件监听器，为null表示无属性
- `...children` - 子元素，可以是字符串、数字、DOM节点、函数或null/undefined

### 返回值

创建的DOM节点

### 示例

```typescript
import { h } from '@pulse/core';

// 创建一个简单的div
const element = h('div', null, 'Hello World');

// 创建一个带属性的button
const button = h('button', { 
  className: 'primary',
  onClick: () => console.log('Clicked!') 
}, 'Click Me');

// 创建一个带子元素的div
const container = h('div', { className: 'container' },
  h('h1', null, 'Title'),
  h('p', null, 'Paragraph')
);

// 使用fragment
const fragment = h('fragment', null,
  h('div', null, 'First'),
  h('div', null, 'Second')
);

// 使用函数作为子元素（响应式）
import { createSignal } from '@pulse/core';

const [count, setCount] = createSignal(0);

const counter = h('div', null,
  h('div', null, count) // 函数会被自动追踪
);
```

## 事件处理

h函数支持通过props传递事件监听器，事件名需要以'on'开头，后面跟事件名的驼峰式写法。

### 示例

```typescript
import { h } from '@pulse/core';

function handleClick() {
  console.log('Button clicked!');
}

function handleMouseOver() {
  console.log('Mouse over!');
}

const button = h('button', {
  onClick: handleClick,
  onMouseOver: handleMouseOver
}, 'Hover Me');
```

## 样式处理

h函数支持通过props传递样式对象。

### 示例

```typescript
import { h } from '@pulse/core';

const styledDiv = h('div', {
  style: {
    color: 'blue',
    fontSize: '16px',
    margin: '10px'
  }
}, 'Styled Text');
```

## 响应式子元素

当h函数的子元素是一个函数时，它会被视为一个响应式表达式，Pulse会自动追踪其依赖并在依赖变化时更新DOM。

### 示例

```typescript
import { h, createSignal, computed } from '@pulse/core';

const [count, setCount] = createSignal(0);
const doubled = computed(() => count() * 2);

const counter = h('div', null,
  h('div', null, 'Count: ', count),
  h('div', null, 'Doubled: ', doubled),
  h('button', { onClick: () => setCount(count() + 1) }, '+')
);
```
