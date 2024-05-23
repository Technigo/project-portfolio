export const projectsData = [
  {
    imagePath: '/images/gengo.webp',
    title: 'Gengo',
    text: {
      en: 'This is a flashcard fullstack app. I tried to go as far as I can with technologies that are new to me (such as, Recoil, React Query, zod ...) and more advanced archtecture that is a feature based archtecture.',
      ja: 'フラッシュカードのアプリです。Coding bootcampのファイナルプロジェクトとして作りました。バックエンドは MongoDB, Express, Mongoose, Node.jsで、フロントエンドは Reactです。',
    },
    skills: ['Tailwind', 'TypeScript', 'React', 'React-Query', 'Recoil', 'MongoDB', 'Express'],
    gitUrl: 'https://github.com/sansan-sakura/GENGO',
    demoUrl: 'https://gengo.netlify.app/',
  },
  {
    imagePath: '/images/saku-movie.webp',
    title: 'Saku Movie',
    text: {
      en: 'This is a film app that lets you check out the latest films. I challenged myself not to use libraries and everything is built from scratch.',
      ja: '最新の映画をチェックできるアプリです。出来るだけ軽いカルーセルを実現するためにライブラリをしよせず全て自分で作りました。またSWRやPromisALLを使うことにより、パフォーマンスにこだわりました。',
    },
    skills: ['SCSS', 'React', 'React Router', 'SWR'],
    gitUrl: 'https://github.com/sansan-sakura/Saku-Movies',
    demoUrl: 'https://saku-movie.netlify.app/',
  },
  {
    imagePath: '/images/blog.webp',
    title: 'Blog',
    text: {
      en: 'I build my own blog to trace my learning journey. It is build with Next.js and MDX.',
      ja: '自分の学習の過程を記録するためのブログを作りました。Next.jsとMDXを使って作りました。',
    },
    skills: ['Tailwind', 'Next.js 14', 'MDX', 'TypeScript'],
    gitUrl: 'https://github.com/sansan-sakura/ontheway',
    demoUrl: 'https://ontheway.vercel.app/',
  },

  {
    imagePath: '/images/saq.webp',
    title: 'SaQRCode Generator',
    text: {
      en: 'This is a QRCode generator. I wanted to make it fun, so I added as many animations as possible. I also added Three.js animations.',
      ja: 'QRコードをURLカラ取得できるアプリです。アニメーションにこだわり、Three.jsも取り入れてできるだけ面白いアプリにしようとしております。😄',
    },
    skills: ['Tailwind', 'React', 'Three.js', 'TypeScript'],
    gitUrl: 'https://github.com/sansan-sakura/SaQrcode-Generator',
    demoUrl: 'https://saqrcode-generator.netlify.app/',
  },
  {
    imagePath: '/images/berlin.webp',
    title: 'Berlin Berlin',
    text: {
      en: 'I made this site out of my love for Berlin. It collects news about Berlin.',
      ja: 'ベルリンが好きなので、ベルリンらしいものを作ろうと思いこのサイトを作りました🇩🇪 ベルリンのニュースを集めてあります。',
    },
    skills: ['HTML', 'CSS'],
    gitUrl: 'https://github.com/sansan-sakura/project-news-site',
    demoUrl: 'https://tourmaline-cendol-e09256.netlify.app/',
  },
];

// {
//   imagePath: "/images/chatbot.webp",
//   title: "Chatbot build in JavaScript",
//   text: {
//     en: "You can ask for a recommendation for a museum from your preference.",
//     ja: "好きな美術館を選んでくれるChatbotです。ジャンル、アーティストから一つ選んでくれ、その美術館のURLを教えてくれます。",
//   },
//   skills: ["HTML", "CSS", "JavaScript"],
//   gitUrl: "https://github.com/sansan-sakura/project-chatbot",
//   demoUrl: "https://helpful-piroshki-45c88f.netlify.app",
// },

