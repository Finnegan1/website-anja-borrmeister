import { Galerie } from "@/components/galerie";
import { pocketBase } from "@/lib/pocketBase";

export const dynamicParams = false

export async function generateStaticParams() {
    const categories = await pocketBase.collection("galerie_products_categories").getFullList();
    return categories.map(category => ({ params: { category: category.name } }));
}

export default async function Page({ params }: { params: { category: string } }) {
    return <div>
        <Galerie category={params.category} />
    </div>
  }