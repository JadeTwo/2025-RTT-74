import { createElementX } from "./utility.js";
import { Fruit } from "./utility2.js";

const body = document.body;

const fruit = new Fruit('banana');

body.appendChild(createElementX('p')).textContent = fruit.getType();