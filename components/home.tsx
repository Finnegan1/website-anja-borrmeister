"use client";



export function Home() {
  return (
    <main>
      <section className="relative">
        <img
          alt="Gallery view"
          className="w-full h-auto object-cover aspect-[1920/900] brightness-75"
          src="https://static.wixstatic.com/media/f73077_37a7697614ae463586796ac66c29af07~mv2.jpg"
          width={1920}
          height={900}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-5xl font-bold text-white tracking-[15px]">
            BUNTER LEBEN
          </h2>
          <p className="text-xl text-white mt-4">Art by Anja Borrmeister</p>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded-lg">
            <img
              alt="Painting"
              className="w-full h-auto rounded-lg"
              height="240"
              src="https://static.wixstatic.com/media/f73077_d65c6ff3a8f640f7a2a3486daea79c75~mv2.jpg/v1/fill/w_816,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f73077_d65c6ff3a8f640f7a2a3486daea79c75~mv2.jpg"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
            <h3 className="mt-4 text-lg font-semibold">Malerei</h3>
            <p className="text-gray-600">
              Bunte Farbwelten aufgetragen mit Pinsel oder Spachtel.
            </p>
            <a className="text-blue-500 mt-2 inline-block" href="/malerei">
              {`MEHR SEHEN >`}
            </a>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <img
              alt="Collage"
              className="w-full h-auto rounded-lg"
              height="240"
              src="https://static.wixstatic.com/media/f73077_ea619df6e25845b5a73ce014b29e7f5e~mv2.jpg/v1/fill/w_812,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f73077_ea619df6e25845b5a73ce014b29e7f5e~mv2.jpg"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
            <h3 className="mt-4 text-lg font-semibold">Collage</h3>
            <p className="text-gray-600">
              Fundstücke und kleine Schätze verschmelzen zu neuen Objekten.
            </p>
            <a className="text-blue-500 mt-2 inline-block" href="/collage">
              {`MEHR SEHEN >`}
            </a>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <img
              alt="Watercolor"
              className="w-full h-auto rounded-lg"
              height="240"
              src="https://static.wixstatic.com/media/9ae9d19270f34972a49d0c783db9526d.jpg/v1/fill/w_812,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9ae9d19270f34972a49d0c783db9526d.jpg"
              style={{
                aspectRatio: "360/240",
                objectFit: "cover",
              }}
              width="360"
            />
            <h3 className="mt-4 text-lg font-semibold">Aquarell</h3>
            <p className="text-gray-600">
              Stark fließende Farben und weiche Übergänge. Bilder voller
              Atmosphäre und Leuchtkraft.
            </p>
            <a className="text-blue-500 mt-2 inline-block" href="/aquarell">
              {`MEHR SEHEN >`}
            </a>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold">
              DAS GEHEIMNIS DER KUNST LIEGT DARIN, DASS MAN NICHT SUCHT, SONDERN
              FINDET.” – PABLO PICASSO
            </h2>
            <div className="mt-8 w-48 h-1 bg-blue-500" />
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow rounded-lg flex flex-col justify-between">
            <div>
              <img
                alt="Events"
                className="w-full h-auto rounded-lg"
                height="240"
                src="https://static.wixstatic.com/media/11062b_40c11cafe9f3488b801cbecddf1e926d~mv2.jpg/v1/fill/w_1270,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_40c11cafe9f3488b801cbecddf1e926d~mv2.jpg"
                style={{
                  aspectRatio: "510/240",
                  objectFit: "cover",
                }}
                width="510"
              />
              <h3 className="mt-4 text-lg font-semibold">Veranstaltungen</h3>
              <p className="text-gray-600">
                Bei verschiedenen Veranstaltungen über das Jahr verteilt können
                Sie mit mir in Kontakt treten, haben die Möglichkeit Produkte zu
                erwerben welche nicht im Shop erhältlich sind und können
                spezielle Rabattangebote nutzen.
              </p>
            </div>
            <a className="text-blue-500 mt-2 inline-block" href="/varanstaltungen">
              {`MEHR SEHEN >`}
            </a>
          </div>
          <div className="bg-white p-6 shadow rounded-lg flex flex-col justify-between">
            <div>
              <img
                alt="Projects"
                className="w-full h-auto rounded-lg"
                height="240"
                src="https://static.wixstatic.com/media/f73077_02c68f21b57c4454905b7a89607be91f~mv2.jpg/v1/fill/w_1260,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f73077_02c68f21b57c4454905b7a89607be91f~mv2.jpg"
                style={{
                  aspectRatio: "510/240",
                  objectFit: "cover",
                }}
                width="510"
              />
              <h3 className="mt-4 text-lg font-semibold">Projekte</h3>

              <p className="text-gray-600">
                Gestaltung eines Klaviers für den Hauptbahnhof Dresden im Rahmen
                des Projekts KlangRaum.
              </p>
            </div>
            <a className="text-blue-500 mt-2 inline-block" href="/projekt-klangraum">
              {`MEHR SEHEN >`}
            </a>
          </div>
        </div>
      </section>
      <footer className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">Anja Borrmeister | bunter leben</p>
        </div>
      </footer>
    </main>
  );
}
