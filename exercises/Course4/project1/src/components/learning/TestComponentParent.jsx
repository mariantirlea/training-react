import TestComponentChild from "./TestComponentChild";

function TestComponentParent() {

    return <TestComponentChild onNotify={(value) => console.log('Notify works!' + value)}/>

}


export default TestComponentParent;