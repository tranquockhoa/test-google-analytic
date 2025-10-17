import WrapButton from "./wrap-button";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "count",
};

export default function PageButton() {
  return (
    <div className="mt-[50] ml-[50] ">
      <WrapButton />
    </div>
  );
}
