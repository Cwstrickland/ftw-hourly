import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: October 21, 2020</p>

       <p>
        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Jaeger Company LLC, doing business as TheJaegerCo.com ("TheJaegerCo.com", “we”, “us”, or “our”), concerning your access to and use of the thejaegerco.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). The Site provides an online marketplace for the following goods, products, and/or services: Freelance salesmen offering their services, and sales requests or opportunities from businesses (the “Marketplace Offerings”). In order to help make the Site a secure environment for the purchase and sale of Marketplace Offerings, all users are required to accept and comply with these Terms of Use. You agree that by accessing the Site and/or the Marketplace Offerings, you have read, understood, and agree to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND/OR THE MARKETPLACE OFFERINGS AND YOU MUST DISCONTINUE USE IMMEDIATELY.
      </p>
      <p>
      Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.  
      </p>
      <p>
      The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
      </p>
      <p>
      The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site or use the Marketplace Offerings.
      </p>

      
      <h2>INTELLECTUAL PROPERTY RIGHTS</h2>

      <p>
      Unless otherwise indicated, the Site and the Marketplace Offerings are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site or the Marketplace Offerings and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
      </p>
      <p>
      Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
      </p>

      <h2>USER REPRESENTATIONS</h2>

      <p>
      By using the Site or the Marketplace Offerings, you represent and warrant that:(1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site or the Marketplace Offerings through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site or the Marketplace Offerings will not violate any applicable law or regulation.
      </p>
      <p>
      If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
      </p>
      <p>
      You may not use the Site or the Marketplace Offerings for any illegal or unauthorized purpose nor may you, in the use of Marketplace Offerings, violate any laws. Among unauthorized Marketplace Offerings are the following: intoxicants of any sort; illegal drugs or other illegal products; alcoholic beverages; games of chance; and pornography or graphic adult content, images, or other adult products. Postings of any unauthorized products or content may result in immediate termination of your account and a lifetime ban from use of the Site.
      </p>
      <p>
      We are a service provider and make no representations as to the safety, effectiveness, adequacy, accuracy, availability, prices, ratings, reviews, or legality of any of the information contained on the Site or the Marketplace Offerings displayed or offered through the Site. You understand and agree that the content of the Site does not contain or constitute representations to be reasonably relied upon, and you agree to hold us harmless from any errors, omissions, or misrepresentations contained within the Site’s content. We do not endorse or recommend any Marketplace Offerings and the Site is provided for informational and advertising purposes only. 
      </p>

      <h2>USER REGISTRATION</h2>

      <p>
      You may be required to register with the Site in order to access the Marketplace Offerings. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
      </p>

      <h2>MARKETPLACE OFFERINGS</h2>
      <p>
      We reserve the right to limit the quantities of the Marketplace Offerings offered or available on the Site. All descriptions or pricing of the Marketplace Offerings are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any Marketplace Offerings at any time for any reason. We do not warrant that the quality of any of the Marketplace Offerings purchased by you will meet your expectations or that any errors in the Site will be corrected.
      </p>
      <h2>PURCHASES AND PAYMENT</h2>

      <p>
      We accept the following forms of payment:
      </p>
      <ul>
        <li>- Visa</li>
        <li>- Mastercard</li>
        <li>- American Express</li>
        <li>- Discover</li>
        {/* to-do remove paypal if not needed before going live */}
        <li>- PayPal</li>
      </ul>

      
      <p>
      You agree to provide current, complete, and accurate purchase and account information for all purchases of the Marketplace Offerings made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars.
      </p>
      <p>
      You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
      </p>
      <p>
      We reserve the right to refuse any order placed through the Site. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
      </p>
      <h2>REFUNDS POLICY</h2>
      <p>
      All sales are final and no refund will be issued.
      </p>
      <h2>PROHIBITED ACTIVITIES</h2>
      <p>
      You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. 
      </p>
      <p>
      As a user of the Site, you agree not to:
      </p>

      {/*
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h2>2 Sed ut perspiciatis unde</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>

      <h2>3 At vero eos et accusamus</h2>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
        est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
        libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
        et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
        sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
        doloribus asperiores repellat
      </p> */}
      
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
