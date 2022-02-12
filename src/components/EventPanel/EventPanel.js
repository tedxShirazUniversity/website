import React from "react";
import style from "./EventPanel.module.scss";
import EventCard from "../EventCard/EventCard";
import BurgerButton from "../BurgerButton/BurgerButton";
import Divider from "../Divider/Divider";
import { hasTimePassed } from "../../scripts/general/general";
import { ClickAwayAction } from "../ClickAwayAction/ClickAwayAction";
import gsap from "gsap";

const Testpr = (props) => {
  return (
    <div
      className={[style.container, props.show ? style.expand : ""].join(" ")}
    >
      <div className={style.overlay}></div>
      <ClickAwayAction action={props.closePanel}>
        {props.children}
      </ClickAwayAction>
    </div>
  );
};

const EventPanel = (props) => {
  let upcomingEvents = [],
    recentEvents = [];
  props.events.forEach((elem) => {
    hasTimePassed(elem.date)
      ? recentEvents.push(elem)
      : upcomingEvents.push(elem);
  });

  const containerRef = React.createRef(null);
  React.useEffect(() => {
    if (props.show) {
      gsap.from(containerRef.current.children, {
        duration: 0.4,
        x: 140,
        stagger: 0.05,
        opacity: 0,
      });
    }
  }, [props.show, containerRef]);

  return (
    <Testpr show={props.show} closePanel={props.closePanel}>
      <div className={style.panelContainer} ref={containerRef}>
        <div className={style.header}>
          Events
          <div className={style.closeButton} onClick={props.closePanel}>
            <BurgerButton expand={true} />
          </div>
        </div>
        {upcomingEvents.length === 0 ? null : (
          <Divider
            textAlign="left"
            title="Upcoming Events"
            style={{ margin: "1.2em 0" }}
          />
        )}
        {upcomingEvents.map((elem, index) => {
          return (
            <div key={index} className={style.cardContainer}>
              <EventCard
                title={elem.name}
                date={elem.date}
                pics={elem.pics}
                url={elem.url}
                onClick={props.closePanel}
              />
            </div>
          );
        })}

        {recentEvents.length === 0 ? null : (
          <Divider
            textAlign="left"
            title="Recent Events"
            style={{ margin: "1.2em 0" }}
          />
        )}
        {recentEvents.map((elem, index) => {
          return (
            <div key={index} className={style.cardContainer}>
              <EventCard
                title={elem.name}
                date={elem.date}
                pics={elem.pics}
                url={elem.url}
                onClick={props.closePanel}
              />
            </div>
          );
        })}
      </div>
    </Testpr>
  );
};
export default EventPanel;
