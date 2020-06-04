# Map Filter

## Type of Component

Vue Component - https://v1.vuejs.org/guide/components.html

## Installation

```bash
npm install @IntusFacultas/map-filter@latest --save
```

## Purpose

This provides a map filter component (most commonly for storefront applications).

## Usage

```html
<map-filter
  :height="height"
  :width="width"
  :colors="colors"
  :map-margin-bottom="mapMarginBottom"
  :disabled-countries="disabledCountries"
  :text-bottom="textBottom"
  :text-left="textLeft"
  :border="border"
  :background-color="backgroundColor"
  :map-label="mapLabel"
  :map-id="mapId"
  :text-flavor="textFlavor"
  v-model="countries"
  @change="change"
  @input="input"
></map-filter>
```

```javascript
import MapFilter from "@IntusFacultas/map-filter";
data: {
    countries: [],
    height: "400px",
    colors: {},
    disabledCountries: ["CAN", "JPN"],
    width: "100%",
    mapMarginBottom: "25px",
    textBottom: "2px",
    textLeft: "5px",
    border: "1px solid black",
    backgroundColor: "#3a3a3a",
    mapLabel: "Map Filter",
    mapId: "mapfilter",
    textFlavor:"Dark",
}
```

## Configuration

Various Vue Component Props have been exposed for customizing the behavior of the component.

Special note: camelCase props need to be converted to kebab-case when being set.

<table>
    <thead>
        <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>value</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>Used for v-model binding. Must be an array of trigraphs as strings</td>
        </tr>
        <tr>
            <td>height</td>
            <td>`String`</td>
            <td>`"400px"`</td>
            <td>Sets the height of the map</td>
        </tr>
        <tr>
            <td>colors</td>
            <td>`Object`</td>
            <td>`{}`</td>
            <td>Overrides default colors for the map. To override, format your object in the following manner:
            <pre>
            <code>
            {
                USA: "#303030", // country trigraphs. Reference table further down
                active: "#FFF", // sets the active country color
                disabled: "#000", // sets the disabled country color
                // sets the default country color (countries that do not have explicit colors
                // will default to this. By default this is the neutral country color)
                default: "#111", 
                border: "#333", // sets the border color
            }
            </code>
            </pre>
            Any country you do not override will remain with the default colors. Default colors are:
            <pre>
            <code>
            {
                USA: "#6969B3",
                AUS: "#7FB7BE",
                NZL: "#7FB7BE",
                KOR: "#7FB7BE",
                JPN: "#7FB7BE",
                PHL: "#7FB7BE",
                ALB: "#7FB7BE",
                BEL: "#7FB7BE",
                BGR: "#7FB7BE",
                CAN: "#7FB7BE",
                HRV: "#7FB7BE",
                CZE: "#7FB7BE",
                DNK: "#7FB7BE",
                EST: "#7FB7BE",
                FRA: "#7FB7BE",
                DEU: "#7FB7BE",
                GRC: "#7FB7BE",
                HUN: "#7FB7BE",
                ISL: "#7FB7BE",
                ITA: "#7FB7BE",
                LVA: "#7FB7BE",
                LTU: "#7FB7BE",
                LUX: "#7FB7BE",
                NLD: "#7FB7BE",
                NOR: "#7FB7BE",
                POL: "#7FB7BE",
                PRT: "#7FB7BE",
                ROU: "#7FB7BE",
                SVK: "#7FB7BE",
                ESP: "#7FB7BE",
                TUR: "#7FB7BE",
                GBR: "#7FB7BE",
                RUS: "#DD614A",
                CHN: "#DD614A",
                PRK: "#DD614A",
                VEN: "#DD614A",
                IRN: "#DD614A",
                SYR: "#DD614A",
                CUB: "#DD614A",
                LBN: "#DD614A",
                YEM: "#DD614A",
                BOL: "#DD614A",
                NIC: "#DD614A",
                default: "#CECAAE",
                border: "#F0F7EE",
                active: "#ffc40b",
                disabled: "#5a5a5a"
            }
            </code>
            </pre>
            </td>
        </tr>
        <tr>
            <td>readOnly</td>
            <td>`Boolean`</td>
            <td>`false`</td>
            <td>When set to true, user cannot select or deselect countries</td>
        </tr>
        <tr>
            <td>disabledCountries</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>Disables countries from being selected by the user. The array should be an array of country trigraphs</td>
        </tr>
        <tr>
            <td>enabledCountries</td>
            <td>`Array`</td>
            <td>`[]`</td>
            <td>When not empty, only the included countries will be enabled. The array should be an array of country trigraphs</td>
        </tr>
        <tr>
            <td>width</td>
            <td>`String`</td>
            <td>`"100%"`</td>
            <td>Sets the width of the map</td>
        </tr>
        <tr>
            <td>mapMarginBottom</td>
            <td>`String`</td>
            <td>`"25px"`</td>
            <td>Sets the margin at the bottom of the map</td>
        </tr>
        <tr>
            <td>textBottom</td>
            <td>`String`</td>
            <td>`"2px"`</td>
            <td>Sets the margin from the bottom for the hover text</td>
        </tr>
        <tr>
            <td>textLeft</td>
            <td>`String`</td>
            <td>`"5px"`</td>
            <td>Sets the margin from the left for the hover text</td>
        </tr>
        <tr>
            <td>border</td>
            <td>`String`</td>
            <td>`"1px solid black"`</td>
            <td>Sets the border styling for the SVG</td>
        </tr>
        <tr>
            <td>backgroundColor</td>
            <td>`String`</td>
            <td>`"#3a3a3a"`</td>
            <td>Sets the SVG background color</td>
        </tr>
        <tr>
            <td>mapLabel</td>
            <td>`String`</td>
            <td>`"Map Label"`</td>
            <td>Sets the label for the map filter in the top left</td>
        </tr>
        <tr>
            <td>mapId</td>
            <td>`String`</td>
            <td><b>None. Required.</b></td>
            <td>Required for setting up SVG Panning and Zooming. Sets the ID for the SVG.</td>
        </tr>
        <tr>
            <td>textFlavor</td>
            <td>`String`</td>
            <td>`"Dark"`</td>
            <td>Sets the text flavor</td>
        </tr>
    </tbody>
