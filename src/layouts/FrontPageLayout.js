// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Link                  = require("../../bindings/gatsby/link.js");
var Curry                 = require("bs-platform/lib/js/curry.js");
var React                 = require("react");
var Helmet                = require("../../bindings/gatsby/helmet.js");
var Helpers               = require("../utils/Helpers.js");
var ReasonReact           = require("reason-react/src/ReasonReact.js");
var FrontPageLayoutStyles = require("./FrontPageLayoutStyles.js");

var component = ReasonReact.statelessComponent("FrontPageLayout");

function make(children, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: FrontPageLayoutStyles.root
                }, React.createElement("div", {
                      className: FrontPageLayoutStyles.links
                    }, ReasonReact.element(/* None */0, /* None */0, Link.make("/packages", /* None */0, /* None */0, /* array */[Helpers.text("Packages")])), ReasonReact.element(/* None */0, /* None */0, Link.make("/keywords", /* None */0, /* None */0, /* array */[Helpers.text("Keywords")])), ReasonReact.element(/* None */0, /* None */0, Link.make("/packages/unpublished", /* None */0, /* None */0, /* array */[Helpers.text("Unpublished")])), ReasonReact.element(/* None */0, /* None */0, Link.make("/", /* Some */[FrontPageLayoutStyles.inactiveLink], /* None */0, /* array */[Helpers.text("Documentation")]))), ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */["redex"], /* None */0, /* array */[])), React.createElement("div", {
                      className: FrontPageLayoutStyles.header
                    }, React.createElement("div", {
                          className: FrontPageLayoutStyles.widthContainer
                        }, React.createElement("h1", {
                              className: FrontPageLayoutStyles.title
                            }, React.createElement("svg", {
                                  className: FrontPageLayoutStyles.logo
                                }, React.createElement("use", {
                                      href: "/logo.svg#logo",
                                      xlinkHref: "/logo.svg#logo",
                                      xmlnsXlink: "http://www.w3.org/1999/xlink"
                                    })), Helpers.text("redex")))), React.createElement("div", {
                      className: FrontPageLayoutStyles.widthContainer
                    }, Curry._1(children, /* () */0)), React.createElement("div", {
                      className: FrontPageLayoutStyles.footer
                    }, React.createElement("div", {
                          className: FrontPageLayoutStyles.widthContainer
                        }, React.createElement("section", undefined, React.createElement("h1", undefined, Helpers.text("Project")), React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://github.com/redex/redex.github.io"
                                        }, Helpers.text("Source Code Repository"))), React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://github.com/redex/redex.github.io/issues"
                                        }, Helpers.text("Support / Bug Tracker"))), React.createElement("li", undefined, ReasonReact.element(/* None */0, /* None */0, Link.make("/publish", /* None */0, /* None */0, /* array */[Helpers.text("Publishing Guide")]))))), React.createElement("section", undefined, React.createElement("h1", undefined, Helpers.text("Made with")), React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://npms.io/"
                                        }, Helpers.text("npms.io"))), React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://www.gatsbyjs.org/"
                                        }, Helpers.text("Gatsby"))), React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://reasonml.github.io/reason-react/"
                                        }, Helpers.text("ReasonReact"))), React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://github.com/bucklescript/bucklescript"
                                        }, Helpers.text("BuckleScript"))), React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://github.com/threepointone/glamor"
                                        }, Helpers.text("glamor"))))), React.createElement("section", undefined, React.createElement("h1", undefined, Helpers.text("Reason")), React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://reasonml.github.io/"
                                        }, Helpers.text("Reason Homepage"))), React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://reasonml.github.io/guide"
                                        }, Helpers.text("Reason Guide"))), React.createElement("li", undefined, React.createElement("a", {
                                          href: "https://reasonml.github.io/try"
                                        }, Helpers.text("Reason Playground"))))), React.createElement("section", undefined, React.createElement("a", {
                                  href: "https://www.algolia.com"
                                }, React.createElement("img", {
                                      className: FrontPageLayoutStyles.algoliaLogo,
                                      src: "/search-by-algolia-white.svg"
                                    }))))));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.children, /* array */[]);
      }));

var Styles = 0;

var $$__esModule = /* true */1;

exports.Styles       = Styles;
exports.component    = component;
exports.make         = make;
exports.$$default    = $$default;
exports.default      = $$default;
exports.__esModule   = true;
exports.$$__esModule = $$__esModule;
/* component Not a pure module */
