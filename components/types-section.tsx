export default function TiposSection() {
  return (
    <section className="bg-[#141a1f]">
      <ul className="flex flex-wrap justify-evenly md:flex-nowrap gap-2 py-12 sm:py-20 text-center">
        <li className="flex flex-col items-center text-slate-200 max-w-[25rem]">
          <img
            src="https://media.discordapp.net/attachments/1116888339967119460/1160346019981176842/i.shgcdn.png?ex=65345371&is=6521de71&hm=c
    da5ccf328191b1b4462f6d0ad9973b24629ef2bdedaca7cf049b06f33def602&=&width=473&height=473"
            alt="Descripción de la imagen"
            className="mr-4"
          />
          <p className="mt-4 text-2xl font-bold text-slate-200">Control</p>
          <p className="mt-2 text-slate-400">
            Obtén un{" "}
            <span className="font-bold text-blue-400 inline-block w-max">control preciso</span> al
            mover tu mouse sobre la superficie de este mouse pad. Es altamente
            recomendado para juegos estratégicos como{" "}
            <span className="font-bold text-blue-400 inline-block w-max">CSGO y Valorant</span>
            (Sin revestimiento).
          </p>
        </li>
        <li className="flex flex-col items-center text-slate-200 max-w-[25rem]">
          <img
            src="https://media.discordapp.net/attachments/1116888339967119460/1160348384717189210/i.shgcdn2.png?ex=653455a5&is=65
    21e0a5&hm=28eb79ea876114cdd8f5dda13251fd86e35ba7fe849797d1ff6aa7c57af66194&=&width=473&height=473"
            alt="Descripción de la imagen"
            className="w-85 h-85 mr-4"
          />
          <p className="mt-4 text-2xl font-bold text-slate-200">Speed</p>
          <p className="mt-2 text-slate-400">
            Experimenta una{" "}
            <span className="font-bold text-orange-400 inline-block w-max">mayor velocidad</span>{" "}
            al mover tu mouse sobre la superficie de este mouse pad. Ideal para
            juegos de alta acción como{" "}
            <span className="font-bold text-orange-400 inline-block w-max">Fortnite</span> (Sin
            revestimiento).
          </p>
        </li>
      </ul>
    </section>
  );
}
