"use server"

import { Event } from "@/components/event"
import { pocketBase } from "@/lib/pocketBase"

export default async function Page({ params }: { params: { event: string } }) {
    console.log(`nameShort="${params.event.replace("_", " ")}"`)
    const event = await pocketBase.collection("events").getFirstListItem(`nameShort="${params.event.replaceAll("_", " ")}"`)
    return (
        <Event event={event} />
    )
}