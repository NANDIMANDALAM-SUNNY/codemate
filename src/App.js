import React,{useState,createContext} from 'react'
import Main from './components/Main'

export const store = createContext();


const App = () => {
  const [html, setHtml] = useState( '')
  const [css, setCss] = useState('')
  const [javaScript, setJavaScript] = useState( '')
  const [srcDoc, setSrcDoc] = useState('')
  const [theme, setTheme] = useState('material')
  return (
   <>
   <store.Provider  
    value={{
      html, setHtml,
      css, setCss,
      javaScript, setJavaScript,
      srcDoc, setSrcDoc,
      theme, setTheme
    }}
   >
      <Main />
   </store.Provider>
   </>
  )
}

export default App