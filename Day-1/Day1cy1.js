
import React from "react";

function Compare(){
    const name1 = "Jana";
    const name2 = "Jana";

    const object1 = {name:"Jana"};
    const object2 = {name:"Jana"};
    console.log(name1 === name2);
    console.log(name2 === name1);
    console.log(object1 === object2);
}
function Equal()
{
    return(
        <div>
            <button onClick={Compare}>Click</button>
        </div>
    )
};
export default Equal;