import { h } from './render';

export function jsx(type: string, props: any, key?: string | null) {
  return h(type, props);
}

export function jsxs(type: string, props: any, key?: string | null) {
  return h(type, props);
}

export function Fragment(props: any) {
  return h('fragment', props);
}
