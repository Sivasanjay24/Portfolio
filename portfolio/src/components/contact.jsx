import './css/contact.css'
function contact() {
  return (
    <div>
      <h1 className='hc'>Contact</h1>
    <div>
    <center>
    <form class="fm">
    <table class="fr">
    <tr><td><label for="Name">Name</label></td>
    <td><input type="text" required></input></td></tr>
    <tr><td><label for="email">Email</label></td>
    <td><input type="email" required></input></td></tr>
    <tr><td><label for="message">Message</label></td>
    <td><textarea rows="5" cols="50" required></textarea></td></tr>
    </table>
    <button className="cb"type="submit" class="btn">Sumbit</button>
    </form>
    </center>
    </div>
    </div>)
}

export default contact