export function format(name: string, number: number): string {
  return `${name}, you are the ${number}${getEnding(number)} customer we serve today. Thank you!`;
}

function getEnding(num: number) {
  var str = num.toString();
  if (str.endsWith("1") && !str.endsWith("11")) {
    return "st";
  }
  else if(str.endsWith("2") && !str.endsWith("12")){
    return "nd";
  }
  else if(str.endsWith("3") && !str.endsWith("13")){
    return "rd";
  }

  return "th";
} 
