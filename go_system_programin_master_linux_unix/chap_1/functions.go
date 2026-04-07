package main

//? body variable definition.
func unnameMinMax(x, y int) (int, int) {
	if x > y {
		min := y
		max := x
		return min, max
	} else {
		min := x
		max := y
		return min, max
	}
}

//? defining scoped variable
func minMax(x, y int) (min, max int) {

	if x > y {
		min = y
		max = x
	} else {
		min = x
		max = y
	}

	return min, max
}

//? Explcit definition
func namedMinMax(x, y int) (min, max int) {

	if x > y {
		min = y
		max = x
	} else {
		min = x
		max = y
	}

	return
}

//? Shortest vertion, not temporary variable
func sort(x, y int) (int, int) {
	if x > y {
		return x, y
	} else {
		return y, x
	}
}
