import React, { useState } from "react";
import "./faq.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.jsx";
const faq = () => {
  return (
    <section className="faq-wrapper">
      <div className="paddings innerWidth flexColCenter faq-container">
        <span className="primaryText">Frequently Asked Questions</span>
        <span className="secondaryText faq-desc">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </span>
        <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {data.map((item, i) => {
            const [className, setClassName] = useState(null);
            return (
              <AccordionItem
                className={`accordionItem ${className}`}
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="accordionButton">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed ")
                      }
                    </AccordionItemState>

                    <span className="flexCenter accordionHeading">
                      {item.heading}
                    </span>
                    <div className="flexCenter icon">
                      <img src="./images/icon-arrow.svg" />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default faq;
