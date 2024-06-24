export default function Configure({ onDeleteContact }) {
   return (
      <div className="configure">
         <button type="button" className="configure__btn configure__btn--edit">
            Edit
         </button>
         <button type="button" onClick={onDeleteContact} className="configure__btn configure__btn--delete">
            Delete
         </button>
      </div>
   );
}
