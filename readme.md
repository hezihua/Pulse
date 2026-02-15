# Pulse Monorepo

Pulse是一个类似SolidJS的UI框架，使用Signals进行响应式状态管理，直接操作DOM而不使用虚拟DOM。

## 项目结构

```
Pulse/
├── packages/
│   ├── core/        # 核心框架实现
│   └── website/     # 示例网站
├── docs/
│   ├── api/         # API参考文档
│   └── tutorials/   # 教程文档
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── pnpm-workspace.yaml
└── readme.md
```

## 核心项目

### @pulse/core

核心UI框架，提供以下功能：
- 响应式状态管理（Signals）
- 无虚拟DOM渲染
- 组件系统
- 生命周期管理
- JSX支持

### @pulse/website

示例网站，展示如何使用@pulse/core框架构建应用。

## 文档

- [API参考](./docs/api/README.md) - 详细的API文档
- [教程](./docs/tutorials/README.md) - 从入门到进阶的教程
- [贡献指南](./CONTRIBUTING.md) - 如何为项目贡献代码

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 构建项目

```bash
# 构建核心框架
pnpm build

# 构建所有项目
pnpm build:all
```

### 开发模式

```bash
# 启动核心框架的开发模式
pnpm dev

# 启动网站的开发模式
pnpm dev:website
```

### 运行测试

```bash
pnpm test
```

## 许可证

MIT
