import './App.css'
import InputField from './components/InputField';

const App : React.FC = () => {

  return (
    <>
        <div className="App">
          <div className="heading">
            Todo list
          </div>
          <InputField/>
        </div>
    </>
  )
}

export default App
