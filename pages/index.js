import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [currentText, setCurrentText] = useState();

  console.log(currentText);
  return (
    <div>
      <Head>
        <title>Lotte's Cookie Idea</title>
        <meta name="description" content="A great idea by our friend Lotte!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-5">
        <div className="row">
          <h1 className="text-center mb-5 title">Lotte's Cookie Idea</h1>
        </div>
        <div className="row">
          <div className="col-12 input">
            <div class="mb-3">
              <label for="textinput" class="form-label">Cookiefy your text by writing here:</label>
              <textarea class="form-control" id="textinput" rows="3" onChange={(e) => setCurrentText(e.target.value)}></textarea>
            </div>
          </div>
          <div className="col-12 result">
            <p>{currentText}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
