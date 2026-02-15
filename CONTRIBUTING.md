# 贡献指南

感谢您对Pulse项目的兴趣！我们欢迎来自社区的贡献，无论是bug修复、功能添加还是文档改进。

## 开发环境设置

### 1. 克隆仓库

```bash
git clone https://github.com/your-username/pulse-ui.git
cd pulse-ui
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 构建项目

```bash
# 构建核心框架
pnpm build

# 构建所有项目
pnpm build:all
```

### 4. 运行测试

```bash
pnpm test
```

## 开发流程

### 1. 创建分支

从`main`分支创建一个新分支来进行您的工作：

```bash
git checkout -b feature/your-feature-name
```

或

```bash
git checkout -b fix/your-bug-fix
```

### 2. 编写代码

- 遵循项目的代码风格
- 添加适当的测试
- 更新相关文档

### 3. 运行测试

确保所有测试都通过：

```bash
pnpm test
pnpm typecheck
```

### 4. 提交代码

使用语义化的提交信息：

```bash
git add .
git commit -m "feat: add new feature"
```

或

```bash
git commit -m "fix: resolve bug"
```

### 5. 推送分支

```bash
git push origin feature/your-feature-name
```

### 6. 创建Pull Request

1. 访问GitHub仓库
2. 点击"Pull requests"选项卡
3. 点击"New pull request"
4. 选择您的分支与目标分支（通常是main）
5. 填写PR描述，包括：
   - 您的更改内容
   - 更改的原因
   - 任何相关的issue
6. 点击"Create pull request"

## 代码风格

- 使用TypeScript编写代码
- 遵循ESLint和Prettier的规则
- 保持代码简洁明了
- 添加适当的注释

## 报告Bug

如果您发现了bug，请在GitHub上创建一个issue，包含以下信息：

- 问题的详细描述
- 重现步骤
- 预期行为
- 实际行为
- 环境信息（操作系统、浏览器版本等）
- 可能的解决方案（如果有）

## 提出新功能

如果您有新功能的想法，请在GitHub上创建一个issue，包含以下信息：

- 功能的详细描述
- 功能的使用场景
- 可能的实现方法
- 任何相关的参考资料

## 行为准则

我们希望所有参与者都能保持尊重和专业的态度。请：

- 尊重他人的意见和贡献
- 建设性地提出批评
- 专注于项目的最佳利益
- 帮助新参与者融入社区

## 许可证

通过贡献代码，您同意您的贡献将在MIT许可证下发布。

---

再次感谢您的贡献！我们期待看到您的创意和努力如何帮助Pulse成长。
