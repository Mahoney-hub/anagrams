const button = document.querySelector(".btn");
console.log(button);

button.addEventListener("click", () => {
	let word_1 = document.querySelector("#i-1").value;
	let word_2 = document.querySelector("#i-2").value;
    let outs = document.querySelectorAll('.info>p');
    console.log(outs);

	console.log(word_1);
	console.log(word_2);

	let result =
		word_1.length != 0 &&
		word_1.length == word_2.length &&
		word_1.split("").sort().join("").toLowerString == word_2.split("").sort().join("").toLowerString;
    
    if (result) outs[0].classList.add('active');
    else outs[1].classList.add('active');
});


