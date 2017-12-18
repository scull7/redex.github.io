// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css        = require("bs-css/src/Css.js");
var Theme      = require("./Theme.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

var common_000 = Css.unsafe("label", "header");

var common_001 = /* :: */[
  Css.backgroundColor(Theme.Inverted[/* Color */0][/* background */0]),
  /* :: */[
    Css.color(Theme.Inverted[/* Color */0][/* text */1]),
    /* :: */[
      Css.unsafe("padding", "2em 4em"),
      /* [] */0
    ]
  ]
];

var common = /* :: */[
  common_000,
  common_001
];

function header(param) {
  if (param === "unpublished") {
    return Css.style(Pervasives.$at(common, /* :: */[
                    Css.unsafe("background", Theme.Inverted[/* crosshatchBackground */1]),
                    /* [] */0
                  ]));
  } else {
    return Css.style(common);
  }
}

var props = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.justifyContent(/* FlexEnd */1),
        /* :: */[
          Css.alignItems(/* Baseline */4),
          /* :: */[
            Css.selector("& > *", /* :: */[
                  Css.marginLeft(Css.em(1)),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var title = Css.style(/* :: */[
      Css.unsafe("padding", "1em 0 0"),
      /* :: */[
        Css.display(/* Flex */3),
        /* :: */[
          Css.alignItems(/* Baseline */4),
          /* [] */0
        ]
      ]
    ]);

var owner = Css.style(/* :: */[
      Css.display(/* Block */0),
      /* :: */[
        Css.opacity(0.75),
        /* :: */[
          Css.fontSize(Css.em(0.85)),
          /* :: */[
            Css.unsafe("fontVariant", "small-caps"),
            /* [] */0
          ]
        ]
      ]
    ]);

var name = Css.style(/* :: */[
      Css.fontSize(Css.rem(1.5)),
      /* :: */[
        Css.fontWeight(/* Bold */1),
        /* :: */[
          Css.textDecoration(/* None */0),
          /* :: */[
            Css.lineHeight(Css.em(1.45)),
            /* :: */[
              Css.selector("&:hover", /* :: */[
                    Css.unsafe("textDecoration", "underline"),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var fields = Css.style(/* [] */0);

var version = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.fontStyle(/* Italic */1),
        /* :: */[
          Css.marginLeft(Css.em(0.5)),
          /* :: */[
            Css.opacity(0.75),
            /* [] */0
          ]
        ]
      ]
    ]);

var unpublishedLabel = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.fontStyle(/* Italic */1),
        /* :: */[
          Css.marginLeft(Css.em(0.5)),
          /* :: */[
            Css.color(Theme.Color[/* bad */6]),
            /* :: */[
              Css.backgroundColor(Theme.Inverted[/* Color */0][/* text */1]),
              /* :: */[
                Css.unsafe("padding", ".2ex 1ex"),
                /* :: */[
                  Css.unsafe("borderRadius", "1.4ex"),
                  /* :: */[
                    Css.alignSelf(/* Center */2),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var description = Css.style(/* :: */[
      Css.marginBottom(Css.em(0.5)),
      /* :: */[
        Css.unsafe("textOverflow", "ellipsis"),
        /* :: */[
          Css.overflow(/* Hidden */1),
          /* :: */[
            Css.opacity(0.75),
            /* [] */0
          ]
        ]
      ]
    ]);

var tags = Css.style(/* :: */[
      Css.selector("& span", /* :: */[
            Css.fontSize(Css.em(0.85)),
            /* :: */[
              Css.backgroundColor(Theme.Inverted[/* Color */0][/* block */2]),
              /* :: */[
                Css.unsafe("padding", "0 1ex"),
                /* :: */[
                  Css.opacity(1),
                  /* :: */[
                    Css.selector("&:hover", /* :: */[
                          Css.backgroundColor(Theme.Inverted[/* Color */0][/* highlightedBlock */3]),
                          /* :: */[
                            Css.cursor(/* Pointer */1),
                            /* [] */0
                          ]
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]),
      /* [] */0
    ]);

var tagsIcon = Css.style(/* :: */[
      Css.opacity(0.25),
      /* [] */0
    ]);

var right = Css.style(/* :: */[
      Css.textAlign(/* Right */2),
      /* [] */0
    ]);

var updated = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.unsafe("whiteSpace", "nowrap"),
        /* [] */0
      ]
    ]);

var license = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.unsafe("whiteSpace", "nowrap"),
        /* :: */[
          Css.border(Css.px(1), /* Solid */2, Theme.Inverted[/* Color */0][/* text */1]),
          /* :: */[
            Css.unsafe("padding", "0 1ex"),
            /* [] */0
          ]
        ]
      ]
    ]);

var nolicense = Css.style(/* :: */[
      Css.color(Theme.Color[/* bad */6]),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* :: */[
            Css.fontWeight(/* Bold */1),
            /* :: */[
              Css.backgroundColor(Theme.Inverted[/* Color */0][/* text */1]),
              /* :: */[
                Css.unsafe("padding", "0 1ex"),
                /* :: */[
                  Css.unsafe("borderRadius", "1.4ex"),
                  /* [] */0
                ]
              ]
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
        /* :: */[
          Css.opacity(0.5),
          /* [] */0
        ]
      ]
    ]);

var links = Css.style(/* :: */[
      Css.marginTop(Css.em(3)),
      /* :: */[
        Css.selector("& > a", /* :: */[
              Css.textDecoration(/* None */0),
              /* :: */[
                Css.marginRight(Css.em(2)),
                /* :: */[
                  Css.unsafe("fontVariant", "small-caps"),
                  /* :: */[
                    Css.selector("&:hover", /* :: */[
                          Css.unsafe("textDecoration", "underline"),
                          /* [] */0
                        ]),
                    /* :: */[
                      Css.selector("&:not([href])", /* :: */[
                            Css.textDecoration(/* None */0),
                            /* :: */[
                              Css.opacity(0.25),
                              /* [] */0
                            ]
                          ]),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]),
        /* [] */0
      ]
    ]);

var readme = Css.style(/* :: */[
      Css.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
      /* :: */[
        Css.unsafe("padding", "2em 4em"),
        /* :: */[
          Css.selector("& h1", /* :: */[
                Css.fontSize(Css.rem(2.25)),
                /* :: */[
                  Css.fontWeight(/* Bold */1),
                  /* :: */[
                    Css.lineHeight(Css.em(1.1)),
                    /* :: */[
                      Css.marginBottom(Css.rem(1.45)),
                      /* [] */0
                    ]
                  ]
                ]
              ]),
          /* :: */[
            Css.selector("& h2", /* :: */[
                  Css.fontSize(Css.rem(1.62671)),
                  /* :: */[
                    Css.fontWeight(/* Bold */1),
                    /* :: */[
                      Css.lineHeight(Css.em(1.1)),
                      /* :: */[
                        Css.marginBottom(Css.rem(1.45)),
                        /* [] */0
                      ]
                    ]
                  ]
                ]),
            /* :: */[
              Css.selector("& h3", /* :: */[
                    Css.fontSize(Css.rem(1.38316)),
                    /* :: */[
                      Css.fontWeight(/* Bold */1),
                      /* :: */[
                        Css.lineHeight(Css.em(1.1)),
                        /* :: */[
                          Css.marginBottom(Css.rem(1.45)),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]),
              /* :: */[
                Css.selector("& p", /* :: */[
                      Css.marginBottom(Css.rem(1.45)),
                      /* :: */[
                        Css.selector("& *:last-child", /* :: */[
                              Css.marginBottom(Css.zero),
                              /* [] */0
                            ]),
                        /* [] */0
                      ]
                    ]),
                /* :: */[
                  Css.selector("& b, & strong", /* :: */[
                        Css.fontWeight(/* Bold */1),
                        /* [] */0
                      ]),
                  /* :: */[
                    Css.selector("& i, & em", /* :: */[
                          Css.fontStyle(/* Italic */1),
                          /* [] */0
                        ]),
                    /* :: */[
                      Css.selector("& ol, & ul", /* :: */[
                            Css.margin(Css.zero),
                            /* :: */[
                              Css.marginLeft(Css.rem(1.45)),
                              /* :: */[
                                Css.marginBottom(Css.rem(1.45)),
                                /* :: */[
                                  Css.unsafe("listStylePosition", "outside"),
                                  /* :: */[
                                    Css.unsafe("listStyleImage", "none"),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]),
                      /* :: */[
                        Css.selector("& li", /* :: */[
                              Css.marginBottom(Css.rem(1.45 / 2)),
                              /* :: */[
                                Css.selector("& > ol, & > ul", /* :: */[
                                      Css.marginLeft(Css.rem(1.45)),
                                      /* :: */[
                                        Css.marginBottom(Css.rem(1.45 / 2)),
                                        /* :: */[
                                          Css.marginTop(Css.rem(1.45 / 2)),
                                          /* [] */0
                                        ]
                                      ]
                                    ]),
                                /* :: */[
                                  Css.selector("& *:last-child", /* :: */[
                                        Css.marginBottom(Css.zero),
                                        /* [] */0
                                      ]),
                                  /* :: */[
                                    Css.selector("& > p", /* :: */[
                                          Css.marginBottom(Css.rem(1.45 / 2)),
                                          /* [] */0
                                        ]),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]),
                        /* :: */[
                          Css.selector("& ol", /* :: */[
                                Css.unsafe("listStyleType", "decimal"),
                                /* :: */[
                                  Css.selector("& li", /* :: */[
                                        Css.paddingLeft(Css.zero),
                                        /* [] */0
                                      ]),
                                  /* [] */0
                                ]
                              ]),
                          /* :: */[
                            Css.selector("& ul", /* :: */[
                                  Css.unsafe("listStyleType", "disc"),
                                  /* :: */[
                                    Css.selector("& li", /* :: */[
                                          Css.paddingLeft(Css.zero),
                                          /* [] */0
                                        ]),
                                    /* [] */0
                                  ]
                                ]),
                            /* :: */[
                              Css.selector("& code", /* :: */[
                                    Css.unsafe("background", "hsla(0, 0%, 0%, 0.04)"),
                                    /* :: */[
                                      Css.fontFamily("'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace"),
                                      /* :: */[
                                        Css.fontSize(Css.rem(0.85)),
                                        /* :: */[
                                          Css.lineHeight(Css.rem(1.45)),
                                          /* :: */[
                                            Css.unsafe("padding", ".2em 0"),
                                            /* [] */0
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]),
                              /* :: */[
                                Css.selector("& pre", /* :: */[
                                      Css.marginBottom(Css.rem(1.45)),
                                      /* :: */[
                                        Css.fontSize(Css.rem(0.85)),
                                        /* :: */[
                                          Css.lineHeight(Css.rem(1.42)),
                                          /* :: */[
                                            Css.unsafe("background", "hsla(0, 0%, 0%, 0.04)"),
                                            /* :: */[
                                              Css.borderRadius(Css.px(3)),
                                              /* :: */[
                                                Css.overflow(/* Auto */3),
                                                /* :: */[
                                                  Css.unsafe("wordWrap", "normal"),
                                                  /* :: */[
                                                    Css.padding(Css.rem(1.45)),
                                                    /* :: */[
                                                      Css.selector("& code", /* :: */[
                                                            Css.background(/* None */0),
                                                            /* :: */[
                                                              Css.lineHeight(Css.em(1.42)),
                                                              /* [] */0
                                                            ]
                                                          ]),
                                                      /* [] */0
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]),
                                /* :: */[
                                  Css.selector("& a", /* :: */[
                                        Css.color(Theme.Color[/* link */4]),
                                        /* :: */[
                                          Css.textDecoration(/* None */0),
                                          /* :: */[
                                            Css.selector("&:hover", /* :: */[
                                                  Css.unsafe("textDecoration", "underline"),
                                                  /* [] */0
                                                ]),
                                            /* [] */0
                                          ]
                                        ]
                                      ]),
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

exports.header           = header;
exports.props            = props;
exports.title            = title;
exports.owner            = owner;
exports.name             = name;
exports.fields           = fields;
exports.version          = version;
exports.unpublishedLabel = unpublishedLabel;
exports.description      = description;
exports.tags             = tags;
exports.tagsIcon         = tagsIcon;
exports.right            = right;
exports.updated          = updated;
exports.license          = license;
exports.nolicense        = nolicense;
exports.stars            = stars;
exports.starIcon         = starIcon;
exports.links            = links;
exports.readme           = readme;
/* common Not a pure module */