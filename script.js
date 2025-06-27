// // let a = 4;

// // let b = 3;

// // let c = a + Number(b);

// // console.log(c);

// // let d = a - b;

// // console.log(d);

// // let e = a * b;

// // console.log(e);

// // let f = a / b;

// // console.log(f);

// // let g = a ** b;

// // let h = a % b;

// // console.log(h);

// let randomSon = Math.floor(Math.random() * 100);

// console.log(randomSon);

// let son = -100.8;

// console.log(Math.floor(son));

// // floor nuqtadan oldingi sonni chiqarib beradi

// console.log(Math.ceil(son));

// // ceil nuqtadan oldingi sondan 1 ta katta  sonni chiqarib beradi

// console.log(Math.round(son));

// // round nuqtadan keyingi songa qarab yaxlitlab chiqarib beradi

// console.log(Math.trunc(son));

// // trunc nuqtadan keyingi sondan 1 ta kichik sonni chiqarib beradi






alert("Hozir sizga random son chiqariladi");

let randomSon = Math.floor(Math.random() * 100)

alert(`Sizga chiqarilgan random son: ${Math.floor(randomSon)}`);

let result = confirm(`Biz random sonni 2ga bo'lmohchimiz va ko'paytirmohchimiz!`)

if(result){
    alert(`Random orqali chiqqan son ${randomSon}: \n biz uni 2ga ko'paytirib ${randomSon * 2} sonini chiqardik \n va 2ga bo'lib ${randomSon / 2} sonini chiqardik\n va shu sonni 3ga bo'lingandagi qoldiq ${randomSon / 3} sonini chiqardik`)
}
else{

}



