### Typescript ✅
- type assertion: `as number`. Sometimes called "cast" -> more on **item 9**
- declared type: `let data: number = 12`
- inferred type: deduces it automatically
- Compile - Build - Runtime

### Avoid ❌
- unsound type -> when we force something to a declared typed, and later change ->  more on **item 48**
- Avoid `any` type -> in overlaod fb 3.5 we use it -> way to avoid this in **item 52**

### Concepts
- Build tool -> node-ts , and more -> somethind it generate **build time overhead** -> to avoid this we can skipt the type check with `transpile only`.
- transpilator: convert code from language to another