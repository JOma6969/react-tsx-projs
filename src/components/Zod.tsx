import { z } from "zod";

// make a form requirement that takes in the phone number, age, country, first name, last name, class and other thing you can think of.

const userSchema = z.object({
  firstName: z.string(),
  email: z.string().email(),
  lastName: z.string(),
  age: z.number(),
  country: z.string(),
  class: z.string(),
  isMarried: z.boolean().optional(),
});

type UserSchemaType = z.infer<typeof userSchema>;

const user: UserSchemaType = {
  firstName: "Darius",
  email: "lawaltreasure08@gmail.com",
  lastName: "cosden",
  age: 18,
  country: "USA",
  class: "Graduated",
};

console.log(userSchema.safeParse(user));

const Zod = () => {
  return <div>Zod Tutorial - Cosden Solutions</div>;
};

export default Zod;