// {
//   imagePath: "/images/survey.webp",
//   title: "Pala Customer Survey",
//   text: {
//     en: "This is a pet food company survey form. It was a group project that I worked with two others by using Github.",
//     ja: "プログラミングスクールのグループワークで作った、ペットフード会社の顧客サーベイフォームです。",
//   },
//   skills: ["HTML", "CSS", "React"],
//   gitUrl: "https://github.com/elbines/project-survey-vite-EMS",
//   demoUrl: "https://pala-customer-survey.netlify.app/",
// },

// {
//   imagePath: "/images/music.webp",
//   title: "Music Releases",
//   text: {
//     en: "This app is build with React and static data that was gotten from Spotify. You can check music albums.",
//     ja: "Spotifyのアルバムデータをもとに作ったReactのプロジェクトです。",
//   },
//   skills: ["HTML", "CSS", "React"],
//   gitUrl: "https://github.com/sansan-sakura/project-music-releases-vite",
//   demoUrl: "https://music-releases2222.netlify.app/",
// },
// {
//   imagePath: "/images/happy-thoughts.webp",
//   title: "Happy Thoughts",
//   text: {
//     en: "This is a Twitter-like APP. You can post your happy thoughts and click the like button to like other people's posts.",
//     ja: "ツイッターのようなアプリです。自分をハッピーにしてくれていることを投稿してみてください！他の投稿にいいねもできます。",
//   },
//   skills: ["HTML", "CSS", "React"],
//   gitUrl: "https://github.com/sansan-sakura/project-happy-thoughts-vite",
//   demoUrl: "https://happy-thoughs.netlify.app/",
// },
// {
//   imagePath: "/images/weatherapp.webp",
//   title: "Weather App",
//   text: {
//     en: "This is a vanilla JavaScript weather application. You can add and remove cities. The data is stored locally, so when you come back to the app, you can still see the weather focus from the cities of your choice.",
//     ja: "天気予報のアプリです。天気を知りたい場所の名前を検索すると、その後５日間の天気予報が出てきます。",
//   },
//   skills: ["HTML", "CSS", "JavaScript"],
//   gitUrl: "https://github.com/sansan-sakura/project-weather-app",
//   demoUrl: "https://sakura-world-weather-app.netlify.app/",
// },
// {
//   imagePath: "/images/guesswho.webp",
//   title: "Guess Who the Game",
//   text: {
//     en: "It is a game where you have to guess who is a secret person. Winning data is saved in local memory, so you can compare results from the past",
//     ja: "Guess whoというゲームをもとにして作ったものです。ターゲット人物を色々な条件をもとに篩にかけて当てていき、ターゲットを見つけられたら勝利です。",
//   },
//   skills: ["HTML", "CSS", "JavaScript"],
//   gitUrl: "https://github.com/sansan-sakura/project-guess-who",
//   demoUrl: "https://guess-who2222.netlify.app/",
// },

// {
//   imagePath: "/images/berlin.webp",
//   title: "Berlin Berlin",
//   text: {
//     en: "I made this site out of my love for Berlin. It collects news about Berlin.",
//     ja: "ベルリンが好きなので、ベルリンらしいものを作ろうと思いこのサイトを作りました。ベルリンのニュースを集めてあります。",
//   },
//   skills: ["HTML", "CSS"],
//   gitUrl: "https://github.com/sansan-sakura/project-news-site",
//   demoUrl: "https://tourmaline-cendol-e09256.netlify.app/",
// },
// {
//   imagePath: "/images/legz.webp",
//   title: "Legz",
//   text: {
//     en: "This project is a collaboration with a UX/UI student from Technigo. This design was created by Thomas Read. ",
//     ja: "UX/UIのTechnigoの学生とのコラボ作品です。できるだけデザイナーの意向に添えるように、細かいところまで再現しました。",
//   },
//   skills: ["React", "Content API", "SCSS"],
//   gitUrl: "https://github.com/sansan-sakura/project-Legz",
//   demoUrl: "https://legz.netlify.app/",
// },
