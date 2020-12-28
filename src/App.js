import IcoActivity from './components/icons/IcoActivity'
import IcoBook from './components/icons/IcoBook'
const appTheme = {
    light: {
        mainColor: "#174091",
        textColor: "#FFFFFF",
    },
    dark: {
        mainColor: "#A59C87",
        textColor: "#141010",
    }
}

function App() {
  return (
    <div>
      <IcoActivity size="big" color="yellow"/>
      <IcoBook size="big" color="green"/>
    </div>
  )
}

export default App;
