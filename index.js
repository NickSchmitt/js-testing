const chai = require("chai");
const assert = require("chai").assert;

let name = "Nick";
let age = 28;
let isCool = true;
const object = {
	class: "SEI 111",
	company: "General Assembly"
};

const array = [1, 2, 3];

const add = (num1, num2) => num1+num2;

module.exports = {
	name,
	age,
	isCool,
	object,
	add,
	array
}
