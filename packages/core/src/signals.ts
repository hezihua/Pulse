let currentEffect: (() => void) | null = null;

class Signal<T> {
  private _value: T;
  private _dependents: Set<() => void>;

  constructor(value: T) {
    this._value = value;
    this._dependents = new Set();
  }

  get(): T {
    if (currentEffect) {
      this._dependents.add(currentEffect);
    }
    return this._value;
  }

  set(value: T): void {
    if (this._value === value) return;
    this._value = value;
    this._dependents.forEach(effect => effect());
  }
}

export function createSignal<T>(initialValue: T): [() => T, (value: T) => void] {
  const signal = new Signal<T>(initialValue);
  return [
    () => signal.get(),
    (value: T) => signal.set(value)
  ];
}

export function effect(fn: () => void): void {
  const execute = () => {
    currentEffect = execute;
    try {
      fn();
    } finally {
      currentEffect = null;
    }
  };
  execute();
}

export function computed<T>(fn: () => T): () => T {
  const [value, setValue] = createSignal<T>(fn() as T);
  effect(() => setValue(fn()));
  return value;
}
