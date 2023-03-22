import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="about-us"
    title="About us"
    description="At RB Construction, we're passionate about bringing your dreams to life. From conception to creation, we're committed to delivering the highest quality construction services to our clients. With years of experience in the industry, our team has the expertise and knowledge necessary to take on any project, no matter how big or small."
  >
    <VerticalFeatureRow
      title="Expertise and Experience You Can Trust"
      description="We pride ourselves on our ability to collaborate closely with our clients throughout the entire construction process. Our team works diligently to ensure that each project is completed on time, on budget, and to the highest standard of quality. Whether you're looking to build a new home, remodel an existing space, or undertake a commercial construction project, we're here to help."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Collaborating with You Every Step of the Way"
      description="At RB Construction, we're more than just a construction company. We're a team of dedicated professionals who are committed to excellence in everything we do. From the initial concept to the final product, we're with you every step of the way. We believe that great construction projects are built on a foundation of trust, communication, and collaboration, and we strive to embody these values in all of our work."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="More Than Just a Construction Company"
      description="At RB Construction, we're more than just a construction company. We're a team of dedicated professionals who are committed to excellence in everything we do. From the initial concept to the final product, we're with you every step of the way. We believe that great construction projects are built on a foundation of trust, communication, and collaboration, and we strive to embody these values in all of our work."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
