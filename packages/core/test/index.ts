import { createSignal, effect, computed } from '../src/index';

console.log('Testing Signal functionality...');

// Test 1: Basic signal functionality
const [count, setCount] = createSignal(0);
let effectCount = 0;

effect(() => {
  effectCount++;
  console.log(`Count changed: ${count()}`);
});

setCount(1);
setCount(2);
setCount(2); // Should not trigger effect

console.log(`Effect ran ${effectCount} times (expected: 3)`);

// Test 2: Computed signal
const doubled = computed(() => count() * 2);
let doubledEffectCount = 0;

effect(() => {
  doubledEffectCount++;
  console.log(`Doubled count: ${doubled()}`);
});

setCount(3);
setCount(4);

console.log(`Doubled effect ran ${doubledEffectCount} times (expected: 3)`);

console.log('All tests completed!');
