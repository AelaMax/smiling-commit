import aboutImg from '../images/robotic digital dentistry 2.jpg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='Ποιοι' spanTitle='Ειμαστε' />

      <div className='section-center about-center'>
        {/* <!-- about img wrapper --> */}
        <article className='about-img'>
          <img
            src={aboutImg}
            className='about-photo'
            alt='Το Οδοντιατρείο μας'
          />
        </article>
        {/* <!-- about info --> */}
        <article className='about-info'>
          <h3>Το Οδοντιατρείο μας</h3>
          <p>
            Το Οδοντιατρείο μας βρίσκεται στο κέντρο του πειραιά στη μαρίνα Ζέας
            και αποτελεί υποδειγματικό χώρο Υγείας, Αισθητικής και Αρμονίας. Οι
            παραπάνω στόχοι επιτυγχάνονται με ένα άρτιο εξατομικευμένο σχέδιο
            θεραπείας με σεβασμό στις επιθυμίες του ασθενή.
            <br></br>
            Το Οδοντιατρείο μας λειτουργεί από το 2012. Συνεργάζεται με γιατρούς
            και οδοντιάτρους με μεταπτυχιακούς τίτλους διαφόρων ειδικοτήτων,
            όπως γναθοχειρουργούς, στοματολόγους περιοδοντολόγους και
            ορθοδοντικούς για την συνολική αντιμετώπιση των περιστατικών μας.
            <br></br>
            Οι συνεργάτες μας είναι όλοι πτυχιούχοι του πανεπιστημίου αθηνών και
            έχουν εξειδικευτεί σε Αθήνα, Λονδίνο και Αμερική.
            <br></br>Ο ιδρυτής και υπεύθυνος του Ιατρείου Dr. Παππάς Αλέξανδρος
            είναι Πτυχιούχος του Εθνικού και Καποδιστριακού Πανεπιστημίου
            Αθηνών, D.D.S.
            <br></br>
            Συντομο Βιογραφικο του Γιατρου μπορειτε να δειτε στην ιστοσελιδα:
            <br></br>
            <br></br>
            www.alexandrospappas.com
          </p>

          <a href='about.html' className='btn'>
            {' '}
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
