import { DivProps } from "types";
import Localization from "./localization";

const en_US: Localization = {
    about: {
        about_me: {
            bio: (props: DivProps) => (<div {...props}>
                <p>
                    Hello there! I'm ana.
                </p>
                <p>
                    With over a decade working on <strong>strategic marketing</strong> and visual creation, my career has focused on crafting memorable <strong>brand identities</strong> and effective communication strategies, mixing <strong>online and offline marketing</strong> to maximize impact for our clients.
                </p>
                <p>
                    My approach integrates <strong>UX / UI design</strong> with compelling <strong>storytelling</strong>, which allows me to turn our clients' ideas into an exceptional user experience. I am driven by a constant pursuit of innovation and the opportunity to explore the creative areas, working with diverse partners through <strong>Agile methodologies</strong>.
                </p>
            </div>),
        }
    }
}

export default en_US;