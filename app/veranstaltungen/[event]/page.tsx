"use server"

import { Event } from "@/components/event"
import { pocketBase } from "@/lib/pocketBase"

export async function getStaticPaths() {
    const events = await pocketBase.collection("events").getFullList();
    return { 
        paths: events.map(event => ({ params: { event: event.nameShort } })),
        fallback: false
    };
}

export default async function Page({ params }: { params: { event: string } }) {
    const event = await pocketBase.collection("events").getFirstListItem(`nameShort="${params.event.replaceAll("_", " ")}"`)
    return (
        <Event event={event} />
    )
}