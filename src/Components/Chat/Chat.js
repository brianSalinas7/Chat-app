import './Chat.css'
const Chat = () => {

    return(
        <div>
            <div>
                <div className='header-chat'>
                    <div className='name-chat-connected'>
                        <i class="fa-solid fa-circle"></i>
                        <h3>Name</h3>
                    </div>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <form action="" method="POST">
                <div className="box-message">
                    <input placeholder="Escribe un mensaje..." type="text"/>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}


export default Chat