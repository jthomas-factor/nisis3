'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Link from 'next/link';
import Image from 'next/image';

const PointOfContact = () => {
  return (
    <>
      <motion.div
        variants={fadeIn('right', 0.2)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="h4 mb-4">Factor Point of Contact</h2>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 0.4)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto mb-12 flex flex-row-reverse justify-end xl:flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          <ul>
            <li>
              <Link href="/about/leadership/mark-lepofsky">Mark Lepofsky</Link>
            </li>
            <li>
              Phone: <Link href="tel:+12028916000">202-891-6000</Link>
            </li>
            <li>Fax: 615-457-8055</li>
            <li>
              GSA:{' '}
              <Link href="mailto:GSAorders@factorinc.com">
                GSAorders@factorinc.com
              </Link>
            </li>
            <li>
              FAA:{' '}
              <Link href="mailto:info@factorinc.com">info@factorinc.com</Link>
            </li>
          </ul>
        </div>
        <Link href="/about/leadership/mark-lepofsky">
          <Image
            src="/about/Mark-Lepofsky_WCX2592-on-blue-small.jpg"
            alt="Mark Lepofsky, FACTOR Inc. Government Contracts Point of Contact"
            width={200}
            height={200}
            className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          />
        </Link>
      </motion.div>
    </>
  );
};

export default PointOfContact;
