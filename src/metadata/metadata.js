module.exports = {
  name: 'Kawai Wong',
  title: 'Senior Backend / Platform Software Engineer',
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
  achievements: [
    'Contributed and led the development of next-gen Public API platform to enhance customer stickiness through integration',
    'Improved CI/CD throughput of new API endpoints by 70%, reducing deployment time from hours to minutes and significantly accelerating engineering delivery',
    'Introduced distributed tracing via OpenTelemetry across microservices and Lambda functions, improving bottleneck detection and reducing API latency',
    'Led migration of monolithic integration features into domain‑focused microservices, increasing system resilience and reducing lead time for new integrations',
    'Built a new OAuth2 authorization server supporting code and client credentials flows, improving security and modernizing the API identity stack',
    'Established containerization strategy across teams, enabling consistent Docker/Kubernetes usage and improving operational reliability'
  ],
  skills: [
    {
      name: 'Technical Skills',
      examples: [
        'Architecture: Distributed systems, event-driven design, microservices, API design, OAuth2, observability (Open Telemetry), rollout patterns',
        'Backend: Python, C#, .NET Core, ASP.NET Web API, Node.js (familiarity)',
        'Cloud & Infrastructure: AWS (API Gateway, Lambda, ECS, DynamoDB, RDS, S3, SQS, Kinesis), Azure, Terraform, Docker, Kubernetes, Postgres, SQL Server, RabbitMQ, Jenkins',
        'Frontend: React, TypeScript',
        'Other: GraphQL, Protobuf, CoAP',
      ]
    }
  ],
  experience: [
    {
      company: 'Pushpay',
      location: 'Auckland',
      roles: [
        {
          title: 'Senior Software Development Engineer 2',
          start: 'Apr 2025',
          end: 'Current',
          items: [
            'Member of the team responsible for the Public API and integrations platform, enabling safe and predictable delivery of API changes across all customers',
            'Involved with the longer-term engineering strategy for Pushpay\'s next generation Public API such as REST API standards (naming, version control etc)',
            'Led the introduction of spec driven development via Open API and leveraging code generation for API endpoints to speed up development',
            'Oversee and plan migration and safe rollout of new versions of existing API endpoints',
            'Drive technical design for projects features within the API and integrations domain'
          ]
        },
        {
          title: 'Senior Software Development Engineer',
          start: 'Dec 2021',
          end: 'Mar 2025',
          items: [
            'Led development of the next-gen Public API platform, improving build/deployment times by 70% from hours to minutes and enabling faster iteration',
            'Co‑developed a modern OAuth2 authorization server supporting OAuth2 code and client credentials flows',
            'Lead the adoption of Open Telemetry for microservices and lambda functions which helped improve API response times and bottlenecks',
            'Migrated critical integration features from a monolith to isolated microservices, improving reliability and delivery speed',
            'Built and enhanced integrations for payment, transaction, and customer sync with external vendor APIs',
            'Improved the developer experience via Docker tooling, local dev environments, and internal scripts',
            'Collaborated with teams using feature flagging and staged rollouts to ensure safe, controlled delivery of backend changes'
          ]
        }
      ],
    },
    {      
      company: 'Fisher & Paykel Healthcare',
      location: 'Auckland',
      roles: [
        {
          title: 'Senior Software Engineer',
          start: 'May 2021',
          end: 'Nov 2021',
          items: [
            'Member of the IoT backend services team responsible for device data uploads and IoT infrastructure microservices',
            'Involved with and contributed towards the design of future system architecture and strategy',
            'Contributed to future architecture strategy focused on containerization and scalable cloud patterns',
            'Set up Kubernetes/Docker usage standards and migrated services to container‑based deployments',
            'Mentor junior members on best practices of software design and architecture',
            'Worked closely with firmware teams to design reliable over‑the‑air update and device communication flows'
          ]
        },
        {
          title: 'Solutions Developer',
          start: 'January 2018',
          end: 'April 2021',
          items: [
            'Built Platform libraries and internal tooling to improve engineering productivity',
            'Developed a CoAP protocol parser (UDP & TCP) and contributed to in‑house IoT communication protocols',
            'Designed and developed microservices enabling next‑gen over‑the‑air firmware solutions',
            'Co-developed a dynamic Protobuf serializer/deserializer library',
            'Contributed to mobile app development (React Native, iOS) including rewriting major user registration workflows',
            'Supported medical device design controls and ISO27001 requirements'
          ],
        }
      ],
    },
    {
      company: 'Datacom',
      location: 'Auckland',
      roles: [
        {
          title: 'Software Developer (ASB Bank)',
          start: 'February 2015',
          end: 'December 2017',
          items: [
            'Designed and developed REST microservices for ASB\'s CRM platform, supporting home loan origination and customer onboarding',
            'Served as a lead developer and SME across multiple enterprise projects',
            'Delivered critical compliance and regulatory changes on time for Reserve Bank deadlines',
            'Built automation POCs using SpecFlow to improve testing efficiency',
            'Contributed to enterprise-scale upgrade projects for ASB\'s CRM system',
          ]
        }
      ],
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
    }
  ],
  interests: ['Technology', 'Distributed Systems', 'Engineering Craft', 'Music', 'Reading', 'Sports & Fitness', 'Business', 'Finance']
};
