import { createMuiTheme } from '@material-ui/core/styles';
export const main_solid_colors = {
    color1: "#fff",
    color2: "#C2C3D6",
    color3: "#FFB733",
    color4: "#f0b90b",
    color5: "#0fb099",
    color6: "#14151A",
    color7: "#00008b",
}

export const secondary_solid_colors = {
    color1: "#EEEEF6",
    color2: "#14151A",
    color3: "#39B275",
    color4: "#D33844",
    color5: '#757681',
    color6: '#363636'
}
export const color = {
    backgroundColor: main_solid_colors.color4,
    backgroundColorDark: secondary_solid_colors.color6,
    boxBorderColor: "#f0b90b",
    boxColor: "#14151A",                    // for background box color on trading, buy, balance, profile sections
    chartInnerColor: "#14151A",             // for chart inner lines and text color
    hover: '#01aa78',
    color1: "#FFFFFF",
    color2: '#4f4863',
    color3: "#c9c9c9",
    activeColor: "#bcbcbc",
}

export const buttonColors = {
    default: "#EEEEF6",
    active: "#f0b90b",
    sell: "#FF4553",                       // for all sell buttons
    sellHover: "#fc6f7a",                  // for hovering over all sell buttons
    hover: '#facd41',
    border: '1px solid rgba(27,31,35,.2)'
}

export const inputColors = {
    default: "#EEEEF6",
    textColor: "#14151A"
}

export const mainMenuColors = {
    default: "#c9c9c9",
    active: "#c9c9c9",
    activeLine: "#f0b90b"
}

export const footerColors = {
    background: "#000",
    active: "#c9c9c9",
    activeLine: "#f0b90b"
}

export const font = {
    primaryFontFamily: "Helvetica Neue",
    secondaryFontFamily: '"Lucida Console", Monaco, monospace'
}

export const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#04479C'
        },
        secondary: {
            main: '#01aa78'
        },
        action: {
            selected: '#ffffff'
        },
        text: {
            primary: '#eaeff5',
            secondary: '#eaeff5'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*::-webkit-scrollbar': {
                    width: '0.4em'
                },
                '*::-webkit-scrollbar-track': {
                    '-webkit-boxShadow': 'inset 0 0 6px #ffffff'
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: "#f0b90b",
                    outline: '1px solid slategrey'
                }
            }
        },
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: main_solid_colors.color4,    //43a047
                },
                '&$active': {
                    color: main_solid_colors.color4,
                },
            },
            active: {},
            completed: {},
        },
        MuiTypography: {
            h1: {
                fontSize: '2em'
            },
            h2: {
                fontSize: '1.5em'
            },
            h3: {
                fontSize: '1.17em'
            },
            h4: {
                fontSize: '1em'
            },
            h5: {
                fontSize: '0.83em'
            },
            h6: {
                fontSize: '0.67em'
            },
        }
    }
});

