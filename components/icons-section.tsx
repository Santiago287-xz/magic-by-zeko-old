import { MiraIcon, LineIcon, PadIcon, PadCheckIcon } from "@/components/icons";

export default function IconsSection() {
  return (
<section className="bg-[#141a1f]">
  <ul className="flex flex-wrap justify-evenly gap-2 py-12 sm:py-20 text-center">
    <li className="flex flex-col items-center text-slate-200">
      <MiraIcon className="text-center"/>
      <p className="mt-4 text-lg font-bold text-slate-200">Built for Precision</p>
      <p className="mt-2 text-slate-400">Easy Micro Adjustments</p>
    </li>
    <li className="flex flex-col items-center text-slate-200">
      <LineIcon  />
      <h6 className="mt-4 text-lg font-bold">Easy Glide</h6>
      <p className="mt-2 text-slate-400">Easy Micro Adjustments</p>
    </li>
    <li className="flex flex-col items-center text-slate-200">
      <PadIcon />
      <h6 className="mt-4 text-lg font-bold ">Rubber Bottom</h6>
      <p className="mt-2 text-slate-400">Easy Micro Adjustments</p>
    </li>
    <li className="flex flex-col items-center text-slate-200">
      <PadCheckIcon />
      <h6 className="mt-4 text-lg font-bold">Durable</h6>
      <p className="mt-2 text-slate-400">Easy Micro Adjustments</p>
    </li>
  </ul>
</section>
  );
}
