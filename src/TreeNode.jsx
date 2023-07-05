import {useState} from "react";
import {expand} from './feature/accounts/AccountsSlice.js'
import {useDispatch, useSelector} from 'react-redux'
import CollapsableButtons from "./collapsableButtons.jsx";

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types

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
