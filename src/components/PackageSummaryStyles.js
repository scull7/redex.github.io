// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css      = require("bs-css/src/Css.js");
var Theme    = require("../styles/Theme.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function root(type_, flags) {
  return Css.style(/* :: */[
              Css.unsafe("padding", ".75em 1.5em"),
              /* :: */[
                Css.marginBottom(Css.em(0.5)),
                /* :: */[
                  Css.boxShadow(Theme.Shadow[/* panel */1]),
                  /* :: */[
                    Css.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
                    /* :: */[
                      Css.lineHeight(Css.em(1.45)),
                      /* :: */[
                        Css.selector("> *", /* :: */[
                              Css.opacity(Caml_obj.caml_equal(flags, /* array */[]) ? 1 : 0.5),
                              /* [] */0
                            ]),
                        /* :: */[
                          Css.hover(/* :: */[
                                Css.selector("> *", /* :: */[
                                      Css.opacity(1),
                                      /* [] */0
                                    ]),
                                /* [] */0
                              ]),
                          /* :: */[
                            Css.unsafe("backgroundImage", type_ === "unpublished" ? Theme.Panel[/* crosshatchBackground */1] : "none"),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var header = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.alignItems(/* Baseline */4),
        /* [] */0
      ]
    ]);

var name = Css.style(/* :: */[
      Css.color(Theme.Color[/* link */5]),
      /* :: */[
        Css.fontSize(Css.em(1.1)),
        /* :: */[
          Css.textDecorationLine(/* None */0),
          /* :: */[
            Css.hover(/* :: */[
                  Css.textDecorationLine(/* Values */[/* :: */[
                          /* Underline */0,
                          /* [] */0
                        ]]),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var props = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.justifyContent(/* FlexEnd */1),
        /* :: */[
          Css.alignItems(/* Baseline */4),
          /* :: */[
            Css.unsafe("marginLeft", "auto"),
            /* :: */[
              Css.selector("& > *", /* :: */[
                    Css.marginLeft(Css.em(1)),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var updated = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.unsafe("whiteSpace", "nowrap"),
        /* [] */0
      ]
    ]);

var license = Css.style(/* :: */[
      Css.display(/* InlineBlock */11),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* :: */[
            Css.border(Css.px(1), /* Solid */2, Theme.Color[/* text */4]),
            /* :: */[
              Css.unsafe("padding", "0 1ex"),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var nolicense = Css.style(/* :: */[
      Css.color(Theme.Color[/* bad */7]),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* :: */[
            Css.border(Css.px(1), /* Solid */2, Theme.Color[/* bad */7]),
            /* :: */[
              Css.unsafe("padding", "0 1ex"),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var stars = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.unsafe("whiteSpace", "nowrap"),
        /* [] */0
      ]
    ]);

var starIcon = Css.style(/* :: */[
      Css.marginLeft(Css.em(0.25)),
      /* :: */[
        Css.transform(Css.translateY(Css.px(-1))),
        /* [] */0
      ]
    ]);

var description = Css.style(/* :: */[
      Css.unsafe("textOverflow", "ellipsis"),
      /* :: */[
        Css.overflow(/* Hidden */1),
        /* :: */[
          Css.unsafe("margin", ".5ex 0 1ex"),
          /* [] */0
        ]
      ]
    ]);

var tags = Css.style(/* :: */[
      Css.color(Theme.Color[/* link */5]),
      /* :: */[
        Css.selector("& a", /* :: */[
              Css.unsafe("backgroundColor", "hsla(6.9, 90%, 90%, .4)"),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var tagsIcon = Css.style(/* :: */[
      Css.opacity(0.25),
      /* [] */0
    ]);

exports.root        = root;
exports.header      = header;
exports.name        = name;
exports.props       = props;
exports.updated     = updated;
exports.license     = license;
exports.nolicense   = nolicense;
exports.stars       = stars;
exports.starIcon    = starIcon;
exports.description = description;
exports.tags        = tags;
exports.tagsIcon    = tagsIcon;
/* header Not a pure module */
