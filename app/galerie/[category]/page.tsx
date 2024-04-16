import { Galerie } from "@/components/galerie";
import { pocketBase } from "@/lib/pocketBase";

export const dynamicParams = false

export async function generateStaticParams() {
    const categories = await pocketBase.collection("galerie_products_categories").getFullList({ cache: 'no-store'});
    console.log("categories--------------------")
    console.log(categories.map(category => ({ category: category.name })));
    console.log("categories--------------------")
    return categories.map(category => ({ category: category.name }));
}

export default async function Page({ params }: { params: { category: string } }) {
    return <div>
        <Galerie category={params.category} />
    </div>
  }