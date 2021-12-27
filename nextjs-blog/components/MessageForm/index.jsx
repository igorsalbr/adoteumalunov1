import React from "react";
class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Escreva sua dúvida.'
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
            </form>
        );
    }
}


export default MessageForm