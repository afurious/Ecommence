import Slide from "./Slide";

const Slides = () => {
  return (
    <div className="slider">
      <Slide delay={800} />
      <Slide delay={700} />
      <Slide delay={600} />
      <Slide delay={500} />
    </div>
  );
};

export default Slides;
