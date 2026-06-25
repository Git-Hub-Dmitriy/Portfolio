export interface Dictionary {
  errors: {
    fill_all_fields: string;
    email_exists: string;
    server_error: string;
  };
  success: {
    registered: string;
  };
  pages: {
    home: {
      features: Array<string>;
      ourProduct: {
        bestseller: Array<{
          id: number;
          url: string;
          title: string;
          text: string;
        }>;
        title: string;
      };
    };
    auth: {
      login: {
        title: string;
        email: string;
        password: string;
        remember: string;
        btn: string;
        lostPass: string;
      };
      register: {
        title: string;
        email: string;
        text: string;
        linkPolicy: string;
        btn: string;
      };
    };
  };
  components: {
    header: {
      topBar: {
        welcome: string;
        tel: string;
        textAccount: string;
        textContact: string;
      };
      language: {
        languages: string[];
        selectedLanguage: string;
      };
    };
    navigation: {
      account: {
        title: string;
        link: string;
        subtitle: string;
      };
      shop: {
        title: string;
        link: string;
        subtitle: string;
      };
      blog: {
        title: string;
        link: string;
        subtitle: string;
      };
      portfolio: {
        title: string;
        link: string;
        subtitle: string;
      };
      about: {
        title: string;
        link: string;
        subtitle: string;
      };
    };
  };
}
