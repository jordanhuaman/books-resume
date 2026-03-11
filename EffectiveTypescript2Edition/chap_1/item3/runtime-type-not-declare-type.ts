// ITem 3
// 3.4 Runtime Types May Not Be the Same as Declared Types

/**
 * The default is dead code, typescript dont tell us nothing about it.
 * @param value boolean
 */
function setLightSwith(value: boolean) {
  switch(value){
    case true:
      console.log("Turn on the light");
      break;
    case false:
      console.log("Turn off the light");
      break;
    default:
      console.log("Invalid value");
  }
}

interface LightApiResponse{
  valie: boolean
}

//! Warnint, what happend when the API response is not the same as the declared type?
// This is so-called "unsound" type
async function setLight() {
  const response = await fetch("https://api.example.com/light");
  const result: LightApiResponse = await response.json();
  setLightSwith(result.valie);
}