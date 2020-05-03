
import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-component-maps',
  templateUrl: './component-maps.component.html',
  styleUrls: ['./component-maps.component.scss']
})
export class ComponentMapsComponent implements AfterViewInit {

  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 24.0595873;
  lng = 89.856946;
  selectTurcklocation:string ='';
  
  
  selectChange(event:any)
  {
    var num;
  
    this.selectTurcklocation=event.target.value;
   
    switch (this.selectTurcklocation) {
      case "square": num=0;

      break;
      case "brac":   num=1;
      break;
      case "walton": num=2;
      break;
      case "bata":   num=3;
      break;
      default:
        break;

    }
    this.loadAllMarkers(num)

  };




  allMarker = [

        [
          {
            
            position: new google.maps.LatLng(24.0595873, 89.856946),
            map: this.map,
            title: `Smart-truck-01
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
            
      
            
          },
          {
            position: new google.maps.LatLng(23.5095873, 90.506946),
            map: this.map,
            title: `Smart-truck-02
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      
      
          },
      
      
          {
            position: new google.maps.LatLng(23.3095873, 90.406946),
            map: this.map,
            title: `Smart-truck-03
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      
          },
      
          {
            position: new google.maps.LatLng(24.0597973, 89.856946),
            map: this.map,
            title: `Smart-truck-04
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
            
      
          },
          {
            position: new google.maps.LatLng(23.0999873, 89.706946),
            map: this.map,
            title: `Smart-truck-05
      Engine:-4636377
      size:-Heavy
      load Capacity:20 ton`,
      
          },
        ],
  
   [   {
        position: new google.maps.LatLng(23.4095873, 90.406946),
        map: this.map,
        title: `Smart-truck-06
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
  
      },
  
      {
        position: new google.maps.LatLng(23.6095873, 90.906946),
        map: this.map,
        title: `Smart-truck-07
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
        
  
      },
  
      {
        position: new google.maps.LatLng(23.1595873, 90.896946),
        map: this.map,
       title: `Smart-truck-08
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
        
  
      },
      {
        position: new google.maps.LatLng(23.9995873, 90.999946),
        map: this.map,
        title: `Smart-truck-09
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
  Engine:-4636377
  size:-Heavy
  load Capacity:20 ton`,
        
  
        
      },
      {
        position: new google.maps.LatLng(23.9095873, 90.3406946),
        map: this.map,
        title: `Smart-truck-11
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
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,

  },

  {
    position: new google.maps.LatLng(23.6095873, 90.906946),
    map: this.map,
    title: `Smart-truck-07
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
    

  },

  {
    position: new google.maps.LatLng(23.1595873, 89.856946),
    map: this.map,
   title: `Smart-truck-08
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,
    

  },
  {
    position: new google.maps.LatLng(23.0795573, 90.896946),
    map: this.map,
    title: `Smart-truck-09
Engine:-4636377
size:-Heavy
load Capacity:20 ton`,

  },

],
  
]

  
//Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom:8
  };

  //Default Marker


  marker = new google.maps.Marker({
    position:new google.maps.LatLng(23.0595873, 90.856946),
    map: this.map,
    title: "Hello World!nnnn",
    icon: '/assets/P.png' 
    

  });


  ngAfterViewInit(): void {
    this.mapInitializer();
  }
   
  
 
   
  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });


    //Adding default marker to map
    this.marker.setMap(this.map);



    //Adding other markers
    this.loadAllMarkers(1);
    
    
}
 
  loadAllMarkers(num): void {
    
    this.allMarker[num].forEach(markerInfo => {
      const marker = new google.maps.Marker({
        icon: '/assets/P.png',
       

        
       ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle(),
        
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });
       

      
       //Addng marker to google map
      marker.setMap(this.map);

    });

  }
  

}

