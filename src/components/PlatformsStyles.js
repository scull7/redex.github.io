// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");

var root = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.alignSelf(/* Baseline */4),
        /* :: */[
          Css.transform(Css.translateY(Css.px(2))),
          /* :: */[
            Css.marginLeft(Css.em(0.5)),
            /* :: */[
              Css.opacity(0.5),
              /* :: */[
                Css.selector("& svg", /* :: */[
                      Css.unsafe("fill", "currentColor"),
                      /* :: */[
                        Css.height(Css.em(1)),
                        /* :: */[
                          Css.width(Css.em(1)),
                          /* [] */0
                        ]
                      ]
                    ]),
                /* :: */[
                  Css.hover(/* :: */[
                        Css.opacity(1),
                        /* [] */0
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var tooltip = Css.style(/* :: */[
      Css.backgroundColor(Css.white),
      /* :: */[
        Css.boxShadow(Css.shadow(/* Some */[1], /* Some */[1], /* Some */[3], /* Some */[1], Css.rgba(0, 0, 0, 0.1))),
        /* :: */[
          Css.unsafe("padding", ".5em 1em"),
          /* :: */[
            Css.selector("& div", /* :: */[
                  Css.unsafe("whiteSpace", "nowrap"),
                  /* :: */[
                    Css.selector("& svg", /* :: */[
                          Css.unsafe("fill", "currentColor"),
                          /* :: */[
                            Css.height(Css.em(1)),
                            /* :: */[
                              Css.width(Css.em(1)),
                              /* :: */[
                                Css.marginRight(Css.em(0.5)),
                                /* :: */[
                                  Css.unsafe("verticalAlign", "middle"),
                                  /* :: */[
                                    Css.transform(Css.translateY(Css.px(-1))),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]),
                    /* [] */0
                  ]
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

exports.root    = root;
exports.tooltip = tooltip;
/* root Not a pure module */
