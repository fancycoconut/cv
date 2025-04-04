module.exports = {
  name: 'Kawai Wong',
  title: 'Senior Software Engineer',
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
        'Backend: C#, .NET, ASP.NET, Web API, MVC',
        'Frontend: JavaScript, TypeScript, NodeJS, React, HTML, CSS',
        'Infrastructure: Azure, AWS, SQL Server, Postgres, CosmosDB, DynamoDB, RabbitMQ, Docker, Kubernetes, CI/CD Pipelines',
        'Other: Python, Terraform, Pulumi, GraphQL, Protobuf, CoAP',
      ]
    },
    {
      name: 'Soft Skills',
      examples: [
        'Leadership & feature leading',
        'Can-do attitude',
        'Analytical & problem solving',
        'Adaptability and learning'
      ]
    },
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
          blurb: 'Member of a high performing team responsible for Public APIs and integrations with the Pushpay Giving platform',
          items: [
            'Feature lead Pushpay\'s next generation Public API platform which involves building new and migrating existing API endpoints as well as various supporting infrastructure',
            'Co-develop a brand new authorization server for securing Public API endpoints',
            'Built a new Authorization server that supports code and client credentials flow using the OAuth 2.0 protocol',
            'Involved with the adoption of Open Telemetry for microservices and lambda functions',
            'Worked on migrating integration functionality from a monolith to dedicated microservices to speedup development time and improve system resilience',
            'Implement and enhance integrations to synchronize payments, transactions and community members with external systems via vendor APIs',
            'Taking ownership in supporting engineering experience through docker containers and various other tooling/scripts',
          ]
        }
      ],
      badges: ['C#', 'NET Core', 'ASP.NET Web API', 'Typescript', 'React', 'GraphQL', 'Postgres', 'DynamoDB', 'Lambda', 'ECS', 'S3', 'AWS', 'Terraform', 'Docker', 'Localstack', 'OAuth 2.0', 'Auth0', 'Duende']
    },
    {      
      company: 'Fisher & Paykel Healthcare',
      location: 'Auckland',
      roles: [
        {
          title: 'Senior Software Engineer',
          start: 'May 2021',
          end: 'Nov 2021',
          blurb: 'Member of the IoT team building supporting IoT infrastructure and microservices',
          items: [
            'Involved with and contributed towards the design of future system architecture and strategy',
            'Involved with dockerization of existing API microservices',
            'Working with Operations to establish the containerization strategy for the use of Docker and Kubernetes within the team',
            'Setting up CI/CD pipelines and templates for migrating to Azure DevOps',
            'Mentor junior members on best practices of software design and architecture',
            'Collaborating with firmware teams to solve problems in the IoT domain for medical devices'
          ]
        },
        {
          title: 'Solutions Developer',
          start: 'January 2018',
          end: 'April 2021',
          items: [
            'Build and maintain Platform libraries and tooling that improve engineering experience',
            'Developed a parser for the CoAP protocol for both UDP and TCP variants for NET',
            'Help implement the in-house communications protocol to interface with IoT devices over cellular network',
            'Co-developed and designed various microservices to enable a next generation over-the-air solution',
            'Co-developed a dynamic serializer/deserializer library for Protobuf',            
            'Involved with the development and distribution of educational mobile apps for training purposes using React Native',
            'Rewrote the user registration process for the SleepStyle iOS app from Objective-C to Swift',
            'Involved with knowledge sharing of domain and system architecture to team members',
            'Experienced with design controls for medical devices'
          ],
        }
      ],      
      badges: ['C#', 'NET Core', 'ASP.NET Web API', 'ASP.NET Web Forms', 'SQL Server', 'CosmosDB', 'Dapper', 'AutoMapper', 'Windsor Castle', 'EntityFramework', 'Identity Server', 'SpecFlow', 'Docker', 'Kubernetes', 'Azure Event Hub', 'RabbitMQ', 'Redis', 'Azure DevOps CI/CD', 'Swift', 'Objective-C', 'React Native', 'Protobuf', 'CoAP', 'Design Controls', 'ISO27001']
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
            'Designed and developed REST microservices for the CRM domain',
            'Built proof of concept for testing automation using Specflow for the CRM team',
            'Involved as a lead developer and subject matter expert in multiple large projects to provide guidance and technical support',
            'Delivered various critical compliance projects that are required by the Reserve Bank\'s legislative changes on time',
            'Involved with a large-scale enterprise upgrade project for ASB\'s CRM system',
          ]
        }        
      ],      
      badges: ['C#', 'NET Core', 'ASP.NET Web API', 'ASP.NET Web Forms', 'SQL Server', 'WCF', 'SpecFlow', 'Octopus Deploy'],
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
  interests: ['Technology', 'Music', 'Reading', 'Sports & Fitness', 'Business', 'Finance']
};
