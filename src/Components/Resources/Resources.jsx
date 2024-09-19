import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import React from "react";
import Rlist from "./Rlist";
import Sfooter from "../Sfooter";
import S_header from "../S_header";
import Vlist from './Vlist';

function Resources() {
  return (
    <div id="Resources" className="bg-indigo-100">
      <div className="md:hidden"><S_header/></div>
      <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
      <div className="px-[20px]  rounded-xl min-h-screen">
        <p className="text-5xl  text-[#0f444c] font-bold">Resources</p>
        <div className="p-5 mt-10  grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-3">
          <div>
            <div className="Quections">
              <ul id="QEC">
                {Rlist.map((Rlist) => {
                  return (
                    <li className="mt-2">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full bg-white p-3 rounded-xl"
                      >
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">
                            {Rlist.quest}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm">
                            {Rlist.ans}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-2 my-auto">
            {Vlist.map(
              (Vlist) =>{
                return(
                  <div>
              <iframe
                src={'https://www.youtube.com/embed/'+Vlist.embed}
                title={Vlist.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="mx-auto rounded-3xl w-[90%]"
              ></iframe>
            </div>
                );
              }
            )}
            

          </div>
        </div>
      </div>
      <div>
      <p className="ml-10 md:text-3xl text-xl font-bold">Links</p>
      <div className="grid gap-y-5 m-10">
        <a className="text-blue-500 hover:text-blue-700" href="https://www.who.int/news-room/questions-and-answers/item/stress">WHO on Stress</a>
        <a className="text-blue-500 hover:text-blue-700" href="https://www.who.int/publications/i/item/9789240003927">WHO Going what matters</a>
        <a className="text-blue-500 hover:text-blue-700" href="https://www.unicef.org/parenting/mental-health/what-is-stress">UNICEF on Stress</a>
        <a className="text-blue-500 hover:text-blue-700" href="https://www.apa.org/topics/stress">American Psychological Association on Stress</a>
        <a className="text-blue-500 hover:text-blue-700" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2568977/">National Institutes of Health on Stress</a>
      </div>

      </div>
      <Sfooter />
    </div>
  );
}

export default Resources;

{
  /* <ul className='lg:ml-5 list-disc'>
  <li>Work pressures</li>
  <li>Personal relationships</li>
  <li>Financial concerns</li>
  <li>Major life changes</li>
</ul> */
}

{
  /* <h3 className="text-xl">Common Causes</h3>
<ul className="list-disc ">
  <li>Work pressures</li>
  <li>Personal relationships</li>
  <li>Financial concerns</li>
  <li>Major life changes</li>
</ul> */
}
