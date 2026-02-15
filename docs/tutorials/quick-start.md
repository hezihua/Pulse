# 快速开始

本教程将帮助您搭建Pulse框架的开发环境并创建第一个应用。

## 前提条件

- Node.js 16.0 或更高版本
- npm 7.0 或更高版本，或 pnpm 6.0 或更高版本

## 步骤 1: 初始化项目

使用Vite创建一个新的项目（Vite是一个现代的前端构建工具）：

```bash
# 使用npm
npm create vite@latest my-pulse-app -- --template vanilla-ts

# 或使用pnpm
pnpm create vite my-pulse-app --template vanilla-ts

# 进入项目目录
cd my-pulse-app
```

## 步骤 2: 安装Pulse

```bash
# 使用npm
npm install @pulse/core

# 或使用pnpm
pnpm add @pulse/core
```

## 步骤 3: 配置JSX

修改`vite.config.ts`文件，添加JSX配置：

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
```

## 步骤 4: 创建第一个应用

修改`src/main.ts`文件：

```typescript
import { createSignal, render, h, Fragment } from '@pulse/core';

function App() {
  const [count, setCount] = createSignal(0);
  
  return (
    <div>
      <h1>Hello Pulse!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <button onClick={() => setCount(count() - 1)}>Decrement</button>
    </div>
  );
}

render(App, '#app');
```

修改`index.html`文件，确保有一个id为`app`的元素：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pulse App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

## 步骤 5: 运行应用

```bash
# 使用npm
npm run dev

# 或使用pnpm
pnpm dev
```

在浏览器中打开显示的URL（通常是 http://localhost:5173/），您应该能看到一个简单的计数器应用。

## 步骤 6: 构建应用

```bash
# 使用npm
npm run build

# 或使用pnpm
pnpm build
```

构建产物将生成在`dist`目录中。

## 下一步

- 学习[计数器应用](./counter-app.md)教程，深入了解Signals的使用
- 查看[API参考](../api/README.md)，了解所有可用的API
- 探索[组件通信](./component-communication.md)，学习组件之间如何交互
