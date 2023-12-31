import { useSelector } from 'react-redux'
import Tree from "./Tree.jsx";

export default function App() {
  const accounts = useSelector((state) => {

   return  state.accounts.accounts
  })
    const parentsToChildren = useSelector((state) => {

         return  state.accounts.parentsToChildren
  })
  return (
      <>
      <h1 className="flex">Accounts ({accounts.length})</h1>
      <div className="flex">
          <Tree data={accounts} parentToChild={parentsToChildren}/>

      </div>
      </>
  )
}
