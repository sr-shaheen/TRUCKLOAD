import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-component-maps',
  templateUrl: './component-maps.component.html',
  styleUrls: ['./component-maps.component.scss'],
})
export class ComponentMapsComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 24.0595873;
  lng = 89.856946;
  selectTurcklocation: string = '';

  selectChange(event: any) {
    var num;

    this.selectTurcklocation = event.target.value;

    switch (this.selectTurcklocation) {
      
      case "all":
        num=4;
        break;
      case 'square':
        num = 0;
        break;
      case 'brac':
        num = 1;
        break;
      case 'walton':
        num = 2;
        break;
      case 'bata':
        num = 3;
        break;

      default:
        num = 4;
        break;
    }
    this.loadAllMarkers(num);
  }

  allMarker = [
    [
      {
        position: new google.maps.LatLng(24.0595873, 89.856946),
        map: this.map,
        title: `Smart-truck-01
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.5095873, 90.506946),
        map: this.map,
        title: `Smart-truck-02
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.3095873, 90.706946),
        map: this.map,
        title: `Smart-truck-03
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(24.0597973, 89.856946),
        map: this.map,
        title: `Smart-truck-04
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.0999873, 89.706946),
        map: this.map,
        title: `Smart-truck-05
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },
    ],

    [
      {
        position: new google.maps.LatLng(23.4095873, 90.406946),
        map: this.map,
        title: `Smart-truck-06
  company:Brac
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.6095873, 90.906946),
        map: this.map,
        title: `Smart-truck-07
  company:Brac
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.1595873, 90.896946),
        map: this.map,
        title: `Smart-truck-08
  company:Brac
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.9995873, 90.999946),
        map: this.map,
        title: `Smart-truck-09  
  company:Brac
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },
    ],
    [
      {
        position: new google.maps.LatLng(24.0989587, 89.456846),
        map: this.map,
        title: `Smart-truck-10
  company:Walton
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.9095873, 90.3406946),
        map: this.map,
        title: `Smart-truck-11
  company:Walton
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },
    ],

    [
      {
        position: new google.maps.LatLng(23.9095873, 90.906946),
        map: this.map,
        title: `Smart-truck-06
company:Bata
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.6095873, 90.906946),
        map: this.map,
        title: `Smart-truck-07
company:Bata
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.1595873, 89.856946),
        map: this.map,
        title: `Smart-truck-08
company:Bata
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.0795573, 90.896946),
        map: this.map,
        title: `Smart-truck-09
company:Bata
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
      },
    
    ],

    [
    
      {
        position: new google.maps.LatLng(24.0595873, 89.856946),
        map: this.map,
        title: `Smart-truck-01
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.5095873, 90.506946),
        map: this.map,
        title: `Smart-truck-02
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.3095873, 90.706946),
        map: this.map,
        title: `Smart-truck-03
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(24.0597973, 89.856946),
        map: this.map,
        title: `Smart-truck-04
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.0999873, 89.706946),
        map: this.map,
        title: `Smart-truck-05
      company:Square
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      },
    

    
      {
        position: new google.maps.LatLng(23.4095873, 90.406946),
        map: this.map,
        title: `Smart-truck-06
  company:Brac
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.6095873, 90.906946),
        map: this.map,
        title: `Smart-truck-07
  company:Brac
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.1595873, 90.896946),
        map: this.map,
        title: `Smart-truck-08
  company:Brac
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.9995873, 90.999946),
        map: this.map,
        title: `Smart-truck-09  
  company:Brac
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },
    
    
      {
        position: new google.maps.LatLng(24.0989587, 89.456846),
        map: this.map,
        title: `Smart-truck-10
  company:Walton
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.9095873, 90.3406946),
        map: this.map,
        title: `Smart-truck-11
  company:Walton
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
      },
    

    
      {
        position: new google.maps.LatLng(23.9095873, 90.906946),
        map: this.map,
        title: `Smart-truck-06
company:Bata
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.6095873, 90.906946),
        map: this.map,
        title: `Smart-truck-07
company:Bata
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
      },

      {
        position: new google.maps.LatLng(23.1595873, 89.856946),
        map: this.map,
        title: `Smart-truck-08
company:Bata
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
      },
      {
        position: new google.maps.LatLng(23.0795573, 90.896946),
        map: this.map,
        title: `Smart-truck-09
company:Bata
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
      },
    ],


  ];

  //Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: ,
  };

  //Default Marker



  marker = new google.maps.Marker({
    position: new google.maps.LatLng(23.0595873, 90.856946),
    map: this.map,
    title: 'Hello World!nnnn',
    icon: '/assets/P.png',
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  
  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    //Adding Click event to default marker
    this.marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle(),
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding other markers
    this.loadAllMarkers(4);
  }

  markers = [];
  
  loadAllMarkers(num): void {
    
    this.allMarker[num].forEach((markerInfo) => {
      const marker = new google.maps.Marker({
        icon: '/assets/P.png',

        ...markerInfo,
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle(),
      });

      //Add click event to open info window on marker
      marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
      });

      for (var i=0; i<this.markers.length; i++) {

        this.markers[i].setMap(null);

        console.log("null a dhukse"+marker[i]);              
      }
      this.markers.length = 0;

      setTimeout(() => 
      {
        this.markers.push(marker);

        //Addng marker to google map
        for (var i=0; i<this.markers.length; i++) {
  
          this.markers[i].setMap(this.map);
         
        } 
      },
      250);

    });
  }
}
