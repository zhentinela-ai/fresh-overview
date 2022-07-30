/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import SayHello from "../../islands/SayHello.tsx";

function productName(props: PageProps) {
  console.log(props.params);

  return (
    <div>
      productName: {props.params.productName}
      <SayHello />
    </div>
  );
}

export default productName;
