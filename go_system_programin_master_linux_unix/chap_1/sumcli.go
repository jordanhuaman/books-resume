package main

import (
	"fmt"
	"os"
	"strconv"
)

func sumcli() {
	arguments := os.Args
	sum := 0

	for i := 1; i < len(arguments); i++ {
		tem, _ := strconv.Atoi(arguments[i])
		sum = sum + tem
	}

	fmt.Println("Sum: ", sum)

}
