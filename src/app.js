//TODO

var arrLang = {
  "en-gb": {
    ABOUT: "About me",
    PROJECT: "Projects",
    CONTACT: "Contact",
    NAME: "Jelani Alexander",
    JOB: "React Frontend Developer",
    //can add lots of data
    ABOUTME:
      "Hello. My name is Jelani Alexander. I am a Frontend Software Developer with a passion for developing user friendly applications using frontend and backend technologies.",
    EMAIL: "Email",
    SUBJECT: "Subject",
    MESSAGE: "Message",
    INPUTNAME: "Name",
    SUBMIT: "submit",
  },
  "zh-tw": {
    ABOUT: "私について",
    PROJECT: "プロジェクト",
    CONTACT: "お問い合わせ",
    NAME: "アレキサンダー　ジェラーニ",
    JOB: "フルスタックエンジニア",
    //cant add lots of data
    ABOUTME:
      "こんにちは。私の名前はジェラニ・アレクサンダーです。私はユーザーフレンドリーなアプリケーションを開発することに情熱を持っているソフトウェア開発者ですフロントエンドとバックエンドのテクノロジーを使用します。",
    EMAIL: "メールアドレス",
    SUBJECT: "件",
    MESSAGE: "お問い合わせ内容",
    INPUTNAME: "名前",
    SUBMIT: "送信する",
  },
};

$(document).ready(function () {
  // The default language is English
  var lang = "en-gb";
  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function () {
  var lang = $(this).attr("id");
  $(".translate").removeClass("active").addClass("inactive");
  $(this).removeClass("inactive").addClass("active");

  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);

// get the footer element
const footer = document.getElementById("footer-end");

// listen for scroll events
window.addEventListener("scroll", function() {
  // get the current scroll position
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // get the height of the page and the viewport
  const pageHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  // calculate the distance from the bottom of the page
  const distanceFromBottom = pageHeight - (scrollPosition + viewportHeight);

  // show or hide the footer based on the distance from the bottom
  if (distanceFromBottom <= 0) {
    footer.style.bottom = "0";
  } else {
    footer.style.bottom = `-${footer.clientHeight}px`;
  }
});


// get the scroll-up button element
const scrollUpButton = document.getElementById("scrollUpButton");

// listen for scroll events
window.addEventListener("scroll", function() {
  // get the current scroll position
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // get the height of the page and the viewport
  const pageHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  // calculate the distance from the bottom of the page
  const distanceFromBottom = pageHeight - (scrollPosition + viewportHeight);

  // show or hide the scroll-up button based on the distance from the bottom
  if (distanceFromBottom <= 0) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
});

// scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
