// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry          = require("bs-platform/lib/js/curry.js");
var React          = require("react");
var Config         = require("../Config.js");
var Helmet         = require("../bindings/gatsby/helmet.js");
var Rebase         = require("@glennsl/rebase/src/Rebase.bs.js");
var Vrroom         = require("vrroom/src/Vrroom.bs.js");
var Graphql        = require("../utils/Graphql.js");
var Caml_string    = require("bs-platform/lib/js/caml_string.js");
var ReasonReact    = require("reason-react/src/ReasonReact.js");
var PackageSummary = require("../components/PackageSummary.js");

function getPackages(keyword) {
  return Rebase.$$Array[/* map */0](Rebase.Option[/* getOrRaise */17], Rebase.$$Array[/* filter */10]((function (param) {
                      if (param) {
                        return /* true */1;
                      } else {
                        console.log("missing package on keyword: " + keyword.name);
                        return /* false */0;
                      }
                    }), Rebase.$$Array[/* map */0]((function (prim) {
                          if (prim == null) {
                            return /* None */0;
                          } else {
                            return [prim];
                          }
                        }), keyword.packages))).sort((function (a, b) {
                return Caml_string.caml_string_compare(a.name, b.name);
              }));
}

var component = ReasonReact.statelessComponent("Keywords");

function make(data, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */[Config.titleTemplate("Keywords")], /* None */0, /* None */0, /* None */0, /* array */[])), React.createElement("h1", undefined, Vrroom.Helpers[/* text */0]("Keywords")), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], Graphql.getNodes(data.keywords), /* None */0, (function (keyword) {
                            return React.createElement("div", {
                                        key: keyword.name
                                      }, React.createElement("h2", undefined, Vrroom.Helpers[/* text */0](keyword.name)), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], getPackages(keyword), /* None */0, (function ($$package) {
                                                  return ReasonReact.element(/* Some */[$$package.id], /* None */0, PackageSummary.make($$package, /* array */[]));
                                                }))));
                          }))));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, /* array */[]);
      }));


  export const query = graphql`
    query KeywordsQuery {
      keywords: allKeywords(sort: { fields: [name] }) {
        edges {
          node {
            name

            packages {
              type
              id
              name
              version
              category
              flags
              platforms
              description
              keywords
              license
              updated
              score
              quality
              popularity
              maintenance
              stars
              slug
            }
          }
        }
      }
    }
  `

;

var Control = 0;

exports.Control     = Control;
exports.getPackages = getPackages;
exports.component   = component;
exports.make        = make;
exports.$$default   = $$default;
exports.default     = $$default;
exports.__esModule  = true;
/* component Not a pure module */
