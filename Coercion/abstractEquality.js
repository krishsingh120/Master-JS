console.log(null == undefined);

console.log(12 == "12");

console.log(false == "0");
/*
x -> boolean -> ToNumber -> false -> 0
x = 0, y = "0"
y -> string -> ToNumber -> "0" -> 0
x = 0, y = 0 , result = true
*/

console.log(null == false);

/*
y -> boolean -> false -> ToNumber -> 0
compare => (null == 0)
return false
*/
