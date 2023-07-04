import TreeNode from "./TreeNode.jsx";


// eslint-disable-next-line react/prop-types
const Tree = ({data}) => {
    console.log(data)
    return (
        <div >


            {data?.map((datum) => (
                <TreeNode key={datum.id} node={datum}  />
            ))}

        </div>
    );
};

export default Tree;


