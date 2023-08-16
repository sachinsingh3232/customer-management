import Head from 'next/head';
import axios from 'axios';
import UserList from '../components/UserList'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function Home({ userList }) {
  return (
    <div >
      <Head>
        <title>NextJs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserList userList={userList} />
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
  // const myCookie = ctx.req?.cookies;

  // if (!myCookie) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }
  const resp = await axios.get(`${BASE_URL}/api/user/`);
  return {
    props: {
      userList: resp.data,
    }
  }
}