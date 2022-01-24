import "./App.css";
import { FreeTier } from "./FreeTier";
import { PlusTier } from "./PlusTier";
import { ProTier } from "./ProTier";

function App() {
  
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <FreeTier/>
            <PlusTier/>
            <ProTier/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
