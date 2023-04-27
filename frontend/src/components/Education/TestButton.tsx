import IssueExploitabilitLevel from "./IssueLevel/IssueExploitAbilityLevel";
import IssueImpactLevell from "./IssueLevel/IssueImpactLevel";
import IssuePrevelanceLevel from "./IssueLevel/IssuePrevelanceLevel";
import "./TestButton.css"

const TestButton = (props) => {

    let PrevalenceLevelText = "";
    let ExploitAbilityLevelText = "";
    let ImpactLevelText = "";

    if (props.items.PrevalenceLevel == 1) {
        PrevalenceLevelText = " RARE";
    } else if (props.items.PrevalenceLevel == 2) {
        PrevalenceLevelText = " OCCASIONAL";
    } else {
        PrevalenceLevelText = " COMMON";
    }

    if (props.items.ExploitAbilityLevel == 1) {
        ExploitAbilityLevelText = " DIFFICULT";
    } else if (props.items.ExploitAbilityLevel == 2) {
        ExploitAbilityLevelText = " MODERATE";
    } else {
        ExploitAbilityLevelText = " EASY";
    }

    if (props.items.ImpactLevel == 1) {
        ImpactLevelText = " WORRYING";
    } else if (props.items.ImpactLevel == 2) {
        ImpactLevelText = " HARMFUL";
    } else {
        ImpactLevelText = " DEVASTATING";
    }

    return (
        <>
            <div className="TestButton">
                <h2>PREVALENCE {PrevalenceLevelText}</h2>
                <div className="LevelIcon">
                    <IssuePrevelanceLevel quantity={props.items.PrevalenceLevel} />
                </div>
                
            </div>
            <div className="TestButton">
                <h2>EXPLOITABILITY {ExploitAbilityLevelText}</h2>
                <div className="LevelIcon">
                    <IssueExploitabilitLevel quantity={props.items.PrevalenceLevel} />
                </div>
            </div>
            <div className="TestButton">
                <h2>IMPACT {ImpactLevelText}</h2>
                <div className="LevelIcon">
                    <IssueImpactLevell quantity={props.items.ImpactLevel} />
                </div>
            </div>
        </>
    );

    
}

export default TestButton;