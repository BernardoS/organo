import './Rodape.css';

const Rodape = () => {

    return (
        <footer className='rodape' style={{ backgroundImage: "url('/imagens/fundo.png')" }}>
            <div className='social-media'>
                <a href='https://www.facebook.com/'  rel="noreferrer" target='_blank'>
                    <img src='/imagens/fb.png' alt='Facebook' />
                </a>
                <a href='https://www.instagram.com/' rel="noreferrer" target='_blank'>
                    <img src='/imagens/ig.png' alt='Instagram' />
                </a>

                <a href='https://x.com/' rel="noreferrer" target='_blank'>
                    <img src='/imagens/tw.png' alt='Twitter' />
                </a>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='Logo do site' />
            </div>
            <div className='credits'>
                <span>Desenvolvido por Alura.</span>
            </div>
        </footer>
    )
}

export default Rodape;