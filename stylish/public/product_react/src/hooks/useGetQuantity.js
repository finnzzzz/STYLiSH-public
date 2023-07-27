import { useState, useEffect } from "react";
function useGetQuantity() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    const quantity = localStorage.getItem("storeQuantity");
    if (quantity) {
      setTotalQuantity(+quantity);
    }
  }, []);
  return { totalQuantity, setTotalQuantity };
}

export default useGetQuantity;
