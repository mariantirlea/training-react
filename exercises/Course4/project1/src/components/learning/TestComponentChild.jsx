
function TestComponentChild({onNotify}) {

    return <button onClick={() => onNotify(10)}>Notifiy</button>

}

export default TestComponentChild;