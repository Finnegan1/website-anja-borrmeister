import { pocketBase } from "@/lib/pocketBase";

export type galerieProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  size: string;
};

export async function Galerie(props: { category: string }) {
  const galerieData = await pocketBase.collection("galerie_products").getFullList({filter: `category.name="${props.category}"`}) as galerieProduct[];
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <header className="py-12">
        <h1 className="text-4xl font-bold text-center">Galerie</h1>
        <p className="text-center mt-4">
          Jeder Pinselstrich ist ein Wort, das ich nicht finde. Jedes Bild, das
          ich male, ist ein Versuch, Worte zu finden.
        </p>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {galerieData.map((product) => (
          <img
            alt="Artwork 1"
            className="w-full"
            height="300"
            src={pocketBase.files.getUrl(product, product.image)}
            key={product.id}
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        ))}
      </div>
    </div>
  );
}
