// This code is valid for javascript and typescript
const states = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capital: 'Juneau' },
  { name: 'Arizona', capital: 'Phoenix' },
]

for (const state of states) {
  console.log(`The capital of ${state.data}`)
}

// Both will result in "23"
const x = 2 + "3";
const y = "2" + 3 ;

// These are all valid JavaScript, but they may not be what you intended
const a = null + 7; 
const b = [] + 12; 
alert('Hello', 'TypeScript'); 