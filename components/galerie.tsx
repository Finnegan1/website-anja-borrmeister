import { pocketBase } from "@/lib/pocketBase";

export async function generateStaticParams() {
  const categories = await pocketBase.collection("galerie_products_categories").getFullList();
  return categories.map((category) => ({
    params: { category: category.name },
  }));
}

export async function Galerie(props: { category: string }) {
  const galerieData = await pocketBase.collection("galerie_products").getFullList({filter: `category.name="${props.category}"`});
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
            src={pocketBase.files.getUrl(product, product.image[0])}
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
