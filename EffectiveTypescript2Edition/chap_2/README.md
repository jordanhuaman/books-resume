## TypeScript’s Type System
### Item 6: Use Your Editor to Interrogate and Explore the Type System
- typescript can generate javascript but the we use it for the **type system**.
- `tsc` and `tsserver`.
### Item 7: Think of Types as Sets of Values
- domain or set of values: typescript chooses the right type for every variable to be transpiled to javascript
- never type: bottom type. example; `const x:never = 12`
- unit types: example; `Type A = 'A'`
- union type: `type AB = 'A' | 'B'`
- At the end of he day, **Much of what the type checker is doing is testing whether one set is a subset of another**
- & operator: `const ps: A & B` it is not an intersection like the aritmetic. union of properties
- | operator: `const ps: A | B`
- unknown: top type