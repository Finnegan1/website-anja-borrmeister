import { Event } from "@/components/event"
import { pocketBase } from "@/lib/pocketBase"

export const dynamicParams = false

export async function generateStaticParams() {
    const events = await pocketBase.collection("events").getFullList({ cache: 'no-store'});
    return events.map((event) => ({event: event.nameShort.replaceAll(" ", "_") }));
}

export default async function Page({ params }: { params: { event: string } }) {
    const event = await pocketBase.collection("events").getFirstListItem(`nameShort="${params.event.replaceAll("_", " ")}"`)
    return (
        <Event event={event} />
    )
}