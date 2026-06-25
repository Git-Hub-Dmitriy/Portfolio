import { prisma } from "@lib/prisma";
import bcrypt from "bcryptjs";

export async function registerAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!email || !password || !name) {
    return { error: "errors.fill_all_fields" };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "errors.email_exists" };
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        passwordHash: hashPassword,
        role: "USER",
      },
    });

    return { success: "success.registered" };
  } catch (err) {
    console.log(err);
    return { error: "errors.server_error" };
  }
}
