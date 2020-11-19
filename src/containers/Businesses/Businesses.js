import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
   LayoutSingleColumn,
   LayoutWrapperTopbar,
   LayoutWrapperMain,
   LayoutWrapperFooter,
   Footer,
} from '../../components';

import css from './Businesses.module.css';

const Businesses = () => {
   return (
      <StaticPage
      title="How to Become a Jaeger"
      schema={{
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "description": "Everything you need to know as a business to find the perfect sales professional for your needs.",
        "name": "Becoming a Jaeger",
      }}
      >
         <LayoutSingleColumn>
            <LayoutWrapperTopbar>
               <TopbarContainer />
            </LayoutWrapperTopbar>

            <LayoutWrapperMain className={css.mainWrapper}>
               <h1>
                  Finding your Jaeger.
               </h1>
               <div>
                  <p>This is where all the words go. Lot's of them.</p>
                  <p>We should explain to businesses why this is the place to find sales pros, and a breif overview of how it works.</p>
               </div>

            </LayoutWrapperMain>

            <LayoutWrapperFooter>
               <Footer />
            </LayoutWrapperFooter>

         </LayoutSingleColumn>
      </StaticPage>
   );
};

export default Businesses;