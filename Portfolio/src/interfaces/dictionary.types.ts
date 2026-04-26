export interface Dictionary {
  pages: {
    home: {
      titleOne: string;
      titleTwo: string;
      titleThree: string;
    };
    about: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      email: string;
      tel: string;
      gitHub: string;
      instagram: string;
    };
    recentWorks: {
      title: string;
      preview: Array<{
        href: string;
        imageSrc: string;
        name: string;
        text: string;
      }>;
    };
    skills: {
      title: string;
      list: Array<string>;
    };
    work: Array<WorkType>;
  };
  components: {
    header: {
      title: string;
      burger: {
        links: { link: string; href: string }[];
        linksWork: { link: string; href: string }[];
        linksWorks: { link: string; href: string }[];
      };
      lang: {
        ua: string;
        en: string;
      };
    };
  };
}

export interface WorkType {
  id: number;
  name: string;
  image: string;
  gitHub: string;
  demo: string;
  href: string;
  overview: {
    title: string;
    text: string;
  };
  features: {
    title: string;
    text: string[];
  };
  stack: {
    title: string;
    text: string[];
  };
}
