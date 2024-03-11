export const sortList = (list, crit) => {
	if (list.length < 2) return [...list];
	switch (crit) {
    case "name":
      return [...list].sort((a, b) => a.drugName.localeCompare(b.drugName));
    case "shop":
      return [...list].sort((a, b) => a.shopName.localeCompare(b.shopName));
    case "price":
      return [...list].sort((a, b) => a.price - b.price);
    default:
      return [...list];
  }
}

export const total = list => list.reduce((sum, el) => sum + el.price * el.amount, 0).toFixed(2);