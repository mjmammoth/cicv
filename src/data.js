export const CVData = {
    personalData: {
      name: 'Mark Marryatt',
      title: 'DevOps Engineer',
      image: 'https://media-exp1.licdn.com/dms/image/C4D03AQGcmz9r5KebRA/profile-displayphoto-shrink_400_400/0/1654495581896?e=1660176000&v=beta&t=0M9OLXgqBYVNlVCwlVs0YIiTWgVn-5q7K1YhmFhb2E8',
      contacts: [
        { type: 'email', value: 'mjmarryatt@gmail.com' },
        { type: 'phone', value: '+27 74 455 3622' },
        { type: 'location', value: 'Gauteng, South Africa' },
        { type: 'website', value: 'mark.cloud' },
        { type: 'linkedin', value: 'linkedin.com/in/mark-marryatt' },
        { type: 'github', value: 'github.com/mjmammoth' }
      ]
    },
    sections: [
      {
        type: 'basic-text',
        title: 'Introduction',
        content: [`
          I am an innovative, big-picture thinker with a natural knack for all things technological. I apply a logical troubleshooting process to problems while maintaining an out-of-the-box creativity to resolve these problems.
          I take pride in my work, taking ownership of all that I do, while looking for new challenges to help me grow.
          I have an unquenchable thirst for knowledge, keeping current with technology and trends by reading and continuously implementing new solutions. I have always been a self-sufficient learner.
          I often test applications and concepts by self-hosting services on my personal Kubernetes cluster.`
      ],
        lastLine: 'I excel at working autonomously, while valuing nothing as highly as the ability to bounce ideas off of like-minded individuals.',
        icon: 'id-badge'
      },
      {
        type: 'experiences-list',
        title: 'Experience',
        description: '',
        icon: 'briefcase',
        items: [
          {
            title: 'DevOps Engineer',
            company: 'DotModus',
            descriptionParagraphs: [
              'During this period I was directly outsourced to Dentsu, the fifth largest advertising agency network in the world. I worked in a small team responsible for the upkeep of data engineering business functions.',
              'I quickly became the go-to point for operational knowledge, as well as a key part in design discussions which paved our roadmap.'
            ],
            bullets: [
              'I built and maintained Terraform modules that are used company-wide.',
              'I wrote Brigade CI pipeline functions in Javascript to build containers, publish Helm charts, run tests and deploy applications on Kubernetes.',
              'I used K6 to load test web applications and their RESTful APIs, pushing the metrics to InfluxDB and visualising them in Grafana.',
              'I worked with many of Azure\'s resources: AKS, Key Vault, Container Registry, SQL Server, PostgreSQL, Frontdoor, Application Gateway, DNS, Active Directory, Virtual Machine Scale Sets, Storage Accounts and Log Analytics to name the most used.',
            ],
            companyWebSite: 'https://dotmodus.com',
            companyMeta: '',
            datesBetween: '2021 - Current',
            descriptionTags: ['Kubernetes', 'Helm', 'Terraform', 'Brigade.sh CI', 'Azure', 'PostgreSQL', 'Hashicorp Vault', 'Istio', 'K6', 'Grafana', 'Prometheus', 'InfluxDB']
          },
          {
            title: 'Network Systems Engineer',
            company: 'Reflex Solutions',
            descriptionParagraphs: [
              'I designed and implemented systems to be used company-wide with the DevOps mindset from the onset, commissioning a Kubernetes cluster to serve AWX, Gitea, DroneCI, Netbox, a Wiki, and other supporting applications. Many time-consuming operations were automated in pipelines by combining DroneCI and Gitea.',
            ],
            bullets: [
              'The Wiki that I implemented of my own volition became the de facto system used to store technical documentation.',
              'I used Terraform to provision the underlying network for VMWare Hypervisors as well as Virtual Machines that ran on them - removing a lot of the daily toil for the Cloud engineers and eliminating common manual mistakes.',
              'I played a critical role in setting up VMWare NSX-T and vCloud Director, enabling the company to sell a PaaS solution to clients.',
            ],
            companyWebSite: 'https://reflex.co.za',
            companyMeta: '',
            datesBetween: '2020 - 2021',
            descriptionTags: ['RADIUS', 'Ansible', 'DroneCI', 'Terraform', 'Elastic Stack', 'Docker', 'Kubernetes', 'VXLAN']
          },
          {
            title: 'Enterprise Team Lead',
            company: 'Reflex Solutions',
            descriptionParagraphs: [
              `I focused on upskilling my team as much as possible by orchestrating and leading multiple training sessions. I creating complimentary virtual labs to test their knowledge explain complex concepts.
              As I transitioned to the Team Lead role, I picked up the support for multiple linux servers which had not been maintained since my arrival.`,
            ],
            bullets: [
              `I supported core routing and switching infrastructure in data centers across South Africa, which I was at times individually flown out to for maintenance.`,
              `I was in charge of on-boarding new APNs, configuring RADIUS to service SIM card AAA, working with MSSQL directly, manipulating stored procedures and queries as well as their performance.`,
              `I single-handedly implemented a highly-available Elastic cluster which contained 9 nodes and distributed 6 terabytes of storage - more in the projects section below.`,
              `I containerised our FreeRADIUS implementation which is an integral part of providing, limiting and billing internet access to hundreds of devices - more in the projects section below.`,
              `I implemented Huawei's CloudCampus, their software-defined networking solution, without challenge due to already understanding all of the underlying components.`,
              `I took pride in my documentation, making it possible for anyone to see the full list of steps I went through to achieve my outcomes.`
            ],
            companyWebSite: 'https://reflex.co.za',
            descriptionTags: ['MPLS', 'L3VPN', 'L2VPN', 'Linux', 'BGP', 'Firewalls', 'ISIS', 'DNS'],
            datesBetween: '2018 - 2020'
          },
          {
            title: 'Network Engineer',
            company: 'Reflex Solutions',
            descriptionParagraphs: [
              'When Jasco acquired Reflex, I was quickly moved over as my skills were aligned with Reflex\'s offerings.',
            ],
            bullets: [
              'I did many site installations, going onsite to install routers and switches in LAN environments.',
              'I configured layer 2 and 3 last-mile connectivity on both PE and CE routers',
              'I completed thorough network audits with in-depth evaluations, documenting large campuses with hundreds of devices and different connectivity mediums.'
            ],
            companyWebSite: 'https://reflex.co.za',
            descriptionTags: ['MPLS', 'BGP', 'Firewalls', 'FTTx', 'QoS'],
            datesBetween: '2017 - 2018'
          },
          {
            title: 'Support Engineer',
            company: 'Jasco Electronics Holdings Limited',
            descriptionParagraphs: [
              `I completed a total rip and replace of all networking equipment where I implemented Avaya's flagship Fabric Connect protocol. ISIS adjacencies were formed on all access switches to achieve Shortest Path Bridging via mac-in-mac encapsulation.`,
              `In this role I supported all IT infrastructure in Jasco group. This gave me the opportunity to work on a wide range of technologies and understand what makes for good user experience.`
            ],
            companyWebSite: 'https://jasco.co.za',
            descriptionTags: ['Routing & Switching', 'Firewalls', 'VMWare ESXi', 'Fabric Connect', 'SPB-M', 'Active Directory', 'Linux', 'Windows Server', 'IP PABX', 'QoS'],
            datesBetween: '2016 - 2017'
          },
          {
            title: 'Network Intern',
            company: 'Avaya',
            descriptionParagraphs: [
              'I learned networking and voice solution deployment methods as well as how to support customers in different environments.',
              'I earned multiple entry-level certifications during my internship.',
            ],
            companyWebSite: 'https://avaya.com',
            descriptionTags: ['Routing & Switching', 'Fabric Connect', 'SPB-M', 'IP PABX'],
            datesBetween: '2015 - 2016'
          }
        ]
      },
      {
        type: 'projects-list',
        xtraClassName: 'before',
        title: 'Selected Projects',
        description: [`In each of these projects I was given a goal, sometimes determining it myself, and left to my own devices to bring the project to fruition.
        When centering my efforts on design and architecture, I am able to produce secure, scalable and manageable solutions.`],
        icon: "paperclip",
        groups: [
          {
            sectionHeader: 'Dentsu',
            items: [
              { title: 'Containerisation of a monolith',  projectUrl: '', 
                description: [
                  `Before I joined, the DevOps team struggled with slow and faulty deployments of a third-party, monolithic Java application onto virtual machine scale-sets.
                  Messy and imperative CloudInit scripts were used to unreliably stand up environments that required manual intervention to get to an operational state.
                  I was able to redefine the process entirely, configuring CI to securely pull artifacts, build container images, test and publish helm charts and finally use terraform to stand up an instance of the application on Kubernetes in mere minutes.`
                ]
              },
              { title: 'Load-testing',
                description: [
                  `I pioneered the usage of K6 as a load-testing tool, testing RESTful APIs as well as direct browser interactions. To quickly find resource sweet spots, I configured the CICD pipeline to create multiple ephemeral environments with different resource settings and tests would automatically be run against each.
                  With this information I created highly informative dashboards linking commits, environments and resources to each test.
                  People gradually started following my methodologies in this area when they were able to see the value it provided.`
                ]
              }
            ]
          },
          {
            sectionHeader: 'Reflex Solutions',
            description: ``,
            items: [
              {
                title: 'Automation Stack Implementation',
                projectUrl: '',
                description: [
                  `I commissioned multiple systems to achieve a scalable automation solution.
                  Ansible AWX pulled playbooks and references to dynamic inventory sources from a Gitea repository, the dynamic inventory was enriched by device specific variables stored in Netbox.
                  The playbooks I wrote mostly automated router and firewall management. The playbooks I wrote to backup configuration did so by writing the configuration to a dedicated Git repository, achieving version control and a level of insight not previously attainable.
                  I wrote these playbooks to be vendor-agnostic, using the variables from Netbox to run the correct steps.
                  Other playbooks included the configuration of TACACS (Authentication/Authorization), standardizing ACLs and ensuring security practices are implemented.
                  Detailed dashboard were automatically created for each client, this information assisted greatly in reducing MTTR by making it possible to correlate events across devices, with information that would previously have been a painstaking ordeal to retrieve.
                  This implementation got me recognized as employee of the month - which was the third time during my time at Reflex.`
                ]
              },
              {
                title: 'Elastic Stack Redesign',
                description: [
                  `This project saw a complete overhaul of the Elastic Stack in place, resulting in jumping multiple major releases from 2.3 to 7.10.
                  This included racking the physical equipment, creating virtual machines, installing the OSes, configuring RAID, cabling, networking, load balancing, security, logstash pipelines, index management, visualisations, dashboards and everything else in between.
                  I carefully and diligently planned the implementation of every node, automating a secure installion process.
                  Spinning up a new node and adding it to the cluster took only a few short minutes.
                  Different indexing and sharding strategies were tested by implementing Index Lifecycle Management, until the most effective combination was found.
                  This allowed for much more valuable alerts to be created, using in-depth KQL queries to output specific information to webhooks.
                  Logstash pipelines took the most development - enriching the raw data that came in to be much more useful.
                  The outcome was a secure and multi-tenanted platform thats employees and customers alike could access to view insights.`
                ]
              },
              {
                title: 'RADIUS Redesign',
                projectUrl: '',
                description: [
                  `A FreeRADIUS implementation already existed at Reflex Solutions when I joined.
                  I was tasked with upgrading to a new major version.
                  I did so by containerizing the application and running it in production with Docker.
                  This project stemmed from the creation of an internal RADIUS frontend being built which led to me working closely in conjunction with our internal development team.
                  Throughout the process, we highly customized our RADIUS deployment. I was involved in the creation and troubleshooting of new SQL scripts to achieve our desired outcome.`
                ]
              },
              {
                title: 'MPLS Decommissioning',
                projectUrl: '',
                description: [
                  `I planned, scripted and executed the seamless decommissioning and replacement of core infrastructure in different regions.
                  These changes were applied flawlessly in minutes after weeks of meticulous planning and preparation.`
                ]
              },
              {
                title: 'Network Device Management redesign',
                projectUrl: '',
                description: [
                  `I Implemented AAA from the ground up, utilizing TACACS for Authentication and Authorization, and the Elastic Stack for Accounting.
                  All device logs were parsed using in-depth grok patterns and data enrichments, allowing for the creation of meaningful visualizations, providing holistic views into operational and security performance with the ability to drill down into specifics.
                  A large part of the redesign was separating core infrastructure into distinct management zones, enabling the application of fine-grained security policies to segments of the network at scale.`
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Certifications',
        description: '',
        icon: 'trophy',
        items: [
          {
            title: 'Huawei Certified ICT Expert - Routing & Switching',
            authority: 'HCIE R&S',
            authorityWebSite: 'https://www.elastic.co/training/elasticsearch-engineer',
            rightSide: '2019'
          },
          {
            title: 'Avaya Certified Expert in Fabric Connect',
            authority: 'ACE-Fx',
            authorityWebSite: 'https://www.someconf.somesome',
            rightSide: '2016'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Proficiencies',
        icon: 'rocket',
        items: ['Kubernetes', 'Python', 'Helm', 'Terraform', 'Azure', 'Brigade.sh', 'DroneCI', 'GitHub Actions', 'K6', 'SQL Server', 'PostgreSQL', 'Ansible', 'Elasticsearch', 'Logstash', 'Kibana', 'Grafana', 'Prometheus', 'InfluxDB', 'Linux', 'Networking', 'MPLS', 'SD-WAN']
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Home Automation', 'IOT', 'Music', 'Machine Learning']
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation-cap',
        items: [
          {
            title: 'Elasticsearch Engineer 1 & 2',
            authority: 'Elastic Institute',
            description: 'The ins and outs of administering a high-scale Elasticsearch cluster. Creating complex search queries to visualize static and time-series datasets.',
            authorityWebSite: 'https://www.elastic.co/training/elasticsearch-engineer',
            rightSide: '2019'
          },
          {
            title: 'High School',
            authority: 'Sutherland',
            authorityWebSite: 'https://www.sutherlandhs.co.za/',
            rightSide: '2009 - 2013'
          }
        ]
      },
    ]
  }
