// Xử lý click vào ngôn ngữ
let lang = document.querySelector("#language");
let lang_option = document.querySelector(".language_option");

let dem = 0;
lang.onclick = function () {
  dem++;
  if (dem % 2 !== 0) {
    lang_option.style.display = "block";
  } else {
    lang_option.style.display = "none";
    dem = 0;
  }
};

// LOADING Animte

// let preload=document.getElementById('Loaded');

// window.addEventListener('load',function(){
//   preload.style.display='none';
// })

// Xử lý thay đổi number khi click prev next

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

// console.log(listSlider);
let number = document.querySelector(".number>span");

let temp = 0; // Biến này để tính lượt click vào next
next.onclick = function () {
  temp++;
  let listSlider = document.querySelectorAll(".swiper-slide");
  //   console.log(listSlider);
  let eleCurrent = "";
  // console.log(eleCurrent);
  // Dùng SetTimeout vì phải đợi lấy đc thang listSlider
  //Không là sẽ bị dùng mảng cũ vào vòng lặp
  // listSlider[i].getAttribute('class')==='swiper-slide swiper-slide-active'
  setTimeout(function () {
    for (var i = 0; i < listSlider.length; i++) {
      let swiperClass = listSlider[i].getAttribute("class");
      //   console.log("Lần 1:", swiperClass);
      let word = `swiper-slide-active`;
      var flag = swiperClass.includes(word);
      //   if (flag) {
      //     console.log("Thẻ đang hiển thị", listSlider[i]);
      //     console.log(i + 1);
      //   }

      if (flag) {
        //Lấy đc thẻ đang hiển thị
        number.innerHTML = `0${i + 1}`;
      }
    }
  }, 500);
};

//click next lan 1 1%2!==0 ....
prev.onclick = function () {
  if (temp % 2 !== 0) {
    number.innerHTML = `01`;
  } else {
    number.innerHTML = `02`;
    setTimeout(() => {
      number.innerHTML = `01`;
    }, 250);
    temp = 0;
    //reset lại lần ấn next
  }
};

// Xu ly arrow

// for(var i=0;i<10;i++){
//   let arrow=document.getElementById('Arrow');
//   // console.log(arrow);
//     arrow.classList.add('animate1');
//   setTimeout(()=>{
//     arrow.classList.remove('animate1');
//     arrow.classList.add('animate2');
//     setTimeout(()=>{
//       arrow.classList.remove('animate2');

//     },300);
//   },500)
//   console.log(arrow);

//   console.log(i);
// }

//Xu ly animate title

let slider_title = document.querySelector(".Slider_title");
// console.log(slider_title.querySelector("h2"));
let h2_Slider = slider_title.querySelector("h2");

h2_Slider.style.animation = "rightToLeft 1.1s infinite ease";

setTimeout(function () {
  h2_Slider.style.removeProperty("animation");
}, 1000);

// Xu ly animate button

let button_learn = slider_title.querySelector("button");

button_learn.style.animation = "leftToRight 1.1s infinite ease";

setTimeout(function () {
  button_learn.style.removeProperty("animation");
}, 1000);

// Xu ly scroll chuot bat background

//Lay ra header gan background
let backgroundHeader = document.querySelector(".backGround_header");
// console.log(backgroundHeader);
let postsition = window.addEventListener("scroll", function (e) {
  var scrollY = this.scrollY;
  // console.log(scrollY);
  if (scrollY >= 670) {
    backgroundHeader.style.opacity = 1;
    backgroundHeader.style.transition = "all ease 1s";
    // backgroundHeader.style.transform=`translateY(${0})`;
  } else {
    backgroundHeader.style.opacity = 0;
    backgroundHeader.style.transition = "none";
    // backgroundHeader.style.transform=`translateY(${-100}%)`;
  }
});

// Xu ly backGroundMove
// let ani=document.querySelector('.Slider_title');
// console.log(ani.querySelector('button'));

//

// Scroll thanh line header
let header_line = document.getElementById("header_line");
let headerContent=document.querySelector('.header_content');
let listLi=headerContent.querySelectorAll('ul>li');

let postsition2 = window.addEventListener("scroll", function (e) {
  var scrollY = this.scrollY;
  // console.log(scrollY);
  if(scrollY<=0){
    header_line.style.width='0%';
    if(listLi[0].getAttribute('class').includes('activeHeader'))
    {
      listLi[0].classList.remove('activeHeader');
    }
  }
  else if (scrollY <= 670) {
    header_line.style.width = "20%";
    if(listLi[1].getAttribute('class').includes('activeHeader'))
    {
      listLi[1].classList.remove('activeHeader');
    }
  }else if (scrollY <=1476) {
    header_line.style.width = "36%";
    listLi[0].setAttribute('class','activeHeader');

    if(listLi[1].getAttribute('class').includes('activeHeader'))
    {
      listLi[1].classList.remove('activeHeader');
    }
  } else if(scrollY<=2650) {
    header_line.style.width = "48%";
    listLi[0].classList.remove('activeHeader');
    listLi[1].setAttribute('class','activeHeader');
    // backgroundHeader.style.transform=`translateY(${-100}%)`;
    if(listLi[2].getAttribute('class').includes('activeHeader'))
    {
      listLi[2].classList.remove('activeHeader');
    }
  }else if(scrollY<=3178) {
    header_line.style.width='60%';
    listLi[1].classList.remove('activeHeader');
    listLi[2].setAttribute('class','activeHeader');
    if(listLi[3].getAttribute('class').includes('activeHeader'))
    {
      listLi[3].classList.remove('activeHeader');
    }
  }else if(scrollY<=3950){
    header_line.style.width='70%';
    listLi[2].classList.remove('activeHeader');
    listLi[3].setAttribute('class','activeHeader');
    if(listLi[4].getAttribute('class').includes('activeHeader'))
    {
      listLi[4].classList.remove('activeHeader');
    }
  }else{
    header_line.style.width='100%';
    listLi[3].classList.remove('activeHeader');
    listLi[4].setAttribute('class','activeHeader');
  }
});

// Xử lý bar khi reponsive

let bar=document.getElementById('bar');
let navBar=document.getElementById('nav-Bar');
let headerItem=document.getElementById('header_item');

let click=0;
bar.addEventListener('click',function(){
  click++;
  if(click%2!==0)
  {
    navBar.style.display='block';
    // headerItem.setAttribute('style','display:none !important');
    // bar.style.display='block';
    bar.classList.add('click');
  }else{
    navBar.style.display='none';
    bar.classList.remove('click');
    click=0;
  }
})
