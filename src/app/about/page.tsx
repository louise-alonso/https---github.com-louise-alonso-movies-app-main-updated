import styles from './about.module.scss';

export default function About() {
    return (
        <div className={styles['about-container']}>
            <div className={styles['about-header']}>
                <h1 className={styles['about-title']}>Sobre Nós</h1>
            </div>
            <div className={styles['about-content']}>
                <p>
                    Somos apaixonados por filmes e desenvolvemos esta aplicação para que você possa explorar e descobrir os melhores títulos disponíveis. Este projeto utiliza:
                </p>
                <div className={styles['decorative-line']}></div>
                <p>
                    - **Componentes reutilizáveis** para maior flexibilidade.
                    <br />
                    - **Rotas dinâmicas** para navegação intuitiva.
                    <br />
                    - **Hooks React** para gerenciar estados e interações.
                    <br />
                    - **Consumo de API externa** para exibir dados em tempo real.
                </p>
                <p>
                    Esperamos que você aproveite esta experiência e faça parte do nosso amor pelo cinema!
                </p>
            </div>
        </div>
    );
}
