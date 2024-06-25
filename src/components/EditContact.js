// import { useState } from "react";

export default function EditContact({ editContact }) {
   console.log(editContact);

   // const [firstName, setFirstName] = useState(editContact.firstName);

   return (
      <div>
         <h2 className="add-title">Edit Contact</h2>
         <form className="form">
            <div className="form__items">
               <div className="form__item">
                  <label htmlFor="firstName" className="form__label">
                     First Name
                  </label>
                  <input
                     id="firstName"
                     type="text"
                     className="form__input"
                     value={editContact.firstName}
                     // onChange={(e) => onEditContact(e.target.value)}
                  />
               </div>
               <div className="form__item">
                  <label htmlFor="lastName" className="form__label">
                     Last Name
                  </label>
                  <input
                     id="lastName"
                     type="text"
                     className="form__input"
                     value={editContact.lastName}
                     // onChange={(e) => onEditContact(e.target.value)}
                  />
               </div>
               <div className="form__item">
                  <label htmlFor="avatar" className="form__label">
                     Avatar
                  </label>
                  <input
                     id="avatar"
                     type="url"
                     className="form__input"
                     value={editContact.image}
                     // onChange={(e) => onEditContact(e.target.value)}
                  />
               </div>
               <div className="form__item">
                  <label htmlFor="phone" className="form__label">
                     Phone Number
                  </label>
                  <input
                     id="phone"
                     type="tel"
                     placeholder="+71234567889"
                     className="form__input"
                     value={editContact.phone}
                     // onChange={(e) => onEditContact(e.target.value)}
                  />
               </div>
               <div className="form__item">
                  <div className="form__actions">
                     <button type="submit" className="button save-btn">
                        Save
                     </button>
                     <button type="button" className="button cancel-btn">
                        Cancel
                     </button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
}
