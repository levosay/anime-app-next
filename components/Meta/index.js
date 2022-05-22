import Head from 'next/head'

const Meta = ({ meta }) => {
  const metaTitle = meta?.title || '2APICK'

  return (
    <Head>
      <title>{metaTitle}</title>
    </Head>
  );
};

export default Meta
