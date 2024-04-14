import { Card } from "@/components/ui/card";

export function About() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <main>
        <section className="flex gap-8">
          <Card className="w-2/3 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">ABOUT ANJA</h2>
            <p className="mb-4">
              Gefühlte Welt in Farbe - mit blauen Augen sehe ich die Welt nicht
              rosa-rot. Ich lebe es bunt!
            </p>
            <p className="mb-4">
              Meine Bilder sind farbig, kontrastreich aber auch sinnlich. Im
              Mittelpunkt meines Schaffens stehen verschiedene Materialien wie
              Papier, Gips, Marmormehl, Acrylfarben, Beize oder Eisenpulver in
              Verbindung mit besonderen Fundstücken, aber auch Alltäglichem.
              Farbtöne nutze ich, um Gefühle und Stimmungen auszudrücken. Ich
              schöpfe bewusst aus dem Unbewussten.
            </p>
            <p className="mb-4">
              Das Auftragen, Abkratzen und Übermalen, hinterlässt gewollte
              Spuren auf meinen Bildern. Farben und plastische Elemente fließen
              ineinander über und verschmelzen. Arbeiten entstehen spontan, aus
              dem Moment heraus und entwickeln sich im Prozess. Alles ist
              möglich.
            </p>
            <p>
              Der Alltag braucht Pausen, Zeit für Fantasie und Raum für Träume.
              Nehmen Sie sich eine Pause und gehen Sie mit mir auf die Reise in
              die Welt der Farben.
            </p>
          </Card>
          <div className="w-1/3">
            <img
              alt="Anja in a field"
              className="rounded-lg"
              height="500"
              src="https://static.wixstatic.com/media/f73077_5f2d0105797d44098e954312145d5bb4~mv2.jpg/v1/fill/w_1060,h_1244,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f73077_5f2d0105797d44098e954312145d5bb4~mv2.jpg"
              style={{
                aspectRatio: "300/500",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
        </section>
        <section className="mt-8">
          <Card className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-stretch gap-4">
              <div className="flex-[1]">
                <img
                  alt="Enja painting"
                  className="rounded-lg h-full"
                  src="https://static.wixstatic.com/media/6e4c346c5559417f855495767e30cd9b.jpg/v1/fill/w_834,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6e4c346c5559417f855495767e30cd9b.jpg"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex-[3]">
                <h2 className="text-3xl font-semibold mb-4">VITA</h2>
                <p className="">
                *1975 . Seit 1985 konnte ich im Mal- und Zeichenzirkel von Christian Haase lernen und arbeiten. 
                Hier wurden wir in die Grundlagen des Malens und Zeichnens eingeweiht, das Auge geschult und der Mut gefördert. 
                Durch die Kursleitung wurden Teilnahmen an Wettbewerben und Ausstellungen regelmäßig organisiert. 
                Diese Zeit im Zeichenzirkel hat mich stark geprägt. Seitdem begleitet mich das Malen und Zeichnen in meinem Leben. 
                Durch die Arbeit in meinem Atelier bekomme ich die Möglichkeit meine Kreativität zu leben, 
                was ein perfekter Gegenpol zu meinem Beruf als Bankkauffrau ist.
                </p>
              </div>
            </div>
          </Card>
        </section>
        <section className="grid grid-cols-2 gap-8 mt-8">
        <Card className="p-4 bg-white rounded-lg shadow-md relative">
            <img
              alt="Writing stories"
              className="rounded-lg brightness-50 w-full"
              height="300"
              src="https://static.wixstatic.com/media/f73077_4a19f0e725864d07a6dc4cbc99d7f2ee~mv2.jpg/v1/fill/w_718,h_1094,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f73077_4a19f0e725864d07a6dc4cbc99d7f2ee~mv2.jpg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
            />
            <h3 className="text-5xl font-light text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              WRITING STORIES OF THE HEART
            </h3>
          </Card>
          <Card className="p-4 bg-white rounded-lg shadow-md relative">
            <img
              alt="Painting landscapes"
              className="rounded-lg brightness-50 w-full"
              height="300"
              src="https://static.wixstatic.com/media/f73077_42d1e6d79b274c1f8b0df7d7e074e42e~mv2.jpg/v1/fill/w_678,h_1094,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f73077_42d1e6d79b274c1f8b0df7d7e074e42e~mv2.jpg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
            />
            <h3 className="text-5xl font-light text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              PAINTING LANDSCAPES OF THE SOUL
            </h3>
          </Card>
        </section>
      </main>
      <footer className="text-center py-4 mt-8 border-t">
        Anja Bormeister | bunter leben
      </footer>
    </div>
  );
}
