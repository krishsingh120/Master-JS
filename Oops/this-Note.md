# 🔥 this in JavaScript --- Clean Notes

------------------------------------------------------------------------

## 1️⃣ Global Scope

### 🟢 In Node.js

``` js
console.log(this);
```

👉 Output: `{}` (empty object)\
Because in Node.js, top-level `this` refers to `module.exports`.

------------------------------------------------------------------------

### 🌐 In Browser

``` js
console.log(this);
```

👉 Output: `window` object\
Because in browser, global `this` = `window`.

------------------------------------------------------------------------

## 2️⃣ Inside a Normal Function

``` js
function hello() {
  console.log(this);
}

hello();
```

### 🔹 Non-strict mode:

-   Browser → `window`
-   Node → `global`

### 🔹 Strict mode:

``` js
"use strict";

function hello() {
  console.log(this);
}

hello();
```

👉 `this` → `undefined`

📌 **Interview Tip:**\
Normal function → `this` depends on how it is called.

------------------------------------------------------------------------

## 3️⃣ Inside an Object Method

``` js
let obj = {
  name: "hello",
  sayHello: function () {
    console.log(this);
  },
};

obj.sayHello();
```

👉 Output: `obj`

✔ When function is called as a method → `this` refers to that object.

------------------------------------------------------------------------

## 4️⃣ Inside Event Listener

``` js
document.querySelector("h1").addEventListener("click", function () {
  console.log(this);
});
```

👉 `this` refers to the element on which event is attached\
In this case → `<h1>` element

📌 Arrow function here would NOT give element as `this`.

------------------------------------------------------------------------

# 5️⃣ call(), apply(), bind()

These methods manually control `this`.

------------------------------------------------------------------------

## 🟢 call()

### Syntax:

``` js
func.call(thisArg, arg1, arg2, ...)
```

### Example:

``` js
let user = {
  name: "krish",
  age: 22,
};

function hey() {
  console.log(this);
}

hey.call(user);
```

👉 `this` becomes `user`

✔ Executes immediately\
✔ First argument = `this`\
✔ Remaining arguments = normal parameters

------------------------------------------------------------------------

## 🟢 apply()

### Syntax:

``` js
func.apply(thisArg, [arg1, arg2])
```

✔ Same as call\
✔ Only difference → arguments passed as array

------------------------------------------------------------------------

## 🟢 bind()

### Syntax:

``` js
const newFunc = func.bind(thisArg);
```

### Example:

``` js
let res = hey.bind({ name: "parth" });

res();
```

✔ Does NOT execute immediately\
✔ Returns a new function\
✔ `this` permanently bound

------------------------------------------------------------------------

# 🔥 Difference Summary

  Feature                call              apply   bind
  ---------------------- ----------------- ------- -----------------
  Executes immediately   ✅                ✅      ❌
  Returns new function   ❌                ❌      ✅
  Arguments              Comma separated   Array   Comma separated

------------------------------------------------------------------------

# ⚠ Important Edge Cases

## 1️⃣ Arrow Functions

``` js
const obj = {
  name: "Krish",
  greet: () => {
    console.log(this);
  }
};

obj.greet();
```

👉 Arrow functions do NOT have their own `this`\
👉 They take lexical `this`

👉 call/apply/bind do NOT change arrow function `this`.

------------------------------------------------------------------------

## 2️⃣ Strict Mode Difference

``` js
"use strict";

function test() {
  console.log(this);
}

test();
```

👉 Output: `undefined`

------------------------------------------------------------------------

# 🧠 Quick Mental Model

-   Normal function → `this` depends on caller\
-   Method → `this` = object before dot\
-   Event handler → `this` = element\
-   call/apply → run now with custom `this`\
-   bind → create new function with locked `this`\
-   Arrow → `this` fixed from outer scope

------------------------------------------------------------------------

# 🎯 Interview Quick Answers

**Q: Difference between call, apply, bind?**\
→ call & apply execute immediately. bind returns a new function.

**Q: Does bind modify original function?**\
→ No. It returns a new function.

**Q: Can we change arrow function `this` using call?**\
→ No.

**Q: What is `this` in strict mode inside normal function?**\
→ `undefined`.

------------------------------------------------------------------------
