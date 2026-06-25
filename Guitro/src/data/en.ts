import { Dictionary } from "@interfaces/dictionary.types";
export const en: Dictionary = {
  errors: {
    fill_all_fields: "Please fill in all fields",
    email_exists: "This email is already taken",
    server_error: "Something went wrong",
  },
  success: {
    registered: "Registration successful! You can now log in.",
  },
  pages: {
    home: {
      features: [
        "free shipping worldwide",
        "cash on delivery",
        "special gift card",
        "24/7 customer service",
      ],
      ourProduct: {
        bestseller: [
          {
            id: 0,
            url: "/images/sub-banner-1.webp",
            title: "Great Guitar Brands",
            text: "60% Off Best Sellers",
          },
          {
            id: 1,
            url: "/images/sub-banner-2.webp",
            title: "Imperial Guitar",
            text: "Affordable at only $2199.00",
          },
        ],
        title: "Our Products",
      },
    },
    auth: {
      login: {
        title: "Login",
        email: "Username or email address",
        password: "Password",
        remember: "Remember me",
        btn: "Log In",
        lostPass: "Lost your password?",
      },
      register: {
        title: "Register",
        email: "Email address",
        text: "A password will be sent to your email address. Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our",
        linkPolicy: "privacy policy.",
        btn: "Register",
      },
    },
  },
  components: {
    header: {
      topBar: {
        welcome: "Welcome to our online store!",
        tel: "Customer Support: 123-456-7890",
        textAccount: "My account",
        textContact: "Contact Us",
      },
      language: {
        selectedLanguage: "EN",
        languages: ["EN", "UA"],
      },
    },
    navigation: {
      account: {
        title: "My Account",
        link: "Home",
        subtitle: "My Account",
      },
      shop: {
        title: "Shop",
        link: "Home",
        subtitle: "Shop",
      },
      blog: {
        title: "Blog",
        link: "Home",
        subtitle: "Blog",
      },
      portfolio: {
        title: "Portfolio",
        link: "Home",
        subtitle: "Portfolio",
      },
      about: {
        title: "About Us",
        link: "Home",
        subtitle: "About Us",
      },
    },
  },
};
