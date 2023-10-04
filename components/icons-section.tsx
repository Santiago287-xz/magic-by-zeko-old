import { MiraIcon, LineIcon, PadIcon, PadCheckIcon } from "@/components/icons";

export default function IconsSection() {
  return (
<section className="bg-gradient-to-b from-foreground/5 to-foreground/10 ">
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 py-8 sm:py-12 text-center">
    <li className="flex flex-col items-center icon-circle">
      <MiraIcon className="text-center"/>
      <h6 className="mt-4 text-lg font-bold">Built for Precision</h6>
      <p className="mt-2 text-foreground-400">Easy Micro Adjustments</p>
    </li>
    <li className="flex flex-col items-center">
      <LineIcon />
      <h6 className="mt-4 text-lg font-bold">Easy Glide</h6>
      <p className="mt-2 text-foreground-400">Easy Micro Adjustments</p>
    </li>
    <li className="flex flex-col items-center">
      <PadIcon />
      <h6 className="mt-4 text-lg font-bold">Rubber Bottom</h6>
      <p className="mt-2 text-foreground-400">Easy Micro Adjustments</p>
    </li>
    <li className="flex flex-col items-center">
      <PadCheckIcon />
      <h6 className="mt-4 text-lg font-bold">Durable</h6>
      <p className="mt-2 text-foreground-400">Easy Micro Adjustments</p>
    </li>
  </ul>
</section>
  );
}
