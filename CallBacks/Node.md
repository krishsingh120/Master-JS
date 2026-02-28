# Is `console.log` Part of Native JavaScript?

## ❌ No

`console.log` is **NOT** defined in the ECMAScript specification.

It is provided by: - 🌐 Browser (Web APIs) - 🟢 Node.js runtime

------------------------------------------------------------------------

## 📌 Then Why Does It Execute Immediately?

Because:

The runtime injects `console` into the global object before your code
runs.

So when JS engine executes:

``` js
console.log("Hello");
```

It effectively sees:

``` js
globalThis.console.log("Hello");
```

From the engine's perspective → this is just a normal function call.

And all normal function calls go to the **Call Stack**.

------------------------------------------------------------------------

## 📌 Important Rule

If something is callable and does NOT delegate work outside →\
it runs **synchronously on the Call Stack**.

------------------------------------------------------------------------

# 📌 Example 1 --- Synchronous Execution

``` js
console.log("A");
console.log("B");
```

### Execution Flow:

1.  Push `log("A")` to Call Stack\
2.  Print A\
3.  Pop\
4.  Push `log("B")`\
5.  Print B\
6.  Pop

### ✅ Output:

    A
    B

Because it runs directly on the Call Stack.

------------------------------------------------------------------------

# 📌 Example 2 --- Asynchronous (Contrast)

``` js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

### Execution Flow:

1.  `console.log("A")` → Call Stack → Print\
2.  `setTimeout` → Registered in Web API\
3.  `console.log("C")` → Call Stack → Print\
4.  Timer completes → callback goes to Queue\
5.  Event Loop pushes callback → prints `"B"`

### ✅ Output:

    A
    C
    B

------------------------------------------------------------------------

# 🧠 Core Concept Summary

-   `console.log` is not part of ECMAScript.
-   It is injected by the runtime (Browser / Node).
-   It behaves synchronously because it does not delegate work.
-   `setTimeout` is asynchronous because it delegates to Web APIs.
