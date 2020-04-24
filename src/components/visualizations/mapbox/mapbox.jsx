import React, { useEffect } from 'react';
import * as $ from "jquery";
import mapboxgl from 'mapbox-gl';
import './mapbox.scss';
import '../../../../node_modules/mapbox-gl/dist/mapbox-gl.css';
import formatNumber from '../../../utils/number-formatter';
import img from '../../../images/colleges-and-universities/map-pin.png'

export default function Mapbox(props) {

  if (!props.display) {
    return null;
  } else {
    useEffect(() => {
      const data = props.data; // geojson
      mapboxgl.accessToken = `${process.env.GATSBY_MAPBOX_API_KEY}`;

      function createMapbox() {
	var map = new mapboxgl.Map({
	  container: 'collegesMap', // container id
	  style: 'mapbox://styles/usaspending/cjvduv2b7fwlc1fnv9iyihkqo', // stylesheet location
	  center: [-80.59179687498357, 40.66995747013945], // usa
	  zoom: 3 // starting zoom (3 default)
	});

	var zoomCtrl = new mapboxgl.NavigationControl();
	map.addControl(zoomCtrl, 'top-right');

	// Create a popup, but don't add it to the map yet.
	var tooltip = new mapboxgl.Popup({
	  closeButton: false,
	  closeOnClick: true,
	});

	function flyToClicked() {
	  let toolTip = `
					<div class='tooltip-float'>
						<p class='map-tooltip-p-left-inst'>Institution</p>
						<p class='map-tooltip-p-right'>${props.clickedSchool[0].properties.Recipient}</p>
					</div>
					<div class='tooltip-float'>
						<p class='map-tooltip-p-left'>State</p>
						<p class='map-tooltip-p-right'>${props.clickedSchool[0].properties.State}</p>
					</div>
					<div class='tooltip-float'>
						<p class='map-tooltip-p-left'>County</p>
						<p class='map-tooltip-p-right'>${props.clickedSchool[0].properties.COUNTY}</p>
					</div>
					<div class='tooltip-float tooltip-float--underline'>
						<p class='map-tooltip-p-left'>Number of Students </p>
						<p class='map-tooltip-p-right'>${formatNumber('number', props.clickedSchool[0].properties.Total)}</p>
					</div>
					<div class='tooltip-float'>
						<p class='map-tooltip-p-left'>Total $ Received</p>
						<p class='map-tooltip-p-right-invest'>${formatNumber('dollars', props.clickedSchool[0].properties.Total_Federal_Investment)}</p>
					</div>
				`;

	  map.easeTo({
	    center: props.clickedSchool[0].geometry.coordinates,
	    zoom: 12
	  });

	  tooltip.setLngLat(props.clickedSchool[0].geometry.coordinates)
	    .setHTML(toolTip)
	    .addTo(map);
	};


	map.on('load', function () {

	  map.scrollZoom.disable(); // disable until we click on the map

	  if (props.clickedSchool != null) {
	    flyToClicked();
	  }

	  // hide on "clickout" of element
	  $(document).click(function (e) {
	    if ($(e.target).parents("#collegesMap").length === 0) {
	      map.scrollZoom.disable(); // disable until we click on the map
	    }
	  });

	  $("#refresh-btn").click(function () {
	    map.flyTo({
	      center: [-80.59179687498357, 40.66995747013945],
	      zoom: 3,
	      bearing: 0,
	      speed: 1,
	      curve: 1,
	    });
	    tooltip.remove();
	  });

	  map.addSource('schools', {
	    type: 'geojson',
	    data: data,
	    cluster: true,
	    clusterMaxZoom: 7,
	    clusterRadius: 75 // 50 is default look into tweaking this
	  });

	  map.addLayer({
	    id: 'clusters',
	    type: 'circle',
	    source: 'schools',
	    filter: ['has', 'point_count'],
	    paint: {
	      // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
	      // with three steps to implement three types of circles:
	      //   * Blue, 20px circles when point count is less than 100
	      //   * Yellow, 30px circles when point count is between 100 and 750
	      //   * Pink, 40px circles when point count is greater than or equal to 750
	      "circle-stroke-color": '#ddd',
	      "circle-color": [
		"step",
		["get", "point_count"],
		"#881E3D",
		100,
		"#881E3D",
		400,
		"#881E3D"
	      ],
	      "circle-radius": [
		"step",
		["get", "point_count"],
		9,
		15,
		20,
		30,
		15,
		50,
		20,
		75,
		30,
		300,
		40
	      ]
	    }
	  });

	  // set opactiy to 40%
	  map.setPaintProperty('clusters', 'circle-opacity', .35);

	  map.addLayer({
	    id: "cluster-count",
	    type: "symbol",
	    source: "schools",
	    filter: ["has", "point_count"],
	    layout: {
	      "text-field": "{point_count_abbreviated}",
	      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
	      "text-size": 10
	    }
	  });

	  map.loadImage('/mapbox/map-pin.png', function (err, image) {
	    if (err) throw err;
	    map.addImage('pin', image);
	    map.addLayer({
	      id: "unclustered-point",
	      type: "symbol",
	      source: "schools",
	      layout: {
		"icon-image": 'pin',
		"icon-size": .6
	      },
	      filter: ["!", ["has", "point_count"]]
	    });
	  });

	  map.on('click', 'clusters', function (e) {
	    const cluster = map.queryRenderedFeatures(e.point, { layers: ["clusters"] });
	    const coordinates = cluster[0].geometry.coordinates;
	    flyIntoCluster(map, coordinates);
	  });

	  // if we click on the map then we can scroll
	  map.on('click', function () {
	    map.scrollZoom.enable();
	  });

	  map.on('mouseenter', 'clusters', function () {
	    map.getCanvas().style.cursor = 'pointer';
	  });
	  map.on('mouseleave', 'clusters', function () {
	    map.getCanvas().style.cursor = '';
	  });

	  function flyIntoCluster(map, coordinates) {
	    const maxZoom = map.getZoom() + 1.5; // goin innn

	    map.flyTo({
	      // These options control the ending camera position: centered at
	      // the target, at zoom level 16, and north up.
	      center: coordinates,
	      zoom: maxZoom,
	      bearing: 0,

	      // These options control the flight curve, making it move
	      // slowly and zoom out almost completely before starting
	      // to pan.
	      speed: 1, // make the flying slow
	      curve: 1, // change the speed at which it zooms out
	    });
	  }

	  map.on('mouseenter', 'unclustered-point', function (e) {
	    // Change the cursor style as a UI indicator.
	    map.getCanvas().style.cursor = 'pointer';

	    let coordinates = e.features[0].geometry.coordinates.slice();
	    let name = e.features[0].properties.Recipient;
	    let state = e.features[0].properties.State;
	    let fedInvest = formatNumber('dollars', e.features[0].properties.Total_Federal_Investment);
	    let county = e.features[0].properties.COUNTY;
	    let numStudents = formatNumber('number', e.features[0].properties.Total);

	    let tooltipHtml = `<div class='tooltip-float'><p class='map-tooltip-p-left-inst'>Institution</p> <p class='map-tooltip-p-right'>${name}</p></div> <div class='tooltip-float'><p class='map-tooltip-p-left'>State</p> <p class='map-tooltip-p-right'>${state}</p></div><div class='tooltip-float'><p class='map-tooltip-p-left'>County</p> <p class='map-tooltip-p-right'>${county}</p></div><div class='tooltip-float tooltip-float--underline'><p class='map-tooltip-p-left'>Number of Students </p> <p class='map-tooltip-p-right'>${numStudents}</p></div><div class='tooltip-float'><p class='map-tooltip-p-left'>Total $ Received</p><p class='map-tooltip-p-right-invest'>${fedInvest}</p></div>`;

	    // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
	    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	    }

	    // Populate the popup and set its coordinates based on the feature found.
	    tooltip.setLngLat(coordinates)
	      .setHTML(tooltipHtml)
	      .addTo(map)
	    ;
	  });

	  // duplicate with "click" for mobile register
	  map.on('click', 'unclustered-point', function (e) {
	    // Change the cursor style as a UI indicator.
	    map.getCanvas().style.cursor = 'pointer';

	    let coordinates = e.features[0].geometry.coordinates.slice();
	    let name = e.features[0].properties.Recipient;
	    let state = e.features[0].properties.State;
	    let fedInvest = formatNumber('dollars', e.features[0].properties.Total_Federal_Investment);
	    let county = e.features[0].properties.COUNTY;
	    let numStudents = formatNumber('number', e.features[0].properties.Total);

	    let tooltipHtml = `<div class='tooltip-float'><p class='map-tooltip-p-left-inst'>Institution</p> <p class='map-tooltip-p-right'>${name}</p></div> <div class='tooltip-float'><p class='map-tooltip-p-left'>State</p> <p class='map-tooltip-p-right'>${state}</p></div><div class='tooltip-float'><p class='map-tooltip-p-left'>County</p> <p class='map-tooltip-p-right'>${county}</p></div><div class='tooltip-float tooltip-float--underline'><p class='map-tooltip-p-left'>Number of Students </p> <p class='map-tooltip-p-right'>${numStudents}</p></div><div class='tooltip-float'><p class='map-tooltip-p-left'>Total $ Received</p><p class='map-tooltip-p-right-invest'>${fedInvest}</p></div>`;

	    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	    }

	    tooltip.setLngLat(coordinates)
	      .setHTML(tooltipHtml)
	      .addTo(map)
	    ;

	    props.showDetails(e.features[0].properties.schoolId);
	  });

	  map.on('mouseleave', 'unclustered-point', function () {
	    map.getCanvas().style.cursor = '';
	    tooltip.remove();
	  });

	  map.on('click', 'schools', function (e) {
	    let features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
	    let clusterId = features[0].properties.cluster_id;
	    map.getSource('schools').getClusterExpansionZoom(clusterId, function (err, zoom) {
	      if (err) return;
	      map.easeTo({
		center: features[0].geometry.coordinates,
		zoom: zoom
	      });
	    });
	  });
	});
      }; // end function (createMapbox)


      function filterMapSearch() {
	$('#map-search__input').keyup(function () {
	  var input, filter, ul, li, i, txtValue;
	  input = document.getElementById('map-search__input');
	  filter = input.value.toUpperCase();
	  ul = document.getElementById("map-search-ul");
	  li = ul.getElementsByTagName('li');

	  // Loop through all list items, and hide those who don't match the search query
	  for (i = 0; i < li.length; i++) {
	    txtValue = li[i].innerHTML;
	    if (txtValue.toUpperCase().indexOf(filter) > -1) {
	      li[i].style.display = "";
	    } else {
	      li[i].style.display = "none";
	    }
	  }
	});
      };

      function filterSearchMobile() {
	// handle input filter..
	$('#mobile-keydown').keyup(function () {
	  const filter = document.getElementById('mobile-keydown').value.toUpperCase();
	  const li = document.getElementById("map-search-ul--mobile").getElementsByTagName('li');

	  // Loop through all list items, and hide those who don't match the search query
	  for (let i = 0; i < li.length; i++) {
	    const txtValue = li[i].innerHTML;
	    if (txtValue.toUpperCase().indexOf(filter) > -1) {
	      li[i].style.display = "";
	    } else {
	      li[i].style.display = "none";
	    }
	  }
	});
      };

      // Search Trigger Functionality //
      function searchToggle() {
	$('#map-search-trigger').click(function () {
	  $('#map-search').toggleClass('active');
	});

	$('#map-keydown').focusout(function () {
	  $('#map-search').removeClass('active');
	});

	// hide on "clickout" of element
	$(document).click(function (e) {
	  if ($(e.target).parents("#map-search").length === 0) {
	    $("#map-search").removeClass('active');
	  }
	});

      };

      function searchMobileToggle() {
	$('#mobile-keydown').focus(function () {
	  $('#map-search-ul--mobile').show();
	});

	// hide on "clickout" of element
	$(document).click(function (e) {
	  if ($(e.target).parents("#mobile-search--map").length === 0) {
	    $("#map-search-ul--mobile").hide();
	  }
	});
      };

      $(document).ready(function () {
	createMapbox();
	filterMapSearch();
	searchToggle();
	searchMobileToggle();
	filterSearchMobile();
      });
    }); // end use effect

    return (<>
  <div id="collegesMap"></div>
  <div id="inst-panel"></div>
</>);
  }
};
