import {useState} from "react";
import {expand} from './feature/accounts/AccountsSlice.js'
import {useDispatch, useSelector} from 'react-redux'
import CollapsableButtons from "./collapsableButtons.jsx";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const TreeNode = ({node}) => {
    const dispatch = useDispatch()
    const [collapsed, setCollapsed] = useState(true);
    const isChild = node?.isChild;
    const has_children = node?.has_children;

    const parentsToChildren = useSelector((state) => {

        return state.accounts.parentsToChildren
    })


    const parentsToChild = parentsToChildren && parentsToChildren[node.id];

    const Child = () => {
        return (<li className="child">


            {node?.name}
        </li>)
    }
    const toggleCollapse = (event, nodeId) => {
        event.preventDefault()
        if (collapsed && node.has_children && !parentsToChild?.length > 0) {

            dispatch(expand(nodeId))
        }

        setCollapsed((collapsed) => {
            return !collapsed
        });


    };

    if (has_children) {
        return (<ul className={isChild ? "child" : "parent"}>
            <li onClick={(event) => {
                toggleCollapse(event, node?.id)
            }}>
                <CollapsableButtons hasChildren={has_children} collapsed={collapsed}/>

                {node?.name}
            </li>
            {!collapsed && node?.has_children && parentsToChild?.map((child) => (
                <TreeNode className={"child"} key={child.id} node={child} isChild={true}/>))}
        </ul>)
    }

    if (!has_children) {

        return (<Child/>)

    }

};
TreeNode.propTypes = {
    node: PropTypes.shape({
        isChild: PropTypes.bool,
        hasChildren: PropTypes.bool,
        id: PropTypes.string,
        // other prop types for 'node' if applicable
    }).isRequired,
};
export default TreeNode;
