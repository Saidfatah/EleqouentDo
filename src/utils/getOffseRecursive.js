export const  getOffsetRecursive= (element,offset)=>{
    try {
       let offsetLeft = 0;
       while (element && element.tagName !== "BODY") {
         offsetLeft += element[offset];
         element = element.parentElement;
       }
       return offsetLeft;
        
    } catch (error) {
        console.log(error)
    }
}
