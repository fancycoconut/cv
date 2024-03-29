module.exports = {
  name: 'Kawai Wong',
  title: 'Full Stack Senior Developer',
  facts: {
    'Residence': `<a href="https://goo.gl/maps/kToTNMXQgnmXDa5e8">
                  <i class="fa fa-home"></i> Auckland, New Zealand
                </a>`,
    'LinkedIn': `<a href="https://www.linkedin.com/in/kawaiw/">
                  <i class="fa fa-linkedin"></i> kawaiw
                </a>`,
    'GitHub': `<a href="https://github.com/fancycoconut">
                  <i class="fa fa-github"></i> fancycoconut
                </a>`,
    'Email': `<a href="mailto:kawai.wong@outlook.co.nz">
                <i class="fa fa-envelope"></i> kawai.wong@outlook.co.nz
              </a>`
  },
  skills: [
    {
      name: 'Technical Skills',
      examples: [
        'Microsoft stack: C#, ASP.NET & ASP.NET Core, Web API, MVC, WebForms, Windows Forms, WPF, EntityFramework, SpecFlow',
        'Modern Web stack: JavaScript, TypeScript, NodeJS, jQuery, React, Redux, Angular, HTML5, CSS3, WebPack, SASS/LESS, Bootstrap',
        'Infrastructure: SQL Server, CosmosDB, MongoDB, RabbitMQ, Azure DevOps CI/CD, Visual Studio project templates, Docker, Kubernetes',
        'Other: PHP, Python, Visual Basic, Swift, Protobuf, CoAP',
        'Experienced in web development & integration using industry standard techologies and frameworks',
        'Experienced with all stages of the Software Development Life cycle and agile methodologies',
        'Experienced and knowledge of best practices for software design and architecture'
      ]
    },
    {
      name: 'Leadership Skills',
      examples: [
        'Lead developer for multiple microservices and other supporting IoT infrastructure at FPH',
        'Proactive in taking up responsibilties within my expertise and knowledge area',
        'Initiating proof of concepts and side projects to improve existing processes',
        'Worked as a lead developer on large enterprise projects on multiple occassions at ASB Bank',
        'Involved with project design workshops and meetings as a subject matter expert at ASB Bank'
      ]
    },
    {
      name: 'Interpersonal and Communication Skills',
      examples: [
        'Client facing skills gained as a consultant',
        'Excellent verbal and written communication skills',
        'Confident in delivering business or team presentations',
        'Experienced in writing detailed specifications and various forms of documentation',
        'Fluent in English, Cantonese and Mandarin'
      ]
    },
    {
      name: 'Analytical and Problem-Solving Skills',
      examples: [
        'Able to break complicated business rules into simple or elegant solutions',
        'Able to translate business requirements into system functionality',
        'Estimate work and come up with best solution proposals',
        'Able to troubleshoot complex issues and unfamiliar technologies'
      ]
    },
    {
      name: 'Learning Skills',
      examples: [
        'Adapting very quickly to various working environments',
        'Build up relevant domain knowledge in a short time frame',
        'Confident in learning and picking up new technology stacks and frameworks',
        'Work on side projects in free time'
      ]
    }
  ],
  experience: [
    {
      company: 'Pushpay',
      location: 'Auckland',
      roles: [
        {
          title: 'Senior Software Development Engineer',
          start: 'Dec 2021',
          end: 'Current',
          blurb: 'Member of a high performing team that looks after APIs and external integrations for the Pushpay Giving platform',
          items: [
            'Feature lead Pushpay\'s next generation Web API platform',
            'Implement payment transaction syncing integration with external system via REST API',
            'Taking ownership in supporting engineering experience through docker containers and other tooling/scripts',
            'Involved with interviewing for recruitment',
            'Involved with incident response, management and investigation'
          ]
        }
      ],
      badges: ['C#', 'NET Core', 'ASP.NET Web API', 'Typescript', 'React', 'GraphQl', 'Postgres', 'DynamoDB', 'AWS', 'Terraform', 'Docker']
    },
    {      
      company: 'Fisher & Paykel Healthcare',
      location: 'Auckland',
      roles: [
        {
          title: 'Senior Software Engineer',
          start: 'May 2021',
          end: 'Nov 2021',
          blurb: 'In the IoT team building supporting IoT infrastructure and APIs',
          items: [
            'Involved with and contributed towards the design of future system architecture and strategy',
            'Involved with upgrading and dockerization of existing API service components',
            'Working with Operations to establish the containerization strategy for the use of Docker and Kubernetes within the team',
            'Setting up CI/CD pipelines and templates for migrating to Azure DevOps',
            'Mentor junior members on best practices of software design and architecture',
            'Involved with interviewing for recruitment such as Developers and Solutions Architect roles',
            'Collaborating with firmware teams to solve problems in the IoT domain for medical devices'
          ]
        },
        {
          title: 'Solutions Developer',
          start: 'January 2018',
          end: 'April 2021',
          items: [
            'Develop and contribute towards system Platform libraries',
            'Rapidly prototyped new concepts and ideas',
            'Involved with the delivery of customer integration projects that allows our clients to access our patient management APIs',
            'Developed a parser for the CoAP protocol for both UDP and TCP variants for NET',
            'Co-developed a gateway for IoT devices that integrates with the in-house communications protocol',
            'Co-developed various infrastructure Web APIs',
            //'Co-developed various infrastructure Web APIs for enabling a next generation over-the-air solution',
            'Co-developed a dynamic serializer/deserializer library for Protobuf',        
            'Involved with project delivery and coordination for the corporate website that required dealing with various stakeholders from Marketing Operations as well as a remote developer',
            'Developed a custom module for the Kentico CMS used for bundling and packaging content for mobile apps',
            'Setup CI/CD pipelines for different projects on TFS on-prem',
            'Set up automated testing infrastructure such as SpecFlow and various other tooling such as project templates and test harnesses',
            'Developed new features for a world class Obstructive Sleep Apnea patient management and monitoring cloud based solution',
            'Involved with the development and distribution of educational mobile apps for training purposes using React Native',
            'Rewrote the existing user registration process for the SleepStyle iOS app to migrate from Objective-C to Swift and Storyboard',
            'Involved with knowledge sharing of domain and system architecture to team members',
            'Experienced with design controls for medical devices'
          ],
        }
      ],      
      badges: ['C#', 'NET Core', 'ASP.NET Web API', 'ASP.NET Web Forms', 'SQL Server', 'CosmosDB', 'Dapper', 'AutoMapper', 'Windsor Castle', 'EntityFramework', 'Identity Server', 'SpecFlow', 'Infrastructure', 'Docker', 'Azure Event Hub', 'RabbitMQ', 'Redis', 'Azure DevOps CI/CD', 'Swift', 'Objective-C', 'React Native', 'Protobuf', 'CoAP', 'Design Controls', 'ISO27001']
    },
    {      
      company: 'Datacom',
      location: 'Auckland',
      roles: [
        {
          title: 'Software Developer (ASB Bank)',
          start: 'February 2015',
          end: 'December 2017',
          blurb: 'Assigned as a Software Developer to work on ASB Bank\'s CRM system in the domain of home loan origination and customer onboarding',
          items: [
            'Designed and developed REST microservices for various CRM domains',
            'Led the development and design of an automated test strategy for the CRM team',
            'Designed and developed new components that added new functionality to the CRM',
            'Involved as a lead developer and subject matter expert in large projects on multiple occassions to provide guidance and technical support',
            'Delivered various compliance projects that are required by the Reserve Bank\'s legislative changes on time',
            'Involved with a large-scale enterprise upgrade project for ASB\'s CRM system',
            'Experienced working with enterprise HOST systems',
            'Worked on business-as-usual enhancements and bugfixes for Onyx'
          ]
        }        
      ],      
      badges: ['C#', 'NET Core', 'ASP.NET Web API', 'ASP.NET Web Forms', 'SQL Server', 'WCF', 'SpecFlow', 'Onyx CRM', 'Octopus Deploy', 'Integration'],
    },
    {
      className: 'screen',
      company: 'ACIT',
      location: 'Auckland',
      roles: [
        {
          title: 'Junior Developer',
          start: 'November 2012',
          end: 'November 2014',
          blurb: 'Developed and maintained customized business workflow management solutions and maternity management software for midwives.',
          items: [
            'Researched and developed an antenatal growth chart generator to integrate with the existing maternity management software',
            'Built user interfaces for workflow management solutions and introduced a windows metro style design to new projects',
            'Designed and developed reports for various workflow management systems',
            'Develop and maintain customized workflow management software for various small to medium businesses',
            'Performed data migration exercises when integrating or migrating from legacy systems',
            'Worked with clients to troubleshoot and diagnose issues'
          ],
        }
      ],
      badges: ['C#', 'ASP.NET MVC', 'ASP.NET Web Forms', 'SQL Server', 'WPF', 'Windows Forms', 'SQL Server Reporting Services', 'HTML5', 'JavaScript', 'CSS', 'jQuery', 'angularJS', 'Visual Basic']
    },
    {
      className: 'screen',
      company: 'Hansen Technologies',
      location: 'Auckland',
      roles: [
        {
          title: 'Student Intern',
          start: 'March 2013',
          end: 'October 2013',
          blurb: 'Worked as an intern doing a final year project to come up with a Business Intelligence solution using OLAP for Utility, Telecom and Pay TV clients.',
          items: [
            'Performed feasibility studies and investigations on various solutions such as Oracle OLAP, Pentaho Mondrian, Palo',
            'Researched various OLAP implementations: MOLAP, ROLAP and HOLAP',
            'Performed ETL based on sample data sets from Hansen\'s CISs (Customer Information System)',
            'Developed a proof of concept solution consists of pivot tables, reports and dashboards'
          ]
        }
      ],      
      badges: ['OLAP', 'ETL', 'Data Warehousing', 'Data Visualization', 'Java', 'MySQL']
    }
  ],
  interests: ['Technology', 'Music', 'Books', 'Sports & Fitness', 'Business', 'Finance']
};
