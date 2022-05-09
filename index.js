document.getElementById("formulario1").addEventListener("submit",(event)=>{
  event.preventDefault();
  let Input0= document.getElementById("input0");
  let Input1= document.getElementById("input1");
  let Input2= document.getElementById("input2");

  const div = document.createElement("div")
  div.innerHTML = `<div class="card border-primary mb-3 col-4" style="max-width: 18rem; display:flex;" > <div class="card-header">${Input0.value}</div> <div class="card-body text-primary"> <h5 class="card-title">Precio: $${Input1.value}</h5> <p class="card-text">Stock:${Input2.value}</p></div></div>`
  document.body.appendChild(div)
});
