// NotImplicitAny
function add(a: number, b: number) {
  return a + b;
}

add(10, null);

// StrickNullChecks
const x22: number = null;

const statusEl = document.getElementById('status');

if (statusEl) {
  statusEl.textContent = 'Ready';  // OK, null has been excluded
}
statusEl!.textContent = 'Ready'; 

// noUncheckedIndexedAccess
const arr: string[] = ["hello2","hello","hello"];
arr[1].toUpperCase();