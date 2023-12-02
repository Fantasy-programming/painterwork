import Form from "./Form";

export default function ContactPage() {
  return (
    <>
      <section className="lg:m-20">
        <div className="hero-content flex-col gap-24 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact us!</h1>
            <p className="py-6">
              Color Your World. Contact Us Today. Painting Dreams into Reality.
              Transforming Spaces, One Brushstroke at a Time. Let&apos;s Paint
              Your Vision. Get in Touch. Your Walls, Our Canvas. Reach Out Now.
              Bringing Life to Your Walls. Contact Us.
            </p>
          </div>
          <Form />
        </div>
      </section>
      <section className="lg:m-20">
        <h2 className="text-5xl font-bold mb-8">Where to find us!</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3971.0106747228356!2d-0.2151439253640314!3d5.5654339944150815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzMnNTUuNiJOIDDCsDEyJzQ1LjMiVw!5e0!3m2!1sfr!2sgh!4v1701541475141!5m2!1sfr!2sgh"
          allowFullScreen={true}
          className="w-full h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
