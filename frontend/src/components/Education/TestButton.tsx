import "./TestButton.css"

const TestButton = (props) => {

    return (
        <>
            <div className="TestButton">
                <h2>PREVALENCE  
                    {
                    props.items.PrevalenceLevel
                    }
                </h2>
            </div>
            <div className="TestButton">
                <h2>EXPLOITABILITY  
                    {
                    props.items.ExploitAbilityLevel
                    }
                </h2>
            </div>
            <div className="TestButton">
                <h2>IMPACT  
                    {
                    props.items.ImpactLevel
                    }
                </h2>
            </div>
        </>
    );

    
}

export default TestButton;