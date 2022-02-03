import vega from 'vega'
import vegaLite from 'vega-lite'
import vl from 'vega-lite-api'
import {Handler} from 'vega-tooltip'
import {Config} from './components/Config'
import {GetData} from './components/GetData';
import {Viz} from './components/Viz'


function App() {

  vl.register(vega,vegaLite,{
    view: {render:'svg'},
    init: view => {
      view.tooltip(new Handler().call)
    }
  })

  const run = async () =>{
    const marks = Viz
      .data(await GetData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ typew: 'fit', contains: 'padding'})
      .config(config)
    
    document.body.appendChild(await marks.render())
  }


  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Hello, Sensei</h1>
      </header>
    </div>
  );
}

export default App;
