import './Home.css'

const Home = () => {

    return(
    <div className='conteiner'>
      <i class="fa-solid fa-comment-sms"></i>
      <form className='form-box-name' action='/chat' method='POST'>
        <input placeholder='Escriba su nombre...'  className='box-name'/>

        <button className='button-box-name'>Save</button>
      </form>
    
    </div>)
}


export default Home