import Cards from "../../../components/assets/cards/cards4"
import Cards1 from "../../../components/assets/cards/cards5"
import { SiChatbot } from "react-icons/si";

export default function Section4() {
    return (
        <div className="w-screen flex justify-end mt-10">
            {/* <h1 className="lg:text-7xl -rotate-45 ml-20">OUR SERVICES</h1> */}
              <div className="lg:h-2xl flex flex-col">
                <div className="flex">
                     <Cards title="UI&UX DESIGN"
                icon=<SiChatbot />
            />
            <Cards1 title=" WEBSITE DEVELOPMENT "
                icon=<SiChatbot />

            />
              <Cards title="Digital Marketing "
                icon=<SiChatbot />
            />
           </div>
                <div className="flex">
                     <Cards1 title=" SEO "
                icon=<SiChatbot />

            />
            <Cards title="SMM"
                icon=<SiChatbot />
            />
            <Cards1 title=" ACCOUNTS"
                icon=<SiChatbot />

            />
             </div>
        </div>
      </div>
    )
}
