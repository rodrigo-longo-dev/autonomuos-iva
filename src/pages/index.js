import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
      </Head>
      <section className="default">
        <div className="default__wrapper">
          <h1 className="default__title">Next JS boilerplate</h1>
          <h4 className="default__name">by Rodrigo Longo</h4>
        </div>
      </section>
    </>
  )
}
