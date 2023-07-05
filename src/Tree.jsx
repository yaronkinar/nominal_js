import TreeNode from "./TreeNode.jsx";
import {useSelector} from "react-redux";


// eslint-disable-next-line react/prop-types
const Tree = ({data}) => {

    return (
        <div >
            {Object.entries(data).map(([key, value]) => (
                <div key={key}>

                    <TreeNode data={data}   node={value}  />
                </div>
            ))}



        </div>
    );
};

export default Tree;


