import { NavLink } from "react-router-dom";
import { ContactHero } from "./components/Hero-Contact";

export const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <div className="bg-transparent text-white px-16 bg-[linear-gradient(164deg,_#070707_21%,_#313131_100%)]  flex flex-col  min-h-96 -mt-8 pt-8 -mb-10 pb-10">
        <div className="flex flex-col gap-8 my-auto">
          <div className="mt-8 text-3xl">
            For the most effective communication, please utilize our support
            channel. Click the link below to submit a ticket.
          </div>
          <div className="text-6xl transition-all cursor-pointer hover:text-blue-600 hover:transition-all">
            <NavLink to={"https://www.techtonions.com/to_company/contact-us/"}>
              https://support.techtonions.com
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
