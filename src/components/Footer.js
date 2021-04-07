import React from 'react';
import { Breakpoint } from 'react-socks';
import { styles } from '../styles/styles';
import FooterResponsive from './responsive/FooterResponsive';

const footer = () => {
  return (
    <>
      <Breakpoint small down>
        <FooterResponsive footerRow={styles.footerRowSmall} />
      </Breakpoint>
      <div className="d-none d-lg-block">
        <FooterResponsive footerRow={styles.footerRow} />
      </div>
      <div className="d-none d-md-block d-lg-none">
        <FooterResponsive footerRow={styles.footerRowMedium} />
      </div>
    </>
  );
};

export default footer;
