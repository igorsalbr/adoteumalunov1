function MessageForm() {
    return (<>
        <input type="text" name="inputtext" value="Digite sua dúvida" />
        <input type="file" name="inputfiles" value="anexo" accept='.jpg' />
        <input type="button" name="sendbutton" value="enviar" />


    </>)
}

export default MessageForm