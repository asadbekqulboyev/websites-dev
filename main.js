import "./base.css";
import Swiper from 'swiper';
import { Navigation, } from "swiper/modules";
import 'swiper/css';
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
tippy("[data-tippy-content]");
const swiper = new Swiper('.swiper-container',{
  modules: [Navigation],
  navigation: {
    nextEl: '.next_btn',
    prevEl: '.prev_btn',
  },
})
const lightModeButton = document.getElementById('lightMode');
const darkModeButton = document.getElementById('darkMode');
const rootElement = document.documentElement;
lightModeButton.addEventListener('click', () => {
  rootElement.classList.remove('dark');   
  localStorage.setItem('theme', 'light'); 
});

darkModeButton.addEventListener('click', () => {
  rootElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
});
if (localStorage.getItem('theme') === 'dark') {
  rootElement.classList.add('dark');
} else {
  rootElement.classList.remove('dark');
}


window.onload = function () {
  const scrollContainer = document.querySelector('.load');
  const progressCircle = document.querySelector('.progress-circle');
const radius = 40;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;
const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
const updateProgress = () => {
  const scrollTop = scrollContainer.scrollTop;
  const scrollProgress = scrollTop / maxScroll;
  const offset = circumference - scrollProgress * circumference;
  progressCircle.style.strokeDashoffset = offset;
  scrollContainer.scrollTo({
    top: maxScroll,
    behavior: 'smooth', 
  });
  if (scrollTop >= maxScroll) {
    clearInterval(interval); 
  }

};

const interval = setInterval(updateProgress,100);

};
setTimeout(() => {
  const loadElement = document.querySelector('.loads');
  if (loadElement) {
    loadElement.style.display = 'none';
  }
}, 3000);

let hamburger = document.querySelector('.hamburger'),
mobile_link=document.querySelector('.mobile_link')
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active')
  mobile_link.classList.toggle('active')
})