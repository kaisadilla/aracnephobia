import { DivProps } from "types";
import Localization from "./localization";

const en_US: Localization = {
    about: {
        about_me: {
            bio: (props: DivProps) => (<div {...props}>
                <p>
                    Hello there! I'm Ana.
                </p>
                <p>
                    With over a decade working on <strong>strategic marketing</strong> and visual creation, my career has focused on crafting memorable <strong>brand identities</strong> and effective communication strategies, mixing <strong>online and offline marketing</strong> to maximize impact for our clients.
                </p>
                <p>
                    My approach integrates <strong>UX / UI design</strong> with compelling <strong>storytelling</strong>, which allows me to turn our clients' ideas into an exceptional user experience. I am driven by a constant pursuit of innovation and the opportunity to explore the creative areas, working with diverse partners through <strong>Agile methodologies</strong>.
                </p>
            </div>),
        },
        skills: {
            skills: (props: DivProps) => (<div {...props}>
                <p>
                    I specialize in <strong>digital communications</strong>, with an emphasis on social media. I'm passionate about telling stories through <strong>storytelling</strong> and <strong>visual narrative</strong>. Through my experience, I've developed skills in <strong>illustration</strong>, <strong>video production</strong>, and <strong>creative content creation</strong>; integrating <strong>strategic thinking</strong> with <strong>aesthetic sensitivity</strong> to effectively connect with audiences.
                </p>
                <p>
                    I'm known for being <strong>perfectionist</strong>, <strong>versatile</strong>, and committed to quality in every project.
                </p>
            </div>),
        },
    }
}

export default en_US;