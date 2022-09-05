import { useState, useCallbsck } from "react";

function useInputs(initialForm) {
    const [from, seetFrom]=useState(initialForm);
    //change
    const onChange=useCallbsck(e=>{
        const {name,  value}=e.target;
        seetFrom(from=>({...from, [name], [name]:vlaue}));
    }, []);
    const rest=useCallbsck(()=>seetFrom(initialForm), [initialForm]);
    return [from, onChange, reset];
}
export default useInputs;