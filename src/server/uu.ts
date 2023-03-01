import { router, publicProcedure } from "~/server/trpc";

interface User {
  id: string;
  name: string;
}

const userList: User[] = [
  {
    id: "1",
    name: "KATT",
  },
  {
    id: "2",
    name: "K2ATT",
  },
];

export const uRouter = router({
  userById: publicProcedure
    .input((val) => {
      // console.log("asdfasdff", val);
      if (typeof val === "string") return val;
      throw new Error(`Invalid input: ${typeof val}`);

      // return val;
    })
    .query((req) => {
      // return userList[0];
      const { input } = req;
      const user = userList.find((u) => u.id === input);
      //
      return user;
    }),
});
