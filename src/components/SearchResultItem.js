// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Icon                   = require("../bindings/Icon.js");
var Curry                  = require("bs-platform/lib/js/curry.js");
var Score                  = require("./Score.js");
var React                  = require("react");
var Vrroom                 = require("vrroom/src/Vrroom.bs.js");
var TimeAgo                = require("../bindings/TimeAgo.js");
var ReasonReact            = require("reason-react/src/ReasonReact.js");
var SearchResultItemStyles = require("./SearchResultItemStyles.js");

var component = ReasonReact.statelessComponent("SearchResultItem");

function make($$package, isFocused, onClick, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var match = $$package.stars;
      return React.createElement("div", {
                  className: SearchResultItemStyles.root($$package.type, isFocused),
                  onClick: (function () {
                      return Curry._1(onClick, $$package);
                    })
                }, React.createElement("div", undefined, React.createElement("span", {
                          className: SearchResultItemStyles.name
                        }, Vrroom.Helpers[/* text */0]($$package.name)), React.createElement("span", {
                          className: SearchResultItemStyles.version
                        }, Vrroom.Helpers[/* text */0]($$package.version)), React.createElement("span", {
                          className: SearchResultItemStyles.unpublishedLabel($$package.type)
                        }, Vrroom.Helpers[/* text */0]("unpublished")), React.createElement("div", {
                          className: SearchResultItemStyles.description
                        }, Vrroom.Helpers[/* text */0]($$package.description))), React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("span", {
                              className: SearchResultItemStyles.stars
                            }, (match == null) ? Vrroom.Helpers[/* text */0]("-") : Vrroom.Helpers[/* text */0](match), ReasonReact.element(/* None */0, /* None */0, Icon.Star[/* make */0](/* Some */[SearchResultItemStyles.starIcon], /* array */[]))), ReasonReact.element(/* None */0, /* None */0, Score.make($$package, /* array */[]))), React.createElement("div", {
                          className: SearchResultItemStyles.updated
                        }, ReasonReact.element(/* None */0, /* None */0, TimeAgo.make($$package.updated, /* array */[])))));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles    = Styles;
exports.component = component;
exports.make      = make;
/* component Not a pure module */
