const button = document.querySelector(".btn");
console.log(button);

button.addEventListener("click", () => {
	let word_1 = document.querySelector("#i-1").value;
	let word_2 = document.querySelector("#i-2").value;
	let outs = document.querySelectorAll(".info-item");

	outs.forEach(item => item.classList.remove('active'));

	if (word_1.length === 0 || word_2.length === 0) return;

	let result =
		word_1.length == word_2.length &&
		word_1.split("").sort().join("").toLowerString == word_2.split("").sort().join("").toLowerString;

	if (result) {
		outs[0].classList.add("active");
	} else {
		outs[1].classList.add("active");
	}
});
