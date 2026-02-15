let currentCleanup: (() => void)[] = [];

type Props = Record<string, any>;
type Component<P extends Props = Props> = (props: P) => string | Node | null | undefined;

export function component<P extends Props = Props>(fn: (props: P) => string | Node | null | undefined): Component<P> {
  let componentResult: string | Node | null | undefined;
  let isMounted = false;
  
  return function(props: P = {} as P): string | Node | null | undefined {
    const prevCleanup = currentCleanup;
    currentCleanup = [];
    
    try {
      if (!isMounted) {
        // 首次渲染时调用组件
        componentResult = fn(props);
        isMounted = true;
      }
      return componentResult;
    } finally {
      currentCleanup = prevCleanup;
    }
  };
}

export function onMount(fn: () => void): void {
  setTimeout(fn, 0);
}

export function onCleanup(fn: () => void): void {
  currentCleanup.push(fn);
}
