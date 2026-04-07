### Gio Tools
- go tool
- gofmt
- godoc

### go mod
- configure local enviromen like a **env in python**
### = or :=
- := declare or assign
- Work inside a function, or recive returning values
- We can use if it is at least a new variable.
- Create
```
✅
x := 10
var x int = 10
x, y := 1, 2
```
- = assign
- update
```
// ✅
var x int
x = 10
// ❌
var x int
x = 10
```
### Anonymous function
- Dont reasign the create anonymous function. it is a nasty byg.⭐
- after the execution it will desapper.


### Defer keyword
- Wait the root function end up to recover the return data and return in FIFO order.
```
func test() {
	defer fmt.Println("A")
	defer fmt.Println("B")
	defer fmt.Println("C")
}
// ouput C B A
```
- The a2 function before this version of go, the `fmt.Print` return the last value of i, in this case will be 2, but this bug will be fix it.
- The a3 was a solution to this, but now it is not necesary.

### Pointers
- It is not for amateur programmers.
- We declare a parameter pointer like this `x *int` and passing like `&value`. To tell the function to return a pointer is like this `*int` `*type/class/..`, also when we recibe a pointer to transform the pointer in primitive or type structure is like this `*returnedPointer`.