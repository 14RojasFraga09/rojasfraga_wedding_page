import React from "react";
import Button from "../Button/Button";
import strings from "../../strings/events-info.json";

const EventInfoCol = ({children, classes}) => {
  return <div className={`flex flex-col lg:py-6 lg:px-8 gap-8 bg-neutral-cream-bg ${classes}`}>{children}</div>
}

const EventInfoSection = ({title, children}) => {
  return (
    <div className='font-serif flex flex-col items-center xl:max-w-[30dvw]'>
      <p className='text-2xl mb-4 font-bold text-jacarta-500'>{title}</p>
      {children}
    </div>
  )
}

const EventInfo = () => {
    return (
        <section className='pt-16 lg:pt-[300px] max-w-[90dvw] mx-auto'>
        <div className='flex flex-col gap-12 lg:gap-x-px lg:grid lg:grid-cols-2 text-center text-shadows lg:bg-jacarta-100'>
          <EventInfoCol>
            <>
              <p className='text-5xl uppercase text-pia-blue-900 w-full font-serif'>{strings["registry-title"]}</p>
              <div>
                <p className='font-deco text-3xl'>{strings["registry-date"]}</p>
                <p className='font-serif'>{strings["registry-time"]}</p>
              </div>
              <EventInfoSection title={strings["section-where-title"]}>
                <p>{strings["registry-where"]["line-1"]}</p>
                <p>{strings["registry-where"]["line-2"]}</p>
                <p>{strings["registry-where"]["line-3"]}</p>
                <Button url={strings["registry-where"].button.url} text={strings["registry-where"].button.text} classes="mt-4"/>
              </EventInfoSection>
              <EventInfoSection title={strings["section-how-title"]}>
                {
                  strings["registry-how"].map((item, idx) => (
                    <React.Fragment key={idx}>
                      <p className={`font-bold ${idx > 0 && idx === strings["registry-how"].length - 1 ? "mt-4" : ""}`}>{item.title}</p>
                      {item.text.map((p, idx) => <p key={idx}>{p}</p>)}
                      {item.button?.show && <Button url={item.button.url} text={item.button.text} classes="mt-4" />}
                    </React.Fragment>
                  ))
                }
              </EventInfoSection>
            </>
          </EventInfoCol>
          <EventInfoCol>
            <p className='text-5xl uppercase text-pia-blue-900 w-full font-serif '>Ceremonia</p>
            <div>
                <p className='font-deco text-3xl'>{strings["ceremony-date"]}</p>
                <p className='font-serif'>{strings["ceremony-time"]}</p>
            </div>
            <EventInfoSection title={strings["section-where-title"]}>
                <p>{strings["ceremony-where"]["line-1"]}</p>
                <p>{strings["ceremony-where"]["line-2"]}</p>
                <p>{strings["ceremony-where"]["line-3"]}</p>
                <Button url="https://maps.app.goo.gl/TKnDp5xJeYP8KnNb7" text="Ver mapa" classes="mt-4"/>
              </EventInfoSection>
              <EventInfoSection title={strings["section-how-title"]}>
              {
                  strings["ceremony-how"].map((item, idx) => (
                    <React.Fragment key={idx}>
                      <p className={`font-bold ${idx > 0 && idx === strings["ceremony-how"].length - 1 ? "mt-4" : ""}`}>{item.title}</p>
                      {item.text.map((p, idx) => <p key={idx}>{p}</p>)}
                      {item.button?.show && <Button url={item.button.url} text={item.button.text} classes="mt-4" />}
                    </React.Fragment>
                  ))
                }
              </EventInfoSection>
          </EventInfoCol>
        </div>
      </section>
    )
}

export default EventInfo;