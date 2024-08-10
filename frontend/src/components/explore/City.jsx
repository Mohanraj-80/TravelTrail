import React, { useEffect, useState } from 'react';

const City = () => {
    const [city, setCity] = useState("California");
    const [filterCity, setFilterCity] = useState([]);

    const locations = [
        {
          state: "California",
          cities: [
            "Santa Barbara", "Isla Vista", "Goleta", "Carpinteria", "santa Barbara",
            "Montecito", "Truckee", "Ventura", "Port Hueneme", "West Hill", 
            "Santa Ynez", "Summerland", "Spark", "Kings Beach", "Eagle",
            "Santa Clara", "Valencia", "Real Goleta", "Santa Barbara,", "Reno",
            "Spring City", "Aliso Viejo", "SANTA BARBARA AP", "South Lake Tahoe",
            "Santa Barbara & Ventura Counties", "Salinas", "Santa Maria"
          ]
        },
        {
          state: "Missouri",
          cities: [
            "Affton", "Maplewood", "Saint John", "St. Leo", "Normandy", "Ballwin",
            "Chesterfield", "Hazelwood", "St Louis", "Saint Charles", "High Ridge",
            "Florissant", "Town and Country", "Jennings", "Creve Coeur", "St Charles",
            "Fenton", "University City", "Arnold", "Maryland Heights", "Bridgeport",
            "Overland", "Warson Woods", "Ferguson", "Des Peres", "Earth City",
            "Saint Ann", "Kirkwood", "Berkeley", "Manchester", "Richmond Heights",
            "Brentwood", "Crestwood", "ST. Louis", "St.Ann", "Clayton", "Valley Park",
            "Webster Groves", "Imperial", "Shrewsbury", "Twin Oaks", "St. Charles",
            "KIRKWOOD", "St Louis Downtown", "Lemay", "Frontenac", "Sunset Hills",
            "Rock Hill", "Town And Country", "Oakville", "St Ann", "Olivette",
            "St. Ann", "Breckenridge Hills", "Ladue", "Marlborough", "South County",
            "Saint louis", "Sappington", "Woodson Terrace", "Blvd", "Green Park",
            "St.Louis", "ST LOUIS", "Glendale", "\u200bClayton", "Lake Saint Louis",
            "St louis", "Black Jack", "Kimmiswick", "Mehlville", "Peerless Park",
            "St. Peters", "Town & Country", "SAINT LOUIS AP", "St Louis County",
            "saint ann", "Bellefontaine", "Bellefontaine Neighbors", "Winchester",
            "Maryland Height, MO", "Dellwood", "SAINT LOUIS", "St.Charles",
            "Sullivan", "Bel Ridge", "Charlack", "St. Louis County", "St  Louis",
            "Maryland Height", "St.  Charles"
          ]
        },
        {
          state: "Pennsylvania",
          cities: [
            "Philadelphia", "Green Lane", "Newtown", "Ardmore", "Exton", "Bala Cynwyd",
            "Kennett Square", "West Chester", "Glenoldan", "Bensalem", "Southampton",
            "Chalfont", "Haverford", "Glenside", "Levittown", "Aston", "Warrington",
            "Haverton", "Langhorne", "King of Prussi", "Jenkintown", "Wayne",
            "Delaware County", "Downingtown", "Horsham", "Malvern", "Lansdale",
            "Plymouth Meeting", "Villanova", "Narberth", "Bristol", "Montgomeryville",
            "Morrisville", "Doylestown", "Brookhaven", "Paoli", "New Hope",
            "Norristown", "Media", "Conshohocken", "Chadds Ford", "Warminster",
            "Bryn Mawr", "Springfield", "Pottstown", "Spring City", "Ambler",
            "King Of Prussia", "Primos", "Huntingdon Valley", "Collingdale",
            "Fort Washington", "Limerick", "Elkins Park", "Willow Grove",
            "Fountainville", "Collegeville", "Royersford", "Bridgeport",
            "Huntingdon Valley PA", "Washington Crossing", "Drexel Hil", "Folsom",
            "Thorndale", "Kimberton", "East Norristown", "Harleysville", "Schwenksville",
            "Dublin", "Phoenixville", "Line Lexington", "Fairless Hills",
            "Newtown Sqaure", "Trooper", "Ridley Park", "Woodlyn", "Lahaska",
            "Boothwyn", "Kulpsville", "North Wales", "Yardley", "Wyndmoor",
            "Darby", "Glen Mills", "Souderton", "Rosemont", "Broomall", "Abington",
            "Perkiomenville", "Eddystone", "East Greenville", "Buckingham",
            "Swarthmore", "Frazer", "Erdenheim", "Hatboro", "Prospect Park",
            "Stowe", "Morton", "Perkasie", "Blue Bell", "Lansdowne", "Skippack",
            "Feasterville-Trevose", "Glenmoore", "Holmes", "Oaklyn", "Quakertown",
            "Upper Darby", "Gilbertsville", "Essington", "Eagleville", "Mendenhall",
            "Chester", "Colmar", "Secane", "Drexel", "abington", "Telford",
            "Elverson", "Rockledge", "Valley Forge", "Crum Lynne", "Hilltop",
            "Croydon", "Trappe", "Richboro", "Hatfield", "Feasterville", "Dresher",
            "Furlong", "Holland", "Jamison", "Yeadon", "Plumsteadville", "Audubon",
            "Wallingford", "Boyertown", "Lafayette Hill", "Lester", "Maple Glen",
            "Belmont Hills", "Sellersville", "Wyncote", "Berwyn", "Chester Springs",
            "Folcroft", "West Conshohocken", "Devon", "phoenixville", "Pennsburg",
            "New Britain", "Flourtown", "Linwood", "Wynnewood", "Trevose",
            "Fairmont City", "Radnor", "Chesterbrook", "Oreland", "Westtown",
            "Clifton Heights", "PHILA", "Jeffersonville", "Holland Southampton",
            "Royford", "Pipersville", "Milmont Park", "Upper Darby PA", "Feasterville Trevose",
            "telford", "Trainer", "Coatesville", "Southeastern", "Upper Southampton Township",
            "Concordville", "Red Hill", "Unionville", "Bucks", "Sharon Hill",
            "Tinicum", "Abington Township", "Fairland", "Marcus Hook", "W.Chester",
            "Toughkenamon", "Aldan", "Birchrunville", "Erdenheim Pa", "Roslyn",
            "Garnet Valley", "Avondale", "Worcester", "Upper Chichester", "Holicong",
            "Phila", "Gwynedd Valley", "Bryn Athyn", "Upper Gwynedd", "Penndel",
            "Yardley Boro", "Chestnut Hill", "YARDLEY", "West Norriton",
            "WEST CHESTER", "Ivyland", "Melrose Park", "Hulmeville", "Philadephia",
            "Norwood", "Merion Station", "Bensalem Township", "LOWER PROVIDENCE",
            "Silverdale", "Cheltenham", "Rose Valley", "Zieglersville", "NORRISTOWN",
            "Saint Davids", "Franconia", "Philadelphia PA", "Gladwyne", "Tullytown",
            "Skippack Village", "New Berlinville", "erdenheim", "Manayunk", "Bethalto",
            "Edgmont", "Mont Clare", "Concord Township", "Parker Ford", "East Lansdowne",
            "Rushland", "Cheltenham Township", "Lionville", "Wrightstown", "Carversville",
            "Cornwells Heights", "Oakford", "Bristol Twp", "Pineville", "Southwest Philadelphia",
            "Bethel Township", "West Point", "Woodbourne", "Center City Philadelphia",
            "North Coventry", "Warwick", "Andalusia", "Churchville", "Feastville",
            "Saint Peters", "Strafford", "Gwynedd", "Chester Township", "Gardenville",
            "Meadowbrook", "Roxborough", "Gulph Mills", "Bucks County", "Danboro",
            "Forest Grove", "Eddington", "Washington", "Virtual", "Sassamansville",
            "Fox Street", "Upper Merion Township", "Fairview Village", "Cherry Hil",
            "Linfield", "E. Norristown", "Feasterville-Trevose, PA", "Northampton",
            "Lansdowne PA", "West Whiteland", "Lehigh Valley", "Edgmont Township",
            "Whitemarsh", "Valley Forge National Park", "Broomall, PA", "Northwood",
            "North Penn", "Douglassville", "Wilmington", "Peach Bottom", "Lafayette Hill",
            "Sellersville PA", "Neshaminy", "North Hills", "Cheltenham, PA", "Montgomery County",
            "Plymouth", "Philadelphia (Central)", "Phoenixville PA", "East Norriton",
            "Perkiomenville PA", "Manayunk, PA", "Langhorne PA", "Haverford PA",
            "West Norriton PA", "Chester PA", "Blue Bell PA", "Willow Grove PA",
            "East Vincent", "Malvern PA", "Glenolden", "Meadowbrook PA", "Lower Southampton",
            "Lower Merion", "Montgomeryville PA", "Rosemont PA", "Glen Mills PA",
            "Great Valley", "West Chester PA", "West Hill", "South Philadelphia"
          ]
        },
        {
          state: "Georgia",
          cities: [
            "Atlanta", "Athens", "Macon", "Augusta", "Columbus", "Savannah", "Albany",
            "Roswell", "Sandy Springs", "Marietta", "Gainesville", "Warner Robins",
            "Johns Creek", "Lawrenceville", "Dunwoody", "Morrow", "Carrollton",
            "Dalton", "Peachtree City", "Stockbridge", "Kennesaw", "Newnan",
            "Statesboro", "East Point", "Tucker", "Suwanee", "Buford", "Cumming",
            "Monroe", "Milledgeville", "Brunswick", "Decatur", "LaGrange",
            "Douglasville", "Flowery Branch", "Woodstock", "Canton", "Hinesville",
            "Fort Oglethorpe", "Conyers", "Gainesville", "Valdosta", "Macon, GA",
            "Atlanta Metro", "Roswell, GA", "North Druid Hills", "Riverdale", "Tifton",
            "Canton, GA", "Savannah GA", "Cumming GA", "Acworth", "Griffin", "Locust Grove",
            "Dacula", "Powder Springs", "Snellville", "Jasper", "Ellijay", "Villa Rica",
            "Cartersville", "Adel", "Colquitt", "Blairsville", "Jasper, GA",
            "Holly Springs", "Hapeville", "Kennesaw, GA", "Lilburn", "Gordon",
            "Perry", "Clarke County", "Fayetteville", "Lagrange, GA", "Cochran",
            "Adel, GA", "Oconee", "Macon Bibb County", "Swainsboro", "Chamblee",
            "Young Harris", "Loganville", "Sandersville", "Bainbridge", "Cairo",
            "Dallas", "Hogansville", "Dublin", "Monroe, GA", "Fitzgerald", "Toccoa",
            "Greensboro", "Eastman", "Eatonton", "Macon County", "McDonough",
            "Summerville", "Atlanta Downtown", "Mount Airy", "Tifton, GA", "Canton",
            "Fayetteville, GA", "Blairsville, GA", "Fitzgerald, GA", "Bainbridge, GA",
            "LaFayette", "Toccoa, GA", "Cedartown", "Jonesboro", "Cairo, GA",
            "Perry, GA", "Valdosta, GA", "Dallas, GA", "Carrollton, GA", "Monroe County"
          ]
        }
      ]; 

    useEffect(() => {
        const matchedLocation = locations.find(location => location.state === city);
        if (matchedLocation) {
            const arr = []
            matchedLocation.cities.forEach(element => {
                arr.push(element)
            });
            setFilterCity(arr)
        } else {
            setFilterCity([]);
        }
    }, [city]);

    return (
        <>
            <div className='d-flex flex-row'>
                <div className='form-group'>
                    <label htmlFor="start">Starting Point: </label>
                    <input type="text" className='form-control input-place' id="start" />
                </div>
                <div className='form-group ml-2'>
                    <label htmlFor="end">Destination State:</label>
                    <select id="end" className='form-control input-place' onChange={(e) => setCity(e.target.value)}>
                        <option value="">Select Your State</option>
                        {locations.map((element, index) => (
                            <option key={index} value={element.state}>{element.state}</option>
                        ))}
                    </select>
                </div>
                <div className='form-group ml-2'>
                    <label htmlFor="end">Destination Cities: </label>
                    <select id="end" className='form-control input-place'>
                        <option value="">Select Your Destination</option>
                        {
                            filterCity.map((element, index) => (
                                <option key={index} value={element}>{element}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    );
}

export default City;
