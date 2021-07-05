import type { Component } from "solid-js";
import { createSignal } from "solid-js";

export const Counter: Component = () => {
  const [counter, setCounter] = createSignal(0);
  return (
    <p class="flex flex-row w-44 justify-center items-center mt-4">
      <span>Counter {counter()}</span>
      <button
        class="btn btn-green"
        type="button"
        onClick={() => setCounter(counter() + 1)}
      >
        +
      </button>
      <button
        class="btn btn-red"
        type="button"
        onclick={() => setCounter(counter() - 1)}
      >
        -
      </button>
    </p>
  );
};
