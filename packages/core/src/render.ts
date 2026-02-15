import { effect } from './signals';

type Component = () => string | Node | null | undefined;
type Props = Record<string, any>;
type Child = string | number | Node | (() => string | number) | null | undefined;

export function render(component: Component, container: string | Element): void {
  const root = typeof container === 'string' ? document.querySelector(container) : container;
  if (!root) throw new Error(`Container ${container} not found`);
  
  // 首次渲染时调用组件，获取初始结果
  const result = component();
  
  function mount(): void {
    if (typeof result === 'string') {
      root!.textContent = result;
    } else if (result instanceof Node) {
      root!.innerHTML = '';
      root!.appendChild(result);
    }
  }
  
  effect(mount);
}

export function h(tag: string, props: Props | null, ...children: Child[]): Node {
  if (tag === 'fragment') {
    const fragment = document.createDocumentFragment();
    
    children.forEach(child => {
      if (child === null || child === undefined) return;
      if (typeof child === 'string' || typeof child === 'number') {
        fragment.appendChild(document.createTextNode(child.toString()));
      } else if (child instanceof Node) {
        fragment.appendChild(child);
      } else if (typeof child === 'function') {
        let currentNode: Node | null = null;
        effect(() => {
          const result = child();
          if (typeof result === 'string' || typeof result === 'number') {
            const textNode = document.createTextNode(result.toString());
            if (currentNode) {
              fragment.replaceChild(textNode, currentNode);
            } else {
              fragment.appendChild(textNode);
            }
            currentNode = textNode;
          }
        });
      }
    });
    
    return fragment;
  }
  
  const element = document.createElement(tag);
  
  if (props) {
    Object.keys(props).forEach(key => {
      if (key.startsWith('on')) {
        const eventName = key.slice(2).toLowerCase();
        element.addEventListener(eventName, props[key]);
      } else if (key === 'style' && typeof props[key] === 'object') {
        Object.assign(element.style, props[key]);
      } else if (key === 'className') {
        element.setAttribute('class', props[key]);
      } else {
        element.setAttribute(key, props[key]);
      }
    });
  }
  
  children.forEach(child => {
    if (child === null || child === undefined) return;
    if (typeof child === 'string' || typeof child === 'number') {
      element.appendChild(document.createTextNode(child.toString()));
    } else if (child instanceof Node) {
      element.appendChild(child);
    } else if (typeof child === 'function') {
      let currentNode: Node | null = null;
      effect(() => {
        const result = child();
        if (typeof result === 'string' || typeof result === 'number') {
          const textNode = document.createTextNode(result.toString());
          if (currentNode) {
            element.replaceChild(textNode, currentNode);
          } else {
            element.appendChild(textNode);
          }
          currentNode = textNode;
        }
      });
    }
  });
  
  return element;
}
