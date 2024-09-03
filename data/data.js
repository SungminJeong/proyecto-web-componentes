const data = {
  name: "Sungmin Jeong",
  address: "Antonio Robles 10, Madrid",
  email: "sungminy1056@gmail.com",
  avatar:
    "https://i.pinimg.com/736x/8f/c2/ad/8fc2adfb17b261162bbd9a4af5239c64.jpg",
  aboutMe: {
    aboutmeTitle: "About me",
    aboutmeEm: "Challenge ",
    partOfaboutme: [
      {title: "education", 
      description1: "I'm studying Máster Desarrollo de Aplicaciones Web at the Power.",
      description2: "I studied in Internationalen Studenkolleg an der Uni Paderborn, Germany.",
      description3: "And I have a experience of military service for 2 years in Republic of Korea Marine Corps. I am disciplined, physically and mentally tough, trained, and proficient in my warrior tasks and drills. I always maintain my arms, my equipment, and myself. I am an expert and I am a professional.",
      },
      {title: "JavaScript", 
        description1: "I'm focusing on JavaScript for future and will never stop.",
        description2: "I know the importance of JavaScript.",
        description3: "When it's too hard to learn, I go to gym! Excercising makes your brain active.",
      },
      {title: "Languages", 
      description1: "I can speak Korean, English, German and Spanish",
      description2: "So I could colaborate with all around the world",
      description3: "It's important in era of globalization",
      },
      {title: "Contact with me", 
        description1: "E-mail: sungminy1056@gmail.com",
        description2: "address: Antonio Robles, Madrid",
        description3: "portfolio: https://dainty-pegasus-d14821.netlify.app/"
        },
    ]
  },

  education: {
    university: "Internationalen Studenkolleg an der Uni Paderborn, Germany",
    graduationYear: 2020,
    relevantCourses: [
      "Mathmatik",
      "Chemie",
      "Physhik",
      "Deutsch",
    ],
  },
  skills: [
    {id:1, item:"HTML5", desc: "The greatest benefit of HTML 5 is that the functionality is built into the browser. HTML 5 resolves the web application complexity issues with DOM and HTML support, for high-quality drawings, video & audio embedding, charts & animation and many other types of rich content required by users."},
    {id:2, item:"CSS", desc: "CSS stands for Cascading Style Sheets. It is the coding language that gives a website its look and layout. Along with HTML, CSS is fundamental to web design. Without it, websites would still be plain text on white backgrounds."},
    {id:3, item:"JavaScript", desc: "Worldwide, web development has seen a major shift with the widespread use of JavaScript. You might question why this scripting language has risen to such prominence. The answer lies in its versatility and power in creating interactive and dynamic websites. JavaScript, a programming language known for its versatility, breathes life into complex features on web pages. It's a lightweight, cross-platform, single-threaded, and compiled language, with its primary use being web page development."},
    {id:4, item: "Vite", desc: "In recent years, the frontend development ecosystem has seen an explosion of new tools and frameworks designed to improve the developer experience. Among these is Vite, a relatively new entrant that has quickly gained popularity due to its impressive performance and speed. The best thing about Vite is that it's platform-agnostic, meaning it can be used to develop JavaScript/Typescript applications."},
    {id:5, item: "Frontend Development", desc: "Using all of skills as mentioned above, train hard 'Frontend Development' . I keep practicing Coding, enhance my skills, understand APIs and cultivate my soft skills."},
  ],
  projects: [
    {
      title: "Primer proyecto",
      description: "E-commerce Website Landing page",
      image:
        "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&w=500",
      tech: ["HTML5", "CSS3"],
      github: "https://github.com/SungminJeong/entrega-Proyecto-1",
      link: "www.proyecto1.com",
    },
    {
      title: "Segundo proyecto",
      description: "Portfolio Website",
      image:
        "https://plus.unsplash.com/premium_photo-1661288470388-c5006797bdff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["HTML5", "CSS3", "JavaScript", "Vite"],
      github: "https://github.com/SungminJeong/proyecto2-Portfolio",
      link: "https://dainty-pegasus-d14821.netlify.app",
    },
    {
      title: "Tercer proyecto",
      description: "APIs Gallery webpage by vite",
      image:
        "https://plus.unsplash.com/premium_photo-1709031620960-877745c2bc34?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["HTML5", "CSS3", "JavaScript", "Vite"],
      github: "https://github.com/SungminJeong/proyecto3_web_asincrono",
      link: "https://famous-beignet-2c549a.netlify.app",
    },
  ],
  header: ["intro", "aboutme", "skills", "projects"],
  intro:{
    title: "Sungmin Jeong",
    text1: "I didn’t get there by wishing for it ",
    text2: "or hoping for it,",
    text3: "but by working for it.",
    image: "/icon/IMG_6759.jpg"
  },
  footer: "©Copyright 2024"
};

export default data;
