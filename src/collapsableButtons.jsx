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
export default CollapsableButtons
