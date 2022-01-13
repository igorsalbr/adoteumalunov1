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
                    Escreva sua dúvida:<br />
                    <textarea type='text' className='duvida' value={this.state.value} onChange={this.handleChange} id="duvida" name="duvida"
                        placeholder="Escreva sua dúvida" rows="40" cols="40" /><br />
                    <input type='file' placeholder="Anexo" multiple /><br />
                </label>

                <input type="submit" value="Enviar" />
                <style jsx>{`
                    form{
                        text-align: center
                    }
                    .duvida{
                    width: 90%;
                    height: 100px;
                    background-color: #FFFFE0;
                    resize: vertical;
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