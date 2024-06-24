import { useState } from "react";
import Configure from "./Configure";

export default function Item({ contactObj, onDeleteContact }) {
   const [configure, setConfigure] = useState(false);

   function handleConfigure() {
      setConfigure((open) => !open);
   }

   let phoneNumberFormat = "x(xxx)xxx-xx-xx";
   for (let i = 0; i < contactObj.phone.length; i++) {
      phoneNumberFormat = phoneNumberFormat.replace("x", contactObj.phone[i]);
   }

   return (
      <div className="item">
         <div className="avatar">
            <img src={contactObj.image} alt={contactObj.name} />
         </div>
         <div className="info">
            <div className="name">{contactObj.firstName + " " + contactObj.lastName}</div>
            <a href={"tel:" + contactObj.phone} className="phone">
               {phoneNumberFormat}
            </a>
         </div>
         <div className="settings">
            <button className="settings__button" onClick={handleConfigure}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
               >
                  <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
               </svg>
            </button>
            {configure && <Configure onDeleteContact={() => onDeleteContact(contactObj.id)} />}
         </div>
      </div>
   );
}
