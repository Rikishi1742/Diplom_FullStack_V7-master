import "./TestButton.css"

const TestButton = (props) => {

    let ButtonArray = [];
    
    for (let i = 0; i < props.items.length; i++) {
        ButtonArray[i] = props.items;
    }

    return (
        <>
            {ButtonArray.map((testId) => (
                <div className="TestButton">
                    
                    {
                    
                    testId
                    
                    }
                </div>
            ))}
        </>
    );

    
}

export default TestButton;