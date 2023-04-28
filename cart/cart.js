"use strict"

let infoButton=document.querySelector('#info-page button');
let deliveryButton=document.querySelector('#delivery-page button');

let infoPage=document.getElementById('info-page');
let deliveryPage=document.getElementById('delivery-page');
let paymentPage=document.getElementById('payment-page');

let navInfo=document.getElementById('nav-info')
let navDelivery=document.getElementById('nav-delivery')
let navPayment=document.getElementById('nav-payment')

let pageNum=document.getElementsByClassName('page-num')


deliveryPage.classList.add('hidden')
paymentPage.classList.add('hidden')


infoButton.addEventListener('click',()=>{

  infoPage.classList.add('hidden')
  navInfo.classList.add('in-active')

  deliveryPage.classList.remove('hidden')
  navDelivery.classList.remove('in-active')

 paymentPage.classList.add('hidden')

pageNum[0].classList.remove('bi-1-square-fill')
pageNum[0].classList.add('bi-1-square')

pageNum[1].classList.remove('bi-2-square')
pageNum[1].classList.add('bi-2-square-fill')


})


deliveryButton.addEventListener('click',(e)=>{
 e.preventDefault();
  infoPage.classList.add('hidden')
  navInfo.classList.add('in-active')

  deliveryPage.classList.add('hidden')
  navDelivery.classList.add('in-active')

 paymentPage.classList.remove('hidden')
 navPayment.classList.remove('in-active')

 pageNum[1].classList.remove('bi-2-square-fill')
 pageNum[1].classList.add('bi-2-square')

 pageNum[2].classList.remove('bi-3-square')
 pageNum[2].classList.add('bi-3-square-fill')


})


