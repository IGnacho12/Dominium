const btns = document.querySelectorAll(".obtener");
const cuadroDeDisculpa = document.getElementById("cuadroDeDisculpa");
const precios = document.querySelectorAll(".precio");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        cuadroDeDisculpa.classList.toggle("cuadro-de-disculpas");
        precios.forEach(precio => precio.classList.toggle("no-i"));
    });
});

cuadroDeDisculpa.addEventListener("click", () => {
    cuadroDeDisculpa.classList.remove("cuadro-de-disculpas");
    precios.forEach(precio => precio.classList.remove("no-i"));
});
