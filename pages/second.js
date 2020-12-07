import Head from "next/head";

export default function Second({
  title = "Hello World!",
  metaContent = "Generic SEO pitch",
  copy = "I'm having writer's block.",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={metaContent} />
      </Head>
      <div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  // This is a full server-side Node environment,
  // which means that you can make network requests,
  // talk to databases, read from the file-system,
  // and do whatever you want to fetch your data.

  return {
    props: {
      title: "My Amazing Startup",
      metaContent: "Amazing SEO poetry",
      copy:
        "I'm in the business of making people smile. That's all I'm here for.",
    },
    revalidate: 1, // number of seconds to wait before revalidating
  };
};
