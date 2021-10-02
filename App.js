import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/actions'
import Water from './Assets/drop.jpg'
import './App.css'

function App() {
  const number = useSelector(state => state.counter)
  const squared = useSelector(state => state.counter ** 2)
  const cubed = useSelector(state => state.counter ** 3)

  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      
        <div className="picture">
          <img src={Water} alt="liquid" />
        </div>
      </div>
    
  );
}

export default App;
