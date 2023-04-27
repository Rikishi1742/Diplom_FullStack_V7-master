import "./TestButton.css"

const TestButton = (props) => {
    let PrevalenceLevelText = "";

    if (props.items.PrevalenceLevel == 1) {
        PrevalenceLevelText = " RARE";
    } else if (props.items.PrevalenceLevel == 2) {
        PrevalenceLevelText = " OCCASIONAL";
    } else {
        PrevalenceLevelText = " COMMON";
    }

    return (
        <>
            <div className="TestButton">
                <h2>PREVALENCE 
                    {
                    PrevalenceLevelText
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