import { useState } from "react";

export default function AddContact({ addContact, onSaveContact, cancel, onAddContact }) {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [avatar, setAvatar] = useState("https://i.pravatar.cc/48");
   const [phoneNumber, setPhoneNumber] = useState("");

   function handleSubmit(e) {
      e.preventDefault();

      if (firstName.trim() && lastName.trim() && phoneNumber.trim()) {
         const id = crypto.randomUUID();
         const newContact = {
            id,
            firstName,
            lastName,
            image: `${avatar}?=${id}`,
            phone: phoneNumber,
         };

         onSaveContact(newContact);

         setFirstName("");
         setLastName("");
         setPhoneNumber("");

         onAddContact(false);
      }
   }

   return (
      <>
         {addContact && (
            <div>
               <h2 className="add-title">Add Contact</h2>
               <form onSubmit={handleSubmit} className="form">
                  <div className="form__items">
                     <div className="form__item">
                        <label htmlFor="firstName" className="form__label">
                           First Name
                        </label>
                        <input
                           id="firstName"
                           type="text"
                           value={firstName}
                           className="form__input"
                           onChange={(e) => setFirstName(e.target.value)}
                        />
                     </div>
                     <div className="form__item">
                        <label htmlFor="lastName" className="form__label">
                           Last Name
                        </label>
                        <input
                           id="lastName"
                           type="text"
                           value={lastName}
                           className="form__input"
                           onChange={(e) => setLastName(e.target.value)}
                        />
                     </div>
                     <div className="form__item">
                        <label htmlFor="avatar" className="form__label">
                           Avatar
                        </label>
                        <input
                           id="avatar"
                           type="url"
                           value={avatar}
                           className="form__input"
                           onChange={(e) => setAvatar(e.target.value)}
                        />
                     </div>
                     <div className="form__item">
                        <label htmlFor="phone" className="form__label">
                           Phone Number
                        </label>
                        <input
                           id="phone"
                           type="tel"
                           value={phoneNumber}
                           placeholder="+71234567889"
                           className="form__input"
                           onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                     </div>
                     <div className="form__item">
                        <div className="form__actions">
                           <button type="submit" className="button save-btn">
                              Save
                           </button>
                           <button type="button" className="button cancel-btn" onClick={cancel}>
                              Cancel
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         )}
      </>
   );
}
