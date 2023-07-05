import TreeNode from "./TreeNode.jsx";


// eslint-disable-next-line react/prop-types
const Tree = ({data}) => {

    return (
        <div >
            {Object.entries(data).map(([key, value]) => (
                <div key={key}>

                    <TreeNode  data={data}   node={value}  />
                </div>
            ))}



        </div>
    );
};

export default Tree;


