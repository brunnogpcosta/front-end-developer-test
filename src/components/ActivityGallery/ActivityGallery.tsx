import React from 'react';
import image1 from "../../images/Rectangle-act.png";
import image2 from "../../images/Rectangle_24_act.png";
import image3 from "../../images/Rectangle_25_act.png";
import image4 from "../../images/Rectangle_26_act.png";
import SectionTitle from '../SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const activities = [
  {
    id: "1",
    thumb: image1,
  },
  {
    id: "2",
    thumb: image2,
  },
  {
    id: "3",
    thumb: image3,
  },
  {
    id: "4",
    thumb: image4,
  },
];

const ActivityGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <SectionTitle title="Nossas atividades" />
      <div className='max-w-screen-xl mx-auto py-8 px-8'>
        <motion.ul
          className='grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center'
          variants={container}
          initial="hidden"
          animate={inView? 'visible' : 'hidden'}
          transition={{ duration: 1 }}
          ref={ref}
        >
          {activities.map(activity => (
            <motion.li key={activity.id}  variants={item} className="item relative overflow-hidden cursor-pointer">
              <img
                src={activity.thumb}
                width={640}
                height={385}
                className="object-cover transform transition-transform hover:scale-110"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}

export default ActivityGallery;
