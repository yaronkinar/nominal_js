import {useState} from "react";
import {expand} from './feature/accounts/AccountsSlice.js'
import {useDispatch} from 'react-redux'

// eslint-disable-next-line react/prop-types

const CollapsableButtons = ({hasChildren, collapsed}) => {

    if (hasChildren) {
        if (collapsed) {
            return (<span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="1" stroke-linecap="round" stroke-linejoin="round" width="15" height="15">
  <path d="M19 9l-7 7-7-7"/>
</svg>
            </span>)
        } else {
            return <span>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
  <path d="M9 5l7 7-7 7"/>
</svg>
            </span>
        }
    } else {
        return <div></div>
    }


}
const TreeNode = ({node}) => {
    const dispatch = useDispatch()
    const [collapsed, setCollapsed] = useState(true);
    let accounts = node?.accounts;
    let isChild = node?.isChild;
    let has_children = node?.has_children;
    const toggleCollapse = (event, nodeId) => {
        event.preventDefault()
        if (collapsed && node.has_children && !accounts?.length > 0) {

            dispatch(expand(nodeId))
        }

        setCollapsed((prev) => {
            return !prev
        });


    };

    if (has_children) {
        return (<div className={"parent"}>
            <div onClick={(event) => {
                toggleCollapse(event, node.id)
            }}>
                <CollapsableButtons hasChildren={has_children} collapsed={collapsed}/>

                {node?.name}
            </div>
            {!collapsed && node?.has_children && accounts?.map((child) => (
                <TreeNode className={"child"} key={child.id} node={child} isChild={true}/>))}
        </div>)
    }

    if (!has_children) {
        if (isChild) {
            return (<div className="child">


                {node?.name}
            </div>)
        } else {
            return (<div className="noParent">


                    {node?.name}
                </div>)
        }
    }
    /*if(isChild){
        <div className="child">


            {node?.name}
        </div>
    }*/
};
export default TreeNode;
