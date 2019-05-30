export namespace JSONResume {
  type Location = {
    address: string
    postalCode: string
    city: string
    countryCode: string
    region: string
  }

  type SocialProfile = {
    network: string
    username: string
    url: string
  }

  type Basics = {
    name: string
    label: string
    picture: string
    email: string
    phone: string
    website: string
    summary: string
    location: JSONResume.Location
    profiles: Array<JSONResume.SocialProfile>
  }

  type Work = {
    company: string
    position: string
    website: string
    startDate: string
    endDate?: string
    summary: string
    highlights: string[]
  }

  type Volunteer = {
    organization: string
    position: string
    website: string
    startDate: string
    endDate?: string
    summary: string
    highlights: string[]
  }

  type Education = {
    institution: string
    area: string
    studyType: string
    startDate: string
    endDate?: string
    gpa: string
    courses: string[]
  }

  type Award = {
    title: string
    date: string
    awarder: string
    summary: string
  }

  type Publication = {
    name: string
    publisher: string
    releaseDate: string
    website: string
    summary: string
  }

  type Skill = {
    name: string
    level?: string
    keywords?: string[]
  }

  type Language = {
    language: string
    fluency: string
  }

  type Interest = {
    name: string
    keywords?: string[]
  }

  type Reference = {
    name: string
    reference: string
  }

  type Resume = {
    basics: JSONResume.Basics
    work: Array<JSONResume.Work>
    volunteer: Array<JSONResume.Volunteer>
    education: Array<JSONResume.Education>
    awards: Array<JSONResume.Award>
    publications: Array<JSONResume.Publication>
    skills: Array<JSONResume.Skill>
    languages: Array<JSONResume.Language>
    interests: Array<JSONResume.Interest>
    references: Array<JSONResume.Reference>
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $resume: JSONResume.Resume
  }
}
