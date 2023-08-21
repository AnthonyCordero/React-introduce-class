import './styles.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: 'url(/img/footer.png)' }}>
        <div className='socialMedia'>
            <a href="https://www.facebook.com/" target="_blank">
                <img src='/img/facebook.png' alt='Facebook' />
            </a>
            <a href="https://www.twitter.com/" target="_blank" >
                <img src='/img/twitter.png' alt='Twitter' />
            </a>
            <a href="https://www.instagram.com/" target="_blank" >
                <img src='/img/instagram.png' alt='Instagram' />
            </a>
        </div>
        <img src='/img/logo.png' alt='Logo Mi Org' />
        <strong>Clase React Alura - Anthony Cordero</strong>
    </footer>
}

export default Footer