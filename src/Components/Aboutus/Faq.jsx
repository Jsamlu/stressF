import FaqList from './FaqList'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion";

export default function Faq(){
    return <div>
        <div className="Quections mx-5">
            <h1 className='md:text-4xl text-center text-2xl font-bold text-purple-800 mb-10'>FAQ's</h1>
              <ul id="QEC">
                {FaqList.map((FaqList) => {
                  return (
                      <li className="mt-2 group  transition-all duration-300">
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full p-3"
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="md:text-xl text-lg px-4 py-4 hover:bg-transparent text-indigo-700 group hover:text-indigo-950">
                              {FaqList.quest}
                            </AccordionTrigger>
                            <AccordionContent className="md:text-lg text-sm px-5 py-5 group-hover:text-indigo-700 text-indigo-700">
                              {FaqList.ans}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                  );
                })}
              </ul>
            </div>
            
    </div>
}