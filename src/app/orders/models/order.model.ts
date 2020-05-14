export interface Order{
  customer_id:string;
  customer_name:string;
  expected_delivery_date:string;
  loading_date:string;
  starting_date:string;
  loading_point:string;
  unloading_point:string;
  orientation:string;
  truck_type?:TruckType[];
}
export interface TruckType{
  capacity:string;
  quantity:number;
  type:string;
}
