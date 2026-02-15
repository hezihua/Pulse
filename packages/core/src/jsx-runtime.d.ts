import { h } from './render';

export function jsx(type: string, props: any, key?: string): ReturnType<typeof h>;
export function jsxDEV(type: string, props: any, key?: string): ReturnType<typeof h>;
export function Fragment(props: { children: any }): ReturnType<typeof h>;
