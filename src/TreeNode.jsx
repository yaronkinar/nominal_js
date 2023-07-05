import {useState} from "react";
import {expand} from './feature/accounts/AccountsSlice.js'
import {useDispatch, useSelector} from 'react-redux'

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const CollapsableButtons = ({hasChildren, collapsed}) => {

    if (hasChildren) {

        if (collapsed) {
            return (<span>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
  <path d="M9 5l7 7-7 7"/>
</svg>
            </span>)
        } else {
            return <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
  <path d="M19 9l-7 7-7-7"/>
</svg>
            </span>
        }
    } else {
        return <div></div>

    }


}
// eslint-disable-next-line react/prop-types
const TreeNode = ({node}) => {
    const dispatch = useDispatch()
    const [collapsed, setCollapsed] = useState(true);
    let isChild = node?.isChild;
    let has_children = node?.has_children ;

    const parentsToChildren = useSelector((state) => {

        return  state.accounts.parentsToChildren
    })



    let parentsToChild = parentsToChildren && parentsToChildren[node.id];

    const toggleCollapse = (event, nodeId) => {
        event.preventDefault()
        if (collapsed && node.has_children && !parentsToChild?.length > 0) {

            dispatch(expand(nodeId))
        }

        setCollapsed((prev) => {
            return !prev
        });


    };

    if (has_children) {
        return (<ul className={ "parent"}>
            <li onClick={(event) => {
                toggleCollapse(event, node?.id)
            }}>
                <CollapsableButtons hasChildren={has_children} collapsed={collapsed}/>

                {node?.name}
            </li>
            {!collapsed && node?.has_children  &&  parentsToChild?.map((child) => (
                <TreeNode className={"child"} key={child.id} node={child} isChild={true}/>))}
        </ul>)
    }

    if (!has_children) {
        if (isChild) {
            return (<li className="child">


                {node?.name}
            </li>)
        } else {
            return (<li className="child">


                    {node?.name}
                </li>)
        }
    }

};
export default TreeNode;
