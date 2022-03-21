
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
        title: 'Career Profile',
        content: 'When I was child, I always want to be a developer. I think I am now. Culpa proident ad officia minim Lorem sint excepteur irure culpa nisi aliquip nostrud.Laborum voluptate nostrud fugiat occaecat proident veniam excepteur pariatur amet ex sit.Anim aliquip do in commodo adipisicing.Nulla adipisicing nisi enim ullamco sunt veniam.Ullamco labore sunt Lorem veniam id et Lorem magna eiusmod aute. Aliquip minim est consectetur anim mollit aliqua ex elit do et nulla do. Cupidatat ad sunt cillum sint consectetur sunt cillum eiusmod ad esse aliqua. Aute anim elit amet in duis aute ipsum deserunt qui deserunt officia excepteur veniam. Et laboris nostrud est ipsum nulla fugiat deserunt magna velit irure. Ullamco duis ut magna ea tempor enim in ipsum.',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Elasticsearch Engineer 1 & 2',
            authority: 'Elastic Institute',
            authorityWebSite: 'https://www.elastic.co/training/elasticsearch-engineer',
            rightSide: '2019'
          },
          {
            title: 'Huawei Certified ICT Expert - Routing & Switching (HCIE R&S)',
            authority: 'Huawei',
            authorityWebSite: 'https://e.huawei.com/en/talent/#/cert/product-details?certifiedProductId=445&authenticationLevel=CTYPE_CARE_HCIE&technicalField=IIC&version=3.0',
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
        type: 'experiences-list',
        title: 'Experiences',
        description: 'Optional',
        icon: 'archive',
        items: [
          {
            title: 'Lead Software Developer',
            company: 'Some Company Example INC',
            description: 'I\'m working as a lead developer yeeeey!',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2017.10 - Present',
            descriptionTags: ['Javascript', 'React']
          },
          {
            title: 'Software Developer',
            company: 'Some Company Example INC',
            description: 'I\'m using ReactJS and working as a front-end developer',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: 'Little info about company',
            datesBetween: '2016.8 - 2017.10'
          },
          {
            title: 'Intern',
            company: 'Some Software Example INC',
            description: 'I was warming up.',
            companyWebSite: 'http://someexamplecompany.com',
            companyMeta: 'SF USA',
            datesBetween: '2012.06 - 2012.10'
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projects',
        description: 'Optional',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Company Name',
            description: 'Optional',
            items: [
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' }
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Conferences & Certificates',
        description: '',
        icon: 'comments',
        items: [
          {
            title: 'HCIE R&S | Huawei Certified ICT Expert - Routing & Switching',
            description: 'wtf is this',
            authority: 'Huawei',
            authorityWebSite: 'https://www.elastic.co/training/elasticsearch-engineer',
            rightSide: '2019'
          },
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityMeta: 'Speaker',
            authorityWebSite: 'https://www.someconf.somesome',
            rightSide: 'test'
          },
          {
            title: 'Some Conferences / 2012',
            authorityMeta: 'Speaker'
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
            authorityMeta: 'Professional'
          },
          {
            authority: 'Spanish',
            authorityMeta: 'Beginner'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'CSS', 'SQL', 'SomeTech', 'CoolTech']
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Photography', 'Poetry']
      }
    ]
  }
  