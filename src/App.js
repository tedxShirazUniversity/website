import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./containers/ContactUs/ContactUs";
import Blog from "./containers/Blog/Blog";
// import ComingSoon from "./components/ComingSoon/ComingSoon";
import EventPanel from "./components/EventPanel/EventPanel";
import Event2020 from "./containers/Events/2020/Event2020";
import Event2021 from "./containers/Events/2021/Event2021";
import Event2016 from "./containers/Events/2016/Event2016";
import BlogPost from "./components/BlogPost/BlogPost";
import Event2022 from "./containers/Events/2022/Event2022";

function App() {
  const closePanel = () => {
    setShowEventsPanel(false);
  };
  const openPanel = () => {
    setShowEventsPanel(true);
  };
  // const [isBetaTester, setIsBetaTester] = React.useState(true);
  const [showEventsPanel, setShowEventsPanel] = React.useState(false);
  const e2020Links = [
    {
      url: "/2020",
      name: "Home",
      exact: true,
    },
    {
      url: "/2020/speakers",
      name: "Speakers",
      exact: true,
    },
    {
      url: "/2020/partners",
      name: "Partners",
      exact: true,
    },
    {
      name: "Events",
      onClick: () => {
        openPanel();
      },
    },
    {
      url: "/blog",
      name: "Blog",
      exact: true,
    },
    {
      url: "/contact",
      name: "Contact",
      exact: true,
    },
  ];
  const e2021Links = [
    {
      url: "/2021",
      name: "Home",
      exact: true,
    },
    {
      url: "/2021/speakers",
      name: "Speakers",
      exact: true,
    },
    {
      url: "/2021/partners",
      name: "Partners",
      exact: true,
    },
    {
      name: "Events",
      onClick: () => {
        openPanel();
      },
    },
    {
      url: "/blog",
      name: "Blog",
      exact: true,
    },
    {
      url: "/contact",
      name: "Contact",
      exact: true,
    },
  ];
  const e2022Links = [
    {
      url: "/2022",
      name: "Home",
      exact: true,
    },
    {
      url: "/2022/speakers",
      name: "Speakers",
      exact: true,
    },
    {
      url: "/2022/partners",
      name: "Partners",
      exact: true,
    },
    {
      name: "Events",
      onClick: () => {
        openPanel();
      },
    },
    {
      url: "/blog",
      name: "Blog",
      exact: true,
    },
    {
      url: "/contact",
      name: "Contact",
      exact: true,
    },
  ];
  const e2016Links = [
    {
      url: "/2016",
      name: "Home",
      exact: true,
    },
    {
      url: "/2016/speakers",
      name: "Speakers",
      exact: true,
    },
    {
      url: "/2016/partners",
      name: "Partners",
      exact: true,
    },
    {
      url: "/2016/team",
      name: "Team",
      exact: true,
    },
    {
      name: "Events",
      onClick: () => {
        openPanel();
      },
    },
    {
      url: "/blog",
      name: "Blog",
      exact: true,
    },
    {
      url: "/contact",
      name: "Contact",
      exact: true,
    },
  ];
  const events = [
    {
      name: "TEDxShirazUniversity 2021",
      date: new Date("24 June 2021"),
      url: "/2021",
      pics: [
        {
          url: require("./assets/images/slide/banner.jpg"),
          title: "TEDxShirazUniversity 2021",
        },
      ],
    },
    {
      name: "TEDxShirazUniversity Salon 2020",
      date: new Date("7 Feb 2020"),
      url: "/2020",
      pics: [
        {
          url: require("./assets/[del]/CognitiveScience-c.jpg"),
          title: "TEDxShirazUniversity Salon 2020",
        },
      ],
    },
    {
      name: "TEDxShirazUniversity 2016",
      date: new Date("5 sep 2016"),
      url: "/2016",
      pics: [
        {
          url: require("./assets/images/slide/TEDx2016.im2.jpg"),
          title: "TEDxShirazUniversity 2016",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/2022" render={() => <Navbar links={e2022Links} />} />
          <Route path="/2021" render={() => <Navbar links={e2021Links} />} />
          <Route path="/2020" render={() => <Navbar links={e2020Links} />} />
          <Route path="/2016" render={() => <Navbar links={e2016Links} />} />
          <Route path="/" render={() => <Navbar links={e2021Links} />} />
        </Switch>
        <Switch>
          <Route path="/2022" component={Event2022} />
          <Route path="/2021" component={Event2021} />
          <Route path="/2020" component={Event2020} />
          <Route path="/2016" component={Event2016} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:postID" component={BlogPost} />
          <Redirect to="/2022" />
        </Switch>

        <EventPanel
          show={showEventsPanel}
          closePanel={closePanel}
          events={events}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
