import { configure } from '@storybook/vue';
import '@storybook/addon-console';

import { addParameters } from '@storybook/vue';

addParameters({
    docs: {
        inlineStories: true,
    },
});

import { ipad, ipad10p, ipad12p } from '@storybook/addon-viewport';

addParameters({
    viewport: {
        viewports: {
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
        },
    },
});
