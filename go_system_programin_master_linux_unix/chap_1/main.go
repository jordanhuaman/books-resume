package main

import "fmt"

func main() {

	// anomymous function
	square := func(s int) int {
		return s * s
	}
	print(square)

	fmt.Println(minMax(15, 6))
	fmt.Println(namedMinMax(15, 6))
	min, max := namedMinMax(12, -1)
	fmt.Println(min, max)
}
