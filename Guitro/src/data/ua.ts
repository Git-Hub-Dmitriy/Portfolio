import { Dictionary } from "@interfaces/dictionary.types";
export const ua: Dictionary = {
  errors: {
    fill_all_fields: "Будь ласка, заповніть усі поля",
    email_exists: "Цей електронний лист вже зайнятий",
    server_error: "Щось пішло не так",
  },
  success: {
    registered: "Реєстрація успішна! Тепер ви можете увійти.",
  },
  pages: {
    home: {
      features: [
        "безкоштовна доставка по всьому світу",
        "готівкою при доставці",
        "спеціальна подарункова карта",
        "Цілодобова служба підтримки клієнтів",
      ],
      ourProduct: {
        bestseller: [
          {
            id: 0,
            url: "/images/sub-banner-1.webp",
            title: "Чудові бренди гітар",
            text: "Знижка 60% на бестселери",
          },
          {
            id: 1,
            url: "/images/sub-banner-2.webp",
            title: "Імперська гітара",
            text: "Доступна ціна лише за $2199.00",
          },
        ],
        title: "Наші продукти",
      },
    },
    auth: {
      login: {
        title: "Вхід",
        email: "Ім'я користувача або адреса електронної пошти",
        password: "Пароль",
        remember: "Запам'ятай мене",
        btn: "Увійти",
        lostPass: "Забули пароль?",
      },
      register: {
        title: "Зареєструватися",
        email: "Адреса електронної пошти",
        text: "Пароль буде надіслано на вашу адресу електронної пошти. Ваші персональні дані будуть використані для підтримки вашого досвіду на цьому веб-сайті, для керування доступом до вашого облікового запису та для інших цілей, описаних у нашій",
        linkPolicy: "політика конфіденційності.",
        btn: "Зареєструватися",
      },
    },
  },
  components: {
    header: {
      topBar: {
        welcome: "Ласкаво просимо до нашого інтернет-магазину!",
        tel: "Підтримка клієнтів: 123-456-7890",
        textAccount: "Мій обліковий запис",
        textContact: "Зв'яжіться з нами",
      },
      language: {
        languages: ["EN", "UA"],
        selectedLanguage: "UA",
      },
    },
    navigation: {
      account: {
        title: "Мій Аккаунт",
        link: "Головна",
        subtitle: "Мій Аккаунт",
      },
      shop: {
        title: "Магазин",
        link: "Головна",
        subtitle: "Магазин",
      },
      blog: {
        title: "Блог",
        link: "Головна",
        subtitle: "Блог",
      },
      portfolio: {
        title: "Портфоліо",
        link: "Головна",
        subtitle: "Портфоліо",
      },
      about: {
        title: "Про нас",
        link: "Головна",
        subtitle: "Про нас",
      },
    },
  },
};
