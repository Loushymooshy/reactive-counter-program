import profilePic from './assets/profilePicture.jpg'


function Card(){
    return(
        <div className= "card">
            <img className="card__image" src={profilePic} alt="profilePicture"></img>
            <h2 className='card__title'>Loushy</h2>
            <p className='card__text'>I'm a Javascript developer student and I play video games</p>
        </div>
    );

}

export default Card 