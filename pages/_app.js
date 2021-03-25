import React from 'react';
import Head from 'next/head';
import wrapper from '../store/storeConfigure';

const Brothers = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>우아할 형제들</title>
    </Head>
    <Component />
  </>
);

export default wrapper.withRedux(Brothers);
