import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import { Ticket } from "../components/Ticket";

export default function Home() {
  const hasAvatarUploaded = true;

  return (
    <Dialog.Root>
      <main className="lg:h-screen max-w-[480px] lg:max-w-[1240px] p-12 mx-auto flex items-center"></main>
      <div></div>
    </Dialog.Root>
  );
}
