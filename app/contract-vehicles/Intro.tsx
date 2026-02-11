'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const Intro = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className="text-left mx-auto mb-12"
    >
      <h1 className="h3 mb-3">
        Access FACTOR using our GSA and FAA schedule contracts
      </h1>
      <p className="mb-2">
        Any federal, state, or local government agency can use FACTOR&apos;s GSA
        Multiple Award Schedule (MAS) contract and the FAA can use eFAST
        contract to retain FACTOR&apos;s essential expertise to help achieve
        organizational goals and objectives involving both professional and IT
        services.
      </p>
      <p>
        Under our Indefinite Delivery/Indefinite Quantity (IDIQ) MAS contract
        and eFAST contract, government buyers can access FACTOR&apos;s services
        under fixed-price or labor-hour contract arrangements where the GSA and
        FAA have simplified the procurement process, including established terms
        and conditions at the master contract level and reduced procurement lead
        times (no synopsis needed).
      </p>
    </motion.div>
  );
};

export default Intro;
