// JQuery SLICK

$(".top__slider").slick({
  autoplay: true,
  arrows: false,
  dots: true,
});

$(".catalog__slider").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// JS

// const item = document.querySelectorAll(".gallery__item-img");
// const i = document.querySelectorAll(".gallery__item");
// const fixed = document.querySelector(".fixed");

// item.forEach((e) => {
//   e.addEventListener("click", () => {
//     e.classList.add("img-active");
//     fixed.classList.add("fixed-active");
//   });

//   fixed.addEventListener("click", () => {
//     e.classList.remove("img-active");
//     fixed.classList.remove("fixed-active");
//   });
// });

// theme system
const btnLight = document.querySelectorAll(".fa-adjust");

btnLight.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    //добавление и удаление анимации
    document.body.classList.add("animation");
    setTimeout(() => {
      document.body.classList.remove("animation");
    }, 500);

    //Проверяем если атрибут href === css/style Тогда меняем
    if (theme.getAttribute("href") === "css/style.css") {
      theme.href = "css/dark.css";
    } else if (theme.getAttribute("href") === "css/dark.css") {
      theme.href = "css/style.css";
    }

    localStorage.setItem("theme", theme.getAttribute("href"));
  });
});

window.addEventListener("load", () => {
  //получаем данные localStorage('theme')
  const local = localStorage.getItem("theme");
  if (!local) {
    localStorage.setItem("theme", "css/style.css");
  }

  const saveTheme = localStorage.getItem("theme");
  theme.href = saveTheme;
});

//menu

const slideBtn = document.querySelectorAll(".slide__bar");
const menuUl = document.querySelector(".menu");
const btnClose = document.querySelector(".btn-close");
const headerCatalog = document.querySelector("#header__catalog");

slideBtn.forEach((item) => {
  item.addEventListener("click", () => {
    menuUl.classList.add("menu__ul-active");
  });
});

btnClose.addEventListener("click", () => {
  menuUl.classList.remove("menu__ul-active");
});

//MENU CLOSE ON CLICK  headerCatalog

headerCatalog.addEventListener("click", () => {
  menuUl.classList.remove("menu__ul-active");
});

//more

const moreBtn = document.querySelectorAll(".catalog__slider-btn");

moreBtn.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(1);
  });
});

//benefits

const benefits = [
  {
    name: "empty",
    title: "empty",
  },
  {
    name: "empty",
    title: "empty",
  },
];

// template

const benefitsSlider = document.querySelector(".benefits__slider");

function benefitsTemplate(arr) {
  const cardTemplate = arr
    .map(({ name, title }) => {
      return `
  <div class="benefits__slider-content">
    <h3 class="benefits__content-name">
       ${name}
    </h3>
    <p class="benefits__content-text">
       ${title}
    </p>
  </div>
  `;
    })
    .join("");
  benefitsSlider.innerHTML = cardTemplate;
}

window.addEventListener("load", benefitsTemplate(benefits));

$(".benefits__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});
