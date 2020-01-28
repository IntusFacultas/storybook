import '@storybook/addon-console';

import { addParameters } from '@storybook/vue';

addParameters({
    viewport: {
        viewports: {
            xsmall: {
                name: "Xtra Small",
                styles: {
                    height: "1080px",
                    width: "250px"
                }
            },
            small: {
                name: "Small",
                styles: {
                    height: "1080px",
                    width: "576px"
                }
            },
            medium: {
                name: "Medium",
                styles: {
                    height: "1080px",
                    width: "768px"
                }
            },
            large: {
                name: "Large",
                styles: {
                    height: "1080px",
                    width: "992px"
                }
            },
            xlarge: {
                name: "Xtra Large",
                styles: {
                    height: "1080px",
                    width: "1200px"
                }
            },
            surfacePro3: {
                name: "Surface Pro 3",
                styles: {
                    height: "1440px",
                    width: "2160px"
                },
                type: "tablet"
            },
            surfacePro4: {
                name: "Surface Pro 4",
                styles: {
                    height: "1824px",
                    width: "2736px"
                },
                type: "tablet"
            },
            ipad: {
                name: 'iPad',
                styles: {
                    height: '1024px',
                    width: '768px',
                },
                type: "tablet"
            },
            iphone5: {
                name: 'iPhone 5',
                styles: {
                    height: '568px',
                    width: '320px',
                },
                type: 'mobile',
            },
            iphone6: {
                name: 'iPhone 6',
                styles: {
                    height: '667px',
                    width: '375px',
                },
                type: 'mobile',
            },
            iphone6p: {
                name: 'iPhone 6 Plus',
                styles: {
                    height: '736px',
                    width: '414px',
                },
                type: 'mobile',
            },
            iphone8p: {
                name: 'iPhone 8 Plus',
                styles: {
                    height: '736px',
                    width: '414px',
                },
                type: 'mobile',
            },
            iphonex: {
                name: 'iPhone X',
                styles: {
                    height: '812px',
                    width: '375px',
                },
                type: 'mobile',
            },
            iphonexr: {
                name: 'iPhone XR',
                styles: {
                    height: '896px',
                    width: '414px',
                },
                type: 'mobile',
            },
            iphonexsmax: {
                name: 'iPhone XS Max',
                styles: {
                    height: '896px',
                    width: '414px',
                },
                type: 'mobile',
            },
            ipad12p: {
                name: 'iPad Pro 12.9-in',
                styles: {
                    height: '1366px',
                    width: '1024px',
                },
                type: 'tablet',
            },
            galaxys5: {
                name: 'Galaxy S5',
                styles: {
                    height: '640px',
                    width: '360px',
                },
                type: 'mobile',
            },
            galaxys9: {
                name: 'Galaxy S9',
                styles: {
                    height: '1480px',
                    width: '720px',
                },
                type: 'mobile',
            },
            nexus5x: {
                name: 'Nexus 5X',
                styles: {
                    height: '660px',
                    width: '412px',
                },
                type: 'mobile',
            },
            nexus6p: {
                name: 'Nexus 6P',
                styles: {
                    height: '732px',
                    width: '412px',
                },
                type: 'mobile',
            },
            pixel: {
                name: 'Pixel',
                styles: {
                    height: '960px',
                    width: '540px',
                },
                type: 'mobile',
            },
            pixelxl: {
                name: 'Pixel XL',
                styles: {
                    height: '1280px',
                    width: '720px',
                },
                type: 'mobile',
            },
        },
    },
});
