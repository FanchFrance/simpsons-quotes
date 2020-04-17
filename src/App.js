import React from "react";
import DisplaySimpson from "./components/DisplaySimpson";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: null
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    // methode pour envoyer la requete à l'API
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      // extraction des données de la réponse obtenue de l'API
      .then(response => response.data)
      // utilisation d'une donnée pour mettre à jour le state 
      .then(data => {
        console.log(data)
        this.setState({
          
          simpson: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.simpson ? (
          <DisplaySimpson simpson={this.state.simpson} />
        ) : null}
        <button type="button" onClick={this.getSimpson}>
          Show me what you've got baby doll
        </button>
      </div>
    );
  }
}
export default App;
