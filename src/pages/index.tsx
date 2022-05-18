import { GetStaticProps } from "next"
import { useEffect } from "react"
import { getUsers } from "../lib/users"

interface UserProps {
  id: number;
  name: string;
}

interface UsersProps {
  users: UserProps[]
}

export default function Home({users}: UsersProps) {
  return (
    <>
      <h1>Hello</h1>
      <ul>
        { users.map( user => (
          <li key={user.id}>{user.name}</li>
        )) }
      </ul>


    </>
  )
}

// export const getStaticProps
// export const getServerSideProps

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers();
  console.log(users);
  return { 
    props: {
      users
    },
    revalidate: 5,
  }
}
