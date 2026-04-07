package main

import (
	"fmt"
	"os"
)

func cli() {
	arguments := os.Args

	for i := 0; i < len(arguments); i++ {
		fmt.Println(arguments[i])
	}
}
