import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
   LayoutSingleColumn,
   LayoutWrapperTopbar,
   LayoutWrapperMain,
   LayoutWrapperFooter,
   Footer,
} from '../../components';

import css from './Jaegers.css';

const Jaegers = () => {
   return (
      <StaticPage
      title="How to Become a Jaeger"
      schema={{
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "description": "Everything you need to know about joining the hunt and bringing your sales skills to become a Jaeger.",
        "name": "Becoming a Jaeger",
      }}
      >
         <LayoutSingleColumn>
            <LayoutWrapperTopbar>
               <TopbarContainer />
            </LayoutWrapperTopbar>

            <LayoutWrapperMain className={css.mainWrapper}>
               <h1>
                  How to become a Jaeger.
               </h1>
               <div>
                  <p>This is where all the words go. Lot's of them.</p>
                  <p>We should explain to Jaegers why this is the place for them, and a breif overview of how it works.</p>
               </div>

            </LayoutWrapperMain>

            <LayoutWrapperFooter>
               <Footer />
            </LayoutWrapperFooter>

         </LayoutSingleColumn>
      </StaticPage>
   );
};

export default Jaegers;