// ITem 3
// 3.5 You Cannot Overload a Function Based on TypeScript Types

/**
 * ❌ When this code compile to javascript, both function will be the same. 
 * @returns  
 */
// function add(a: string, b: string) { return a + b; }
// function add(a: number, b: number) { return a + b; }

/**
 * ✅❌ Typescript provide a solution for this problem, we can use function overloads to achieve the same result.
 * There are a better way in item 52
 * @param a string or number
 * @param b string or number
 */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: boolean, b: boolean): boolean;
function add(a: any, b: any) {
  return a + b;
}

const retunr = add("1", "2");
console.log(retunr);