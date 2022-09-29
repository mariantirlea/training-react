
function TestComponentIf (){

    const items = [2,4];

    let output;

    if(items.length === 0){
        output = <h5>Nu exista produse</h5>
    }
    else{
        output = <h5>Aveti {items.length} produse</h5>
    }

    // return output;

    // let isLogin = true;

    return <>
        <h4>Test cu afisare conditionata</h4>

        {output}
        {/* {items.length == 0 ? <h4>Nu exista produse!</h4> : <h4>Aveti {items.length} produse</h4>} */}
        {/* {items.length == 0 ? <h4>Nu exista produse!</h4> : null} */}

        {/* {items.length === 0 && <h4>Nu exista produse!</h4>} */}
{/* 
        <button>{isLogin ? 'Accesare' : 'Inregistrare'}</button>
        <h1>{isLogin ? 'Introduce utilizatorul si parola' : 'Introduce credentialele'}</h1> */}

        {/* {items.length !== 0 && <h2>See your items ({items.length})</h2>} */}
        <h5 style={{color: items.length === 0 ? '#dc3545': '#28a745'}}>Acceseaza produsele ({items.length})</h5>
    </>
}

export default TestComponentIf;