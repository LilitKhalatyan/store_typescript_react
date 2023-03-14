import { User } from "../types/user"

export const getAllUsers = (): Promise<User[]> => {
  return Promise.resolve([
    {
      email: "test@gmail.com",
      gender: "female",
      id: 1,
      username: "username1",
      count: 14,
      age: 18,
      phone: "+374892349823948",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
    },
    {
      email: "test@gmail.com",
      gender: "female",
      id: 2,
      username: "username1",
      count: 14,
      age: 18,
      phone: "+374892349823948",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
    },
    {
      email: "test1@gmail.com",
      gender: "female",
      username: "username1",
      count: 14,
      id: 3,
      age: 18,
      phone: "+374892349823948",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
    },
    {
      email: "test3@gmail.com",
      gender: "female",
      username: "username1",
      count: 14,
      id: 4,
      age: 18,
      phone: "+374892349823948",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
    },
    {
      email: "test4@gmail.com",
      gender: "female",
      username: "username1",
      id: 5,
      count: 14,
      age: 25,
      phone: "+374892349823948",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
    }
  ] as unknown as User[])
}