import React from "react";
class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Mande-nos sua dúvida.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Uma dissertação foi enviada: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Dúvida:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Enviar" />
                <style jsx>{`
                    form{
                        text-align: center
                    }
                    textarea{
                    width: 100%;
                    height: 100%;
            }
                    label{
                    margin: 8px;
            }
                `}</style>
            </form>
        );
    }
}


export default MessageForm