import { useSelector } from 'react-redux'
import Tree from "./Tree.jsx";

export default function App() {
  const accounts = useSelector((state) => {

   return  state.accounts.value
  })
  return (
      <>
      <h1 className="flex">Accounts</h1>
      <div className="flex">
          <Tree data={accounts}/>

      </div>
      </>
  )
}