</table>

## Events

<table>
    <thead>
        <tr>
            <th>Event</th>
            <th>Bind Attribute</th>
            <th>Payload</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`input`</td>
            <td>`@input`</td>
            <td>`[Array of Trigraphs]`</td>
            <td>Fired on input</td>
        </tr>
        <tr>
            <td>`change`</td>
            <td>`@change`</td>
            <td>`[Array of Trigraphs]`</td>
            <td>Fired on change</td>
        </tr>
    </tbody>
</table>

## Country Trigraphs

<table>
    <thead>
        <tr><th>Trigraph</th><th>Country</th></tr>
    </thead>
    <tbody>
        <tr><td>ARE</td><td>"United Arab Emirates</td></tr>
        <tr><td>AFG</td><td>Afghanistan</td></tr>
        <tr><td>ALB</td><td>Albania</td></tr>
        <tr><td>ARM</td><td>Armenia</td></tr>
        <tr><td>AGO</td><td>Angola</td></tr>
        <tr><td>ARG</td><td>Argentina</td></tr>
        <tr><td>AUT</td><td>Austria</td></tr>
        <tr><td>AUS</td><td>Australia</td></tr>
        <tr><td>AZE</td><td>Azerbaijan</td></tr>
        <tr><td>BIH</td><td>Bosnia and Herzegovina</td></tr>
        <tr><td>BGD</td><td>Bangladesh</td></tr>
        <tr><td>BEL</td><td>Belgium</td></tr>
        <tr><td>BFA</td><td>Burkina Faso</td></tr>
        <tr><td>BGR</td><td>Bulgaria</td></tr>
        <tr><td>BDI</td><td>Burundi</td></tr>
        <tr><td>BEN</td><td>Benin</td></tr>
        <tr><td>BRN</td><td>Brunei Darussalam</td></tr>
        <tr><td>BOL</td><td>Bolivia</td></tr>
        <tr><td>BRA</td><td>Brazil</td></tr>
        <tr><td>BHS</td><td>Bahamas</td></tr>
        <tr><td>BTN</td><td>Bhutan</td></tr>
        <tr><td>BWA</td><td>Botswana</td></tr>
        <tr><td>BLR</td><td>Belarus</td></tr>
        <tr><td>BLZ</td><td>Belize</td></tr>
        <tr><td>CAN</td><td>Canada</td></tr>
        <tr><td>COD</td><td>Democratic Republic of Congo</td></tr>
        <tr><td>CAF</td><td>Central African Republic</td></tr>
        <tr><td>COG</td><td>Republic of Congo</td></tr>
        <tr><td>CHE</td><td>Switzerland</td></tr>
        <tr><td>CIV</td><td>Côte d'Ivore</td></tr>
        <tr><td>CHL</td><td>Chile</td></tr>
        <tr><td>CMR</td><td>Cameroon</td></tr>
        <tr><td>CHN</td><td>China</td></tr>
        <tr><td>COL</td><td>Colombia</td></tr>
        <tr><td>CRI</td><td>Costa Rica</td></tr>
        <tr><td>CUB</td><td>Cuba</td></tr>
        <tr><td>CYP</td><td>Cyprus</td></tr>
        <tr><td>CZE</td><td>Czech Republic</td></tr>
        <tr><td>DEU</td><td>Germany</td></tr>
        <tr><td>DJI</td><td>Djibouti</td></tr>
        <tr><td>DNK</td><td>Denmark</td></tr>
        <tr><td>DOM</td><td>Dominican Republic</td></tr>
        <tr><td>DZA</td><td>Algeria</td></tr>
        <tr><td>ECU</td><td>Ecuador</td></tr>
        <tr><td>EST</td><td>Estonia</td></tr>
        <tr><td>EGY</td><td>Egypt</td></tr>
        <tr><td>ESH</td><td>Western Sahara</td></tr>
        <tr><td>ERI</td><td>Eritrea</td></tr>
        <tr><td>ESP</td><td>Spain</td></tr>
        <tr><td>ETH</td><td>Ethiopia</td></tr>
        <tr><td>FIN</td><td>Finland</td></tr>
        <tr><td>FJI</td><td>Fiji</td></tr>
        <tr><td>FLK</td><td>Falkland Islands</td></tr>
        <tr><td>FRA</td><td>France</td></tr>
        <tr><td>GAB</td><td>Gabon</td></tr>
        <tr><td>GBR</td><td>United Kingdom</td></tr>
        <tr><td>GEO</td><td>Georgia</td></tr>
        <tr><td>GUF</td><td>French Guinea</td></tr>
        <tr><td>GHA</td><td>Ghana</td></tr>
        <tr><td>GRL</td><td>Greenland</td></tr>
        <tr><td>GM</td><td>Gambia</td></tr>
        <tr><td>GIN</td><td>Guinea</td></tr>
        <tr><td>GNQ</td><td>Equatorial Guinea</td></tr>
        <tr><td>GRC</td><td>Greece</td></tr>
        <tr><td>GTM</td><td>Guatemala</td></tr>
        <tr><td>GNB</td><td>Guinea-Bissau</td></tr>
        <tr><td>GUY</td><td>Guyana</td></tr>
        <tr><td>HND</td><td>Honduras</td></tr>
        <tr><td>HRV</td><td>Croatia</td></tr>
        <tr><td>HTI</td><td>Haiti</td></tr>
        <tr><td>HUN</td><td>Hungary</td></tr>
        <tr><td>IDN</td><td>Indonesia</td></tr>
        <tr><td>IRL</td><td>Ireland</td></tr>
        <tr><td>ISR</td><td>Israel</td></tr>
        <tr><td>IND</td><td>India</td></tr>
        <tr><td>IRQ</td><td>Iraq</td></tr>
        <tr><td>IRN</td><td>Iran</td></tr>
        <tr><td>ISL</td><td>Iceland</td></tr>
        <tr><td>ITA</td><td>Italy</td></tr>
        <tr><td>JAM</td><td>Jamaica</td></tr>
        <tr><td>JOR</td><td>Jordan</td></tr>
        <tr><td>JPN</td><td>Japan</td></tr>
        <tr><td>KEN</td><td>Kenya</td></tr>
        <tr><td>KGZ</td><td>Kyrgyzstan</td></tr>
        <tr><td>KHM</td><td>Cambodia</td></tr>
        <tr><td>PRK</td><td>Democratic People's Republic of Korea</td></tr>
        <tr><td>KOR</td><td>Republic of Korea</td></tr>
        <tr><td>YUG</td><td>Federal Republic of Yugoslavia</td></tr>
        <tr><td>KWT</td><td>Kuwait</td></tr>
        <tr><td>KAZ</td><td>Kazakhstan</td></tr>
        <tr><td>LAO</td><td>Laos</td></tr>
        <tr><td>LBN</td><td>Lebanon</td></tr>
        <tr><td>LKA</td><td>Sri Lanka</td></tr>
        <tr><td>LBR</td><td>Liberia</td></tr>
        <tr><td>LSO</td><td>Lesotho</td></tr>
        <tr><td>LTU</td><td>Lithuania</td></tr>
        <tr><td>LUX</td><td>Luxembourg</td></tr>
        <tr><td>LVA</td><td>Latvia</td></tr>
        <tr><td>LBY</td><td>Libya</td></tr>
        <tr><td>MAR</td><td>Morocco</td></tr>
        <tr><td>MDA</td><td>Republic of Moldova</td></tr>
        <tr><td>MNE</td><td>Montenegro</td></tr>
        <tr><td>MDG</td><td>Madagascar</td></tr>
        <tr><td>FYR</td><td>The Former Yugoslav Republic of Macedonia</td></tr>
        <tr><td>MLI</td><td>Mali</td></tr>
        <tr><td>MMR</td><td>Myanmar</td></tr>
        <tr><td>MNG</td><td>Mongolia</td></tr>
        <tr><td>MRT</td><td>Mauritania</td></tr>
        <tr><td>MWI</td><td>Malawi</td></tr>
        <tr><td>MEX</td><td>Mexico</td></tr>
        <tr><td>MYS</td><td>Malaysia</td></tr>
        <tr><td>MOZ</td><td>Mozambique</td></tr>
        <tr><td>NAM</td><td>Namibia</td></tr>
        <tr><td>NCL</td><td>New Caledonia</td></tr>
        <tr><td>NER</td><td>Niger</td></tr>
        <tr><td>NGA</td><td>Nigeria</td></tr>
        <tr><td>NIC</td><td>Nicaragua</td></tr>
        <tr><td>NLD</td><td>Netherlands</td></tr>
        <tr><td>NOR</td><td>Norway</td></tr>
        <tr><td>NPL</td><td>Nepal</td></tr>
        <tr><td>NZL</td><td>New Zealand</td></tr>
        <tr><td>OMN</td><td>Oman</td></tr>
        <tr><td>PAN</td><td>Panama</td></tr>
        <tr><td>PER</td><td>Peru</td></tr>
        <tr><td>PNG</td><td>Papua New Guinea</td></tr>
        <tr><td>PHL</td><td>Philippines</td></tr>
        <tr><td>PAK</td><td>Pakistan</td></tr>
        <tr><td>POL</td><td>Poland</td></tr>
        <tr><td>PRI</td><td>Puerto Rico</td></tr>
        <tr><td>PSE</td><td>Palestinian Territories</td></tr>
        <tr><td>PRT</td><td>Portugal</td></tr>
        <tr><td>PRY</td><td>Paraguay</td></tr>
        <tr><td>QAT</td><td>Qatar</td></tr>
        <tr><td>ROU</td><td>Romania</td></tr>
        <tr><td>SRB</td><td>Serbia</td></tr>
        <tr><td>RUS</td><td>Russia</td></tr>
        <tr><td>RWA</td><td>Rwanda</td></tr>
        <tr><td>SAU</td><td>Saudi Arabia</td></tr>
        <tr><td>SLB</td><td>Solomon Islands</td></tr>
        <tr><td>SDN</td><td>Sudan</td></tr>
        <tr><td>SWE</td><td>Sweden</td></tr>
        <tr><td>SVN</td><td>Slovenia</td></tr>
        <tr><td>SJM</td><td>Svalbard and Jan Mayen</td></tr>
        <tr><td>SVK</td><td>Slovakia</td></tr>
        <tr><td>SLE</td><td>Sierra Leone</td></tr>
        <tr><td>SEN</td><td>Senegal</td></tr>
        <tr><td>SOM</td><td>Somalia</td></tr>
        <tr><td>SUR</td><td>Suriname</td></tr>
        <tr><td>SSD</td><td>South Sudan</td></tr>
        <tr><td>SLV</td><td>El Salvador</td></tr>
        <tr><td>SYR</td><td>Syria</td></tr>
        <tr><td>SWZ</td><td>Swaziland</td></tr>
        <tr><td>TCD</td><td>Chad</td></tr>
        <tr><td>ATF</td><td>French Southern Territories</td></tr>
        <tr><td>TGO</td><td>Togo</td></tr>
        <tr><td>THA</td><td>Thailand</td></tr>
        <tr><td>TJK</td><td>Tajikistan</td></tr>
        <tr><td>TLS</td><td>Timor-Leste</td></tr>
        <tr><td>TKM</td><td>Turkmenistan</td></tr>
        <tr><td>TUN</td><td>Tunisia</td></tr>
        <tr><td>TUR</td><td>Turkey</td></tr>
        <tr><td>TTO</td><td>Trinidad and Tobago</td></tr>
        <tr><td>TWN</td><td>Taiwan</td></tr>
        <tr><td>TZA</td><td>Tanzania</td></tr>
        <tr><td>UKR</td><td>Ukraine</td></tr>
        <tr><td>UGA</td><td>Uganda</td></tr>
        <tr><td>USA</td><td>United States</td></tr>
        <tr><td>URY</td><td>Uruguay</td></tr>
        <tr><td>UZB</td><td>Uzbekistan</td></tr>
        <tr><td>VEN</td><td>Venezuela</td></tr>
        <tr><td>VNM</td><td>Vietnam</td></tr>
        <tr><td>VUT</td><td>Vanuatu</td></tr>
        <tr><td>YEM</td><td>Yemen</td></tr>
        <tr><td>ZAF</td><td>South Africa</td></tr>
        <tr><td>ZMB</td><td>Zambia</td></tr>
        <tr><td>ZWE</td><td>Zimbabwe</td></tr>
    </tbody>
</table>
