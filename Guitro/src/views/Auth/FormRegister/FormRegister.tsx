"use client";
import styles from "./FormRegister.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Link from "next/link";

interface PropsFormRegister {
  dict: Dictionary;
}

export default function FormRegister(props: PropsFormRegister) {
  return (
    <form className={styles.register}>
      <h1 className={styles.register__title}>
        {props.dict.pages.auth.register.title}
      </h1>
      <div className={styles.register__wrapper}>
        <div className={styles.register__innerInput}>
          <h2 className={styles.register__subtitle}>
            {props.dict.pages.auth.register.email}
          </h2>
          <input
            autoComplete="off"
            className={styles.register__input}
            required
            type="email"
            name="email"
          />
        </div>
        <h2 className={styles.register__text}>
          {props.dict.pages.auth.register.text}{" "}
          <Link className={styles.register__linkPolicy} href={"privacyPolicy"}>
            {props.dict.pages.auth.register.linkPolicy}
          </Link>
        </h2>
        <button className={styles.register__btn}>
          {props.dict.pages.auth.register.btn}
        </button>
      </div>
    </form>
  );
}

// import { useState, useTransition } from "react";
// import { registerAction } from "@actions/auth";

// interface RegisterFormProps {
//   dict: any; // Сюда передадим словарь для текущего языка
// }

// export default function RegisterForm({ dict }: RegisterFormProps) {
//   const [isPending, startTransition] = useTransition();
//   const [message, setMessage] = useState<{
//     text: string;
//     isError: boolean;
//   } | null>(null);

//   // Хелпер, который берет строку "errors.email_exists" и ищет её в dict["errors"]["email_exists"]
//   const getTranslation = (key: string): string => {
//     try {
//       return key.split(".").reduce((obj, i) => obj[i], dict) || key;
//     } catch {
//       return key; // Если ключ не найден, вернет сам ключ
//     }
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setMessage(null);

//     const formData = new FormData(event.currentTarget);

//     // Запускаем серверное действие в безопасном transition-режиме
//     startTransition(async () => {
//       const response = await registerAction(formData);

//       if (response?.error) {
//         // Получаем перевод для ключа ошибки
//         const translatedError = getTranslation(response.error);
//         setMessage({ text: translatedError, isError: true });
//       } else if (response?.success) {
//         // Получаем перевод для ключа успеха
//         const translatedSuccess = getTranslation(response.success);
//         setMessage({ text: translatedSuccess, isError: false });
//         (event.target as HTMLFormElement).reset(); // Очищаем форму
//       }
//     });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//     >
//       <input
//         name="name"
//         type="text"
//         placeholder="Name"
//         required
//         style={{ padding: "8px" }}
//       />
//       <input
//         name="email"
//         type="email"
//         placeholder="Email"
//         required
//         style={{ padding: "8px" }}
//       />
//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         required
//         style={{ padding: "8px" }}
//       />

//       <button
//         type="submit"
//         disabled={isPending}
//         style={{
//           padding: "10px",
//           background: "#0070f3",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {isPending ? "..." : "Sign Up"}
//       </button>

//       {message && (
//         <p
//           style={{ color: message.isError ? "red" : "green", fontSize: "14px" }}
//         >
//           {message.text}
//         </p>
//       )}
//     </form>
//   );
// }
