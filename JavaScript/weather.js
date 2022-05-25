// väder
var temp = document.getElementById("temp")
var wind = document.getElementById("wind")
var rain = document.getElementById("rain")

    
state = {
        temprature: null,
        windSpeed: null,
        rainAmount: null
    }
    function componentDidMount() {
        fetch(
            "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json"
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const currentWeather = data.timeSeries[0].parameters;
                this.setState({
                    temprature: currentWeather[11].values[0],
                    windSpeed: currentWeather[17].values[0],
                    rainAmount: currentWeather[3].values[0],
                    
                })
            })
        console.log(this.temprature)
}
componentDidMount()
