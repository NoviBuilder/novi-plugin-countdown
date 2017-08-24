const RadioGroup = novi.ui.radioGroup;
const Input = novi.ui.input;
const Component = novi.react.Component;
const React = novi.react.React;

export default class Body extends Component{
    constructor(props){
        super(props);

        let type = novi.element.getAttribute(props.element, 'data-type') || null;
        let time = novi.element.getAttribute(props.element, 'data-time') || null;

        this.state = {
            type,
            initType: type,
            time,
            initTime: time,
            element: props.element,
            isValid: true
        };

        this._handleTimeChange = this._handleTimeChange.bind(this);
        this._handleRadioButtonClick = this._handleRadioButtonClick.bind(this);
    }

    render(){
        const inputStyle = this.state.isValid ? null : {borderColor: "#ce3849"};
        const errorMessageStyle = {
            position:"absolute",
            top: 0,
            right: 0,
            marginTop: 25,
            color: "#ce3849",
            pointerEvents: "none",
            opacity: this.state.isValid ? 0 : 1
        };
        return (
            <div className="countdown-plugin-wrap" style={{"padding": "0 12px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "height": "100%", "color": "#6E778A"}}>
                <p className="novi-label" style={{"marginTop": "0"}}>
                    Type:
                </p>
                <RadioGroup options={["until", "since"]} value={this.state.type} onChange={this._handleRadioButtonClick}/>
                <div style={{position: "relative"}}>
                    <p className="novi-label" style={{marginTop: 15}}>
                        Time (Example - 1 Jan 1970 00:00):
                    </p>
                    <Input onChange={this._handleTimeChange} value={this.state.time} style={inputStyle}/>
                    <span className="countdown-warning" style={errorMessageStyle}>Invalid time format!</span>
                </div>

            </div>
        )
    }


    _handleRadioButtonClick(value){
        this.setState({type: value})
    }

    _handleTimeChange(e){
        let isValid = this._validateTime(e.target.value);
        this.setState({
            time: e.target.value,
            isValid
        })
    }

    _validateTime(string){
        return /^\s?(?:[1-9]|0[1-9]|[1-2]\d|3[0-1])\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}\s+(?:[0-1]\d|2[0-3]):(?:[0-5]\d)\s?$/i.exec(string);
    }
}