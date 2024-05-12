const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const API_KEY = 'XXXXX';
const API_URL = 'https://api.covidactnow.org/v2/states.json?apiKey=' + API_KEY;

const STATES = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DC": "Washington DC",
    "DE": "Delaware",
    "FL": "Florida",
    "GA": "Georgia",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "MP": "Northern Mariana Islands",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const covidData = response.data.map(state => ({
            stateName: STATES[state.state],
            state: state.state,
            population: state.population,
            cases: state.actuals.cases,
            deaths: state.actuals.deaths,
            hospitalBedsCapacity: state.actuals.hospitalBeds.capacity,
            currentUsageCovid: state.actuals.hospitalBeds.currentUsageCovid,
            weeklyAdmissions: state.actuals.newHospitalAdmissions,
            newCases: state.actuals.newCases,
            newDeaths: state.actuals.newDeaths,
            vaccinesDistributed: state.actuals.vaccinesDistributed,
            vaccinationsInitiated: state.actuals.vaccinationsInitiated,
            vaccinationsCompleted: state.actuals.vaccinationsCompleted,
            lastUpdateDate: state.lastUpdatedDate
        }));

        // console.log('COVID data:', covidData)

        res.render('index', { covidData });
    } catch (error) {
        console.error('Error fetching COVID data:', error);
        res.status(500).send('Error fetching data');
    }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



