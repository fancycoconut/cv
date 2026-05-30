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
      experienceMd: './work-experience/pushpay.md',
    },
    {
      company: 'Fisher & Paykel Healthcare',
      experienceMd: './work-experience/fisher-and-paykel-healthcare.md',
    },
    {
      company: 'Datacom',
      experienceMd: './work-experience/datacom.md',
    },
    {
      company: 'ACIT',
      experienceMd: './work-experience/acit.md',
    },
    {
      company: 'Hansen Technologies',
      experienceMd: './work-experience/hansen-technologies.md',
    }
  ],
  interests: ['Technology', 'Distributed Systems', 'Engineering Craft', 'Music', 'Reading', 'Sports & Fitness', 'Business', 'Finance']
};
