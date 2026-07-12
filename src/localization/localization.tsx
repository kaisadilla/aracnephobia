import { DivProps } from "types";

export default interface Localization {
  about: {
    about_me: {
      bio: (props: DivProps) => React.ReactElement;
    };
    skills: {
      skills: (props: DivProps) => React.ReactElement;
    };
  };
  months: [
    string, string, string, string, string, string,
    string, string, string, string, string, string
  ],
  date: (date: Date) => string;
}
