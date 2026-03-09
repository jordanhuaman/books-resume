// Item 6: Use Your Editor to Interrogate and Explore the Type System

/**
 * But Oddle enough, in typescript null is a 'object'.
 * @param elorId 
 * @returns 
 */

function getElement(elorId: string | HTMLElement | null): HTMLElement {
  if (typeof elorId === 'object') {
    return elorId;
  } else if (typeof elorId === null) {
    return document.body;
  }
  return document.getElementById(elorId);
}

/**
 * We can fix that place the null check before the object check.
 * @param elorId 
 * @returns 
 */
function getElement2(elorId: string | HTMLElement | null): HTMLElement {
  if (elorId === null) {
    return document.body;
  } else if (typeof elorId === 'object') {
    return elorId;
  }

  const el = document.getElementById(elorId);
  if (!el) {
    throw new Error(`Could not find element with id ${elorId}`);
  }
  return el;
}

/**
 * F2 to refactor the code inside the for loop, like the ´i´
 */
let i = 0;
for (let i = 0; i < 10; i++) {
  console.log(i);
  {
    let i = 12;
    console.log(i);
  }
}
console.log(i);