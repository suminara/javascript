"" + 1 + 0 // 1   //"10"
"" - 1 + 0 // NaN    //-1
true + false //true   //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 // 2
"4px" - 2 //NaN
7 / 0 //undefined  //infinity
"  -9  " + 5 //-95    //"  -9  5"
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //undefined   //NaN
" \t \n" - 2 //NaN     //-2



let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(+a + +b); // 12



5 > 4 //false
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false