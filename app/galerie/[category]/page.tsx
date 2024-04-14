import { Galerie } from "@/components/galerie";



export default async function Page({ params }: { params: { category: string } }) {
    return <div>
        <Galerie category={params.category} />
    </div>
  }