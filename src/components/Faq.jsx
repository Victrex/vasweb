
const Faq = () => {
    return (
        <section className="sectionContainer faq">
            <h1>Preguntas Frecuentes</h1>
            <details>
                <summary>¿Cuál es el horario de atención?</summary>
                <p>Estamos disponibles todo el tiempo, todos los días. 24 horas al día, 7 días a la semana.</p>
            </details>
            <details>
                <summary>¿Cuáles son los métodos de pago aceptados?</summary>
                <p>Puedes pagar con transferencia bancaria o con PayPal.</p>
            </details>
            <details>
                <summary>¿Cuál es el tiempo de entrega de los productos?</summary>
                <p>Normalmente, entregamos los productos en 4 a 7 días hábiles.</p>
            </details>
            <details>
                <summary>¿Qué es SSL?</summary>
                <p>SSL es una tecnología que mantiene segura la información que envías a través de Internet, como tus contraseñas y datos personales, así mismo, informa a los clientes que la página que visitan es segura.</p>
            </details>
            <details>
                <summary>¿Qué es un dominio?</summary>
                <p>Un dominio es la dirección de un sitio web, como ejemplo.com, que escribes en tu navegador para visitar una página web.</p>
            </details>
        </section>
    );
}

export default Faq;
