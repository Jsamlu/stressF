import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import React from "react";
import Rlist from "./Rlist";
import Sfooter from '../Sfooter';

function Resources() {
  return (
    <div id="Resources" className="bg-indigo-100">
      <div className="p-[60px]   rounded-xl min-h-screen">
        <p className="text-5xl  text-[#0f444c] font-bold">Resources</p>
        <div className="p-5 mt-10  grid grid-cols-1 md:grid-cols-2">
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

          <div >

          </div>
        </div>
      </div>
      <Sfooter/>
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
