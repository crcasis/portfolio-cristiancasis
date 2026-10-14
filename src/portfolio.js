/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Cristian Casis",
  title: "Hi all, I'm Cristian",
  subTitle: emoji(
    "Passionate CTO & Sr Cloud DevOps Engineer | Solutions Architect 🚀"
  ),
  resumeLink:
    "https://docs.google.com/presentation/d/1FEIUcaEFdQiICQsleYIJSGboRWxLby94/edit?usp=sharing&ouid=111369774840453663196&rtpof=true&sd=true",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/crcasis",
  linkedin: "https://www.linkedin.com/in/cristian-casis-villarreal",
  gmail: "crcasis@gmail.com",
  gitlab: "https://gitlab.com/crcasis",
  facebook: "https://www.facebook.com/cristian.casisvillarreal/",
  medium: "https://cristiancasis.com/blog",

  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CTO & DEVOPS WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Code-based infrastructure development on public and hybrid cloud platforms"
    ),
    emoji("⚡ Organization of teams and large projects using agile / SCRUM methodologies"),
    emoji(
      "⚡ Development and integration of highly scalable projects using kubernetes together with continuous integration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "La Rioja University",
      logo: require("./assets/images/riojaLogo.png"),
      subHeader: "NETWORK SYSTEMS ADMINISTRATION",
      duration: "September 2015 - December 2017",
      desc: "Advanced network management, configuration of local and remote servers in Windows and Unix systems. Advanced security audits. Advanced programming and administration of web pages and services. Creation and administration of databases. Programming. Cloud services."
 
    },
    {
      schoolName: "La Rioja University",
      logo: require("./assets/images/riojaLogo.png"),
      subHeader: "MICROCOMPUTER SYSTEMS AND NETWORKS",
      duration: "September 2013 - December 2015",
      desc: "Management and analysis of corporate networks. Configuration of hosts and domains in business areas. Execute established data recovery and application procedures for faults and data loss in the system. Install, configure and maintain multi-user services, applications and shared devices in a local network environment. Migrate platforms. Azure, Aws and Google Cloud."
    },
    {
      schoolName: "Inesem Business School",
      logo: require("./assets/images/riojaLogo.png"),
      subHeader: "Master of Cibersecurity",
      duration: "September 2021 - December 2022",
      desc: "Management and analysis of corporate networks. Configuration of hosts and domains in business areas. Execute established data recovery and application procedures for faults and data loss in the system. Install, configure and maintain multi-user services, applications and shared devices in a local network environment. Migrate platforms. Azure, Aws and Google Cloud."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps",
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Teaching / Couching",
      progressPercentage: "80%"
    },
    {
      Stack: "Team Leading",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Linux System Administrator",
      company: "Ackstorm",
      companylogo: require("./assets/images/ackstormLogo.png"),
      date: "Jun 2018 – Jun 2019",
      desc:
        "Management, creation and automation of Cloud projects on Gcloud and AWS platforms.",
      descBullets: [
        "Automation of projects and internal services for different clients.",
        "Kubernetes, Docker, Jenkins, Git, Linux Administration, Monitoring of different Linux and Windows servers, configuration different application servers.",
        "Administration of Oracle databases, PostgreSQL, etc."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Ebcont",
      companylogo: require("./assets/images/ebcontLogo.png"),
      date: "Jun 2019 – May 2020",
      desc:
        "Upgrade and Migrate projects to AWS, Ansible, Terraform, Cloudformation, resolve problems in Linux Enviroments, Virtualization,, CI/CD, Support and working in Infraestructure as a code, Docker, Kubernetes...",
      descBullets: [
          "Migrate projects to various platforms, server administration",
          "Kubernetes and Docker expert, Monitoring",
          "Project Manager"
        ]  
    },
    {
      role: "Sr DevOps Engineer & Cloud Architect",
      company: "Viesure, Alpega",
      companylogo: require("./assets/images/viesureLogo.png"),
      date: "May 2020 – Present",
      desc:
        "Plan and implement new features in close collaboration with our product owners. Ensuring the stability, performance and other non-functional requirements of our services. Evaluate and introduce new technologies and frameworks. Share knowledge and ideas with the team. Focus on driving innovation from a technical and product perspectivere et dolore magna aliqua.",
      descBullets: [
          "Infrastructure Engineer",
          "AWS Solutions Architect",
          "EKS, AKS, Openshift Rosa, CI/CD, Security, Python.."
      ]  
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/viesureLogo.png"),
      projectName: "Viesure",
      projectDesc: "Deploy different services on Kubernetes to have a highly scalable platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://viesure.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/zalandoLogo.jpg"),
      projectName: "Zalando",
      projectDesc: "Implement an API that communicates with various Zalando services all deployed in Docker",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/zalando"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solutions Architect",
      subtitle:
        "AWS solutions architect course and certification in 2021",
      image: require("./assets/images/awsLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1rKg11G7ZJa79pz6dedliPfOqzVNuAX9M/view?usp=sharing"
        },
        
        {
          name: "Code in Blog",
          url:
            "https://cristiancasis.com/certificate-en-aws-facilmente-explicado/"
        }
      ]
    },
    {
      title: "AWS Cloud Practictioner",
      subtitle:
        "AWS Cloud Practictioner course and certification",
      image: require("./assets/images/awsCloud.png"),
      footerLink: [
        {
          name: "View AWS Cloud Practictioner certification",
          url:
            "https://drive.google.com/file/d/1ykR7S6GE4ptHBL1yKd4xBMcr_9OT7AY9/view?usp=sharing"
        }
      ]
    },

    {
      title: "SysOps / Jenkins / Linux Certification",
      subtitle: "Other courses and certifications",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {name: "LPI000383635 - Verification: eepdr2j3s3", url: "https://cs.lpi.org/caf/Xamman/certification"},
        {
          name: "Linux certification",
          url: "https://cs.lpi.org/caf/Xamman/certification"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [

    {      
      url:
        "https://youtu.be/ZtEPFmCtEaI?si=XP1RfY4CCh-jxtd-",
      title: "Tekton for kubernetes",
      description:
        "Deploy tekton ci/cd pipelines for kubernetes or openshift"
    },    
    {      
      url:
        "https://youtu.be/8-pQCDNG-w8?si=jC5MKtNQr8AYl0zx",
      title: "Deploy a crypto exchange platform open-source",
      description:
        "Open-Source Cloud-Native Digital Asset & Cryptocurrency Exchange Platform"
    },
    {
      url: "https://youtu.be/A9R_jQ3SlFQ?si=iZKN8W1oHCUwS5dw",
      title: "VPN with Wireguard",
      description:
        "WireGuard is a security-focused virtual private network (VPN) known for its simplicity and ease of use."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "SCHEDULE A DATE",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Book a time",
      subtitle: "Let's speak about the project",
      slides_url: "https://calendly.com/crcasis",
      event_url: "https://calendly.com/crcasis"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.ivoox.com/player_ej_66701015_4_1.html?c1=ff6600&fromPopup=true"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+34 629785212",
  email_address: "cristian.casisvillarreal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};



export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
