import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

export function RentArt() {
  return (
    <div className="max-w-5xl mx-auto p-8">
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
            Rent My Artwork
          </h2>
        </div>

        <Card className="w-full p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
            Wohnen mit Kunst - miete Bilder!
          </h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Ein kreatives Umfeld verleiht eine angenehme Atmosphäre.
          </p>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Schaffe Dir in einem beliebigen Zeitraum ein neues Ambiente für
            deine eigenen vier Wände zu Hause oder für die Räume in Deinem
            Unternehmen!
          </p>
        </Card>
        <Card className="rounded-md shadow-md bg-white dark:bg-gray-700 p-6 space-y-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-200">
            Mietpreis für ein Bild - variiert nach Größe!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Genießen Sie wunderschöne Kunst in Ihrem Zuhause oder Büro. Wählen
            Sie die Mietdauer, die am besten zu Ihnen passt.
          </p>
          <div className="flex justify-between">
            <h3 className="font-semibold">1 Week</h3>
            <span>Starting at 10 €</span>
          </div>
          <div className="flex justify-between">
            <h3 className="font-semibold">4 Weeks</h3>
            <span>Starting at 30 €</span>
          </div>
          <div className="flex justify-between">
            <h3 className="font-semibold">3 Months</h3>
            <span>Starting at 50 €</span>
          </div>
          <div className="flex justify-between">
            <h3 className="font-semibold">6 Months</h3>
            <span>Starting at 80 €</span>
          </div>
          <div className="flex justify-between">
            <h3 className="font-semibold">12 Months</h3>
            <span>Starting at 100 €</span>
          </div>
        </Card>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Preis zuzüglich Verpackung und Transport. Bei einem späteren Erwerb
          des gemietete Objekt wird der Mietpreis vom Kaufpreis abgezogen. Für
          genauere Informationen und ein individuelles Angebot kontaktiere mich
          gerrne!
        </p>
        <div className="mt-6">
          <Button className="w-full py-2 px-4 border border-gray-200 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:border-gray-800">
            Contact Me
          </Button>
        </div>
      </div>
    </main>
    </div>
  );
}
