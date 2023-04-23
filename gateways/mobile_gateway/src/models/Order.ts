import AddressModel from "./AddressModel";
import ItemModel from "./ItemModel";

class Order {
  id?: string;
  customerName?: string;
  costumerEmail?: string;
  shippingAddress?: AddressModel;
  billingAddress?: AddressModel;
  items?: ItemModel[];
  total?: number;
  shippingCost?: number;
  shippingMethod?: string;
}

export default Order;