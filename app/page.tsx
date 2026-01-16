import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-15 px-1">
      <div className="flex flex-row items-center justify-center bg-white max-w-[90%]  shadow-[0px_0px_20px_#0ABC8C] rounded-full py-3 px-6 mb-15">
        <Image
        className='mr-2 sm:w-2 sm:h-2 md:w-5 md:h-5 xl:w-10 xl:h-10'
          src="/assert/logo_Bulle.png"
          alt="search logo"
          width={40}
          height={40}
        ></Image>
        <h1 className="text-black text-sm md:text-xl xl:text-2xl font-bold uppercase ">
          CRÉER UN SITE WEB <span className="underline">VRAIMENT</span> UNIQUE
        </h1>
      </div>
      <h1 className="text-white font-bold text-3xl md:text-4xl xl:text-5xl max-w-180 text-center leading-normal">
        Votre <span className="text-[#0ABC8C]">site</span> doit{" "}
        <span className="text-[#0ABC8C]">donner envie </span>de rester, pas de{" "}
        <span className="line-through">
        <span className="text-[#0ABC8C]">revenir</span> en{" "}
        <span className="text-[#0ABC8C]">arrière.</span>
        </span>
      </h1>
      <h2 className="text-md text-white max-w-150 flex-wrap my-5 text-center">
        Design moderne, SEO solide, Suivi complet : on construit un site qui
        retient vos visiteurs et vous apporte des résultats.
      </h2>
      <div className="flex flex-row justify-center flex-wrap max-w-600 mt-10 gap-y-20 items-center">
        <div className="flex relative flex-row items-center justify-center bg-[#0ABC8C] py-3 px-5 rounded-lg">
          <Image
          className="mr-5"
            src="/assert/calendar.png"
            alt="calendrier"
            width={30}
            height={30}
            priority
          ></Image>
          <Image className="absolute bottom-[-60px] left-[-40px] " src='/assert/un_Ptit_click.png' alt='ptit click' width={150} height={60}></Image>
          <p className='text-black text-lg font-bold'>Prendre RDV</p>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-transparent to-black w-full h-full opacity-50"></div>
        </div>
        <div className="flex flex-row items-center ml-5 justify-center bg-none border-[#0ABC8C] border-1 rounded-lg py-3 px-5 ">
          <p className="text-lg font-bold text-[#0ABC8C] ">Découvrir nos projets</p>
          <Image className='ml-4' src="/assert/down_arrow.png" alt="down arrow" width={20} height={20}>
          </Image>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
