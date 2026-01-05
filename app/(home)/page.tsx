import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { Alert, AlertGreen, AlertNeutral } from "../components/Alert";
import { ButtonDark, ButtonLight } from "../components/Button";
import { InputDark, InputLight } from "../components/Input";
import { VerifiedBadge, DefaultBadge } from "../components/Badge";
import { FormDark, FormLight } from "../components/Form";
import { Avatar, AvatarOnlineIndicator, AvatarStr } from "../components/Avatar";
import { Chip } from "../components/Chip";
import { CheckBox } from "../components/CheckBox";


export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-around items-center h-screen w-full px-25 overflow-hidden bg-black">
      
      <section className="flex flex-col justify-center items-start gap-10 text-left max-w-xl py-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-transparent bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text font-extrabold text-5xl md:text-6xl leading-tight">
            SabalongUI, UI Library nya tau Samawa
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed">
            Sabalong UI is a collection of high-performance components designed for visual cohesion. 
            Built to build faster and look better with zero-effort configuration.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <ButtonDark
          title="Get Started"
          href="docs/introduction"
          />
          
          <Link 
            href="docs/components/alert" 
            className="text-gray-300 hover:text-white flex py-2 px-4 gap-2 items-center font-medium transition-colors"
          >
            <FiBox size={20}/>
            Components
          </Link>
        </div>
      </section>

      <section className="max-md:hidden h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-20 px-4">
        <h1 className="mb-12 text-3xl font-bold text-white text-center">Example Components</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-tighter">Alert</h2>
            <Alert/>
            <AlertGreen/>
            <AlertNeutral/>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-tighter">Button</h2>
            <ButtonDark title="Dark Button" href="/" />
            <ButtonLight title="Light Button" href="/" />
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-tighter">Input</h2>
            <InputDark/>
            <InputLight/>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-tighter">Badge</h2>
            <div className="flex gap-2">
              <VerifiedBadge/>
              <DefaultBadge/>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-tighter">Form</h2>
            <FormDark/>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-zinc-500 text-sm font-mono uppercase tracking-tighter">Avatar</h2>
            <div className="flex gap-4 items-start">
                <Avatar UrlImage="/avatar.jpg" Width={80} Height={80} alt="avatar" />
                <AvatarOnlineIndicator UrlImage="/avatar.jpg" Width={80} Height={80} alt="avatar" />
                <AvatarStr Text="AF" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
            <h1 className="text-zinc-500 text-sm font-mono">CHIP</h1>
            <div className="flex gap-2">
               <Chip
            Text="Rizfan anak RPL"
            />
            <Chip
            Text="Smkansa"
            />
            </div>
          </div>
           <div className="flex flex-col gap-2">
            CheckBox
            <CheckBox
            Text="Today is the day!"
            />
             <CheckBox
            Text="Clean my room"
            />
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}