import { useState, useEffect } from 'react';
import { db } from '../firebase';
import './Orders.css';
import { useStateValue } from '../StateProvider';
import Order from './Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

	if (!orders) {
		return (
			<>
				<h1>No orders placed</h1>
			</>
		)
	}

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders_container">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