export const styles = theme => ({
    root: {
        display: 'flex',
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: color.backgroundColorDark,
        paddingBottom: 20,
        [theme.breakpoints.down('md')]: {
            minHeight: 'auto',
        },
    },
    rowBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // toolbar: theme.mixins.toolbar,
    main: {
        width: '100%',
        display: 'block', // Fix IE 11 issue.
        [theme.breakpoints.up(400 + theme.spacing(1) * 3 * 2)]: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    loader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    warningText: {
        color: main_solid_colors.color3,
        fontWeight: 'bold',
    },
    warningIcon: {
        color: main_solid_colors.color3,
        marginTop: 20
    },
    hoverTransparent: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    langBtn: {
        width: 100,
        background: 'transparent',
        borderBottom: `2px solid ${buttonColors.active}`,
        borderRadius: 0,
        "&:hover": {
            color: buttonColors.hover,
            borderBottom: `2px solid ${buttonColors.hover}`,
        }
    },
    secondaryText: {
        color: color.color1,
        textDecoration: 'none',
        // fontFamily: `${font.primaryFontFamily} !important`
    },
    secondaryTextBold: {
        color: color.color1,
        textDecoration: 'none',
        fontFamily: `${font.primaryFontFamily} !important`,
        fontWeight: 'bold'
    },
    homeGrid: {
        width: '100%',
        position: 'relative',
        zIndex: 0
    },
    bgHome: {
        width: '100%',
        opacity: 0.5,
        zIndex: -1
    },
    arrowDown: {
        fontSize: 50,
        cursor: 'pointer',
        color: main_solid_colors.color1
    },
    moreOption: {
        color: main_solid_colors.color1
    },
    textSection: {
        position: 'absolute',
        top: 70,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    textSectionGrid: {
        zIndex: 1,
        backgroundColor: 'transparent',
        width: '100%'
    },
    fullWidth: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: 'auto'
        }
    },
    inputColor: {
        color: main_solid_colors.color6, fontFamily: font.primaryFontFamily, textDecoration: 'none'
    },
    primaryText: {
        color: `${main_solid_colors.color1} !important`, fontFamily: font.primaryFontFamily, textDecoration: 'none'
    },
    primaryTextBold: {
        color: `${main_solid_colors.color1} !important`, fontFamily: font.primaryFontFamily, fontWeight: 'bold'
    },
    basicText: {
        color: `${main_solid_colors.color4} !important`, fontFamily: font.primaryFontFamily
    },
    basicTextBold: {
        color: `${main_solid_colors.color4} !important`, fontFamily: font.primaryFontFamily, fontWeight: 'bold'
    },
    basicTextMedium: {
        color: `${main_solid_colors.color4} !important`, fontFamily: font.primaryFontFamily, fontWeight: 500
    },
    tabbarTabNumber: {
        fontFamily: `${font.secondaryFontFamily} !important`,
        color: main_solid_colors.color2
    },
    basicNumber: {
        fontFamily: `${font.secondaryFontFamily} !important`,
        color: main_solid_colors.color4
    },
    secondaryNumber: {
        fontFamily: `${font.secondaryFontFamily} !important`,
        color: color.color1
    },
    primaryNumber: {
        fontFamily: `${font.secondaryFontFamily} !important`,
        color: `${main_solid_colors.color1} !important`
    },
    boxBorder: {
        border: `1px solid ${color.boxBorderColor}`
    },
    antTabsRoot: {
        color: color.color1
    },

    // HEADER CSS

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: '0 0px 10px rgba(0, 0, 0, 0.15)',
        backgroundColor: footerColors.background,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-end',
        }
    },
    tabsFlexContainer: {
        height: 20,
    },
    grow: {
        flexGrow: 1
    },
    marketInput: {
        marginLeft: '50px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },
    navTabsIndicatorFaq: {
        backgroundColor: 'transparent !important',
    },
    tabActive: {
        opacity: 1,
    },
    tabNotActive: {
        opacity: `${0.7} !important`,
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    active: {
        backgroundColor: main_solid_colors.color4,
    },
    inActive: {
        backgroundColor: main_solid_colors.color1,
    },
    mobileMenuPaper: {
        backgroundColor: main_solid_colors.color4
    },
    navTabRoot: {
        minWidth: '120px',
        // minHeight: '40px',
        // paddingTop: 0,
        color: mainMenuColors.active,
        '&:hover': {
            color: mainMenuColors.active,
            opacity: 1,
        },
    },
    navTabsIndicator: {
        backgroundColor: 'transparent',
    },
    toolbarGutters: {
        paddingLeft: 8,
        paddingRight: 8
    },
    logoHeight: {
        height: '2.4em',
        // paddi
        [theme.breakpoints.down('xs')]: {
            height: '1.4em'
        }
    },
    Toolbar: {
        minHeight: 40
    },

    // FOOTER CSS

    fab: {
        margin: theme.spacing(1),
    },
    footerGrid: {
        [theme.breakpoints.up('md')]: {
            width: '80%',
            marginLeft: '8%'
        },
    },
    footerDiv: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: footerColors.background,

    },
    socialIcons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        marginTop: 30,
        marginBottom: 10
    },
    socialIcons1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        marginBottom: 30
    },
    socialIcon: {
        width: 32,
        height: 32,
        padding: 5,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        fontSize: 14,
        color: main_solid_colors.color4,
        border: `1px solid ${main_solid_colors.color4}`,
        marginRight: 10
    },
    githubIcon: {
        width: 15,
        height: 15,
        color: main_solid_colors.color4,
        marginBottom: 3,
        marginRight: 3
    },
    alignCenterDiv: {
        paddingTop: 10,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    aligncenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: color.backgroundColorDark,
        textAlign: 'center',
        fontSize: 12,
        zIndex: 1200,
        position: 'relative',
        marginTop: -14,
        padding: 30,
        [theme.breakpoints.down('sm')]: {
        },
    },
    footerSignupGrid: {
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    footerSignupButton: {
        fontSize: 14,
        width: 160,
        height: 40,
        borderRadius: 50,
        marginBottom: 10,
        backgroundColor: buttonColors.active,
        color: color.color1,
        '&:hover': {
            backgroundColor: buttonColors.hover,
            transition: '.3s ease',
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            fontSize: 13,
        }
    },
    footerLoginButton: {
        fontSize: 14,
        width: 160,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'transparent',
        border: `1px solid ${buttonColors.active}`,
        color: buttonColors.active,
        '&:hover': {
            backgroundColor: buttonColors.hover,
            transition: '.3s ease',
            color: color.color1,
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            fontSize: 13,
        }
    },
    Language: {
        fontSize: 12,
        textAlign: 'center',
        display: 'flex',
        marginRight: 10,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    langRoot: {
        padding: 0,
        fontSize: 12,
        color: color.backgroundColor,
        width: 100,
        // height: 40
    },
    langList: {
        paddingLeft: 10,
        paddingRight: 10
    },
    langText: {
        fontSize: 12,
        color: color.color1,
        textAlign: 'center'
    },
    ArrowDownIcon: {
        color: color.backgroundColor,
        "&:hover": {
            color: buttonColors.hover,
        }
    },
    menuLangPaper: {
        border: `1px solid ${color.backgroundColor}`,
        width: 100,
        backgroundColor: color.backgroundColor
    },
    menuList: {
        padding: 0
    },
    loginFooter: {
        textDecoration: 'none',
        fontSize: 14,
        color: main_solid_colors.color1
    },
    footerdivider: {
        width: '80%',
        height: 1,
        backgroundColor: "rgba(0,0,0,0.1)",
        marginBottom: 10
    },
    footerdividervertical: {
        [theme.breakpoints.down('xs')]: {
            borderRightWidth: 1,
            borderRightColor: 'rgba(0,0,0,0.1)',
            borderRightStyle: 'solid',
            marginLeft: -15
        }
    },
    footerdividerhorizotal: {
        [theme.breakpoints.down('sm')]: {
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.1)',
            borderBottomStyle: 'solid',
            marginBottom: 30
        }
    },
    footerTextCenter: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    divider: {
        border: `0.5px solid ${main_solid_colors.color1}`
    },

    buttonGrid: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
            marginBottom: 30
            // justifyContent: 'space-around'
        }
    },

    // BOOK NOW STYLE
    bookNowSecond: {
        backgroundColor: main_solid_colors.color1,
        width: '100%',
        minHeight: 600,
        zIndex: 2,
        marginTop: '-40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlayBookNow: {
        backgroundColor: main_solid_colors.color1,
        zIndex: 3,
        width: '100%',
        height: '100%',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 10

    },
    bookGrey: {
        backgroundColor: secondary_solid_colors.color1,
        width: '80%',
        // height: 400,
        minHeight: 600,
        padding: 20,
        marginTop: 30,
        marginBottom: 30
    },
    accordion: {
        backgroundColor: main_solid_colors.color2,

    },
    accordionDetail: {
        backgroundColor: secondary_solid_colors.color1,
        // width:'100%'
    },
    bookMap: {
        width: '100%'
    },
    accordionLeft: {
        padding: 10,
        width: '100%',
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column'
    },
    select: {
        width: '100%',
    },
    textField: {
        backgroundColor: 'transparent',
        border: '1px solid rgba(0,0,0,0.1)',
        width: '90%'
    },
    datecontainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20
    },
    inputMargin: {
        marginTop: 20,
        width: '100%',
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column'
    },
    passengers: {
        width: '100%',
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },
    passengersDiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 5
    },
    passengersBorder: {
        border: '1px solid rgba(0,0,0,0.1)',
        width: 40,
        height: 40,
        padding: 8
    },
    iconButton: {
        minWidth: 40,
        marginLeft: 5,
        width: '25%',
        height: 40,
        outline: 'none !important',
    },
    passengersInput: {
        width: "50%",
        marginLeft: -6
    },
    vihicleButton: {
        marginTop: 20
    },

    // FLEET PAGE STYLE
    carDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 10
    },
    carIcon: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        color: main_solid_colors.color1
    },
    fleetSecond: {
        backgroundColor: main_solid_colors.color1
    },
    carroot: {
        display: "flex",
        padding: 20,
    },
    carfab: {
        margin: theme.spacing.unit,
    },
    cargrow: {
        flexGrow: 1,
    },
    carmedia: {
        // height: 140,
        width: '100%',
    },
    cardesignation: {
        textAlign: 'left'
    },
    carprice: {
        fontSize: 20,
        color:main_solid_colors.color7
    },
    hourText: {
        fontSize: 14,
        color:main_solid_colors.color6
    },
    cartag: {
        color:main_solid_colors.color7
    },
    carbgdonate: {
        width: '100%',
        height: 457,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
    carname: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: '99.4%',
        color: '#104077',
    },
    carcardText: {
        fontFamily: "Montserrat",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 13,
        lineHeight: '150%',
        marginTop: 20,
        /* or 27px */

        textAlign: 'center',

        color: '#104077',
    },
    carsubtitle: {
        fontFamily: 'PT Serif',
        fontStyle: 'italic',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: '99.4%',
        color: 'rgba(16, 64, 119, 0.81)',
        opacity: 0.9,
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        padding: 20,
    },
    cardonatebtn: {
        widht: '100%',
        height: 100,
        // position: absolute,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carbtn: {
        width: 237,
        height: 70,
        boxShadow: '0px 1px 17px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: '165.5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.035em',
        color: main_solid_colors.color1,
    },
    cardonorArea: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardonate: {
        borderRadius: 10,
        backgroundColor: main_solid_colors.color1,
        width: '100%',
        // width: 1209px;
        // height: 661px;
        // top: 2805px;
    },
});