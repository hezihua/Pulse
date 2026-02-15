# Signals API

Signals是Pulse框架的核心特性，提供了响应式状态管理的能力。

## createSignal

创建一个响应式信号，返回一个包含getter和setter的数组。

### 语法

```typescript
function createSignal<T>(initialValue: T): [() => T, (value: T) => void]
```

### 参数

- `initialValue` - 信号的初始值，类型为T

### 返回值

一个包含两个函数的数组：
1. **getter** - 无参数函数，返回信号的当前值
2. **setter** - 接收一个新值作为参数，更新信号的值并触发依赖更新

### 示例

```typescript
import { createSignal } from '@pulse/core';

// 创建一个数字信号
const [count, setCount] = createSignal(0);

// 获取当前值
console.log(count()); // 输出: 0

// 更新值
setCount(1);
console.log(count()); // 输出: 1

// 创建一个对象信号
const [user, setUser] = createSignal({ name: 'John', age: 30 });

// 获取当前值
console.log(user()); // 输出: { name: 'John', age: 30 }

// 更新值
setUser({ name: 'Jane', age: 25 });
console.log(user()); // 输出: { name: 'Jane', age: 25 }
```

## effect

创建一个副作用函数，当依赖的信号变化时自动重新执行。

### 语法

```typescript
function effect(fn: () => void): void
```

### 参数

- `fn` - 副作用函数，会在依赖的信号变化时重新执行

### 返回值

无返回值

### 示例

```typescript
import { createSignal, effect } from '@pulse/core';

const [count, setCount] = createSignal(0);

// 创建一个副作用，当count变化时执行
effect(() => {
  console.log(`Count changed to: ${count()}`);
});

// 输出: Count changed to: 0

setCount(1);
// 输出: Count changed to: 1

setCount(2);
// 输出: Count changed to: 2
```

## computed

创建一个计算信号，基于其他信号的值计算得出。

### 语法

```typescript
function computed<T>(fn: () => T): () => T
```

### 参数

- `fn` - 计算函数，基于其他信号的值计算得出新值

### 返回值

一个getter函数，返回计算结果

### 示例

```typescript
import { createSignal, computed } from '@pulse/core';

const [count, setCount] = createSignal(0);

// 创建一个计算信号，计算count的两倍
const doubled = computed(() => count() * 2);

// 获取计算结果
console.log(doubled()); // 输出: 0

// 更新依赖的信号
setCount(1);
console.log(doubled()); // 输出: 2

setCount(2);
console.log(doubled()); // 输出: 4
```

## 依赖追踪

Pulse的依赖追踪系统是自动的，当你在effect或computed中调用信号的getter时，系统会自动追踪这些依赖。当依赖的信号变化时，相关的effect和computed会自动重新执行。

### 示例

```typescript
import { createSignal, effect, computed } from '@pulse/core';

const [a, setA] = createSignal(1);
const [b, setB] = createSignal(2);

// 创建一个计算信号，依赖a和b
const sum = computed(() => {
  console.log('Computing sum...');
  return a() + b();
});

// 创建一个副作用，依赖sum
 effect(() => {
  console.log(`Sum is: ${sum()}`);
});

// 输出:
// Computing sum...
// Sum is: 3

// 更新a，触发依赖更新
setA(3);
// 输出:
// Computing sum...
// Sum is: 5

// 更新b，触发依赖更新
setB(4);
// 输出:
// Computing sum...
// Sum is: 7
```
