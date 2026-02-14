##  Effective TypeScript 83 Specific Ways to Improve Your TypeScript
**Topics:**
`@typescript` `@code` `@programming` `@book`

### Chap-1
- Item 1: Understand the Relationship Between TypeScript and JavaScript
  - All the code that in javascript compile, in typescript always will be compile.
  - Typescript's type system is very much not sound, it never intended to be.
  - Typescript's type system is static(compile time) not in runtime.
  - In runtime javascript is executed.
- Item 2: Know Which TypeScript Options You’re Using
  - `npm install -g typescript`
  - strictNullChecks and noImplicitAny
  - non-null assertion.
  - noUncheckedIndexedAccess
- Item 3: Understand That Code Generation Is Independent of Types
  - typescript show the errors like a warning but it will not stop the compilation
  - > In a nutshell, When the code doenst complie or event does, the compiler will produce an outout but with type check errors.
  - compile () -> build -> runtime
- Item 4: Structural typing
  - The types are not "sealed", we can pass more key.
  - The classes follows a structural type also.
  - Facilitate unit testing.
### Throubles
- When we have many files inside the same folder and also without a tsconfig.json. we get this error when we reppeat the same variable `Cannot redeclare block-scoped variable 'states'.ts(2451)`.
- Happend the same when we start a tsconfig.json with a minimal configuration
  >The issue is that both files lack a module system (no export/import). In TypeScript, files without explicit modules are treated as "scripts" that share a global scope, causing the redeclaration conflict.