import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { empty } from 'rxjs';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { delay } from 'rxjs/operators';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Title } from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 

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
  contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';


            myControl = new FormControl();
            options: string[] = ['Square', 'Brac', 'Walton','Bata'];
            filteredOptions: Observable<string[]>;
          
            ngOnInit() {
              this.filteredOptions = this.myControl.valueChanges
                .pipe(
                  startWith(''),
                  map(value => this._filter(value))
                );
            }
          
            private _filter(value: string): string[] {
              const filterValue = value.toLowerCase();
          
              return this.options.filter(option => option.toLowerCase().includes(filterValue));

            }
            
          
  
    selected(value: string)  {
    var num;



    this.selectTurcklocation = value.toLocaleLowerCase();

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
    console.log(value)

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
    zoom: 8,
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
    this.marker.setAnimation(google.maps.Animation.BOUNCE);

  }

  markers = [];
  
  loadAllMarkers(num): void {
    
    this.allMarker[num].forEach((markerInfo) => {
      const marker = new google.maps.Marker({
        icon: '/assets/P.png',
        animation: google.maps.Animation.DROP,


        ...markerInfo,
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle(),
        //content: this.contentString,
        maxWidth: 200

      });

      const infoWindow2 = new google.maps.InfoWindow({
          //content: marker.getTitle(),
          content: this.contentString,
          maxWidth: 200,
      });

        const trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(this.map);


      //Add click event to open info window on marker
      marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
        
        

        marker.setAnimation(google.maps.Animation.BOUNCE);
        delay(200);
        marker.setAnimation(null)
      });
      
      

    //   google.maps.event.addListener(marker,"mouseover",function() {
    //     infoWindow2.open(marker.getMap(), marker);
    //  });







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
