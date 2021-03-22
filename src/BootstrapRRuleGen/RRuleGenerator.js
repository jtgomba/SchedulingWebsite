import RRuleGenerator from 'react-rrule-generator';
import "./styling.css"


export default function RRuleGeneratorComp() {
    return (
        <div className="Kindergarten">
            <header>
                <h4>Options</h4>
            </header>
            <RRuleGenerator onChange={(rrule) => console.log(`RRule changed, now it's ${rrule}`)} />
        </div>
    );
}