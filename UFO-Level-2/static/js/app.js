const dateIn = d3.select("#datetime")
const cityIn = d3.select("#city")
const stateIn = d3.select("#state")
const countryIn = d3.select("#country")
const shapeIn = d3.select("#shape")

const button = d3.select("button")






const input = d3.select("input")
const button = d3.select("button")

const handler = function() {   
    let filterCond = input.property("values")
    const table = d3.select("body").append("table")  

    const headerRow = table.append("thead").append("tr")
    headerRow.append("th").text("date/time")
    headerRow.append("th").text("city")
    headerRow.append("th").text("state")
    headerRow.append("th").text("country")
    headerRow.append("th").text("shape")
    headerRow.append("th").text("duration minutes")
    headerRow.append("th").text("comment")

    const tbody = table.append("tbody")

    data.filter(dataRow => dataRow.datetime === filterCond).forEach(dataRow => {
        let row = tbody.append('tr')
        row.append("td").text(dataRow.datetime)
        row.append("td").text(dataRow.city)
        row.append("td").text(dataRow.country)
        row.append("td").text(dataRow.shape)
        row.append("td").text(dataRow.comments)
    })
}

input.on("change", handler)
button.on("click", handler)