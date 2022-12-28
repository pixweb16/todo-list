
const uniqueId = () => {
    return `${Math.floor( Math.random() * 9)+1}${Math.floor( Math.random() * 100) }-${
        
            Math.floor( Math.random() * 9)+1}${Math.floor( Math.random() * 100) }-${
            
            Math.floor( Math.random() * 9)+1}${Math.floor( Math.random() * 100) }`
}
export {uniqueId};

// import {uniqueId} from "./helpers";