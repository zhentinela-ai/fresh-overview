/** @jsx h */
import { Handlers, PageProps } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "../utils/twind.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    return ctx.render(data);
  },
};

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function PhothosPage(props: PageProps) {
  console.log(props);

  return (
    <div className="">
      <h1>Photos page</h1>
      <div class={tw`grid grid-cols-3 gap-4`}>
        {props.data.map((photo: Photo) => (
          <div class={tw`bg-gray-400`}>
            <h1>{photo.title}</h1>
            <img src={photo.thumbnailUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhothosPage;
