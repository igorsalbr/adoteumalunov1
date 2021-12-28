import React from "react";
class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            file: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Uma duvida foi enviada: ' + this.state.value + this.state.file);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label for='duvida'>
                    Escreva sua dúvida:
                    <textarea value={this.state.value} onChange={this.handleChange} id="duvida" name="duvida"
                        rows="7" cols="32" />
                </label>

                <input type="submit" value="Enviar" />
                <style jsx>{`
                    form{
                        text-align: center
                    }
                    textarea{
                    width: 100%;
                    height: 100%;
                    background-color: khaki;
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