
function TestItem ({number}) {
    if(number % 2 === 0){
        return <div>{number} - Even</div>
    }

    return <h5 key={number}>{number}</h5>;
}

function TestComponentMap (){

    const a = [1, 2, 3, 4];

    return <>
        <h4>Test cu '.map'. Se afiseaza cate un tag 'h5' pentru fiecare element din lista</h4>
        {/* {a.map((currentNumber) => <h4>{currentNumber}</h4>)} */}

        {/* {a.map((currentNumber) => {

            if(currentNumber % 2 === 0){
                return <div>{currentNumber} - Even</div>
            }

            return <h5 key={currentNumber}>{currentNumber}</h5>;
        })} */}

        {a.map(current => <TestItem key={current} number={current}></TestItem>)}

    </>

}

export default TestComponentMap;