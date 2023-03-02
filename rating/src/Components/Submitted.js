import "./submitted.css";

export default function Submitted(props){
    const { selectedNum } = props;
return (
    <div className="card-component">
        <div className="center">
            <img src="images/illustration-thank-you.svg" alt="thanks"/>
            <div className="rating-selected"> You selected {selectedNum} out of 5</div>
            <h3>Thank you</h3>
            <p>We appreciate you take the time to submit a rating. 
            If you ever need help, please dont hesistate to reach out.</p>
        </div>
    </div>
)
}
