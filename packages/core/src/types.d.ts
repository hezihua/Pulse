import { h } from './render';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
    interface Element extends Node {}
    interface ElementClass {
      render(): Element;
    }
    interface ElementAttributesProperty {
      props: any;
    }
    interface ElementChildrenAttribute {
      children: any;
    }
  }
}

// 告诉TypeScript使用我们的h函数作为JSX工厂
declare module '*.tsx' {
  const Component: any;
  export default Component;
}
