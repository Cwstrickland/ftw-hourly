import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './sales laptop reports.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Yogatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>What is a Jaeger?</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>You need a skilled sales hunter… You need a Jaeger.</p>
            </div>

            <div className={css.contentMain}>
              <p><i>The dictionary definition for Jaeger is a hunter or huntsman. This is a person who hunts game, or searches for something. In the business world, this would be analogous to the sales staff of a company. At The Jaeger Co, a Jaeger is one of our professional salesmen or saleswomen who hunt opportunities for a contracting business.
              </i></p>
              <h2>
              In a world where your career is increasingly out of your control, The Jaeger Co is the option for professional salesmen to take that control back. Work how often, how much, and for whom you want. Diversify your revenue streams, and secure your future.

              </h2>

              <p>
              streams, and secure your future
              If you have been unceremoniously shown the door after years of loyalty to your company, then you belong here with us. If you are fresh out of school and cannot get your career started in any meaningful way, then you belong with us. If you simply want to improve your financial opportunities for yourself and your family, you belong with us. The Jaeger Co is your best chance for you to have the freedom to cultivate your career on your terms. No longer is your career in the hands of anyone but yourself. Forge your own path, diversify your opportunities, and secure your future.</p>
              <p>The greatest cliché that modern business executives say is “people are our greatest asset”. Evidence that saying is just lip service is that as soon as cost savings is implemented in a company, its employee layoffs or pay cuts are their first option. They don’t care about you; only their profits. With The Jaeger Co, we want to change this relationship by opening up an underutilized segment of business opportunities the Jaeger can utilize to take control of their own careers.

              </p>

              <h3 className={css.subtitle}>Are you a business looking for a Jaeger?</h3>

              <p>
              No longer be tied to a single salesman during lean times of the sales cycle. Hire Jeagers only when you need them. Relieve strain on your payroll when you don’t.

              </p>

              <h3 id="contact" className={css.subtitle}>
                Create your own marketplace like Yogatime
              </h3>
              <p>
                Yogatime is brought to you by{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Sharetribe
                offers anyone a possibility to create a marketplace without restricting your own
                creativity. Do not hesitate to reach out and learn how to best turn your
                marketplace idea to reality.
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
