import React, { useEffect } from 'react'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'


export default function Travel() {
  useEffect(() => {
    const width = 800
    const height = 800
    const svg = d3.select('#map')
    const g = svg.append('g')

    let projectmethod = d3
      .geoOrthographic()
      .scale(400)
      .translate([width / 2, height / 2])
    let pathGenerator = d3.geoPath().projection(projectmethod)
    const zoom = d3.zoom().scaleExtent([1, 65]).on('zoom', zoomed)

    const tooltip = d3.select('body').append('div').attr('class', 'tooltip')

    d3.json('/ne_10m_admin_0_countries.json')
      .then((data) => {
        const geoCountries = topojson.feature(
          data,
          data.objects['ne_10m_admin_0_countries']
        )

        const paths = g.selectAll('path').data(geoCountries.features)
        paths
          .enter()
          .append('path')
          .attr('d', pathGenerator)
          .attr('class', 'country')
          .on('mouseover', function (event, d) {
            tooltip
              .style('visibility', 'visible')
              .html(
                `<p>國家：${d.properties.NAME_ZHT}(${d.properties.GEOUNIT})</p>`
              )
          })
          .on('mouseleave', function () {
            tooltip.style('visibility', 'hidden')
          })

        g.selectAll('.country').on('click', countryZoomIn)
        svg.call(zoom)

        function countryZoomIn(event, d) {
          const countryName = d.properties.GEOUNIT

          d3.json('/ne_10m_admin_1_states_provinces.json').then((data) => {
            const geoRegion = topojson.feature(
              data,
              data.objects['ne_10m_admin_1_states_provinces'])
            g.selectAll('.region').remove()

            const filteredRegions = geoRegion.features.filter((region) => {
              if (region.properties.geonunit === countryName) {
                return region.properties.geonunit === countryName
              } else if (region.properties.admin === countryName) {
                return region.properties.admin === countryName
              }
            })

            g.selectAll('.region')
              .data(filteredRegions)
              .enter()
              .append('path')
              .attr('d', pathGenerator)
              .attr('class', 'region')
              .on('mouseover', function (event, d) {
                tooltip
                  .style('visibility', 'visible')
                  .html(
                    `<p>國家：${d.properties.geonunit}</p><p>城市：${d.properties.name_zht} ${d.properties.name_en}</p><p></p>`
                  )
              })
              .on('mouseleave', function (event, d) {
                tooltip.style('visibility', 'hidden')
              })
          })

          event.stopPropagation()

          const [[x0, y0], [x1, y1]] = pathGenerator.bounds(d)
          const centroid = pathGenerator.centroid(d)
          const scale = Math.min(
            2,
            0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)
          )
          const translate = [
            width / 2 - scale * centroid[0],
            height / 2 - scale * centroid[1],
          ]
          const moveFactor = 0.05;
          const dx = -centroid[0] * moveFactor;
          const dy = centroid[1] * moveFactor;

          svg
            .transition()
            .duration(800)
            .call(
              zoom.transform,
              d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
            )
        }
      })
      .catch((error) => {
        console.log('Error loading map data: ', error)
      })

    const drag = d3
      .drag()
      .subject(function () {
        var r = projectmethod.rotate()
        return {
          x: r[0],
          y: -r[1]
        }
      })
      .on('drag', function (event) {
        const moveFactor = 0.05

        const dx = (event.x - event.subject.x) * moveFactor
        const dy = (event.y - event.subject.y) * moveFactor

        var rotate = projectmethod.rotate()
        projectmethod.rotate([rotate[0] + dx, rotate[1] - dy, rotate[2]])
        svg.selectAll('path').attr('d', pathGenerator)
      });

    svg.call(drag)
    svg.on('click', reset)

    function reset() {
      g.selectAll('.region').remove()
      svg
        .transition()
        .duration(750)
        .call(
          zoom.transform,
          d3.zoomIdentity,
          d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
        )
    }

    function zoomed(event) {
      const { transform } = event
      g.attr('transform', transform)
      g.attr('stroke-width', 1 / transform.k)
    }
  }, [])

  return (
    <>
      <div id="travel">
        <svg id="map" width={800} height={800}>
          <rect width="100%" height="100%" fill="rgb(0, 51, 102)"></rect>
        </svg>
      </div>
    </>
  )
}
