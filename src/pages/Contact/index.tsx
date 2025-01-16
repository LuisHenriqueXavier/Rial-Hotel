import { ContactContainer, FormContainer, MapContainer } from "./styles";

export function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em breve.");
  };

  return (
    <ContactContainer>

      <FormContainer>
        <h1>Contato</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Seu nome" required />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="Seu e-mail" required />

          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Escreva sua mensagem"
            required
          />

          <button type="submit">Enviar</button>
        </form>
      </FormContainer>

      <MapContainer>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.8435435010301!2d-46.786365115961765!3d-24.18073792077997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d578aa755e5d%3A0x8e61e0c10d88c720!2sRial%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1737011276418!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </ContactContainer>
  );
}
