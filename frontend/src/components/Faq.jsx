import { createContext, useContext, useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const AccordianContext = createContext();

export default function Faq({ items = [], value, onChange, ...props }) {
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        onChange?.(selected)
    }, [selected]);

    return(
        <ul {...props}>
            <AccordianContext.Provider value={{ selected, setSelected }} >
                {items.map((faq) =>  (
                    <FaqItem 
                        key={faq.id}
                        value={faq.id}
                        trigger={faq.question}
                    >
                        {faq.answer}
                    </FaqItem>
                ))}
            </AccordianContext.Provider>
        </ul>
    );
};

export function FaqItem({ children, value, trigger, ...props }) {
    const { selected, setSelected } = useContext(AccordianContext);
    const open = selected === value;

    const ref = useRef(null);

    return(
        <li className="border-b" {...props}>
            <header
                role="button"
                onClick={() => setSelected(open ? null : value)}
                className="flex justify-between items-center py-4 px-3 font-medium text-xl text-heading"
            >
                {trigger}
                <LuChevronDown 
                    size={20}
                    className={`transition-transform text-heading ${open ? "rotate-180" : ""}`}
                />
            </header>
            <div
                className="overflow-y-hidden transition-all text-xl text-gray-500"
                style={{ height: open ? ref.current?.offsetHeight || 0 : 0}}
            >
                <div className="pt-2 py-6 px-3" ref={ref}>
                    {children}
                </div>
            </div>
        </li>
    );
};