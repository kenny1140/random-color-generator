const btn = document.querySelector("#button");
const h2 = document.querySelector("h2");

button.addEventListener('click', () => {
    const newColor = randomColorGen();
    document.body.style.backgroundColor = newColor;
    h2.innerText = newColor;
})

const randomColorGen = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}