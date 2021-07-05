import { createSignal } from "solid-js";
import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const Counter: Component = () => {
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

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <Counter />
        <a
          class={styles.link}
          href="https://github.com/ryansolid/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
