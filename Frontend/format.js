import zod from "zod";

export const registerModel = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
  email: zod.string().email(),
});

export const loginFormat = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
});
