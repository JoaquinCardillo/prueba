const email= document.querySelector("#email")
const brand= document.querySelector("#brand")
const model= document.querySelector("#model")
const year= document.querySelector("#year")
const kms= document.querySelector("#kms")
const fuel= document.querySelector("#fuel")
const price= document.querySelector("#price")
const photo= document.querySelector("#photo")

const description= document.querySelector("#description")

const btnAgregar= document.querySelector("#btnAgregar")

btnAgregar.addEventListener('click',function(){
    window.location.href = `agregar/${email.value}/${brand.value}/${model.value}/${kms.value}/${year.value}/${fuel.value}/${price.value}/${photo.value}/${description.value}`

})

