import { About } from "../components/About"
export const Home=() =>
{
    return(<div>
        <p> FORMULAIRE
        <div className='ligne '>  </div>
        </p>
        
        <label htmlFor="pren" > prénom</label><br />
        <input type="text" id="pren"placeholder="martin" />
        <br />

        <label htmlFor="nom" >nom</label><br />
        <input type="text" id="nom" placeholder="robert" /><br />
        <label htmlFor="age" > age</label><br />
        <input type="text" id="age" placeholder="18" /><br />
        <label htmlFor="email" >email</label><br />
        <input type="email" id="email" placeholder="email@gmail.com" /><br />
        <label htmlFor="gsm" >Numero de telephone</label><br />
        <input type="text"  id="gsm" placeholder="0612457810"  /><br />
        <label htmlFor="date" > Date de naissance</label><br />
        <input type="date" /><br/>
        <label htmlFor="myTextArea" >description d'objective professionnel</label>
        <textarea
          id="myTextArea"
          placeholder="Saisir ici..."
          rows={4} 
          cols={40} 
        ></textarea>
  
        
        <input type="button" value="submit" /><br /> 
        </div>
        
    )
}