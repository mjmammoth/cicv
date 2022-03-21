import { faBook, faGraduationCap, faArchive, faRocket, faTasks, faComment, faLanguage, faCubes, faExclamation, faUserTie } from '@fortawesome/free-solid-svg-icons'
export const CVData = {
    personalData: {
      name: 'Mark Marryatt',
      title: 'DevOps Engineer',
      image: 'https://hotemoji.com/images/dl/g/call-me-hand-emoji-by-twitter.png',
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
        type: 'text',
        title: 'Introduction',
        content: `
I am an innovative, big-picture thinker with a natural knack for all things technological. I apply a logical troubleshooting process to problems while maintaining an out-of-the-box creativity to resolve these problems.

I take pride in my work, taking ownership of all that I do, while looking for new challenges to help me grow.

I have an unquenchable thirst for knowledge, keeping current with technology and trends by reading and continuously implementing new solutions. I have always been a self-sufficient learner.
I often test appilications and concepts by self-hosting services on my personal Kubernetes cluster.


I excel at working autonomously, but value nothing as highly as the ability to bounce ideas off of like-minded individuals.
        `,
        icon: 'usertie'
      },
      {
        type: 'experiences-list',
        title: 'Experience',
        description: '',
        icon: faUserTie,
        items: [
          {
            title: 'Network Systems Engineer',
            company: 'Reflex Solutions',
            description: `
I designed and implemented systems to be used company-wide with the DevOps mindset from the onset. I commissioned a Kubernetes cluster to serve AWX, Gitea, Netbox, Postgres, Redis, MySQL and a Wiki. 
            
I worked with CI/CD pipelines to automate the rolling out of Logstash pipelines across worker nodes.
* I used Terraform to take on the infrastructure-as-code methodology, deploying virtual machines on VMWare Hypervisors.
* I documented all of my work in a Wiki that stores data in a Markdown Git repository.
* I played a crucial role in setting up VMWare NSX-T and vCloud Director.
            `,
            companyWebSite: 'https://reflex.co.za',
            companyMeta: '',
            datesBetween: '2020 - 2021',
            descriptionTags: ['RADIUS', 'Ansible', 'Terraform', 'Elastic Stack', 'Docker', 'Kubernetes', 'VXLAN']
          },
          {
            title: 'Enterprise Team Lead',
            company: 'Reflex Solutions',
            description: `
I focused on upskilling my team as much as possible by orchestrating and leading multiple training sessions for which I created complimentary virtual labs.
* Supported core routing infrastructure.

As I transitioned to the Team Lead role, I picked up the support for multiple linux servers which had not been maintained since my arrival.
* Elastic Stack; Managing logstash pipelines, index management, elasticsearch nodes, visualizations and dashboards as well as all of the physical and virtual servers involved.
* FreeRADIUS; Facilitated each step of on-boarding new APNs, troubleshot SQL queries and their performance. I also used RADIUS to generate Dynamic DNS entries on a BIND9 server to which multiple subdomains were delegated.

I implemented Huawei's CloudCampus, a software-defined networking solution, without challenge due to already understanding the underlying components.
            `,
            companyWebSite: 'https://reflex.co.za',
            descriptionTags: ['MPLS', 'L3VPN', 'L2VPN', 'Linux', 'BGP', 'Firewalls', 'ISIS', 'DNS'],
            datesBetween: '2018 - 2020'
          },
          {
            title: 'Network Engineer',
            company: 'Reflex Solutions',
            description: `
When Jasco acquired Reflex, I was quickly moved over as my skills were aligned with Reflex's offerings.
In this role, I carried out many site installations, configuring layer 2 and 3 last-mile services on both PE and CE routers.
* Completed thorough network audits with in-depth evaluations.
* Supporting end clients through support tickets.
            `,
            companyWebSite: 'https://reflex.co.za',
            descriptionTags: ['MPLS', 'BGP', 'Firewalls', 'FTTx', 'QoS'],
            datesBetween: '2017 - 2018'
          },
          {
            title: 'Support Engineer',
            company: 'Jasco Electronics Holdings Limited',
            description: `
Completed a rip and replace of all networking equipment where I implemented Avaya's flagship Fabric Connect protocol. ISIS adjacencies were formed on all access switches to achieve Shortest Path Bridging via mac-in-mac encapsulation.

In this role I supported all IT infrastructure in Jasco group in a team of 5. This gave me the opportunity to work on a wide range of technologies and understand what makes user experience.

In my time with Jasco I worked on Switches, Routers, Firewalls, Active Directory, VMWare ESXi, Linux, Databases and general processes.
            `,
            companyWebSite: 'https://jasco.co.za',
            descriptionTags: ['Routing & Switching', 'VMWare ESXi', 'Fabric Connect', 'SPB-M', 'Active Directory', 'Windows Server', 'IP PABX', 'QoS'],
            datesBetween: '2016 - 2017'
          },
          {
            title: 'Network Intern',
            company: 'Avaya',
            description: `
I learned networking and voice solution deployment methodologies as well as how to support customers in different environments. I earned multiple entry-level certifications during my time with Avaya.
            `,
            companyWebSite: 'https://avaya.com',
            descriptionTags: ['Routing & Switching', 'Fabric Connect', 'SPB-M', 'IP PABX'],
            datesBetween: '2015 - 2016'
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Selected Projects',
        description: `In each of these projects I was given a goal, sometimes determining it myself, and left to my own devices to bring the project to fruition.

When centering my efforts on design and architecture, I am able to produce secure, scalable and manageable solutions.`,
        icon: "faCalculator",
        groups: [
          {
            sectionHeader: 'Reflex Solutions',
            description: 'lots of words and many lots of many wmasdm as asd asd asd asd asd asd asd asd asd ad asd asd asd asd asd asd asd asd ad asd asd asd asd asd asd asd asd asd asd asd asda sdasd ',
            items: [
              { title: 'Automation Stack Implementation', projectUrl: '', description: `
I commissioned multiple systems to achieve a scalable automation solution.
Ansible AWX pulls playbooks and inventory references from a repository stored in Gitea, which then triggers an update of the dynamic inventory variables housed in Netbox.
The playbooks I wrote mostly automate action on our routers. The backup playbooks I wrote commits to a Git repository, achieving version controlled insight.
Other playbooks include handling the configuration of TACACS, standardizing ACLs and also ensuring security practices are implemented.
I automated the creation of dashboards for new clients with information that greatly reduced MTTR by making it possible to correlate events across devices and exposing information that would normally take time retrieve.
This implementation got me recognized as Employee of the Month, for the third time during my time at Reflex.
              `},
              { title: 'Elastic Stack Redesign', description: `
This project saw a complete overhaul of the Elastic Stack in place, resulting in jumping multiple major releases from 2.3 to 7.10.
I carefully and diligently planned the implementation of every node, scripting a secure install process. 
This made spinning up a new node a matter of minutes, including the time it took to set up RAID and OS installation on the physical hosts.
A total overhaul of the indexing and sharding strategies by implementing Index Lifecycle Management
* Alerting using in-depth queries to output to a webhook
* Restitching of Logstash pipeline
* Creation of many visualizations and dashboards within Kibana
* Ascertaining that the solution is properly multi-tenanted with security
Full redesign of underlying network and traffic paths
              `},
              { title: 'RADIUS Redesign',  projectUrl: '', description: `
A FreeRADIUS implementation already existed at Reflex Solutions when I joined. 
I was tasked with upgrading to a new major version. 
I did so by containerizing the application and running it in production with Docker.
This project stemmed from the creation of an internal RADIUS frontend being built which led to me working closely in conjunction with our internal development team.
Throughout the process, we highly customized our RADIUS deployment. I was involved in the creation and troubleshooting of new SQL scripts to achieve our desired outcome.
              `},
              { title: 'MPLS Decommissioning', projectUrl: '', description: `
I planned and scripted and executed the seamless decommissioning of core routers in different regions. Execution took only minutes after days of meticulous planning and preparation.
              `},
              { title: 'Network Device Management redesign', projectUrl: '', description: `
Implemented AAA services
* TACACS for Authentication and Authorization
* The Elastic Stack for Accounting and all other router logs
Separated Reflex core infrastructure into distinct management zones, which gave the ability to apply fine-grained policies to segments of the network at scale.
              `}
            ]
          },
          {
            sectionHeader: 'Jasco Electronics Holdings Limited',
            description: 'lots of words and many lots of many wmasdm as asd asd asd asd asd asd asd asd asd ad asd asd asd asd asd asd asd asd ad asd asd asd asd asd asd asd asd asd asd asd asda sdasd ',
            items: [
              { title: 'LAN Upgrades',  projectUrl: '', description: 'original' }
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Certifications',
        description: '',
        icon: 'comments',
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
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['Kubernetes', 'Python', 'Bash', 'SQL', 'Terraform', 'Ansible', 'Elasticsearch', 'Logstash', 'Kibana', 'Grafana', 'Prometheus', 'MPLS', 'SD-WAN']
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Home Automation', 'Photography', 'Guitar']
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
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
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Home Language'
          },
          {
            authority: 'Afrikaans',
            authorityMeta: 'Second Language'
          }
        ]
      },
    ]
  }
  
