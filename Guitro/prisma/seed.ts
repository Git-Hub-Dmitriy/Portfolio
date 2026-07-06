import { PrismaClient } from "../generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Запуск сид-скрипта...");

  const adminEmail = "gameheymdall@gmail.com";
  const adminPassword = process.env.ADMIN_INITIAL_PASSWORD;
  const adminName = "Main Admin";

  if (!adminPassword) {
    console.error("not found ADMIN_INITIAL_PASSWORD env");
    process.exit(1);
  }

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log(
      `ℹ️ Пользователь с email ${adminEmail} уже существует. Меняем его роль на ADMIN...`,
    );
    await prisma.user.update({
      where: { email: adminEmail },
      data: { role: "ADMIN" },
    });
    return;
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  const admin = await prisma.user.create({
    data: {
      email: adminEmail,
      name: adminName,
      passwordHash: hashedPassword,
      role: "ADMIN",
    },
  });
  console.log(`✅ Администратор успешно создан! ID: ${admin.id}`);

  console.log("Создание Категорий...");
  const catalogGuitars = [
    {
      main: "Accessories",
      subs: ["6", "8", "12"],
    },
    { main: "Acoustic", subs: ["Jatoba", "Rosewood", "Walnut"] },
    {
      main: "Wood",
      subs: ["Hard Maple", "Mahogany", "Nato"],
    },
    { main: "Bass", subs: [] },
    { main: "Electric", subs: ["Konicy", "Lyrica", "Zoniry"] },
    { main: "Ukuleles", subs: [] },
    { main: "Uncategorized", subs: [] },
  ];

  const categoryIds: { [key: string]: number } = {};

  for (const item of catalogGuitars) {
    const mainCat = await prisma.category.upsert({
      where: { name: item.main },
      update: {},
      create: { name: item.main },
    });

    categoryIds[item.main] = mainCat.id;

    for (const subName of item.subs) {
      const subCat = await prisma.category.upsert({
        where: { name: subName },
        update: {},
        create: {
          name: subName,
          parentId: mainCat.id,
        },
      });
      categoryIds[subName] = subCat.id;
    }
  }
  console.log("✅ Все главные категории и их подкатегории успешно созданы!");

  console.log("Создание товаров");
  const productData = [
    {
      sku: "MWOOP20",
      name: "Acoustic Guitar",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 80.0,
      oldPrice: 200.0,
      subtitle: "Nullam cursus lacinia erat.",
      subtitleTwo: "Praesent congue erat at massa",
      image: "/images/MWOOP20.webp",
      description: `Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius.
In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna.`,
      descriptionTwo: `Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.`,
      tags: ["Bass", "Nato"],
      color: ["Black", "Blue", "Brown", "Red"],
      size: ["L", "S"],
      categoryNames: [
        "Accessories",
        "Acoustic",
        "Bass",
        "Electric",
        "Fretboard",
        "String",
        "Ukuleles",
        "Walnut",
      ],
    },
    {
      sku: "MWOOP21",
      name: "Bass Guitar",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 120.0,
      oldPrice: 0,
      subtitle: "Nullam cursus lacinia erat.",
      subtitleTwo: "Praesent congue erat at massa",
      image: "/images/MWOOP21.webp",
      description: `Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius.
In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna.`,
      descriptionTwo: `Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.`,
      tags: ["Bass", "Nato"],
      color: ["Black", "Blue", "Brown", "Red"],
      size: ["L", "S"],
      categoryNames: [
        "Accessories",
        "Acoustic",
        "Bass",
        "Electric",
        "Mahogany",
        "Nato",
        "String",
        "Ukuleles",
        "Wood",
      ],
    },
    {
      sku: "MWOOP19",
      name: "Cutaway Guitar",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 120.0,
      oldPrice: 150.0,
      subtitle: "Nullam cursus lacinia erat.",
      subtitleTwo: "Praesent congue erat at massa",
      image: "/images/MWOOP19.webp",
      description: `Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius.
In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna.`,
      descriptionTwo: `Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.`,
      tags: ["String", "Wood"],
      color: ["Yellow"],
      size: ["L", "S"],
      categoryNames: [
        "Accessories",
        "Acoustic",
        "8",
        "Lyrica",
        "Rosewood",
        "Nato",
        "Ukuleles",
      ],
    },
  ];

  for (const prod of productData) {
    const existingProduct = await prisma.product.findUnique({
      where: { sku: prod.sku },
    });

    if (!existingProduct) {
      const connectCategories = prod.categoryNames.map((name: any) => ({
        categoryId: categoryIds[name],
      }));

      await prisma.product.create({
        data: {
          sku: prod.sku,
          name: prod.name,
          title: prod.title,
          price: prod.price,
          image: prod.image,
          subtitle: prod.subtitle,
          subtitleTwo: prod.subtitleTwo,
          description: prod.description,
          descriptionTwo: prod.descriptionTwo,
          tags: prod.tags,
          color: prod.color,
          size: prod.size,
          categories: {
            create: connectCategories,
          },
        },
      });
      console.log(
        `✅ Товар ${prod.sku} добавлен в категории: ${prod.categoryNames.join(", ")}`,
      );
    } else {
      console.log(`ℹ️ Товар ${prod.sku} уже существует.`);
    }
  }

  console.log("🎉 База данных полностью укомплектована!");
}

main()
  .catch((e) => {
    console.error("❌ Ошибка при выполнении сида:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
