export default function Contactsale() {
  return (  <div className="contact-sales">
   <div className="contact-sale-header">
    <h2>Contact Sale</h2>
    <FontAwesomeIcon icon = {faXmark} />
   </div>

    <form className="contact-form">
     <input type="email" placeholder="Email"/>
     <input type="first-name" placeholder="First name"/>
     <input type="last-name" placeholder="Last name" />
     <input type="company" placeholder="Company" />
     <select placeholder="Estimated Contributor seat">
      <option value="">Select One</option>
      <option value="">100+ contributors</option>
      <option value="">50-99 contributors</option>
      <option value="">25-49 contributors</option>
      <option value="">10-14 contributors</option>
     </select>
     <input type="text" placeholder="Comments(optional)"/>
    </form>
   </div>)
}