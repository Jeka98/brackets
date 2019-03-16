module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  for(let i = 0, len = bracketsConfig.length; i < len; i++){
    brackets[i] = bracketsConfig[i].join("");
  }

  for(let i = 0, len = str.length; i < len; i++){
    for(let j = 0, len = brackets.length; j < len; j++){
      if(str.indexOf(brackets[j]) >= 0){
        str = str.slice(0, str.indexOf(brackets[j])) + str.slice(str.indexOf(brackets[j]) + 2);
      }
    }
  }

  return (str.length >= 1) ? false : true;
}
