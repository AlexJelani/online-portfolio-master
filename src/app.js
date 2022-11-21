//TODO



var arrLang = {
  "en-gb": {
    ABOUT: "About me",
    PROJECT: "Projects",
    CONTACT: "Contact",
    NAME: "Jelani Alexander",
    JOB: "Full Stack Developer",
    //can add lots of data
    ABOUTME:
      "Hello. My name is Jelani Alexander. I am a Software Developer with a passion for developing user friendly applications using frontend and backend technologies.",
      EMAIL: "Email",
      SUBJECT:"Subject",
      MESSAGE:"Message"
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
      EMAIL:"メールアドレス",
      SUBJECT:"件",
      MESSAGE:"お問い合わせ内容"
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

