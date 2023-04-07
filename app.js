"use strict";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragStart = function () {
  console.log("drag start");
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
};

const dragEnd = function () {
  console.log("drag end");
  this.className = "fill";
};

const dragOver = function (e) {
  console.log("drag over");
  e.preventDefault();
};

const dragEnter = function (e) {
  console.log("drag enter");
  e.preventDefault();
  this.className += " hovered";
};

const dragLeave = function () {
  console.log("drag leave");
  this.className += "empty";
};

const dragDrop = function () {
  console.log("drag drop");
  this.className = "empty";
  this.append(fill);
};

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
