import type { NextPage } from "next";
import Head from "next/head";
import {CreateView} from '../views'

const Create: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NFT Create</title>
        <meta
          name="Create"
          content="NFT Create"
        />
      </Head>
   <CreateView />
    </div>
  );
};

export default Create;
