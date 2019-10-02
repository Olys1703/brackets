module.exports = function check(str, bracketsConfig) {
  // my solution
  //check length valid
  if (str.length === 0) {
    return true;
}
  if (str.length === 1)
    return false
  
  let i, j, buf, bracket, eq_brack, res, ident_trig
  let stack = []

  

  for (i = 0; i<str.length; i++) {
        bracket = str[i]
        eq_brack = false
        ident_trig = false
    for (j = 0; j<bracketsConfig.length; j++) {
      if (bracket == bracketsConfig[j][1]) {
          eq_brack = true
          buf = j

        if (bracket == bracketsConfig[j][0]) {
          ident_trig = true
        }
        break
        }
    }
    if (eq_brack) {
      if (ident_trig) {
          if (bracket == stack[stack.length-1]){
            stack.pop()
          }
          else {
            stack.push(bracket)
          }
      }
      else {
        if (stack.lenght == 0 || bracketsConfig[buf][0] != stack.pop()) {
          return false
        }
      }
    }
    else {
      stack.push(bracket)
    }
  }
  res = (stack.length == 0)
 return (res)
}
