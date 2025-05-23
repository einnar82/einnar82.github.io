import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders4 from '../components/headers/IndexSectionHeaders4';
import IndexSection__elements7 from '../components/__elements/IndexSection__elements7';
import IndexSectionFeatures2 from '../components/features/IndexSectionFeatures2';
import IndexSectionFeatures9 from '../components/features/IndexSectionFeatures9';
import IndexSectionFeatures6 from '../components/features/IndexSectionFeatures6';
import IndexSectionCta8 from '../components/cta/IndexSectionCta8';
import IndexSectionFooters5 from '../components/footers/IndexSectionFooters5';

const meta = {
  title: 'Homepage\u0020\u2014\u0020Stackfolio',
  meta: [
    {
      name: 'description',
      content:
        'Portfolio\u0020for\u0020a\u0020fullstack\u0020developer\u0020showcasing\u0020projects,\u0020speakership,\u0020and\u0020contact\u0020information',
    },
    {
      property: 'og\u003Adescription',
      content:
        'Portfolio\u0020for\u0020a\u0020fullstack\u0020developer\u0020showcasing\u0020projects,\u0020speakership,\u0020and\u0020contact\u0020information',
    },
    {
      property: 'og\u003Atitle',
      content: 'Homepage\u0020\u2014\u0020Stackfolio',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders4 />
      <IndexSection__elements7 />
      <IndexSectionFeatures2 />
      <IndexSectionFeatures9 />
      <IndexSectionFeatures6 />
      <IndexSectionCta8 />
      <IndexSectionFooters5 />
    </React.Fragment>
  );
}

