import { pocketBase } from "@/lib/pocketBase";
import { EventsResponse } from "@/lib/pocketbase-types";

export function Event(props: { event: EventsResponse }) {
  console.log(props.event)
  return (
    <div key="1" className="h-full flex">
      <div className="w-1/2 p-12 space-y-8 text-center">
        <h1 className="text-4xl font-bold">{props.event.nameLong.toUpperCase()}</h1>
        <div>
          <h2 className="text-2xl font-semibold">Veranstaltungsort:</h2>
          <p className="text-xl">{props.event.eventLocation}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Datum & Uhrzeit:</h2>
          <p className="text-xl">{new Date(props.event.startDate).toLocaleDateString("default", {day:"numeric" ,month: "long", year:"numeric"})}</p>
          <p className="text-xl">{new Date(props.event.endDate).toLocaleDateString("default", {day:"numeric" ,month: "long", year:"numeric"})}</p>
          <p className="text-xl">{props.event.startTime.toFixed(2)} - {props.event.endTime.toFixed(2)}</p>
        </div>
      </div>
      <div className="w-1/2">
        <img
          alt="Weinberg scenery with a glass of wine"
          className="w-full h-full object-cover"
          height="780"
          src={pocketBase.getFileUrl(props.event, props.event.image[0])}
          style={{
            aspectRatio: "780/780",
            objectFit: "cover",
          }}
          width="780"
        />
      </div>
    </div>
  )
}
