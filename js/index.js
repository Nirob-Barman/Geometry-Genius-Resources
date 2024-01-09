let increment = 0;

// document.getElementById('first-calculation').addEventListener('click', function () {

//     increment +=1;

//     const geometryName = document.getElementById('first-geometry-name').innerText;
//     const base = document.getElementById('first-first-operand').value;
//     const height = document.getElementById('first-second-operand').value;
//     // console.log(geometryName, base, height);
//     area = (0.5 * base * height).toFixed(2);

//     displayData(geometryName, base, height, area);
// })

function displayData(geometryName, a, b, area) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${increment}</td>
        <td>${geometryName}</td>
        <td>${area}cm<sup>2</sup></td>
        <td><button style="border-radius: 10px; color: white; padding: 15px 30px; background-color: blue;">Convert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}

function multiplyArea(a, b, c) {
    return ((parseFloat(a) * parseFloat(b) * parseFloat(c)).toFixed(2));
}

function validation(a, b) {
    if (isNaN(a) || isNaN(b) || a == '' || b == '' || a <= 0 || b <= 0) {
        return alert("please enter any valid number");
    }
    else {
        increment += 1;
        return true;
    }
}

// first calculation
document.getElementById('first-calculation').addEventListener('click', function (event) {



    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const geometryName = event.target.parentNode.parentNode.children[0].innerText;
    // const base = event.target.parentNode.parentNode.children[2].innerText;
    const a = event.target.parentNode.parentNode.children[2].children[0].value;
    const b = event.target.parentNode.parentNode.children[2].children[1].value;

    if (validation(a, b)) {
        const c = 0.5;
        const area = multiplyArea(a, b, c);
        // console.log(area);
        displayData(geometryName, a, b, area);
    }

    // validation(a, b);

    // const area = (parseInt(a) * parseInt(b)).toFixed(2);

})

// second calculation
document.getElementById('second-calculation').addEventListener('click', function (event) {



    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const geometryName = event.target.parentNode.parentNode.children[0].innerText;
    // const base = event.target.parentNode.parentNode.children[2].innerText;
    const a = event.target.parentNode.parentNode.children[2].children[0].value;
    const b = event.target.parentNode.parentNode.children[2].children[1].value;
    if (validation(a, b)) {
        const c = 1;
        const area = multiplyArea(a, b, c);
        // console.log(area);
        displayData(geometryName, a, b, area);
    }
    // console.log(base, height);
    // const area = (parseInt(a) * parseInt(b)).toFixed(2);
})

// third calculation
document.getElementById('third-calculation').addEventListener('click', function (event) {



    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const geometryName = event.target.parentNode.parentNode.children[0].innerText;
    // const base = event.target.parentNode.parentNode.children[2].innerText;
    const a = event.target.parentNode.parentNode.children[2].children[0].value;
    const b = event.target.parentNode.parentNode.children[2].children[1].value;


    if (validation(a, b)) {
        const c = 1;
        const area = multiplyArea(a, b, c);
        // console.log(area);
        displayData(geometryName, a, b, area);
    }

})
// fourth calculation
document.getElementById('fourth-calculation').addEventListener('click', function (event) {



    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const geometryName = event.target.parentNode.parentNode.children[0].innerText;
    // const base = event.target.parentNode.parentNode.children[2].innerText;
    const a = event.target.parentNode.parentNode.children[2].children[0].value;
    const b = event.target.parentNode.parentNode.children[2].children[1].value;
    // console.log(base, height);
    if (validation(a, b)) {
        const c = 0.5;
        const area = multiplyArea(a, b, c);
        // console.log(area);
        displayData(geometryName, a, b, area);
    }
})
// fifth calculation
document.getElementById('fifth-calculation').addEventListener('click', function (event) {



    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const geometryName = event.target.parentNode.parentNode.children[0].innerText;
    // const base = event.target.parentNode.parentNode.children[2].innerText;
    const a = event.target.parentNode.parentNode.children[2].children[0].value;
    const b = event.target.parentNode.parentNode.children[2].children[1].value;
    // console.log(base, height);
    if (validation(a, b)) {
        const c = 0.5;
        const area = multiplyArea(a, b, c);
        // console.log(area);
        displayData(geometryName, a, b, area);
    }
})
// last calculation
document.getElementById('last-calculation').addEventListener('click', function (event) {



    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const geometryName = event.target.parentNode.parentNode.children[0].innerText;
    // const base = event.target.parentNode.parentNode.children[2].innerText;
    const a = event.target.parentNode.parentNode.children[2].children[0].value;
    const b = event.target.parentNode.parentNode.children[2].children[1].value;
    // console.log(base, height);

    if (validation(a, b)) {
        const c = Math.PI;
        const area = multiplyArea(a, b, c);
        // console.log(area);
        displayData(geometryName, a, b, area);
    }
})

// random background color
function randomcolor() {
    return Math.floor(Math.random() * 255);
}

const divElem = document.getElementById("first");

divElem.addEventListener('mouseover', () => {
    divElem.style.backgroundColor = 'rgba(' + randomcolor() + ',' + randomcolor()  + ',' + randomcolor() + '\)'
})


const secondBackground = document.getElementById("second");
secondBackground.addEventListener('mouseover', () => {
    secondBackground.style.backgroundColor = 'rgba(' + randomcolor() + ',' + randomcolor()  + ',' + randomcolor() + '\)'
})

const thirdBack = document.getElementById("third");
thirdBack.addEventListener('mouseover', () => {
    thirdBack.style.backgroundColor = 'rgba(' + randomcolor() + ',' + randomcolor()  + ',' + randomcolor() + '\)'
})

const fourthBack = document.getElementById("fourth");
fourthBack.addEventListener('mouseover', () => {
    fourthBack.style.backgroundColor = 'rgba(' + randomcolor() + ',' + randomcolor()  + ',' + randomcolor() + '\)'
})

const fifthback = document.getElementById("fifth");
fifthback.addEventListener('mouseover', () => {
    fifthback.style.backgroundColor = 'rgba(' + randomcolor() + ',' + randomcolor()  + ',' + randomcolor() + '\)'
})

const lastBack = document.getElementById("last");
lastBack.addEventListener('mouseover', () => {
    lastBack.style.backgroundColor = 'rgba(' + randomcolor() + ',' + randomcolor()  + ',' + randomcolor() + '\)'
})
