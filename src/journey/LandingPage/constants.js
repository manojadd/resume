const LandingPageConstants = {
  navigationOptions: ["Home", "Skills", "Experience", "Social", "Qualified"],
  skills: [
    { name: "React.js", link: "https://reactjs.org/" },
    { name: "Webpack", link: "https://webpack.js.org/" },
    {
      name: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
    },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
    },
    { name: "Node.js", link: "https://nodejs.org/en/" },
    { name: "REST API", link: "https://restfulapi.net/" },
    {
      name: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    { name: "Docker", link: "https://www.docker.com/" },
    { name: "Express.js", link: "https://expressjs.com/" },
    { name: "Loopback", link: "https://loopback.io/" },
    { name: "JAVA", link: "https://www.java.com/en/" },
    { name: "JSF", link: "http://www.javaserverfaces.org/" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    {
      name: "TDD",
      link: "https://en.wikipedia.org/wiki/Test-driven_development"
    },
    { name: "Jasmine", link: "https://jasmine.github.io/" },
    { name: "Mocha", link: "https://mochajs.org/" },
    { name: "WebdriverIO", link: "https://webdriver.io/" },
    { name: "IBM bluemix", link: "https://en.wikipedia.org/wiki/Bluemix" },
    {
      name: "IBM Urban code deploy",
      link:
        "https://www.ibm.com/uk-en/marketplace/application-release-automation"
    },
    { name: "Babel", link: "https://babeljs.io/" },
    { name: "Jest", link: "https://jestjs.io/" },
    { name: "CypressIO", link: "https://www.cypress.io/" },
    {
      name: "Agile Development",
      link: "https://en.wikipedia.org/wiki/Agile_software_development"
    },
    { name: "Jmeter", link: "http://jmeter.apache.org/" },
    { name: "Jquery", link: "https://jquery.com/" },
    { name: "CSS methodologies", link: "" },
    { name: "POSTMAN", link: "https://www.postman.com/" },
    { name: "JIRA", link: "https://www.atlassian.com/software/jira" }
  ],
  experience: {
    Overall: [
      "Strongly advocating responsive design principles and accessible web pages.",
      "Quickly obtained microservice architecture knowledge and implemented a rest based microservice for  a banking application. ",
      "Bootstrapped react application including other tools like webpack, Sass, Redux.",
      "Member of Dev guilds, conducting weekly sessions among Dev colleagues to share and showcase new methodologies.",
      "Attending Scrum ceremonies, experience in Agile ways of development and testing. Strong experience of iterative / incremental software delivery.",
      "Strong experience in building applications that interact with multiple systems with different interfaces like SOAP and REST.",
      "Creating generic UI components and maintaining them in UI library.",
      "Strong communication skills with Product Owners, Business Analysts, QA, DevOps, Developers and other colleagues.",
      "Fixing NFT issues in the microservices for memory leaks and high latency."
    ],

    "Banking Domain": [
      "	Experience in creating single page applications using React, Redux, Radium.",
      "	Created a messenger application including a ToDo tracker application with sticky notes for internal use in the project using material UI, socketIO, Redis Pub Sub.",
      "	Conducting Developer guild and created a scrum poker application to help in sprint planning using socketIO, Redis Pub Sub.",
      "	Experience in presenting product demo/Sprint show and tell to customer stakeholders.",
      "	Deploying UI applications to Dev, Test, UAT environments using cloud foundry and Urban Code Deploy. ",
      "	Writing BDD scripts using WebdriverIO and CypressIO for the UI features implemented.",
      "	Developing UI components and shipping them as generic UI components in NPM packages for other teams to import.",
      "	Experience with Jenkins as a CI & CD tool.",
      "	Creating prototypes of UI Pieces in story book with different states to showcase business Analysts and other stakeholders to fasten the decision making process.",
      "	Following Scrum methodology with 2 week sprints.",
      "	Implementing a multi brand(Different configuration for CSS and other prospects of the application) build process for Single page application using WebPack.",
      "	Making UI applications accessible by following ARIA Standards."
    ],
    "Open Banking": [
      "	Gained knowledge on IBM loopback and created micro services based applications.",
      "	Experience in creating rest based interfaces.",
      "	Created Rest based open banking APIs for multiple resources using OAuth 2.0 as Authentication mechanism.",
      "	Creating supplementary projects like Mock servers for stubbing purposes to speed up the development process for multiple teams.",
      "	Taking TDD approach while developing features in the sprint to stay focused on the requirements and delivering the shippable product at the end of the sprint.",
      "	Writing Unit test cases using Jasmine, Chai.",
      "	Developing the applications with functional programming approach for better readability and testability of applications."
    ],
    "Transformation Journey for Banking": [
      "	Taking a step by step approach in transforming the Digital journey without affecting the business.",
      "	Doing POC to Evaluate options to transform legacy banking application into decoupled microservices.",
      "	Implementing Shift left approach for better testability to faster root to live. ",
      "	Reviewing pull request by colleagues for quality, readability and standards set in the application.",
      "	Analysing and documenting the existing application to help in the creation of information architecture for new demands.",
      "	Controlling features using switches in tools like Datapower.",
      "	Creating ways to access multiple versions of the applications using Dark urls and scout files.",
      "	Kanban agile methodology followed."
    ]
  }
};

export default LandingPageConstants;
